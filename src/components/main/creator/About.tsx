import Image from 'next/image';
import Miyazaki from '/public/miyasaki.png'
import {information} from './data'


const About = () => {
  return (
    <div className='mt-[5rem] flex relative justify-center'>
      <section className='hidden lg:block lg:relative lg:left-[-20rem]'>
        <Image src={Miyazaki} alt='imagen miyazaki' />  
      </section>
      <div className=' flex text-center lg:text-left flex-col lg:absolute lg:right-[16rem] lg:top-[5rem]'>
        <section>
          <h1 className='text-4xl font-bold'>Información personal</h1>
        </section>
        <section className='w-[30rem] pt-[2rem]'>
          {
            information.map((info) => (
              <p key={info.id} dangerouslySetInnerHTML={{ __html: info.info }}/>
            ))
          }
        </section>
      </div>
    </div>

  )
}
export default About