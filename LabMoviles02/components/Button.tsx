import { Alert, Button, StyleSheet, View } from 'react-native';

export default function ButtonControl() {
  return (
    <View style={styles.container}>
       <View style={styles.buttonWrapper}>
      <Button
        title="Presióname "
        color="#e93c9e"  
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
    elevation: 6,
    alignItems: 'center',
     marginTop: 50,
      
    // Sombra para iOS
    shadowOffset: { width: 0, height: 3 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 6 
    
  },
  buttonWrapper: {
    borderRadius: 20,  
    overflow: 'hidden', 
  }
});