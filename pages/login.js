import React, { Fragment } from "react";
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import {
  HeaderMessage,
  FooterMessage,
} from "../components/Common/WelcomeMessage";

const login = () => {
  return (
    <Fragment>
      <HeaderMessage />

      <FooterMessage />
    </Fragment>
  );
};

export default login;
