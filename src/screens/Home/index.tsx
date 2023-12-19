import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Alert,
} from "react-native";
import { Empty } from "../../components/Empty";
import { Header } from "../../components/Header";
import { Task, TaskProps } from "../../components/Task";
import { uuidv4, handleBlurWithKeyboard } from "../../utils";
import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState('');
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  function handleTaskAdd() {
    if (newTask !== '' && newTask.length >= 5) {
      setTasks((prevTasks) => [
        { id: uuidv4(), title: newTask, isCompleted: false },
        ...prevTasks,
      ]);
    } else {
      Alert.alert("Ops!", "A tarefa deve ter pelo menos 5 caracteres.");
    }
    setNewTask('');
  }

  function handleRemoveTask(id: string) {
    Alert.alert(
      "Remover Tarefa",
      "Tem certeza que você deseja remover essa tarefa?",
      [
        {
          text: 'Sim',
          onPress: () =>
            setTasks((prevTasks) =>
              prevTasks.filter((task) => task.id !== id)
            ),
          style: 'destructive',
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ]
    );
  }

  function handleTaskDone(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  const tasksCreated = tasks.length;
  const tasksDone = tasks.filter((task) => task.isCompleted).length;

  return (
    <TouchableWithoutFeedback onPress={handleBlurWithKeyboard}>
      <View style={styles.container}>
        <Header
          task={newTask}
          onChangeText={setNewTask}
          onPress={handleTaskAdd}
        />
        <View style={styles.tasksContainer}>
          <View style={styles.info}>
            <View style={styles.row}>
              <TouchableOpacity onPress={() => setShowCompletedTasks(false)}>
                <Text style={styles.tasksCreated}>Criadas</Text>
              </TouchableOpacity>
              <View style={styles.counterContainer}>
                <Text style={styles.counterTasks}>{tasksCreated}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <TouchableOpacity onPress={() => setShowCompletedTasks(true)}>
                <Text style={styles.tasksDone}>Concluídas</Text>
              </TouchableOpacity>
              <View style={styles.counterContainer}>
                <Text style={styles.counterTasks}>{tasksDone}</Text>
              </View>
            </View>
          </View>

          <FlatList
            data={
              showCompletedTasks
                ? tasks.filter((task) => task.isCompleted)
                : tasks
            }
            keyExtractor={(item) => item.id!}
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
    </TouchableWithoutFeedback>
  );
}
