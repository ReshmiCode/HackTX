import { List, Card, Button } from "antd";
import { useQuery } from "@apollo/client";
import { ITEMS_QUERY } from "../queries";
const { Meta } = Card;

const ItemsList = () => {
  const { data } = useQuery(ITEMS_QUERY);

  return (
    <List
      grid={{ gutter: 26, column: 4 }}
      itemLayout="vertical"
      dataSource={data ? data.items : []}
      renderItem={(item) => (
        <Card
          hoverable
          style={{ width: 260 }}
          cover={<img alt="example" src={item.image} />}
        >
          <Meta
            title={`${item.title} - $${item.price}`}
            description={
              <>
                {item.description} <br />
                <Button type="primary" style={{ marginTop: "10px" }}>
                  Purchase
                </Button>
              </>
            }
          />
        </Card>
      )}
    />
  );
};

export default ItemsList;
