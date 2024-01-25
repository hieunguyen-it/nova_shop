import { ArrowRightFilled, Category, Fillter, Star } from '@/assets'
import { Button, Input } from '@/components'
import { path } from '@/constants'
import { Link } from 'react-router-dom'

export const AsideFilter = () => {
  return (
    <div className='py-4'>
      <Link to={path.home} className='flex items-center font-bold'>
        <Category />
        Tất cả Danh mục
      </Link>
      <div className='bg-gray-300 h-[1px] my-4' />
      <ul>
        <li className='py-2 pl-2'>
          <Link to={path.home} className='relative px-2 text-orange font-semibold'>
            <ArrowRightFilled />
            Thời trang nam
          </Link>
        </li>
        <li className='py-2 pl-2'>
          <Link to={path.home} className='relative px-2'>
            Điện thoại
          </Link>
        </li>
      </ul>
      <Link to={path.home} className='flex items-center font-bold mt-4 uppercase'>
        <Fillter />
        Bộ lọc tìm kiếm
      </Link>
      <div className='bg-gray-300 h-[1px] my-4' />
      <div className='my-5'>
        <div>Khoảng giá</div>
        <form className='mt-2'>
          <div className='flex items-start'>
            <Input
              type='text'
              className='grow'
              name='form'
              placeholder='₫ TỪ'
              classNameInput='p-1 rounded-sm w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
            />
            <div className='mx-2 mt-2 shrink-0'>-</div>
            <Input
              type='text'
              className='grow'
              name='form'
              placeholder='₫ ĐẾN'
              classNameInput='p-1 rounded-sm w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
            />
          </div>
          {/* <div className='mt-1 min-h-[1.25rem] text-center text-sm text-red-600'>123</div> */}
          <Button className='flex w-full rounded-sm items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:bg-orange/80'>
            Áp dụng
          </Button>
        </form>
      </div>
      <div className='bg-gray-300 h-[1px] my-4' />
      <div className='text-sm'>Đánh giá</div>
      <ul className='my-3'>
        <li className='py-1 pl-2'>
          <Link to={path.home} className='flex items-center text-sm'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <Star key={index} />
              ))}
            <span>Trở lên</span>
          </Link>
        </li>
      </ul>
      <div className='bg-gray-300 h-[1px] my-4' />
      <Button className='flex w-full rounded-sm items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:bg-orange/80'>
        Xóa tất cả
      </Button>
    </div>
  )
}
