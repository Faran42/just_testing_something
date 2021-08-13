import { gql, useQuery } from '@apollo/react-hooks';

export default function apiCalls() {

    const QUERY1 = gql`
    {
      deputados{
        edges{
          __typename
        }
      }
    }
    `
    
    sendPhotoPerfil = () => {
        //e.preventDefault()
        console.log("hi")
        const { loading, error, data } = useQuery(QUERY1)
        console.log(data)
      }
      sendUsername = e => {
        e.preventDefault()
        console.log("hi2")
        const { data } = useQuery(gql`
        {
          deputados{
            edges{
              __typename
            }
          }
        }
        `)
        console.log(data)
      }
      sendNomeSobrenome = e => {
        e.preventDefault()
        console.log("hi3")
        const { data } = useQuery(gql`
        {
          deputados{
            edges{
              __typename
            }
          }
        }
        `)
        console.log(data)
      }
      sendInteresses = e => {
        e.preventDefault()
        console.log("hi4")
        const { data } = useQuery(gql`
        {
          deputados{
            edges{
              __typename
            }
          }
        }
        `)
        console.log(data)
      }
  
    return { sendPhotoPerfil, sendUsername, sendNomeSobrenome, sendInteresses }
};