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
      query ($ActivityTableInput: ActivityTableInput!) {
      activitiesByCompanyId(input: $ActivityTableInput) {
        data {
          id
          type
          subject
          note
          datetime
          duration
          situation
          user {
            id
            name
          }
          organization {
            id
            name
          }
          people {
            id
            name
          }
          opportunity {
            id
            title
          }
          googleEventId
        }
        total
        page
        perPage
      }
    }
    `,
  });
  return response.data.activitiesByCompanyId;
};

export default {
  login,
  activity,
  user,
};


