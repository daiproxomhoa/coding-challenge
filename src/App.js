import { Container } from "@mui/material";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SnackbarCustom from "./components/SnackbarCustom";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact>
            <ListPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Container>
      <SnackbarCustom />
    </>
  );
}

export default App;
