import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import {Token} from "../state";
import { useAgile } from "@agile-ts/react";
import { useNavigation, useIsFocused  } from '@react-navigation/native'
import { useQuery, useLazyQuery } from '@apollo/client'
import { Container, Wrapper1, Wrapper2, Wrapper3 } from './styles';
import gql from "graphql-tag";
import { Alert } from 'react-native'

export function Page() {
  const navigation = useNavigation()
  const generatedToken = useAgile(Token);
  useIsFocused();

  const [urlPhotoPerfil, setUrlPhotoPerfil] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [interest1, setInterest1] = useState('');
  const [interest2, setInterest2] = useState('');
  const [interest3, setInterest3] = useState('');
  
  const QUERY_PHOTO = gql`
  {
    deputados{
      edges{
        __typename
      }
    }
  }
  `
  const QUERY_USERNAME = gql`
  {
    deputados{
      edges{
        __typename
      }
    }
  }
  `
  const QUERY_NAME_SUR = gql`
  {
    deputados{
      edges{
        __typename
      }
    }
  }
  `
  const QUERY_INTERESTS = gql`
  {
    deputados{
      edges{
        __typename
      }
    }
  }
  `

  const [
    sendPhotoPerfil, { data: photoResult }
  ] = useLazyQuery(QUERY_PHOTO);

  const [
    sendUsername, { data: usernameResult }
  ] = useLazyQuery(QUERY_USERNAME);

  const [
    sendNameSurname, { data: nameSurnameData }
  ] = useLazyQuery(QUERY_NAME_SUR);

  const [
    sendInterests, { data: interestsData }
  ] = useLazyQuery(QUERY_INTERESTS);


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
        <Input label='Url da foto de Perfil' value={urlPhotoPerfil} onChange={e =>setUrlPhotoPerfil(e.target.value)}/>
        <Button title='ENVIAR' onPress={() => sendPhotoPerfil()}/>
      </Wrapper2>
      <Wrapper2>
        <Input label='Username' value={username} onChange={e =>setUsername(e.target.value)}/>
        <Button title='ENVIAR' onPress={() => sendUsername()}/>
      </Wrapper2>
      
      <Wrapper2>
        <Wrapper3>

        <Input label='Nome' value={name} onChange={e =>setName(e.target.value)}/>

        <Input label='Sobrenome' value={surname} onChange={e =>setSurname(e.target.value)}/>
        </Wrapper3>

        <Button title='ENVIAR' onPress={() => sendNameSurname()}/>
      </Wrapper2>
      <Wrapper2>
        <Wrapper3>

        <Input label='Interesses' />
        <Input label='' />
        <Input label='' />
        </Wrapper3>

        <Button title='ENVIAR' onPress={() => sendInterests()}/>
      </Wrapper2>

      
    </Container >
  )
}
