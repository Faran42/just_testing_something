import React from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Alert } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Container, Wrapper1, Wrapper2, Wrapper3 } from './styles';


export function Page() {
  const navigation = useNavigation()
  
  return (
    <Container>
      <Wrapper1>
        <Button title='SEND TOKEN' onPress={() => navigation.navigate('auth')}/>
      </Wrapper1>
      <Wrapper2>
        <Input label='Token Gerado' value={global.token} />
        <Button title='Cadastro' />
      </Wrapper2>
      <Wrapper2>
        <Input label='Url da foto de Perfil' />
        <Button title='ENVIAR' />
      </Wrapper2>
      <Wrapper2>
        <Input label='Username' />
        <Button title='ENVIAR' />
      </Wrapper2>
      
      <Wrapper2>
        <Wrapper3>

        <Input label='Nome' />

        <Input label='Sobrenome' />
        </Wrapper3>

        <Button title='ENVIAR' />
      </Wrapper2>
      <Wrapper2>
        <Wrapper3>

        <Input label='Interesses' />
        <Input label='' />
        <Input label='' />
        </Wrapper3>

        <Button title='ENVIAR' />
      </Wrapper2>

      
    </Container >
  )
}
