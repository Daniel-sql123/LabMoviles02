import { Alert, Button, StyleSheet, View } from 'react-native';

export default function ButtonControl() {
  return (
    <View style={styles.container}>
      {/* Wrapper para aplicar bordes redondeados */}
       <View style={styles.buttonWrapper}>
        <Button
        title="Presióname "
        color="#e93c9e" 
        // Acción al presionar el botón 
        onPress={() =>
          Alert.alert('Mensaje :)', 'El botón fue presionado correctamente 💗')
        }
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebacd1',
    padding: 20,
    borderRadius: 30,
    shadowColor: 'black',
    alignItems: 'center',
    marginTop: 50,
    // Sombra en Android
    elevation: 6,
    // Sombra para iOS
    shadowOffset: { width: 0, height: 3 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 6 
    
  },
  // Permite que el botón respete el borde redondeado
  buttonWrapper: {
    borderRadius: 20,  
    overflow: 'hidden', 
  }
});