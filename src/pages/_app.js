import { store } from '@/components/redux/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
 
  return <Provider store={store}>
    {
      getLayout(<Component {...pageProps} />)
    }
  </Provider>
}