import React from 'react';

import { View } from './Themed';

import { Audio } from '@/types';

import { ArticleItem } from '@/components/ArticleItem';

export default function Audios({ data }: { data: Array<Audio> }) {
  return (
    <View>
      {data.map((item) => {
        return (
          <ArticleItem key={item.id} description={item.title} type={'music'} {...item} />
        )
      })}
    </View>
  );
}
