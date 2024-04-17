import { Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SIDEBAR>
      <Text>Services</Text>
      <Text>Home</Text>
      <Text>Self-service</Text>
      <Text>Leave Tracker</Text>
      <Text>Attendance</Text>
      <Text>Performance</Text>
      <Text>More</Text>
      <Text mt={"50px"}>Reports</Text>
    </SIDEBAR>
  );
};

export default Sidebar;

const SIDEBAR = styled.div`
  display: flex;
  flex-direction: column;
  width: 9%;
  background-color: #1b1a47;
  text-align: center;
  color: #bcb9b9;
  position: sticky;
  top: 0;
  max-height: 100vh;
  overflow-y: auto;
  p {
    padding: 24px 10px 24.3px 10px;
  }
`;
