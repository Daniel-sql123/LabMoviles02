import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    // Proveedor de tema que cambia según el modo del sistema
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* Contenedor principal que ocupa toda la pantalla y respeta las áreas visibles del dispositivo */}
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ff98f1' }}>
        {/* Barra de estado con texto claro */}
        <StatusBar style="light" />
        {/* Navegación sin encabezado */}
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </ThemeProvider>
  );
}