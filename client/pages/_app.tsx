import '../app/styles/globals.scss';
import type { AppProps } from 'next/app';

// import redux toolkit
import { Provider } from 'react-redux';
import { store } from 'app/redux/store';

// import redux persist
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
let persistor = persistStore(store);

import Layout from '@/layout/Main/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
export default MyApp
