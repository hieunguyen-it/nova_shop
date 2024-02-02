import { CartHeader, Footer } from '@/components'
interface Props {
  children?: React.ReactNode
}
export const CartLayout = ({ children }: Props) => {
  return (
    <div>
      <CartHeader />
      {children}
      <Footer />
    </div>
  )
}
