import "../styles/globals.css";

import { MaintenanceProvider } from "../context/MaintenanceContext";

export default function App({ Component, pageProps }) {
  return (
    <MaintenanceProvider>
      <Component {...pageProps} />
    </MaintenanceProvider>
  );
}
