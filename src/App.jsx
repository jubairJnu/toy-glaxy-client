import { Outlet } from "react-router-dom"
import Header from "./Pages/Shared/Header/Header"
import Footer from "./Pages/Footer/Footer"


function App() {


  return (
    <>
     <Header></Header>
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  )
}

export default App
