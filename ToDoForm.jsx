import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ input, setInput, addTask }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="Add a new task"
      value={input}
      onChangeText={setInput}
    />
    <Button title="Add Task" onPress={addTask} />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    marginRight: 10,
  }
});

export default ToDoForm;
