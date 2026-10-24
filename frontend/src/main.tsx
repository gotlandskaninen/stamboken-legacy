import * as React from "react";
import * as ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { WithUserContext } from "@app/user_context";
import { WithDataContext } from "@app/data_context";
import { WithMessageContext } from "@app/message_context";
import { WithBreedingContext } from "@app/breeding_context";
import { Navigation } from "@app/navigation";
import { StylesProvider } from "@material-ui/core";

const Main = (
  <>
    <StylesProvider injectFirst>
      <CssBaseline />
      <BrowserRouter>
        <WithDataContext>
          <WithUserContext>
            <WithBreedingContext>
              <SnackbarProvider maxSnack={3} autoHideDuration={10000}>
                <WithMessageContext>
                  <Navigation />
                </WithMessageContext>
              </SnackbarProvider>
            </WithBreedingContext>
          </WithUserContext>
        </WithDataContext>
      </BrowserRouter>
    </StylesProvider>
  </>
);

ReactDOM.render(Main, document.querySelector("#root"));
