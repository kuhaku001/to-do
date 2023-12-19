// Dependences
import { Route, Routes } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";

// Pages
import TaskPage from "./pages/TaskPage";
import NoFoundPage from "./pages/NoFoundPage";

// Styles 
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<TaskPage/>} />
        <Route path='*' element={<NoFoundPage />} />
      </Routes>
    </>
  )
}

export default App