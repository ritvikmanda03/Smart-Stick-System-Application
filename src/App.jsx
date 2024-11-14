import { useState, useEffect } from "react";
import {
  Authenticator,
  ThemeProvider,
  Button,
  Heading,
  Flex,
  Image,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import './App.css';
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

const customTheme = {
  name: 'custom-luxe-theme',
  tokens: {
    colors: {
      brand: {
        primary: '#72383D',  
        secondary: '#AC9C8D', 
      },
      background: {
        primary: '#EFE9E1', 
      },
      border: {
        primary: '#D9D9D9', 
      },
      text: {
        primary: '#322D29',
        secondary: '#D1C7BD', 
      },
    },
    fontSizes: {
      default: '16px', 
    },
    radii: {
      small: '4px', 
    },
  },
};

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export default function App() {
  return (
    <Flex
      className="App"
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding="2rem"
    >
      {}
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
      <ThemeProvider theme={customTheme}>
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
      </ThemeProvider>
    </Flex>
  );
}