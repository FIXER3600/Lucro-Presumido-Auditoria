import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
export const Tabela = ({pis,cofins,irpj,csll,soma,fat}) => {
  return (
    <TableContainer w={'auto'}
   >
      <Table>
      <Thead>
      
      <Tr>
    
      <Th isNumeric>Faturamento</Th>
        <Th isNumeric>PIS</Th>
        <Th isNumeric>COFINS</Th>
      <Th isNumeric>IRPJ</Th>
      <Th isNumeric>CSLL</Th>
      <Th isNumeric>TOTAL</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
    
        <Td isNumeric>R$ {fat}</Td>
        <Td isNumeric>R$ {pis}</Td>
        <Td isNumeric>R$ {cofins}</Td>
        <Td isNumeric>R$ {irpj}</Td>
        <Td isNumeric>R$ {csll}</Td>
        <Td isNumeric>R$ {soma}</Td>
      </Tr>
   
    </Tbody>
      </Table>
     
      </TableContainer>
  )
}
