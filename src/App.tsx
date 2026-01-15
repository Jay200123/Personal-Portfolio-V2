import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import { MainLayout } from "./@layouts"
import { Portfolio } from "./@pages"

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<MainLayout />}>
          <Route index element={<Portfolio />} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={Router}></RouterProvider>
  )
}

export default App
