import { Text, View } from 'react-native';
import Button from '../../components/Button';

export default function ButtonScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fde2f3',
      }}
    >
      <Text style={{ color: '#d872ad', fontSize: 24, fontWeight: 'bold'}}>
        Demostracion de control
      </Text>
      {/* Componente botón */}
        <Button />
    </View>
  );
}