import { Image, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Logo */}
      <Image
        source={require('@/assets/images/homepage.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Welcome Message */}
      <ThemedText type="title" style={styles.title}>
        Welcome to My Job Sphere 🚀
      </ThemedText>

      {/* App Description */}
      <ThemedText type="subtitle" style={styles.subtitle}>
        Your personalized job search assistant. Get hired faster!
      </ThemedText>

      {/* Key Features */}
      <ThemedView style={styles.features}>
        <ThemedText style={styles.featureText}>🔍 Find job listings tailored to your skills</ThemedText>
        <ThemedText style={styles.featureText}>📩 Apply with one tap</ThemedText>
        <ThemedText style={styles.featureText}>📊 Track your applications in real time</ThemedText>
        <ThemedText style={styles.featureText}>📬 Get job alerts for new openings</ThemedText>
        <ThemedText style={styles.featureText}>📝 Save and edit your resume on the go</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f3f9f5', // Light greenish background for a fresh look
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2d6a4f', // Dark green for contrast
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#40916c', // Medium green
    marginBottom: 20,
    textAlign: 'center',
  },
  features: {
    alignItems: 'flex-start',
    backgroundColor: '#d8f3dc', // Soft green background for features
    padding: 15,
    borderRadius: 10,
    width: '100%',
    maxWidth: 350,
    elevation: 3,
  },
  featureText: {
    fontSize: 16,
    color: '#081c15', // Deep green for readability
    marginBottom: 6,
  },
});
