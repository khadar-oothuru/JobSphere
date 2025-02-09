import { StyleSheet, Text, View, TextInput, FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

const jobData = [
  { id: '1', title: 'Frontend ', company: 'Google' },
  { id: '2', title: 'React Native Developer', company: 'Meta' },
  { id: '3', title: 'Backend Developer', company: 'Amazon' },
  { id: '4', title: 'UI/UX Designer', company: 'Microsoft' },
  { id: '5', title: 'Full Stack Developer', company: 'Netflix' },
];

const SearchJobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredJobs(jobData);
    } else {
      setFilteredJobs(
        jobData.filter((job) =>
          job.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Search Jobs</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by job title..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.jobCard}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.company}>{item.company}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.noJobs}>No jobs found.</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchJobs;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    backgroundColor: '#fff',
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
  noJobs: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
});
