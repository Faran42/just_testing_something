import React from 'react';
import { Alert, TouchableOpacity } from 'react-native'
import { Container, Text } from './styles';

export function Button({ title, onPress }) {
  return (
    
      <Container onPress={onPress}>
        <Text>
          {title}
        </Text>
      </Container>
    
  )
}
