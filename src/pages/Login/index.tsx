import { InputForm } from '@/components/input';
import { BtnUserAuth } from '@/components/btnUserAuth';
import WellcomePage from '@/components/wellcomePage';
import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => { 
    e.preventDefault();
    console.log(email, password);
  }

  const navigate = useNavigate();
  return (
    <WellcomePage>
      <form onChange={handleSubmit} className='flex flex-col gap-4 justify-around h-[450px]'>
        <div className="flex w-full justify-end">
          <button onClick={() => navigate("/")}>
            <img src="/src/assets/Arrow.svg" alt="" />
          </button>
        </div>
        <div className='flex flex-col gap-4'>
          <InputForm typeInput='email' placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)}>Email</InputForm>
          <InputForm typeInput='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)}>Senha</InputForm>
        </div>
        <div className='md:w-[400px] flex flex-col gap-3'>
          <BtnUserAuth handleButtonClick={() => navigate("/")} type='submit' styles="bg-primary-color text-white">Entrar</BtnUserAuth>
          <BtnUserAuth handleButtonClick={() => navigate("/signup")} type="button" styles="text-secundary-color border-2 border-secundary-color">Cadastre-se</BtnUserAuth>
        </div>
      </form>
    </WellcomePage>
  )
}
