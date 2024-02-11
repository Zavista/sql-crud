import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

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
        Hi
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTEM_LEFT}></ToastContainer>
    </>
      
  )
}

export default App
