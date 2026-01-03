// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ComponentProps } from 'react';
import { type StyleProp, type TextStyle } from 'react-native';

const MAPPING: Record<string, ComponentProps<typeof MaterialIcons>['name']> = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
};

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name] ?? 'help-outline'} style={style} />;
}
