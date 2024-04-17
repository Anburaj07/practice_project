import { Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HEADER>
        <Button color={"white"} backgroundColor={"#e95b6d"} borderRadius={"13px"}>Check-out</Button>
        <HStack>
            {/* <Text>💫</Text> */}
            <Button border={"none"}>💫</Button>
            <Button>Apply Leave</Button>
            <Button>Log Time</Button>
        </HStack>
    </HEADER>
  )
}

export default Header

const HEADER=styled.div`
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    width: 100%;
    border-bottom: 1px solid red;
    padding: 5px 10px 5px 10px;
    
    button{
        height: 25px;
        font-size: 14px;
        font-weight:normal
    }
    div{
        button{
            border: 1px solid #c0c0c0;
            background-color: white;
        }
    }
`