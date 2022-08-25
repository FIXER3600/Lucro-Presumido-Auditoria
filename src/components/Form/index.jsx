import { Input, Button,Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

export const Form = ({faturamento}) => {
  const {setFAT,fat,setPis,setCofins,setCSLL,setIRPJ,setSoma}=useContext(GlobalContext)
  const handleFaturamento=({target})=>{
      setFAT(target.value)
  }
  const calcularLucro=(e)=>{
    e.preventDefault()
    const pis=0.0065*fat
    setPis(pis)
    const cofins=0.03*fat
    setCofins(cofins)
    const bccsll=0.12*fat
    const csll=0.09*bccsll
    setCSLL(csll)
    const soma=pis+cofins+csll
    setSoma(soma)
  }
  return (
    <Box
    m={'2em'}>
      <Input
      w={'30em'}
      placeholder='Digite o faturamento...'
      value={faturamento}
      name='faturamento'
      onChange={handleFaturamento}
      />
      <Button type='submit' 
      onClick={calcularLucro}
      colorScheme='green'
      m={'2em'}>
        Calcular</Button>
    </Box>
  )
}
