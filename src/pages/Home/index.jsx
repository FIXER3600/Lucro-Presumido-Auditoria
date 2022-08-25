import React, { useContext } from 'react'
import { Form } from '../../components/Form'
import { Tabela } from '../../components/Table'
import { GlobalContext } from '../../context'
import {Text,Flex} from '@chakra-ui/react'
export const Home = () => {
  const {pis,cofins,irpj,fat,csll,soma}=useContext(GlobalContext)

  return (
    <Flex
    justifyContent={'center'}
    alignItems='center'
    flexDirection='column'
    >
      <Text fontSize='5xl' mt='1em'>PLANILHA DE CÁLCULO DO LUCRO PRESUMIDO</Text>
	<Form faturamento={fat}/>
	<Tabela pis={pis} cofins={cofins} irpj={irpj} csll={csll} soma={soma}/>
    </Flex>
  )
}
