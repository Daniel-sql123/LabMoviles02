import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

import { View, Text } from 'react-native';
import Button from './(tabs)/button';
export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      
      {/* StatusBar */}
      <StatusBar style="light" backgroundColor="#1e90ff" />

      {/* Contenido */}
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

        <Button/>
      </View>

    </ThemeProvider>
  );
}