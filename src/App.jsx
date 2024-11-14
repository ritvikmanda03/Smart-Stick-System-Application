import { useState, useEffect } from "react";
import './App.css';
import {
  Authenticator,
  ThemeProvider,
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

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

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
      <Authenticator>
        {({ signOut }) => (
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Heading level={1}>Welcome to TripleS!</Heading>
            <Button onClick={signOut} style={{ marginTop: "2rem" }}>
              Sign Out
            </Button>
            <Text style={{ marginTop: "2rem", textAlign: "center" }}>
              The TripleS application is brought to you by a dream team of tech-savvy masterminds and caffeine-fueled innovation: Ritvik Manda, the Lacrosse-loving logic leader; Pranav Nair, the hardware wizard with a knack for precision; and Shivam Patel, the cloud enthusiast always looking to optimize. Every morning, before diving into code and circuits, they kickstart their day with a dab or two, because why not? With their unique blend of creativity, quirky brilliance, and a dash of dabbing, they’re here to bring you an experience that’s as smooth as it is smart. So buckle up, because the future of performance tracking is here!
            </Text>
          </Flex>
        )}
      </Authenticator>
    </Flex>
  );
}
