import { Input, Button,Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import useForm from '../../hooks/useForm';

export const Form = ({ct,lo,isv,DO}) => {
  const { form, onChange, cleanFields } = useForm({
    ct:'',
    Do:''
  });
  const {setFAT,fat,setPis,setCofins,setCSLL,setIRPJ,setSoma,setDo,setCt}=useContext(GlobalContext)
  
  const calcularLucro=(e)=>{
    e.preventDefault()
  
    const lo = (Number(form.ct) + Number(form.Do))/7.5

    const isv = (Number(form.ct) + Number(form.Do))/1.875
 
    const faturamento=Number(form.ct)+Number(form.Do)+Number(isv)+Number(lo)
    setFAT(faturamento.toFixed(2))
  console.log(faturamento);
    const pis=0.0065*faturamento
    setPis(pis.toFixed(2))
    const cofins=0.03*faturamento
    setCofins(cofins.toFixed(2))
    const bccsll=0.12*faturamento
    const csll=0.09*bccsll
    setCSLL(csll.toFixed(2))
    let irpj=0;
    if (faturamento < 20000){
      irpj = faturamento*0.08*0.15
      setIRPJ(irpj.toFixed(2))
      }else{
      irpj = (faturamento*0.08*0.15)*1.1  
        setIRPJ(irpj.toFixed(2))
    }
    const soma=pis+cofins+csll+irpj
    setSoma(soma.toFixed(2))

    const creditoPis=0

  }
  return (
    <Box
    m={'2em'}>
       <Input
      w={'30em'}
      placeholder='Digite o custo total...'
      value={form.ct}
      name='ct'
      type='number'
      onChange={onChange}
      />
        <Input
      w={'30em'}
      m='1em'
      placeholder='Digite as despesas operacionais...'
      value={form.Do}
      name='Do'
      type='number'
      onChange={onChange}
      />
        
     
      <Button type='submit' 
      onClick={calcularLucro}
      colorScheme='green'
      m={'2em'}>
        Calcular</Button>
    </Box>
  )
}
