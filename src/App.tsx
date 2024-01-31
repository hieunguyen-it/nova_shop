import useRouteElements from './useRouteElements'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElements = useRouteElements()

  return (
    <HelmetProvider>
      {routeElements}
      <ToastContainer />
    </HelmetProvider>
  )
}

export default App
