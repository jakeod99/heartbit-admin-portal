import { ApolloClient, InMemoryCache, useLazyQuery, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://ritheartbit.herokuapp.com/graphql",
    cache: new InMemoryCache(),
});

export default client;