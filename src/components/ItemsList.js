import { List, Card, Avatar } from "antd";
import { useQuery } from "@apollo/client";
import { ITEMS_QUERY } from "../queries";
const { Meta } = Card;

const ItemsList = () => {
  const { data } = useQuery(ITEMS_QUERY);

  return (
    <List
      grid={{ gutter: 26, column: 4 }}
      itemLayout="vertical"
      dataSource={data.items}
      renderItem={(item) => (
        <Card
          hoverable
          style={{ width: 260 }}
          cover={<img alt="example" src={item.image} />}
        >
          <Meta
            title={`${item.title} - $${item.price}`}
            description={item.description}
          />
        </Card>
      )}
    />
  );
};

export default ItemsList;
