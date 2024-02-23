import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../actions/taskActions.js';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TaskList = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { userId } = route.params;
  const { tasks, loading, error } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks(userId));
  }, [dispatch, userId]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => dispatch(toggleTask(item.id))}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.status}>{item.completed ? 'Completed' : 'Pending'}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  status: {
    fontSize: 24,
  },
});

export default TaskList;
