import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { AuthProvider } from '../context/AuthContext'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
      <AuthProvider>
        <ThemeProvider attribute='class'>
          <Layout>
           <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
  )
}

export default MyApp
