import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../ui"
import { MarvelPage, DcPage } from "../heroes"
import {LoginPage} from '../auth'
export const AppRouter = () => {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="marvel" element={<MarvelPage/>} ></Route>
          <Route path="dc" element={<DcPage/>} ></Route>
          <Route path="login" element={<LoginPage/>} ></Route>
          <Route path="/*" element={<Navigate to="/marvel"/>} ></Route>
      </Routes>
    </>
  )
}
