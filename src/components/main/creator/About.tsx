import Image from 'next/image';
import Miyazaki from '/public/miyasaki.png'
// import information from '/data'


const About = () => {
  return (
    <div className='mt-[5rem] flex relative justify-center'>
      <section className='hidden lg:block lg:relative lg:left-[-20rem]'>
        <Image src={Miyazaki} alt='imagen miyazaki' />  
      </section>
      <section className='  flex text-center  lg:absolute lg:right-[10rem] lg:top-[5rem]'>
        <h1 className='text-4xl font-bold'>Información personal</h1>
      </section>
    </div>

  )
}
export default About