import { useState } from "react";
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

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export default function App() {
  const [activeTab, setActiveTab] = useState("currentRun");

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

            <Flex direction="row" gap="1rem" marginTop="2rem">
              <Button
                variation="link"
                onClick={() => setActiveTab("currentRun")}
                className={activeTab === "currentRun" ? "active-tab" : "tab"}
              >
                Current Run
              </Button>
              <Button
                variation="link"
                onClick={() => setActiveTab("history")}
                className={activeTab === "history" ? "active-tab" : "tab"}
              >
                History
              </Button>
            </Flex>
            
            <Flex direction="column" alignItems="center" marginTop="2rem">
              {activeTab === "currentRun" && <Text>This is the Current Run tab content.</Text>}
              {activeTab === "history" && <Text>This is the History tab content.</Text>}
            </Flex>

            <Button onClick={signOut} style={{ marginTop: "2rem" }}>
              Sign Out
            </Button>
          </Flex>
        )}
      </Authenticator>
    </Flex>
  );
}
