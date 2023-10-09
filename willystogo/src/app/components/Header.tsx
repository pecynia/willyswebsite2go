import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex h-24 flex-col justify-center bg-stone-100'>
      <nav className='container'>
        <ul className='flex items-center justify-between gap-8 font-medium tracking-wider text-stone-500'>
          <li className='text-sm'>
            <Link href='/'>Home</Link>
          </li>
          <li className='text-sm'>
            <Link href='/admin/server'>Protected (server)</Link>
          </li>
          <li className='text-sm'>
            <Link href='/admin/client'>Protected (client)</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header