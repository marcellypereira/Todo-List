import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { Task, TaskProps } from "../../components/Task";
import { handleBlurWithKeyboard } from "../../utils";
import { styles } from "./styles";
import * as TaskController from "../../controllers/Task";
import { TaskModal } from "../../components/Modal";

const STORAGE_KEY = 'tasks';

function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState('');
  const [activeFilter, setActiveFilter] = useState('Criadas');
  const [editingTask, setEditingTask] = useState<TaskProps | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Error loading tasks from AsyncStorage:', error);
      }
    };

    loadTasks();
  }, []);

  const handleTaskAdd = () => {
    TaskController.handleTaskAdd(newTask, tasks, setTasks, setNewTask, saveTasksToStorage);
  };

  const handleRemoveTask = (id: string) => {
    TaskController.handleRemoveTask(id, tasks, setTasks, saveTasksToStorage);
  };

  const handleTaskDone = (id: string) => {
    TaskController.handleTaskDone(id, tasks, setTasks, saveTasksToStorage);
  };

  const handleEditTask = (id: string) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setEditingTask(taskToEdit);
      setIsCompleted(taskToEdit.isCompleted);
      setNewTask('');
    }
  };

  const handleUpdateTask = () => {
    TaskController.handleUpdateTask(editingTask, newTask, tasks, setTasks, setEditingTask, setNewTask, saveTasksToStorage);
  };

  const saveTasksToStorage = async (tasksToSave: TaskProps[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasksToSave));
    } catch (error) {
      console.error('Error saving tasks to AsyncStorage:', error);
    }
  };

  const filteredTasks = activeFilter === 'Criadas' ? tasks.filter((task) => !task.isCompleted) : tasks.filter((task) => task.isCompleted);

  return (
    <TouchableWithoutFeedback onPress={handleBlurWithKeyboard}>
      <View style={styles.container}>
        <Header task={newTask} onChangeText={setNewTask} onPress={editingTask ? handleUpdateTask : handleTaskAdd} />
        <View style={styles.tasksContainer}>
          <View style={styles.containerAllTasks}>
            <Text style={styles.allTasks}>
              Todas
            </Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterTasks}>
                {tasks.length}
              </Text>
            </View>
          </View>

          <View style={styles.info}>
            <TouchableWithoutFeedback onPress={() => setActiveFilter('Criadas')}>
              <View style={[
                styles.row,
                styles.button,
                activeFilter === 'Criadas' ? styles.buttonBlue : styles.buttonBlueDark,
              ]}>
                <Text style={[
                  styles.tasksCreated,
                  styles.buttonText,
                  activeFilter === 'Criadas' ? styles.buttonTextBlue : styles.buttonTextBlueDark,
                ]}>Criadas</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => setActiveFilter('Concluídas')}>
              <View style={[
                styles.row,
                styles.button,
                activeFilter === 'Concluídas' ? styles.buttonPurple : styles.buttonPurpleDark,
              ]}>
                <Text style={[
                  styles.tasksDone,
                  styles.buttonText,
                  activeFilter === 'Concluídas' ? styles.buttonTextPurple : styles.buttonTextPurpleDark,
                ]}>Concluídas</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={{ opacity: filteredTasks.length > 0 ? 1 : 0.5, marginBottom: '40%' }}>
            <FlatList
              data={filteredTasks}
              keyExtractor={(task) => task.id!}
              renderItem={({ item }) => (
                <Task
                  key={item.id}
                  isCompleted={item.isCompleted}
                  title={item.title}
                  onRemove={() => handleRemoveTask(item.id!)}
                  onTaskCheck={() => handleTaskDone(item.id!)}
                  onEdit={() => handleEditTask(item.id!)}
                />
              )}
              ListEmptyComponent={<Empty />}
            />
          </View>
        </View>

        <TaskModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          task={editingTask || { id: '', title: '', isCompleted: false }}
          onSave={(newTitle) => {
            TaskController.handleUpdateTask(editingTask, newTitle, tasks, setTasks, setEditingTask, setNewTask, saveTasksToStorage);
            setIsModalVisible(false);
          }}
          isCompleted={isCompleted}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Home;
