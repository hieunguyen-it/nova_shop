// import { Banner } from '@/assets'
// import { Link, useMatch } from 'react-router-dom'
import { useMatch } from 'react-router-dom'

export const RegisterHeader = () => {
  const registerMatch = useMatch('/register')
  const isRegister = Boolean(registerMatch)
  return (
    <header className='py-5'>
      <div className='container'>
        <nav className='flex items-end'>
          {/* <Link to='/'>
            <Banner />
          </Link> */}
          <div className='ml-5 text-xl lg:text-2xl'>{isRegister ? ' Đăng ký' : ' Đăng nhập'}</div>
        </nav>
      </div>
    </header>
  )
}
