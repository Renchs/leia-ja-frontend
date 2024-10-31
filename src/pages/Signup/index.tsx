import WellcomePage from "@/components/wellcomePage";
import { InputForm } from '../../components/input/index';
import { BtnUserAuth } from '../../components/btnUserAuth/index';
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";


export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => { 
    e.preventDefault();
    
    console.log(email, password, name);
    
  }

  return (
    <WellcomePage>
      <form onChange={handleSubmit} className='flex flex-col gap-2 justify-around h-[450px]'>
        <div className="flex w-full justify-end">
          <button onClick={() => navigate("/")}>
            <img src="/src/assets/Arrow.svg" alt="" />
          </button>
        </div>
        <div className='flex flex-col gap-4'>
          <InputForm typeInput='name' placeholder='Nome Sobrenome' onChange={(e) => setName(e.target.value)}>Nome</InputForm>
          <InputForm typeInput='email' placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)}>Email</InputForm>
          <InputForm typeInput='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)}>Senha</InputForm>
        </div>
        <div className='md:w-[400px] flex flex-col gap-3'>
          <BtnUserAuth handleButtonClick={() => navigate("/signup")} type='submit' styles="bg-primary-color text-white">Cadastre-se</BtnUserAuth>
          <BtnUserAuth handleButtonClick={() => navigate("/login")} type="button" styles="text-secundary-color border-2 border-secundary-color">Entrar</BtnUserAuth>
        </div>
      </form>
    </WellcomePage>
  )
}
