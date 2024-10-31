import './App.css'
import { Header } from './components/header'
import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { BooksDetails } from './pages/BooksDetails';
import { BuyBook } from './pages/BuyBook';
import { AllBooks } from './pages/AllBooks';
function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/login' element={<Login />} /> 
          <Route path='/signup' element={<Signup />} /> 
          <Route path='/livro-detalhes' element={<BooksDetails />} />
          <Route path='/comprar' element={<BuyBook />} />
          <Route path='/livros' element={<AllBooks />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
