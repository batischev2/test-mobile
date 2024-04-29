
import React from 'react';

import { View } from './Themed';

import { Article } from '@/types';

import { ArticleItem } from '@/components/ArticleItem';

export default function Articles({ data }: { data: Array<Article> }) {
  return (
    <View>
      {data.map((item) => {
        return (
          <ArticleItem key={item.id} title={item.title} description={item.description} />
        )
      })}
    </View>
  );
}
