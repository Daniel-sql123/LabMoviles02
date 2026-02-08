import { Text, View } from 'react-native';
import Button from './button';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Demo de controles
      </Text>

      <Button />
    </View>
  );
}