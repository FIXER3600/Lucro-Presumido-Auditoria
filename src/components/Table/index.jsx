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
export const Tabela = ({pis,cofins,irpj,csll,soma}) => {
  return (
    <TableContainer w={'50em'}
   >
      <Table>
      <Thead>
      <Tr>
        <Th isNumeric>PIS</Th>
        <Th isNumeric>COFINS</Th>
      <Th isNumeric>IRPJ</Th>
      <Th isNumeric>CSLL</Th>
      <Th isNumeric>Soma</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td isNumeric>{pis}</Td>
        <Td isNumeric>{cofins}</Td>
        <Td isNumeric>{irpj}</Td>
        <Td isNumeric>{csll}</Td>
        <Td isNumeric>{soma}</Td>
      </Tr>
    </Tbody>
      </Table>
      </TableContainer>
  )
}
