import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage, AboutPage, LoginPage, NavBar } from "./components"

export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
        <NavBar/>
        <hr />
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
    </>
  )
}
