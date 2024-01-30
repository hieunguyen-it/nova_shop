import productApi from '@/api/product.api'
import { AddCart, ChevronLeft, ChevronRight, Minus, Plus } from '@/assets'
// Chống việc tấn công xss dùng DOMPurify - loại bỏ mã javascript khi hiển thị mã HTML
import DOMPurify from 'dompurify'
import { ProductRating } from '@/components'
import InputNumber from '@/components/InputNumber'
import { formatCurrency, formatNumberToSocialStyle, getIdFromNameId, rateSale } from '@/utils'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { Product as ProductType } from '@/types'

export const ProductDetail = () => {
  const { nameId } = useParams()
  const id = getIdFromNameId(nameId as string)
  const { data: productDetailData } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productApi.getProductDetail(id)
  })
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5])
  const [activeImage, setActiveImage] = useState('')
  const product = productDetailData?.data.data

  const currentImages = useMemo(
    () => (product ? product.images.slice(...currentIndexImages) : []),
    [currentIndexImages, product]
  )

  useEffect(() => {
    if (product && product.images.length > 0) {
      setActiveImage(product.images[0])
    }
  }, [product])

  const next = () => {
    if (currentIndexImages[1] < (product as ProductType).images.length) {
      setCurrentIndexImages((prev) => [prev[0] + 1, prev[1] + 1])
    }
  }

  const prev = () => {
    if (currentIndexImages[0] > 0) {
      setCurrentIndexImages((prev) => [prev[0] - 1, prev[1] - 1])
    }
  }

  const chooseActiveImage = (img: string) => {
    setActiveImage(img)
  }

  if (!product) return null
  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='bg-white p-4 shadow'>
          <div className='grid grid-cols-12 gap-9'>
            <div className='col-span-5'>
              <div className='relative w-full pt-[100%] shadow'>
                <img
                  src={activeImage}
                  alt={product.name}
                  className='absolute top-0 left-0 bg-white w-full h-full object-cover'
                />
              </div>
              <div className='relative mt-4 grid grid-cols-5 gap-1'>
                <button
                  className='absolute top-1/2 left-0 z-10 -translate-y-1/2 text-white h-9 w-5 bg-black/20'
                  onClick={prev}
                >
                  <ChevronLeft className='h-5 w-5' />
                </button>
                {currentImages.map((img) => {
                  const active = img === activeImage
                  return (
                    <div className='relative w-full pt-[100%]' key={img} onMouseEnter={() => chooseActiveImage(img)}>
                      <img
                        src={img}
                        alt={img}
                        className='absolute top-0 left-0 cursor-pointer bg-white w-full h-full object-cover'
                      />
                      {active && <div className='absolute inset-0 border-2 border-orange' />}
                    </div>
                  )
                })}
                <button
                  className='absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'
                  onClick={next}
                >
                  <ChevronRight className='h-5 w-5' />
                </button>
              </div>
            </div>
            <div className='col-span-7'>
              <h1 className='text-xl font-medium uppercase'>{product.name}</h1>
              <div className='mt-8 flex items-center'>
                <div className='flex items-center'>
                  <span className='mr-1 border-b border-orange text-orange'>{product.rating}</span>
                  <ProductRating
                    rating={product.rating}
                    activeClassname='fill-orange text-orange h-4 w-4'
                    nonActiveClassname='fill-gray-300 text-gray-300 h-4 w-4'
                  />
                </div>
                <div className='mx-4 h-4 w-[1px] bg-gray-300'></div>
                <div>
                  <span>{formatNumberToSocialStyle(product.sold)}</span>
                  <span className='ml-1 text-gray-500'>Đã bán</span>
                </div>
              </div>
              <div className='mt-8 flex items-center bg-gray-50 px-5 py-4'>
                <div className='text-gray-500 line-through'>₫{formatCurrency(product.price_before_discount)}</div>
                <div className='ml-3 text-3xl font-medium text-orange'>₫{formatCurrency(product.price)}</div>
                <div className='ml-4 rounded-sm bg-orange px-1 py-[2px] text-xs font-semibold uppercase text-white'>
                  {rateSale(product.price_before_discount, product.price)} giảm
                </div>
              </div>
              <div className='mt-8 flex items-center'>
                <div className='capitalize text-gray-500'>Số lượng</div>
                <div className='ml-10 flex items-center'>
                  <button className='flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600'>
                    <Minus />
                  </button>
                  <InputNumber
                    className=''
                    value={1}
                    classNameError='hidden'
                    classNameInput='h-8 w-14 border-t border-b border-gray-300 p-1 text-center outline-none'
                  />
                  <button className='flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600'>
                    <Plus />
                  </button>
                </div>
                <div className='ml-6 text-sm text-gray-500'>{product.quantity} sản phẩm có sẵn</div>
              </div>
              <div className='mt-8 flex items-center'>
                <button
                  onClick={() => {
                    console.log('add to cart')
                  }}
                  className='flex h-12 items-center justify-center rounded-sm border border-orange bg-orange/10 px-5 capitalize text-orange shadow-sm hover:bg-orange/5'
                >
                  <AddCart />
                  Thêm vào giỏ hàng
                </button>
                <button
                  onClick={() => {}}
                  className='fkex ml-4 h-12 min-w-[5rem] items-center justify-center rounded-sm bg-orange px-5 capitalize text-white shadow-sm outline-none hover:bg-orange/90'
                >
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <div className='container'>
          <div className=' bg-white p-4 shadow'>
            <div className='rounded bg-gray-50 p-4 text-lg capitalize text-slate-700'>Mô tả sản phẩm</div>
            <div className='mx-4 mt-12 mb-4 text-sm leading-loose'>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product.description)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
