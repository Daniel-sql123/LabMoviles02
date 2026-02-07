import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

export default function button() {
  return (
    <View>
      <Text>Control Button</Text>

      <Button
        title="Presióname"
        color="#1e90ff"
        onPress={() =>
          Alert.alert(
            'Mensaje',
            'El botón fue presionado correctamente'
          )
        }
      />
    </View>
  )
}