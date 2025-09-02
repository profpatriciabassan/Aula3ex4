import { useState } from 'react';
import { SafeAreaView, View, Text, Button, Alert, Platform } from 'react-native';

export default function App() {
  const [copos, setCopos] = useState(0);

  const mostrarTotal = () => {
    const msg = `Você já bebeu ${copos} copos de água.`;
    if (Platform.OS === 'web') {
      // Fallback para navegador
      window.alert(msg);
    } else {
      // Popup nativo (iOS/Android)
      Alert.alert('Hidratação 💧', msg);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 }}>
        <Text style={{ fontSize: 20, marginBottom: 8 }}>
          Copos bebidos: {copos}
        </Text>

        <Button title="Beber 1 copo de água" onPress={() => setCopos(copos + 1)} />

        <View style={{ height: 12 }} />

        <Button title="Mostrar total de copos" onPress={mostrarTotal} />
      </View>
    </SafeAreaView>
  );
}
