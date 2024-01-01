import { Outlet } from "react-router-dom";
import Header from "./components/Header";


const Layout = () => {
  return (
    <div className="d-flex flex-column flex-grow-1">
      <Header />
      <div className="flex-grow-1 overflow-y-auto">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
