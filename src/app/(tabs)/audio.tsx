import { StyleSheet, ScrollView } from 'react-native';
import { useGetArticleQuery } from '@/services/articles/articleApi';

import { Text, View } from '@/components/Themed';
import Articles from '@/components/Articles';

export default function ArticleScreen() {
  const { data, isLoading, isError, error } = useGetArticleQuery('audio');

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    ); 
  }

  if (isError) {
    return (
      <View>
        <Text>Error: {error.toString()}</Text>
      </View>
    ); 
  }

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView>
        <Articles data={data.articles} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
