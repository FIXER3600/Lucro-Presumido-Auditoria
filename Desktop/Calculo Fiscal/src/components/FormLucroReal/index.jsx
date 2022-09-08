import { Input, Button,Box } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context'
import useForm from '../../hooks/useForm';

export const FormLucroReal = () => {
  const { form, onChange, cleanFields } = useForm({
    credito:'',
    debito:''
  });
  const {pisReal,setPisReal,cofinsReal,setCofinsReal,icms,setICMS,setSomaReal}=useContext(GlobalContext)
  
  const calcularLucroReal=(e)=>{
    e.preventDefault()
  

  const creditoPis=Number(form.credito)* 0.165
  const debitoPis=Number(form.debito) * 0.165
  if (creditoPis>debitoPis) {
	const pis=creditoPis-debitoPis
	setPisReal(pis)
  }else{
	const pis=debitoPis-creditoPis
	setPisReal(pis)
  }
 const creditoCofins=Number(form.credito)*0.76
 const debitoCofins=Number(form.debito)*0.76  
 if (creditoCofins>debitoCofins) {
	const cofins=creditoCofins-debitoCofins
	setCofinsReal(cofins)
  }else{
	const cofins=debitoCofins-creditoCofins
	setCofinsReal(cofins)
  }
  const creditoICMS=Number(form.credito)*0.18
 const debitoICMS= Number(form.debito)*0.18
 if (creditoICMS>debitoICMS) {
	const icms=creditoICMS-debitoICMS
	setICMS(icms)
	
  
  }else{
	const icms=debitoICMS-creditoICMS
	setICMS(icms)
	
  
  }
  
  }
  useEffect(() => {
	setSomaReal(Number(pisReal)+Number(cofinsReal)+Number(icms))
  }, [icms])
  
  return (
    <Box
    m={'2em'}>
       <Input
      w={'30em'}
      placeholder='Digite o crédito...'
      value={form.credito}
      name='credito'
      type='number'
      onChange={onChange}
      />
        <Input
      w={'30em'}
      m='1em'
      placeholder='Digite o débito...'
      value={form.debito}
      name='debito'
      type='number'
      onChange={onChange}
      />
        
     
      <Button type='submit' 
      onClick={calcularLucroReal}
      colorScheme='green'
      m={'2em'}>
        Calcular Lucro Real</Button>
    </Box>
  )
}
