import React from "react";
import { classnames } from "tailwindcss-classnames";
import Header from "./components/Header";
import CampaignsList from "./components/CampaignsList";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalLoading from "./containers/GlobalLoading";
import CurrentUser from "./containers/CurrentUser";
import client from "./client";
import CampaignView from "./views/CampaignView";
import { toast } from "react-toastify";

toast.configure();

const styles = classnames("container", "mx-auto");

export default () => (
  <ApolloProvider client={client}>
    <GlobalLoading.Provider>
      <CurrentUser.Provider>
        <Router>
          <Header />
          <Switch>
            <Route path="/:id">
              <CampaignView />
            </Route>
            <Route path="/">
              <div className={styles}>
                <CampaignsList />
              </div>
            </Route>
          </Switch>
        </Router>
      </CurrentUser.Provider>
    </GlobalLoading.Provider>
  </ApolloProvider>
);
