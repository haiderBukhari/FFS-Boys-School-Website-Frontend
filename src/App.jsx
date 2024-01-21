import './App.css'
import Routers from './router/routes'
import HomeNotificationDialog from './components/HomeDialog'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

function App() {
  const [notifications, setNotification]  = useState(true);
  const location = useLocation();
  return (
    <>
    <Routers />
    {location.pathname === '/' && <HomeNotificationDialog open={notifications} setOpen={setNotification}/>}
    </>
  )
}

export default App
