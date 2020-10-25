import { Layout } from "antd";
import NavBar from "../components/NavBar";
import ItemsList from "../components/ItemsList";
const { Content } = Layout;

const Profile = () => {
  return (
    <Layout>
      <NavBar />
      <Content>
        <h1>Your Profile:</h1>
        <ItemsList />
      </Content>
    </Layout>
  );
};

export default Profile;
