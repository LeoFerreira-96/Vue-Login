import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const AUTH_TOKEN = "apollo-token";

const resetApollo = async (apollo) => {
  try {
    await apollo.resetStore();
  } catch (e) {
    console.log("Erro reset Cache", e.message);
  }
};
const onLogin = async (apollo, token) => {
  if (typeof window.localStorage !== "undefined" && token) {
    window.localStorage.setItem(AUTH_TOKEN, token);
  }
  await resetApollo(apollo);
};

const httpLink = createHttpLink({
  uri: "https://api.supercrm.ezdevs.com.br/",
});

export { AUTH_TOKEN, onLogin };

export const apollo = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
