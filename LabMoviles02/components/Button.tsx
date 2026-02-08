import { View, Text, Button, Alert } from 'react-native';

export default function ButtonControl() {
  return (
    <View>
      <Button
        title="Presióname"
        color="#d872ad"
        onPress={() =>
          Alert.alert(
            'Mensaje',
            'El botón fue presionado correctamente'
          )
        }
      />
    </View>
  );
}