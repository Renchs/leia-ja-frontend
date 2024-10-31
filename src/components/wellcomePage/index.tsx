import imageLogin from '/src/assets/Picture.svg';

export default function WellcomePage({ children }: React.PropsWithChildren) {
  return (
      <div className='w-full h-screen flex 2lg:justify-start justify-center items-center'>
          <img className='h-screen hidden 2lg:block lg:w-[720px]' src={imageLogin} alt="" />
          <div className='lg:w-10/12 flex flex-col justify-center items-center'>
              <div className='w-5/6 md:w-[400px] h-screen sm:h-[620px] flex flex-col justify-around'>
                  <div className='w-full flex flex-col'>
                      <h3 className='text-2xl font-semibold'>Bem vindo de volta!</h3>
                      <h2 className='text-3xl font-bold'>Faça o login na sua conta</h2>
                  </div>
                  {children}
              </div>
          </div>
      </div>
  )
}
