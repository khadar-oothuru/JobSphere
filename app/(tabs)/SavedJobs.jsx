import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([
    { id: '1', title: 'Frontend Developer', company: 'Google' },
    { id: '2', title: 'React Native Developer', company: 'Meta' },
    { id: '3', title: 'Backend Developer', company: 'Amazon' },
  ]);

  const removeJob = (id) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved Jobs</Text>
      {savedJobs.length > 0 ? (
        <FlatList
          data={savedJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.jobCard}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.company}>{item.company}</Text>
              <TouchableOpacity onPress={() => removeJob(item.id)} style={styles.removeButton}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noJobs}>No saved jobs yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  jobCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 16,
    color: '#666',
  },
  removeButton: {
    marginTop: 8,
    backgroundColor: 'red',
    padding: 6,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  removeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  noJobs: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SavedJobs;
