import { useState } from 'react';
import { View, Button, Alert } from 'react-native';

export default function App() {
  // Estado para guardar a quantidade de copos
  const [copos, setCopos] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20, // espaçamento entre os botões (React Native 0.71+)
      }}
    >
      {/* Botão para somar 1 copo */}
      <Button
        title="Beber 1 copo de água"
        onPress={() => setCopos(copos + 1)}
      />

      {/* Botão para mostrar total */}
      <Button
        title="Mostrar total de copos"
        onPress={() => Alert.alert('Hidratação 💧', `Você já bebeu ${copos} copos de água.`)}
      />
    </View>
  );
}
