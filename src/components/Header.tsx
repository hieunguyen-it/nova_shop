import { Cart, ChevronDown, Global, Search, Shopee } from '@/assets'
import { Link } from 'react-router-dom'
import { Popover } from '@/components'
import { useMutation } from '@tanstack/react-query'
import authApi from 'src/api/auth.api'
import { useContext } from 'react'
import { AppContext } from '@/contexts/app.context'
import { path } from '@/constants'

export const Header = () => {
  const { setIsAuthenticated, isAuthenticated, setProfile, profile } = useContext(AppContext)

  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
    }
  })

  const handlleLogout = () => {
    logoutMutation.mutate()
  }
  return (
    <div className='bg-[linear-gradient(-180deg,#f53d2d,#f63)] pb-5 pt-2 text-white'>
      <div className='container'>
        <div className='flex justify-end'>
          <Popover
            as='span'
            className='flex items-center py-1 hover:text-white/70 cursor-pointer'
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
          {isAuthenticated && (
            <Popover
              className='flex items-center py-1 hover:text-white/70 cursor-pointer ml-6'
              renderPopover={
                <div className='bg-white relative shadow-md rounded-sm border border-gray-200'>
                  <Link
                    to={path.profile}
                    className='block py-3 px-4 hover:bg-slate-100 bg-white hover:text-cyan-500 w-full text-left'
                  >
                    Tài khoản của tôi
                  </Link>
                  <Link
                    to={path.home}
                    className='block py-3 px-4 hover:bg-slate-100 bg-white hover:text-cyan-500 w-full text-left'
                  >
                    Đơn mua
                  </Link>
                  <button
                    onClick={handlleLogout}
                    className='block py-3 px-4 hover:bg-slate-100 bg-white hover:text-cyan-500 w-full text-left'
                  >
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
              <div>{profile?.email}</div>
            </Popover>
          )}

          {!isAuthenticated && (
            <div className='flex items-center'>
              <Link to={path.register} className='mx-3 capitalize hover:text-white/70'>
                Đăng ký
              </Link>
              <div className='border-r-[1px] border-r-white/40 h-4' />
              <Link to={path.login} className='mx-3 capitalize hover:text-white/70'>
                Đăng nhập
              </Link>
            </div>
          )}
        </div>
        <div className='grid grid-cols-12 gap-4 mt-4 items-end'>
          <Link to={path.home} className='col-span-2'>
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
          <div className='col-span-1 justify-self-end'>
            <Popover
              renderPopover={
                <div className='bg-white relative shadow-md rounded-sm border border-gray-200 max-w-[400px] text-sm'>
                  <div className='p-2'>
                    <div className='text-gray-400 capitalize'>Sản phẩm mới thêm</div>
                    <div className='mt-5'>
                      <div className='mt-4 flex'>
                        <div className='flex-shrink-0'>
                          <img
                            alt='product'
                            src='https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lkt0u035n3kxc7_tn'
                            className='w-11 h-11 object-cover'
                          />
                        </div>
                        <div className='flex-grow ml-2 overflow-hidden'>
                          <div className='truncate'>
                            Tai Nghe Monster XKT06 Kết Nối Âm Thanh HIFI Giảm Tiếng Ồn Chất Lượng Cao Bluetooth 5.2
                          </div>
                        </div>
                        <div className='ml-2 flex-shrink-0'>
                          <span className='text-orange'>₫499.000</span>
                        </div>
                      </div>
                      <div className='flex mt-6 items-center justify-between'>
                        <div className='capitalize text-xs text-gray-600'>Thêm Hàng Vào Giỏ</div>
                        <div className='capitalize bg-orange hover:bg-opacity-90 px-4 py-2 rounded-sm text-white cursor-pointer'>
                          Xem giỏ hàng
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            >
              <Link to={path.cart}>
                <Cart />
              </Link>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
