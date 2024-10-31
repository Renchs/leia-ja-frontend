export interface ICardBook {
    img: string;
    author: string;
    title_book: string;
    price: number;
}

export function CardBook({img, author, title_book, price}: ICardBook) {
  return (
      <section className="w-full md:w-80 h-52 flex gap-4 bg-[#F4F4FF] justify-center items-center">
          <figure className="w-full rounded">
              <img className="w-32" src={img} alt="Capa do livro" />
          </figure>
          <div className="flex flex-col justify-around h-full w-full">
              <div className="flex flex-col gap-1">
                  <p className="font-semibold text-lg ">{title_book}</p>
                  <p className="font-semibold text-black/60">{author}</p>
              </div>
              <p className="font-bold text-2xl text-[#6251DD]">R$ {price.toFixed(2)}</p>
          </div>
      </section>
  )
}
