import AsyncStorage from '@react-native-async-storage/async-storage';
import { uuidv4 } from "../utils";
import { SetStateAction } from 'react';
import { TaskProps } from '../components/Task';
import { Alert } from 'react-native';

const STORAGE_KEY = 'tasks';

export const handleTaskAdd = (newTask: string | any[], tasks: TaskProps[], setTasks: { (value: SetStateAction<TaskProps[]>): void; (arg0: (prevTasks: any) => any[]): void; }, setNewTask: { (value: SetStateAction<string>): void; (arg0: string): void; }, saveTasksToStorage: { (tasksToSave: any): Promise<void>; (arg0: any[]): void; }) => {
  if (newTask !== '' && newTask.length >= 5) {
    const newTaskItem = { id: uuidv4(), title: newTask, isCompleted: false };
    setTasks((prevTasks) => [newTaskItem, ...prevTasks]);
    saveTasksToStorage([newTaskItem, ...tasks]);
  } else {
    Alert.alert("Ops!", "A tarefa deve ter pelo menos 5 caracteres.");
  }
  setNewTask('');
};

export const handleRemoveTask = (id: string, tasks: TaskProps[], setTasks: { (value: SetStateAction<TaskProps[]>): void; (arg0: (prevTasks: any) => any): void; }, saveTasksToStorage: { (tasksToSave: any): Promise<void>; (arg0: any): void; }) => {
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
};

export const handleTaskDone = (id: string, tasks: any[], setTasks: { (value: SetStateAction<TaskProps[]>): void; (arg0: (prevTasks: any) => any): void; }, saveTasksToStorage: { (tasksToSave: any): Promise<void>; (arg0: any): void; }) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    )
  );

  saveTasksToStorage(tasks.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
};

export const saveTasksToStorage = async (tasksToSave: any) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasksToSave));
  } catch (error) {
    console.error('Error saving tasks to AsyncStorage:', error);
  }
};

export const handleEditTask = (id: string, tasks: any[], setEditingTask: { (value: SetStateAction<TaskProps | null>): void; (arg0: any): void; }, setNewTask: { (value: SetStateAction<string>): void; (arg0: any): void; }) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setEditingTask(taskToEdit);
      
      setNewTask('');
    }
  };

  export const handleUpdateTask = async (
    editingTask: TaskProps | null,
    newTask: string,
    tasks: any[],
    setTasks: { (value: SetStateAction<TaskProps[]>): void; (arg0: any): void; },
    setEditingTask: { (value: SetStateAction<TaskProps | null>): void; (arg0: (prevEditingTask: any) => any): void; },
    setNewTask: { (value: SetStateAction<string>): void; (arg0: string): void; },
    saveTasksToStorage: { (tasksToSave: any): Promise<void>; (arg0: any): void; }
  ) => {
    if (editingTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === editingTask.id ? { ...task, title: newTask } : task
      );
  
      try {
        await saveTasksToStorage(updatedTasks);
        setTasks(updatedTasks);
        setEditingTask(null);
        setNewTask('');
      } catch (error) {
        console.error('Erro ao salvar as tarefas no AsyncStorage:', error);
      }
    }
  };
  