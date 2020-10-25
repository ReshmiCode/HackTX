import { List, Card, Avatar } from "antd";
import { useQuery } from "@apollo/client";
import { ITEMS_QUERY } from "../queries";

const ItemsList = () => {
  const { loading, error, data } = useQuery(ITEMS_QUERY);

  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      itemLayout="vertical"
      dataSource={data.items}
      renderItem={(item) => (
        <List.Item
          style={{
            margin: "20px",
            border: "1px solid #000",
            borderRadius: "19px",
            padding: "15px",
            minHeight: "170px",
          }}
          key={item.title}
        >
          <List.Item.Meta
            avatar={<Avatar size={64} src={item.image} />}
            title={`${item.title} - $${item.price}`}
          />
          {item.description}
        </List.Item>
      )}
    />
  );
};

export default ItemsList;
