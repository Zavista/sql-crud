import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import toast from 'react-toastify'
import axios from 'axios'

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


const Form = ({ onEdit, getUsers, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;
      user.name.value = onEdit.name;
      user.email.value = onEdit.email;
      user.phone.value = onEdit.phone;
      user.birthdate.value = onEdit.birthdate;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    const user = ref.current;

    if (onEdit) {
      try {
          const response = await axios.put(`http://localhost:5000/${user.id}`, { //UPDATE
              name: user.name.value,
              email: user.email.value,
              phone: user.phone.value,
              birthdate: user.birthdate.value,
          });
          toast.success(response.data);
      } catch (error) {
          toast.error(error.response.data);
      }
    } else {
        try {
          const response = await axios.post(`http://localhost:5000`, { //ADD
              name: user.name.value,
              email: user.email.value,
              phone: user.phone.value,
              birthdate: user.birthdate.value,
          });
          toast.success(response.data);
        } catch (error) {
          toast.error(error.response.data);
      }
    }

    user.name.value = "";
    user.email.value = "";
    user.phone.value = "";
    user.birthdate.value = "";

    setOnEdit(null);
    getUsers();
  }
  
  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label for="name">Name</Label>
        <Input name="name" id="name" required></Input>
      </InputArea>
      <InputArea>
        <Label for="email">Email</Label>
        <Input name="email" id="email" required></Input>
      </InputArea>
      <InputArea>
        <Label for="phone">Telephone</Label>
        <Input name="phone" id="phone" required></Input>
      </InputArea>
      <InputArea>
        <Label for="birthdate">Date of Birth</Label>
        <Input name="birthdate" id="birthdate" type='date' required></Input>
      </InputArea>
      <Button type='submit'>Submit</Button>
    </FormContainer>
  )
}

export default Form