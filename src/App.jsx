import { useState, useEffect } from "react";
import './App.css';
import {
  Authenticator,
  Button,
  Heading,
  Flex,
  Image,
  Text,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import StatisticsCard from "./Card";
import StatisticsCards from "./Cards";

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export default function App() {

  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const renderCR = () => {
    return <StatisticsCard/>;
  };

  const renderH = () => {
    return <StatisticsCards/>;
  };

  const renderS = () => {
    return ;
  };

  return (
    
    <Flex
      className="App"
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding="2rem"
    >
      <Image
        src="/logotext.png" 
        alt="TripleS Application Logo"
        style={{
          width: "40%", 
          height: "auto",
          marginBottom: "1rem",
          display: "block", 
          marginLeft: "auto", 
          marginRight: "auto", 
        }}
      />

    <Box sx={{ display: 'flex', marginLeft: '-145px' }}>
      <Tabs
        orientation="vertical"
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Vertical Tabs"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Current Run" />
        <Tab label="History" />
        <Tab label="Settings" />
      </Tabs>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {selectedTab === 0 && renderCR()}
        {selectedTab === 1 && renderH()}
        {selectedTab === 2 && renderS()}
      </Box>
    </Box>  
    
      <Authenticator>
        {({ signOut }) => (
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Heading level={1}>Welcome to TripleS!</Heading>

            <Button onClick={signOut} style={{ marginTop: "2rem" }}>
              Sign Out
            </Button>
          </Flex>
        )}
      </Authenticator>
    </Flex>
  );
}