import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { useColorScheme } from '@/hooks/use-color-scheme';
import { SafeAreaView } from 'react-native';
=======
>>>>>>> 445d2254eace5538e5e367180bdc802f18c7b519

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ff98f1' }}>
        {/* StatusBar GLOBAL */}
        <StatusBar style="light" />

        {/* Rutas */}
        <Stack />
      </SafeAreaView>
    </ThemeProvider>
  );
}