import { Footer, RegisterHeader } from '@/components'

interface RegisterLayoutProps {
  children: React.ReactNode
}

export const RegisterLayout = ({ children }: RegisterLayoutProps) => {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
