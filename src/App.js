import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import Search from "./screens/Search";
import Profile from "./screens/Profile";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://amazing-lamb-36.hasura.app/v1/graphql",
  }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/profile" exact component={Profile} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
