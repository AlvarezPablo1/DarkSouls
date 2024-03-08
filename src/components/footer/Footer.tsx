const Footer = () => {
  return (
    <div className={`absolute bottom-0 w-full p-5 flex flex-col text-center items-center lg:flex-row lg:justify-around shadow-2xl shadow-white`}>
      <section className="pb-5 lg:pb-0">
        <p className="text-xl">Todos los derechos reservados a <span className="font-bold">FROM SOFTWARE</span></p>
      </section>
      <section className='flex gap-x-5'>
        <p className=' hover:underline decoration-solid'>Terminos y condiciones</p>
        <p className=' hover:underline decoration-solid'>Copyright</p>
      </section>
    </div>
  )
}
export default Footer