import React from 'react';
import { View, Text } from 'react-native';

const DestaquesScreen = () => {
  const destaques = [
    { title: 'Deadpool e Wolwerine', year: '2024' },
    { title: 'Oppenheimer', year: '2023' },
    { title: 'Coringa: Delírio á Dois', year: '2010' },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Filmes em Destaque</Text>
      {destaques.map((filme, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18 }}>{filme.title} ({filme.year})</Text>
        </View>
      ))}
    </View>
  );
};

export default DestaquesScreen;