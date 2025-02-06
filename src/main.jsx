import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { UserDataProvider } from "./context/UserDataContext.jsx";
import { SendEmailProvider } from "./context/SendEmailContext.jsx";
import { ForgetPasswordProvider } from "./context/forgetPasswordContext.jsx";
import { ResetPasswordProvider } from "./context/ResetPasswordContext.jsx";
import { UserDashboardProvider } from "./context/UserDashboardContext.jsx";
createRoot(document.getElementById("root")).render(
  <ResetPasswordProvider>
    <ForgetPasswordProvider>
      <UserDashboardProvider>
        <UserDataProvider>
          <UserProvider>
            <SendEmailProvider>
              <StrictMode>
                <App />
              </StrictMode>
            </SendEmailProvider>
          </UserProvider>
        </UserDataProvider>
      </UserDashboardProvider>
    </ForgetPasswordProvider>
  </ResetPasswordProvider>,
);
