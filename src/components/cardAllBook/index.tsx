
import { ICardBook } from "../card-book";

export function CardAllBook({ img, author, title_book, price }: ICardBook) {
    return (
        <div className="flex flex-col justify-center items-center gap-5 w-[300px] h-[433px] bg-[#F4F4FF]">
            <img className="w-[200px]" src={img} alt={`imagem do livro ${title_book}`} />
            <div className="flex w-full items-center">
                <div className="w-full font-semibold flex flex-col">
                    <h3 className="ml-4 text-xl">{title_book}</h3>
                    <h4 className="ml-4">{author}</h4>
                </div>
                <p className="text-2xl mt-4 mr-4 font-bold text-[#6251DD]">{price.toFixed(2)}$</p>
            </div>
        </div>
    )
}
