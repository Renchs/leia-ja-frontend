import { IBookQuery } from '@/interfaces/IBookQuery';
import queryString from 'query-string';
import { Link, useLocation, useNavigate } from 'react-router-dom';



export function BooksDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = queryString.parse(location.search) as unknown as IBookQuery;
    const img = typeof queryParams.img === 'string' ? queryParams.img : "/src/assets/book-not-found.svg";
    return (
        <section className='flex flex-col'>
            <div className='flex mt-8 mb-8 ml-8 gap-2'>
                <button onClick={() => navigate("/")}><img src="/src/assets/Arrow.svg" alt="Voltar" /></button>
                <p className='font-bold text-2xl'>Detalhes do livro</p>
            </div>
            <div className='flex items-center lg:items-start lg:flex-row flex-col justify-center md:gap-24 2xl:gap-52'>
                <div className='lg:w-[420px] lg:h-[570px] flex items-center justify-center bg-[#F4F4FF] rounded'>
                    <img className='w-[300px] h-[450px]' src={img} alt="Capa do livro" />
                </div>
                <div className='sm:w-[600px] lg:w-[860px] h-[600px] lg:mt-0 mt-3 flex flex-col items-center sm:items-stretch justify-center gap-8 mr-2'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center flex-col md:flex-row gap-4'>
                            <h2 className='font-semibold text-4xl'>{queryParams.title_book}</h2>
                            <button className='ml-auto'><img src="/src/assets/HEART BUTTON.svg" alt="" /></button>
                        </div>
                        <h3 className='font-semibold text-2xl text-black/60'>{queryParams.author}</h3>
                    </div>
                    <div className='w-5/6 sm:w-[600px] lg:w-[650px] lg:h-[343px] flex flex-col gap-1'>
                        <h4 className='font-bold text-lg'>Resumo</h4>
                        <p className='text-base'>{queryParams.description}</p>
                    </div>
                    <div className='flex justify-end'>
                        <div className='lg:w-[400px] md:h-20 lg:h-16 gap-4 flex flex-row items-center justify-between p-4 bg-orange-600 text-white font-semibold'>
                            <p><span>{queryParams.price} R$</span></p>
                            <Link to={`/comprar?${queryString.stringify(queryParams)}`}>Comprar Agora</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}