import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

export const TabelaLucroReal = ({pisReal,cofinsReal,icms,somaReal}) => {
  return (
	<TableContainer w={'auto'}
	>
	   <Table>
	     <Thead>
	     <Tr>
	   
	   
	     <Th isNumeric>PIS</Th>
	     <Th isNumeric>COFINS</Th>
	   <Th isNumeric>ICMS</Th>
	   <Th isNumeric>TOTAL</Th>
	   </Tr>
	     </Thead>
	     <Tbody>
	     <Tr>
	 
	     <Td isNumeric>R$ {pisReal}</Td>
	     <Td isNumeric>R$ {cofinsReal}</Td>
	     <Td isNumeric>R$ {icms}</Td>
	     <Td isNumeric>R$ {somaReal}</Td>
	   </Tr>
	     </Tbody>
	   </Table>
	   </TableContainer>
  )
}
