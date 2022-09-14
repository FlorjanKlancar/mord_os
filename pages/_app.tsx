import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "../store";
import { Provider, useSelector } from "react-redux";
import { RootState } from "../model/storeModel";
import LoginPage from "../components/Login/LoginPage";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  if (!isLoggedIn) return <LoginPage />;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  );
}

function MyAppWithProvider({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MyApp Component={Component} pageProps={pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}

export default MyAppWithProvider;
