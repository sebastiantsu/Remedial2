import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import { View, Text, StyleSheet } from 'react-native';

const UserProfile = ({ route }) => {
  const dispatch = useDispatch();
  const { userId } = route.params;
  const { users, loading, error } = useSelector(state => state.users);
  const user = users.find(user => user.id === userId);

  useEffect(() => {
    if (!user) {
      dispatch(fetchUsers());
    }
  }, [dispatch, user]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!user) {
    return <Text>No user found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.phone}>{user.phone}</Text>
      <Text style={styles.company}>{user.company.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 32,
    color: '#333',
  },
  email: {
    fontSize: 24,
    color: '#666',
  },
  phone: {
    fontSize: 24,
    color: '#666',
  },
  company: {
    fontSize: 24,
    color: '#666',
  },
});

export default UserProfile;
