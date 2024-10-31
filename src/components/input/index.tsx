
interface InputProps {
    children: React.ReactNode;
    typeInput: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputForm({children, typeInput, placeholder} : InputProps) {
  return (
      <div className='flex flex-col gap-2'>
          <label className='font-semibold text-xl'>{children}:</label>
          <input className='h-[60px] p-4 text-xl rounded bg-[#F4F4FF]' type={typeInput} placeholder={placeholder} />
      </div>
  )
}
