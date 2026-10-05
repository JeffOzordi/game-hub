import NavBar from '@/components/NavBar'
import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
        <NavBar />
        <Box padding={5}>
            <Outlet />   
        </Box>
    </>
  )
}

export default layout