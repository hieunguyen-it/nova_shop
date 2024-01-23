import RegisterHeader from 'src/components/RegisterHeader'
import Footer from 'src/components/Footer'

interface RegisterLayoutProps {
  children: React.ReactNode
}

export default function RegisterLayout({ children }: RegisterLayoutProps) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
