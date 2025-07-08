import '../styles/globals.css';
import { AthenaProvider } from '../context/AthenaContext';

function MyApp({ Component, pageProps }) {
  return (
    <AthenaProvider>
      <Component {...pageProps} />
    </AthenaProvider>
  );
}

export default MyApp;