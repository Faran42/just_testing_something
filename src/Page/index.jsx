import React from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Alert } from 'react-native'

import { Container, Wrapper1, Wrapper2, Wrapper3 } from './styles';

export function Page() {
  return (
    <Container>
      <Wrapper1>
        <Button title='SEND TOKEN' />
      </Wrapper1>
      <Wrapper2>
        <Input label='Token Gerado' />
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
