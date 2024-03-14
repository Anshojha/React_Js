import './App.css'
import Login from './componenet/Login'
import Profile from './componenet/Profile'
import UserContextProvider from './context/UserContextProvider'
function App() {


  return (
    <UserContextProvider>
      <h2>Hello , Aliens </h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
