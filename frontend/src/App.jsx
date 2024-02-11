import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import Form from './components/Form';

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

  return (
    <>
      <Container>
        <Title>Users</Title>
        <Form></Form>
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
    </>
      
  )
}

export default App
