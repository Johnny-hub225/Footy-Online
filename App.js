import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>⚽ Footy Online</Text>
        <Text style={styles.subtitle}>
          Football App • Live Scores • Watch Matches
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🔥 Live Matches</Text>
          <Text style={styles.match}>No live matches right now.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📊 Football Stats</Text>
          <Text style={styles.match}>Live scores and statistics coming soon.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🎙️ Commentary</Text>
          <Text style={styles.match}>
            Your approved commentators will be able to commentate on matches.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>👥 Community</Text>
          <Text style={styles.match}>
            Follow matches and interact with other Footy Online users.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220',
  },
  content: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#b8c1d1',
    textAlign: 'center',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#172033',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  match: {
    fontSize: 15,
    color: '#cbd5e1',
    lineHeight: 22,
  },
});
