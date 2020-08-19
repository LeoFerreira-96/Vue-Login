import { apollo, onLogin } from "../plugins/apollo";
import gql from "graphql-tag";

const login = async (variable) => {
  const response = await apollo.query({
    query: gql`
      query Login($email: String!, $password: String!) {
        Login(email: $email, password: $password) {
          token
          refreshToken
          user {
            name
            email
            firstLogin
            role {
              key
              permissions {
                key
              }
            }
          }
        }
      }
    `,
    variables: {
      email: variable.email,
      password: variable.password,
    },
  });
  const _token = response.data.Login.token;
  // console.log(response.data.Login.token);
  await onLogin(apollo, _token);
  return login;
};

const user = async (options = {}) => {
  const response = await apollo.query({
    query: gql`
      query User {
        user {
          //
        }
      }
    `,
    ...options,
  });
  return response.data.user;
};

const activity = async () => {
  const response = await apollo.query({
    query: gql`
      query Activity {
        activity {
          //
        }
      }
    `,
  });
  return response.data.activity;
};

export default {
  login,
  activity,
  user,
};
