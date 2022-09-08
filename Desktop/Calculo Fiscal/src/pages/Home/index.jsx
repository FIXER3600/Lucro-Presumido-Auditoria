import React, { useContext } from 'react'
import { Form } from '../../components/Form'
import { Tabela } from '../../components/Table'
import { GlobalContext } from '../../context'
import {Text,Flex} from '@chakra-ui/react'
import { TabelaLucroReal } from '../../components/TabelaLucroReal'
import { FormLucroReal } from '../../components/FormLucroReal'
export const Home = () => {
  const {pis,cofins,irpj,fat,csll,soma,ct,DO,isv,lo,pisReal,cofinsReal,icms,somaReal}=useContext(GlobalContext)

  return (
    <Flex
    justifyContent={'center'}
    alignItems='center'
    flexDirection='column'
    >
      <Text fontSize='5xl' mt='1em'>PLANILHA DE CÁLCULO FISCAL</Text>
      <Text fontSize='4xl'>Lucro Presumido</Text>
	<Form fat={fat} ct={ct} DO={DO} isv={isv} lo={lo}/>
	<Tabela pis={pis} cofins={cofins} irpj={irpj} csll={csll} soma={soma} fat={fat}
 />
  <Text fontSize='4xl' mt={'1em'}>Lucro Real</Text>
 <FormLucroReal/>
  <TabelaLucroReal  cofinsReal={cofinsReal} pisReal={pisReal} icms={icms} somaReal={somaReal}/>
    </Flex>
  )
}
