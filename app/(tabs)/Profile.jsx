import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';
import { useAuth, useUser } from '@clerk/clerk-expo';

const Profile = () => {
  const { signOut } = useAuth();
  const { user } = useUser();

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image source={{ uri: user?.imageUrl }} style={styles.profileImage} />

      {/* User Details */}
      <Text style={styles.name}>{user?.fullName || "No Name"}</Text>
      <Text style={styles.email}>{user?.primaryEmailAddress?.emailAddress}</Text>

      {/* Additional Info (if available) */}
      <Text style={styles.info}>Username: {user?.username || "Not set"}</Text>
      <Text style={styles.info}>ID: {user?.id}</Text>

      {/* Logout Button */}
      <Button title="Logout" onPress={() => signOut()} color="#ff3b30" />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});
