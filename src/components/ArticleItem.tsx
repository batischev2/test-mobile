import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { TabBarIcon } from './TabBarIcon';
import { FontAwesome } from '@expo/vector-icons';

export function ArticleItem({ title, description, type }: 
  { title: string, description: string, type: React.ComponentProps<typeof FontAwesome>['name'] }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TabBarIcon size={28} name={type} color={'#fff'} />
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.value}>
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          </Text>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderColor: '#555',
    borderWidth: 1,
    marginVertical: 10,
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
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30
  },
  itemContainer: {
    display: 'flex',
    width: '90%'
  }
});