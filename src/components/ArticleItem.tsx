import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

import { TabBarIcon } from './TabBarIcon';

export function ArticleItem({ id, title, description, type, ...props }: 
  { id: number, title: string, description: string, type: React.ComponentProps<typeof FontAwesome>['name'] }) {
    const {width} = useWindowDimensions();

  return (
    <Link href={{ pathname: "/modal", params: { id, type }}} style={{ marginVertical: 10 }}>
      <View style={{ ...styles.container, width: width - 20 }}>
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
    </Link>
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
    flex: 1
  }
});