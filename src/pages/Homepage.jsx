import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import styled from 'styled-components'

const Homepage = () => {
  return (
    <HOMEPAGE>
        <Sidebar/>
        <Dashboard/>
    </HOMEPAGE>
  )
}

export default Homepage

const HOMEPAGE=styled.div`
  display: flex;
`