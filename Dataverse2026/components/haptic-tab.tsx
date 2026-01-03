import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import { Vibration } from 'react-native';

export function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={(ev) => {
        // Fallback to a short vibration for tactile feedback
        Vibration.vibrate(10);
        props.onPressIn?.(ev);
      }}
    />
  );
}
