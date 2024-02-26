import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import { HStack } from '@chakra-ui/react'

const Homepage = () => {
  return (
    <HStack>
        <Sidebar/>
        <Dashboard/>
    </HStack>
  )
}

export default Homepage