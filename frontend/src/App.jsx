import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import Form from './components/Form';
import Grid from './components/Grid';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const Title = styled.h2`
  
`


function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000'); //SElECTs all users from API
      setUsers(res.data);
    } catch (err) {
      toast.error(err);
    }
  }


  useEffect(() => {
    getUsers()
  }, [setUsers])


  return (
    <>
      <Container>
        <Title>Users</Title>
        <Form></Form>
        <Grid users={users} setUsers={setUsers}></Grid>
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
    </>
      
  )
}

export default App
