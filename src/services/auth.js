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
  const { login } = response.data;
  onLogin(apollo, login.token);
  return login;
};

const activity = async () => {
  const response = await apollo.query({
    query: gql`
      query Activity {
        activity {
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
  });
  return response.data.activity;
};

export default {
  login,
  activity,
};
