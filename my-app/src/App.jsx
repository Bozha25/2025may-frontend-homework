import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import './App.css'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/" element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App
