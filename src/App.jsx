import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from './layout/LayoutDefault'
import Homepage from "./pages/Homepage"
import Blog from "./pages/Blog"
import AboutUs from "./pages/AboutUs"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/aboutus" element={<AboutUs />} />

          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
