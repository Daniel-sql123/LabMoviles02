import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <>
      <Tabs screenOptions={{ 
        // Oculta el header superior
        headerShown: false, 
        // Estilos de la barra inferior
        tabBarStyle: {
          backgroundColor: '#fde2f3',
          height: 65,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#d872ad',
        tabBarInactiveTintColor: '#8a8a8a',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
        {/* Pestañas de navegacion */}
      <Tabs.Screen
        name="index"
        options={{ title: 'Inicio' }}
      />
      <Tabs.Screen
        name="PruebaButton"
        options={{ title: 'Botón' }}
      />
    </Tabs>
    </>
  );
}