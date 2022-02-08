import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProvider } from '../data/context/AppContext'
import { AuthProvider } from '../data/context/AuthContext'
import Layout from '../components/template/Layout'

function MyApp({ Component, pageProps }) {
  return (
    // <Layout titulo="Página Inicial" subtitulo="Estamos construindo um template Admin!">
    //   <h3>Conteúdo!!!!</h3>
    // </Layout>
    <AuthProvider>
       <AppProvider>
         <Component {...pageProps} />
       </AppProvider>
    </AuthProvider>
  )
}

export default MyApp
