interface typeBookProps {
    typeBook: "ebook" | "capa_comum",
    handleTypeBook: (typeBook: "ebook" | "capa_comum") => void;
}
export function TypeBook({ typeBook, handleTypeBook }: typeBookProps) {
    return (
        <div className="flex justify-center gap-2">
            <button onClick={() => handleTypeBook("ebook")} className={`h-10 text-base w-28 rounded ${typeBook === 'ebook' ? 'bg-primary-color text-white' : 'border-secundary-color border-2 text-secundary-color'}`}>Ebook</button>
            <button onClick={() => handleTypeBook("capa_comum")} className={`h-10 text-base w-28 rounded ${typeBook === "capa_comum" ? 'bg-primary-color text-white' : 'border-secundary-color border-2 text-secundary-color'}`}>Capa Comum</button>
        </div>
    )
}
