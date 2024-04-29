import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function ArticleItem({ title, description }: { title: string, description: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.value}>{description.substring(0, 100)}...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderColor: '#555',
    borderWidth: 1,
    margin: 10,
    padding: 10
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 5,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    paddingHorizontal: 16,
    marginTop: 2,
  },
  value: {
    fontSize: 14,
    color: '#fff',
    paddingHorizontal: 16,
    marginTop: 2,
  },
});