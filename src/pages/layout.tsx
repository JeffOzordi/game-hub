import NavBar from '@/components/NavBar'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
        <NavBar />
        <Outlet />   
    </>
  )
}

export default layout