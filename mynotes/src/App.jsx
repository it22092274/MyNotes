import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuAppBar from './components/NavigationBar'
import TemporaryDrawer from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MenuAppBar />     
      {/*<TemporaryDrawer />*/}
    </div>
  )
}

export default App
