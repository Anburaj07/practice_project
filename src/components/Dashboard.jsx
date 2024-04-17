import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const Dashboard = () => {
  return (
    <DASHBOARD>
      <Header/>
    </DASHBOARD>
  )
}

export default Dashboard
const DASHBOARD=styled.div`
  border: 1px solid gray;
  width: 91%;
`