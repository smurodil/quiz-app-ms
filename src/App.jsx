import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import { Home, Error, Quiz,  FinishedScreen } from './pages'
import { loader as HomeLoader } from "./components/header";



function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Home/>,
          loader: HomeLoader,
        },
        {
          path: '/:type',
          element: <Quiz/>,
          errorElement: <Error/>,
        },
        {
          path: '/finished',
          element: <FinishedScreen/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />
}

export default App