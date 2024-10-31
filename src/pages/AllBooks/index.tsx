import { books } from "@/utils/books";
import { Link, useNavigate } from "react-router-dom"
import queryString from 'query-string';
import { CardAllBook } from "@/components/cardAllBook";
export function AllBooks() {
    const navigate = useNavigate();
    return (
        <section className="w-full flex flex-col">
            <div className='flex ml-8 mt-8 gap-2'>
                <button onClick={() => navigate("/")}><img src="/src/assets/Arrow.svg" alt="Voltar" /></button>
                <p className='font-bold md:text-2xl'>Best Seller</p>
            </div>
            <div className="w-full flex items-center justify-center">
                <section className="w-[1320px] justify-center 2lg:justify-start gap-4 flex flex-wrap items-center p-4 mt-4">
                    {books.map((book, i) => {
                        const queryParams = queryString.stringify({
                            img: book.img,
                            author: book.author,
                            title_book: book.title_book,
                            price: book.price,
                            description: book.description
                        });
                        return (
                            <Link to={`/livro-detalhes?${queryParams}`}>
                                <CardAllBook author={book.author} img={book.img} price={book.price} title_book={book.title_book} key={i}/>
                            </Link>
                        )
                    })}
                </section>
            </div>
        </section>
    )
}
