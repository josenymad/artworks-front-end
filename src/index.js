import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import App from "./components/App";
// eslint-disable-next-line import/no-unresolved
import "@aws-amplify/ui-react/styles.css";

const {
  REACT_APP_USER_POOL_ID,
  REACT_APP_CLIENT_ID,
  REACT_APP_COGNITO_DOMAIN,
  REACT_APP_REGION,
} = process.env;

Amplify.configure({
  Auth: {
    region: REACT_APP_REGION,
    userPoolId: REACT_APP_USER_POOL_ID,
    userPoolWebClientId: REACT_APP_CLIENT_ID,
    mandatorySignIn: true,
    oauth: {
      domain: REACT_APP_COGNITO_DOMAIN,
      scope: ["email", "openid"],
      redirectSignIn: "http://localhost:3000",
      responseType: "code",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Authenticator>
    {({ signOut }) => (
      <React.StrictMode>
        <BrowserRouter>
          <App signOut={signOut} />
        </BrowserRouter>
      </React.StrictMode>
    )}
  </Authenticator>,
);
