import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`



export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr =  styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`
export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

const Grid = ({ users }) => {
  return (
    <Table>
        <Thead>
            <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th onlyWeb>Telephone</Th>
            </Tr>
        </Thead>
        <Tbody>
            {users.map((item, i) => (
                <Tr key={i}>
                    <Td width='30%'>{item.name}</Td>
                    <Td width='30%'>{item.email}</Td>
                    <Td width='20%' onlyWeb>{item.phone}</Td>
                    <Td alignCenter width='5%'>
                        <FaEdit></FaEdit>
                    </Td>
                    <Td alignCenter width='5%'>
                        <FaEdit onClick={() => handleDelete(item.id)}></FaEdit>
                    </Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
  )
}

export default Grid