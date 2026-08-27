import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>⚽ Footy Online</Text>
      <Text style={styles.subtitle}>Football App</Text>
      <Text style={styles.message}>App is working! 🎉</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0b1220',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 20,
    color: '#cbd5e1',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: '#ffffff',
  },
});
