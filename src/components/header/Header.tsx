import Link from 'next/link'
import Nav from './Nav'
import Logo from '/public/logo.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='py-5 flex justify-center'>
      <section className='w-[5rem] cursor-pointer'>
        <Link href={'/'}>
          <Image src={Logo} alt='logo' />
        </Link>
      </section>
    </div>
  )
}
export default Header