import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {
  // Initialize tasks with the given array
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const [input, setInput] = useState('');

  // Function to add a new task to the list
  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');  // Clear the input field
    }
  };

  return (
    <View style={styles.container}>
      {/* Passing tasks as a prop to ToDoList */}
      <ToDoList tasks={tasks} />
      {/* ToDoForm to handle task input */}
      <ToDoForm input={input} setInput={setInput} addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
