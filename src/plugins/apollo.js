import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-boost";

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

const onLogout = async (apollo) => {
  if (typeof window.localStorage !== "undefined") {
    window.localStorage.removeItem(AUTH_TOKEN);
  }
  await resetApollo(apollo)
}

const httpLink = createHttpLink({
  uri: "https://api.supercrm.ezdevs.com.br/",
});

const authLink = new ApolloLink((operation, forward) => {
  const { headers } = operation.getContext();
  operation.setContext({
    headers: {
      ...headers,
      Authorization: `Bearer ${window.localStorage.getItem(AUTH_TOKEN)}`,
    },
  });
  return forward(operation);
});

export { AUTH_TOKEN, onLogin, onLogout };

export const apollo = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
