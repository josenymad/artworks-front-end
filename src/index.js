import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Amplify } from "aws-amplify";
import { Authenticator, useTheme, View, Image } from "@aws-amplify/ui-react";
import App from "./components/App";
import certagsLogo from "./images/certags-web.png";
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
      redirectSignIn: "https://certags-artwork-portal.onrender.com/",
      responseType: "code",
    },
  },
});

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image alt="Amplify logo" src={certagsLogo} />
      </View>
    );
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Authenticator hideSignUp components={components}>
        {({ signOut }) => <App signOut={signOut} />}
      </Authenticator>
    </BrowserRouter>
  </React.StrictMode>,
);
