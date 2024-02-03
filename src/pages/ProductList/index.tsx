import { useQuery } from '@tanstack/react-query'
import { AsideFilter } from './components/AsideFilter'
import { Product } from './components/Product'
import { SortProductList } from './components/SortProductList'
import { useQueryConfig } from '@/hooks'
import productApi from '@/api/product.api'
import { Pagination } from '@/components'
import { ProductListConfig } from '@/types'
import categoryApi from '@/api/category.api'
import { Helmet } from 'react-helmet-async'

const ProductList = () => {
  const queryConfig = useQueryConfig()

  const { data: productsData } = useQuery({
    queryKey: ['product', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  const { data: categoriesData } = useQuery({
    queryKey: ['category'],
    queryFn: () => {
      return categoryApi.getCategories()
    }
  })
  return (
    <div className='bg-gray-200 py-6'>
      <Helmet>
        <title>Trang chủ | Shopee Clone</title>
        <meta name='description' content='Trang chủ dự án Shopee Clone' />
      </Helmet>
      <div className='container'>
        {productsData && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <AsideFilter queryConfig={queryConfig} categories={categoriesData?.data.data || []} />
            </div>
            <div className='col-span-9'>
              <SortProductList pageSize={productsData.data.data.pagination.page_size} queryConfig={queryConfig} />
              <div className='mt-6 grid gird-cols-2 md:gird-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
                {productsData.data.data.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
              <Pagination pageSize={productsData.data.data.pagination.page_size} queryConfig={queryConfig} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
