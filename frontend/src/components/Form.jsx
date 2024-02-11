import React, { useRef } from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;

`

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  
`
const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`


const Form = ({ onEdit }) => {
  const ref = useRef();
  
  return (
    <FormContainer>
      <InputArea>
        <Label for="name">Name</Label>
        <Input name="name" id="name"></Input>
      </InputArea>
      <InputArea>
        <Label for="email">Email</Label>
        <Input name="email" id="email"></Input>
      </InputArea>
      <InputArea>
        <Label for="tel">Telephone</Label>
        <Input name="tel" id="tel"></Input>
      </InputArea>
      <InputArea>
        <Label for="birthdate">Date of Birth</Label>
        <Input name="birthdate" id="birthdate" type='date'></Input>
      </InputArea>
      <Button type='submit'>Add</Button>
    </FormContainer>
  )
}

export default Form