import React from 'react';
import { Linking, Pressable, Text } from 'react-native';

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handlePress = async () => {
    try {
      await Linking.openURL(href);
    } catch (e) {
      // ignore
    }
  };

  return (
    <Pressable onPress={handlePress} accessibilityRole="link">
      <Text style={{ color: '#007aff' }}>{children}</Text>
    </Pressable>
  );
}
