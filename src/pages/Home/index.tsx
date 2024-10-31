import Autoplay from "embla-carousel-autoplay";
import { CardBook } from "../../components/card-book";
import queryString from 'query-string';

import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { books } from "@/utils/books";


export function Home() {
    return (
        <main className="flex flex-col items-center w-full gap-8">
            <div className="h-96 flex mt-12 bg-img-banner bg-cover bg-center bg-no-repeat w-full 2xl:w-[1320px]">
                <div className="w-full h-full flex items-center backdrop-brightness-50">
                    <h2 className="xl:w-[450px] w-80 flex flex-col justify-center h-56 text-4xl md:text-5xl xl:text-6xl text-white ml-12"><span className="text-yellow-500 font-semibold">25% de desconto</span> em todos os livros de Paulo Coelho</h2>
                </div>
            </div>
            <div className="w-full xl:w-[1320px] flex flex-col gap-4">
                <div className="w-full h-11 items-center justify-between flex p-2">
                    <p className="text-3xl font-bold text-[#090937]">Best Seller</p>
                    <Link to={'/livros'} className="text-2xl font-bold text-[#EF6B4A]">Ver todos</Link>
                </div>
                <div className="flex gap-4 ">
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 10000,
                                stopOnMouseEnter: true,
                                stopOnInteraction: false
                            })
                        ]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full xl:w-[1320px]"
                    >
                        <CarouselContent>
                            {books.map((book, i) => {
                                const queryParams = queryString.stringify({
                                    img: book.img,
                                    author: book.author,
                                    title_book: book.title_book,
                                    price: book.price,
                                    description: book.description
                                });

                                return (
                                    <CarouselItem
                                        key={i}
                                        className="md:basis-1/2 lg:1/3 xl:basis-1/4"
                                    >
                                        <>
                                            <Link to={`/livro-detalhes?${queryParams}`}>
                                                <CardBook
                                                    author={book.author}
                                                    img={book.img}
                                                    price={book.price}
                                                    title_book={book.title_book}
                                                />
                                            </Link>
                                        </>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                    </Carousel>

                </div>
            </div>
        </main>
    )
}
