import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback, FlatList, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { Task, TaskProps } from "../../components/Task";
import { uuidv4, handleBlurWithKeyboard } from "../../utils";
import { styles } from "./styles";
import * as TaskUtils from "../../utils/taskUtils";

const STORAGE_KEY = 'tasks';

function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState('');
  const [activeFilter, setActiveFilter] = useState('Criadas');
  const [editingTask, setEditingTask] = useState<TaskProps | null>(null);

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
    TaskUtils.handleTaskAdd(newTask, tasks, setTasks, setNewTask, saveTasksToStorage);
  };

  const handleRemoveTask = (id: string) => {
    TaskUtils.handleRemoveTask(id, tasks, setTasks, saveTasksToStorage);
  };

  const handleTaskDone = (id: string) => {
    TaskUtils.handleTaskDone(id, tasks, setTasks, saveTasksToStorage);
  };

  const handleEditTask = (id: string) => {
    TaskUtils.handleEditTask(id, tasks, setEditingTask, setNewTask);
  };

const handleUpdateTask = () => {
    TaskUtils.handleUpdateTask(
      editingTask,
      newTask,
      tasks,
      setTasks,
      setEditingTask,
      setNewTask,
      saveTasksToStorage
    );

    setNewTask('');
  };


  const saveTasksToStorage = async (tasksToSave: any) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasksToSave));
    } catch (error) {
      console.error('Error saving tasks to AsyncStorage:', error);
    }
  };

  const filteredTasks = activeFilter === 'Criadas' ? tasks : tasks.filter((task) => task.isCompleted);

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

          <View style={{ opacity: filteredTasks.length > 0 ? 1 : 0.5 }}>
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
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Home;
