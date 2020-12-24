/* eslint-disable import/prefer-default-export */
/* eslint-disable eqeqeq */
/* eslint-disable quote-props */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable object-shorthand */
import axios from "axios";

const baseURL = "https://plkeilhiid.execute-api.us-east-1.amazonaws.com/ms_receiver";

const JwtToken = JSON.parse(localStorage.getItem('jwtReceiverToken'));

let token;
if (JwtToken == null || JwtToken == '') {
  token = null;
} else {
  token = JwtToken.accessToken.jwtToken;
}

const user = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": token,
  },
});

export {
  user,
};
