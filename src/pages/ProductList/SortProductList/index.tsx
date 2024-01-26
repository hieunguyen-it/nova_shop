import { ChevronLeft, ChevronRight } from '@/assets'

export const SortProductList = () => {
  return (
    <div className='bg-gray-300/40 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center flex-wrap gap-2'>
          <div>Sắp xếp theo</div>
          <button className='h-8 px-4 rounded-sm capitalize bg-orange text-sm text-white hover:bg-orange/80 text-center'>
            Phổ biến
          </button>
          <button className='h-8 px-4 rounded-sm capitalize bg-white text-sm text-black hover:bg-slate-100 text-center'>
            Mới nhất
          </button>
          <button className='h-8 px-4 rounded-sm capitalize bg-white text-sm text-black hover:bg-slate-100 text-center'>
            Bán chạy
          </button>
          <select
            className='h-8 rounded-sm capitalize border-r-8 border-transparent text-black text-left px-4 text-sm outline-none'
            defaultValue=''
          >
            <option value='' disabled>
              Giá
            </option>
            <option value='price:asc'>Giá: thấp đến cao</option>
            <option value='price:dsc'>Giá: cao đến thấp</option>
          </select>
        </div>
        <div className='flex items-center'>
          <div>
            <span className='text-orange'>1</span>
            <span>/2</span>
          </div>
          <div className='ml-2'>
            <button className='px-3 h-8 rounded-tl-sm rounded-bl-sm bg-white/60 hover:bg-slate-100 cursor-not-allowed shadow'>
              <ChevronLeft />
            </button>
            <button className='px-3 h-8 rounded-tr-sm rounded-br-sm bg-white hover:bg-slate-100 shadow'>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
