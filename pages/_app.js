// import App from 'next/app'
// ^ for getInitialProps(ctx)

import './all.scss'
import 'animate.css/animate.compat.css'

import { Provider } from 'react-redux'
import configureAppStore from '../redux/store'
const store = configureAppStore()

export default function DarkSideApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}