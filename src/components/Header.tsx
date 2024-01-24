import { Cart, ChevronDown, Global, Search, Shopee } from '@/assets'
import { Link } from 'react-router-dom'
import { Popover } from '@/components'

export const Header = () => {
  return (
    <div className='bg-[linear-gradient(-180deg,#f53d2d,#f63)] pb-5 pt-2 text-white'>
      <div className='container'>
        <div className='flex justify-end'>
          <Popover
            as='span'
            className='flex items-center py-1 hover:text-gray-300 cursor-pointer'
            renderPopover={
              <div className='bg-white relative shadow-md rounded-sm border border-gray-200'>
                <div className='flex flex-col py-2 px-3 pr-28 pl-3'>
                  <button className='py-2 px-3 hover:text-orange w-full text-left'>Tiếng Việt</button>
                  <button className='py-2 px-3 hover:text-orange mt-2 w-full text-left'>English</button>
                </div>
              </div>
            }
          >
            <Global />
            <span className='mx-1'>Tiếng Việt</span>
            <ChevronDown />
          </Popover>
          <Popover
            className='flex items-center py-1 hover:text-gray-300 cursor-pointer ml-6'
            renderPopover={
              <div className='bg-white relative shadow-md rounded-sm border border-gray-200'>
                <Link
                  to={'/'}
                  className='block py-3 px-4 hover:bg-slate-100 bg-white hover:text-cyan-500 w-full text-left'
                >
                  Tài khoản của tôi
                </Link>
                <Link
                  to={'/'}
                  className='block py-3 px-4 hover:bg-slate-100 bg-white hover:text-cyan-500 w-full text-left'
                >
                  Đơn mua
                </Link>
                <button className='block py-3 px-4 hover:bg-slate-100 bg-white hover:text-cyan-500 w-full text-left'>
                  Đăng xuất
                </button>
              </div>
            }
          >
            <div className='w-6 h-6 mr-2 flex-shrink-0'>
              {/* TODO Avatar */}
              <img
                src='https://res.cloudinary.com/daily-now/image/upload/s--0Nnn3lEU--/f_auto,q_auto/v1/squads/a6581605-a03b-4877-84f2-7d362a8ada28'
                alt='avatar'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <div>NguyenPhanHieu</div>
          </Popover>
        </div>
        <div className='grid grid-cols-12 gap-4 mt-4 items-end'>
          <Link to='/' className='col-span-2'>
            <Shopee />
          </Link>
          <form className='col-span-9'>
            <div className='flex rounded-sm bg-white p-1'>
              <input
                type='text'
                name='search'
                className='flex-grow border-none bg-transparent px-3 py-2 text-black outline-none'
                placeholder='Free ship đơn từ 0Đ'
              />
              <button className='flex-shrink-0 rounded-sm bg-orange py-2 px-6 hover:opacity-90'>
                <Search />
              </button>
            </div>
          </form>
          <div className='col-span-1'>
            <Link to='/'>
              <Cart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
