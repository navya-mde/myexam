import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./components/layout";
import About from "./components/About";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";


import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Navbar" element={<Navbar />} />

          <Route path="*" element={< About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>


  )
}
export default App;
