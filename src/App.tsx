import { RouterProvider } from "react-router-dom";
// import Router from "./router/Router";
import { Toaster } from "react-hot-toast";
import GlobalProvider from "./global/GlobalProvider";
import { Router } from "./router/Router";

const App = () => {
  return (
    <GlobalProvider>
      <RouterProvider router={Router} />
      <Toaster position="top-right" reverseOrder={false} />
    </GlobalProvider>
  );
};

export default App;
