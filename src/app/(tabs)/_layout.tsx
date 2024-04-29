import React from 'react';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme, useClientOnlyValue } from '@/app/hooks';
import { TabBarIcon } from '@/components/TabBarIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Статьи',
          tabBarIcon: ({ color }) => <TabBarIcon size={28} name="file" color={color} />
        }}
      />
      <Tabs.Screen
        name="audio"
        options={{
          title: 'Аудио',
          tabBarIcon: ({ color }) => <TabBarIcon size={28} name="music" color={color} />
        }}
      />
    </Tabs>
  );
}
