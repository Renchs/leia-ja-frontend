import { InputForm } from "@/components/input";
import { TypeBook } from "@/components/typeBook";
import { IBookQuery } from "@/interfaces/IBookQuery";
import queryString from "query-string";
import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export function BuyBook() {
  const [typeBookBuy, setTypeBookBuy] = useState<"ebook" | "capa_comum">("ebook");
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = queryString.parse(location.search) as unknown as IBookQuery;

  const handleSubmitBook = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('comprou');
    
  };

  return (
    <section className="w-full flex flex-col">
      <div className='flex ml-8 mt-8 gap-2'>
        <button onClick={() => navigate("/")}><img src="/src/assets/Arrow.svg" alt="Voltar" /></button>
        <p className='font-bold md:text-2xl'>Voltar</p>
      </div>
      <section className="flex flex-col lg:flex-row justify-center gap-12
      lg:h-[720px] items-center p-4">
        <div className="flex flex-col items-center">
          <img className="w-72" src={queryParams.img} alt="" />
          <h2 className="text-2xl">{queryParams.title_book}</h2>
          <h2 className="text-xl">{queryParams.author}</h2>
        </div>
        
        <div className="flex flex-col w-3/4 lg:w-[720px] justify-center">
          <TypeBook typeBook={typeBookBuy} handleTypeBook={setTypeBookBuy}/>
          <form onSubmit={handleSubmitBook} className="flex flex-col gap-2">
            <div className="flex flex-col">
              <InputForm typeInput="text">Contato</InputForm>
            </div>
            <div className="flex flex-col">
              <InputForm typeInput="text">Email</InputForm>
            </div>
            {typeBookBuy === "capa_comum" && (
              <>
                <div className="flex flex-col">
                  <InputForm typeInput="text">Cep</InputForm>
                </div>
                <div className="flex flex-col">
                  <InputForm typeInput="text">Endereço</InputForm>
                </div>
                <div className="flex gap-8 flex-col md:flex-row">
                  <InputForm typeInput="number">N°</InputForm>
                  <InputForm typeInput="text">Complemento</InputForm>
                </div>
              </>
              )}
            <div className="flex mt-8 justify-center">
              <button className="h-14 text-2xl rounded bg-primary-color text-white w-full">Comprar</button>
            </div>
          </form>
        </div>
      </section>
    </section>
  )
}
