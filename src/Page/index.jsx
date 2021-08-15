import React from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import {Token} from "../state";
import { useAgile } from "@agile-ts/react";
import { useNavigation, useIsFocused  } from '@react-navigation/native'
import { useQuery, useLazyQuery } from '@apollo/client'
import { Container, Wrapper1, Wrapper2, Wrapper3 } from './styles';
import gql from "graphql-tag";
import apiCalls from '../api'

export function Page() {
  const navigation = useNavigation()
  const generatedToken = useAgile(Token);
  useIsFocused();
  
  const QUERY1 = gql`
  {
    deputados{
      edges{
        __typename
      }
    }
  }
  `

  const [
    sendPhotoPerfil, 
    { loading, data }
  ] = useLazyQuery(QUERY1);

    
  if (data){
    console.log("respondeu")
  }

  return (
    <Container>
      <Wrapper1>
        <Button title='SEND TOKEN' onPress={() => navigation.navigate('auth')}/>
      </Wrapper1>
      <Wrapper2>
        <Input label='Token Gerado' value={generatedToken} />
        <Button title='Cadastro' />
      </Wrapper2>
      <Wrapper2>
        <Input label='Url da foto de Perfil' />
        <Button title='ENVIAR' onPress={() => sendPhotoPerfil()}/>
      </Wrapper2>
      <Wrapper2>
        <Input label='Username' />
        <Button title='ENVIAR'/>
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
