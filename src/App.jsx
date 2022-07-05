import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout"
// import Gist from "./pages/Gist"
import Home from "./pages/Home"
import Proyectos from "./pages/Proyectos"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="proyectos" element={<Proyectos />} />
          {/* <Route path="gist" element={<Gist />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
