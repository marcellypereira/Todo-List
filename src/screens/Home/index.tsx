import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Alert,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { Task, TaskProps } from "../../components/Task";
import { uuidv4, handleBlurWithKeyboard } from "../../utils";
import { styles } from "./styles";

const STORAGE_KEY = 'tasks';

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState('');
  const [activeFilter, setActiveFilter] = useState('Criadas');

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

  function handleTaskAdd() {
    if (newTask !== '' && newTask.length >= 5) {
      const newTaskItem = { id: uuidv4(), title: newTask, isCompleted: false };
      setTasks((prevTasks) => [newTaskItem, ...prevTasks]);
      saveTasksToStorage([newTaskItem, ...tasks]);
    } else {
      Alert.alert("Ops!", "A tarefa deve ter pelo menos 5 caracteres.");
    }
    setNewTask('');
  }

  function handleRemoveTask(id: string) {
    Alert.alert("Remover Tarefa", "Tem certeza que você deseja remover essa tarefa?", [
      {
        text: 'Sim',
        onPress: () => {
          setTasks((prevTasks) => {
            const updatedTasks = prevTasks.filter((task) => task.id !== id);
            saveTasksToStorage(updatedTasks);
            return updatedTasks;
          });
        },
        style: 'destructive',
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  function handleTaskDone(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );

    saveTasksToStorage(tasks.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
  }

  const saveTasksToStorage = async (tasksToSave: TaskProps[]) => {
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
        <Header task={newTask} onChangeText={setNewTask} onPress={handleTaskAdd} />
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
