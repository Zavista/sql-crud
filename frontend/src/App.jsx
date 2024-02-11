import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTEM_LEFT}></ToastContainer>
    </>
      
  )
}

export default App
