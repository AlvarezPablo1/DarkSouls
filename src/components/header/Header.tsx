import Link from 'next/link'
import Logo from '/public/logo.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='py-5 flex justify-center shadow-lg shadow-[#ffffff21]'>
      <section className='w-[5rem] cursor-pointer'>
        <Link href={'/'}>
          <Image src={Logo} alt='logo' />
        </Link>
      </section>
    </div>
  )
}
export default Header