import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Animated.View style={[styles.iconWrapper, focused && styles.activeTab]}>
              <Ionicons size={22} name="home" color={color} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="SearchJobs"
        options={{
          title: 'Search Jobs',
          tabBarIcon: ({ color, focused }) => (
            <Animated.View style={[styles.iconWrapper, focused && styles.activeTab]}>
              <Ionicons size={22} name="search" color={color} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="SavedJobs"
        options={{
          title: 'Saved Jobs',
          tabBarIcon: ({ color, focused }) => (
            <Animated.View style={[styles.iconWrapper, focused && styles.activeTab]}>
              <Ionicons size={22} name="bookmark" color={color} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Animated.View style={[styles.iconWrapper, focused && styles.activeTab]}>
              <Ionicons size={22} name="person" color={color} />
            </Animated.View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 75, // Increased height
    borderTopLeftRadius: 30, // Curved left top
    borderTopRightRadius: 30, // Curved right top
    backgroundColor: '#fff', // Background color
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 12, // For Android shadow
  },
  tabBarLabel: {
    fontSize: 10, // Reduced font size
    fontWeight: 'bold',
    marginTop: 5, // Adjusted spacing
    marginBottom: 2, // Adjusted spacing
  },
  tabBarIcon: {
    marginTop: 8, // Reduced space from top
  },
  tabBarItem: {
    transition: 'all 0.3s ease-in-out', // Smooth transition effect
  },
  iconWrapper: {
    marginTop: 8, // Adjusted spacing for smaller icons
  },
  activeTab: {
    transform: [{ scale: 1.1 }], // Slightly reduced scale effect
    transition: 'transform 0.2s ease-in-out',
  },
});
