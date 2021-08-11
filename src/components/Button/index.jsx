import React from 'react';
import { Alert, TouchableOpacity } from 'react-native'
import { Container, Text } from './styles';

export function Button({ title }) {
  return (
    
      <Container onPress={() => Alert.alert(`Botão ${title} pressionado!`)}>
        <Text>
          {title}
        </Text>
      </Container>
    
  )
}
