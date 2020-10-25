import { Layout } from "antd";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import NavBar from "./components/NavBar";
import Search from "./Search";
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
  return <Search />;
};

export default App;
