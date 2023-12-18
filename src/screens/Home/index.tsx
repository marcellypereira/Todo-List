import React, { useState } from "react";

import { View, Text, TouchableWithoutFeedback, Keyboard, FlatList, Alert } from "react-native";
import { Empty } from "../../components/Empty";

import { Header } from "../../components/Header";
import { Task, TaskProps } from "../../components/Task";

import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleTaskAdd() {
    if (newTask !== '' && newTask.length >= 5 ) {
      setTasks(task => [{id: uuidv4(), title: newTask, isCompleted: false}, ...task]);
    } else {
      Alert.alert("Ops!", "A tarefa deve ter pelo menos 5 caracteres.");
    }

    setNewTask('');
  }

  function handleRemoveTask(id: string) {
    Alert.alert("Remover Tarefa", "Tem certeza que você deseja remover essa tarefa?", [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => (prevState.filter(task => task.id !== id))),
        style: 'destructive'
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleTaskDone(id: string) {
    setTasks(prevState => (prevState.map(task => task.id === id ? {
      ...task,
      isCompleted: !task.isCompleted
    } : task)))
  }

  function handleBlurWithKeyboard() {
    Keyboard.dismiss();
  }

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  const tasksCreated = tasks.length;
  const tasksDone = tasks.filter(task => task.isCompleted).length;

  return (
    <TouchableWithoutFeedback onPress={handleBlurWithKeyboard}>
      <View style={styles.container} >
        <Header task={newTask} onChangeText={setNewTask} onPress={handleTaskAdd} />

        <View style={styles.tasksContainer}>
          
          <View style={styles.info}>
            <View style={styles.row}>
              <Text style={styles.tasksCreated}>Criadas</Text>
              <View style={styles.counterContainer}>
                <Text style={styles.counterTasks}>{tasksCreated}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.tasksDone}>Concluídas</Text>
              <View style={styles.counterContainer}>
                <Text style={styles.counterTasks}>{tasksDone}</Text>
              </View>
            </View>
          </View>

          <FlatList 
            data={tasks}
            keyExtractor={tasks => tasks.id!}
            renderItem={({item}) => (
              <Task key={item.id} 
              isCompleted={item.isCompleted} 
              title={item.title} 
              onRemove={() => handleRemoveTask(item.id)} 
              onTaskCheck={() => handleTaskDone(item.id)}/>
            )}
            ListEmptyComponent={<Empty />}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}