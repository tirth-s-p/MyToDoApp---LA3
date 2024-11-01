import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

// Destructuring the tasks prop in the function parameters
function ToDoList({ tasks }) {
  return (
    <ScrollView style={styles.scrollView}>
      {/* Map through tasks to render each as a Text component */}
      {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>{task}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  task: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ddd',  // Styling each task as incomplete
    borderRadius: 5,
    fontSize: 16,
    color: '#555',
  },
});

export default ToDoList;
