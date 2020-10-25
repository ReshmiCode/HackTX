import { Layout, List, Card } from "antd";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import NavBar from "./components/NavBar";
import ItemsList from "./components/ItemsList";
import "./App.css";
const { Content } = Layout;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://amazing-lamb-36.hasura.app/v1/graphql",
  }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <NavBar />
        <Content>
          <h1>Your Profile:</h1>
          <ItemsList />
        </Content>
      </Layout>
    </ApolloProvider>
  );
};

export default App;
