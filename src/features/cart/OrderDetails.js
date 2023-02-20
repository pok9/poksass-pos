import QuantityControl from "features/products/QuantityControl";
import { sumBy } from "lodash";
import { Badge, ListGroup, Stack } from "react-bootstrap";
import "./OrderDetails.css";

const OrderDetails = ({ products, editable = true }) => {
  const totalPrice = sumBy(
    products,
    (product) => product.quantity * product.price
  );
  return (
    <>
      <ListGroup as="ol" numbered variant="flush">
        {products.map((product) => (
          <ListGroup.Item
            key={product.id}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <img
              src={`${process.env.REACT_APP_API_URL}/${product.image}`}
              className="ms-2 order-details-image"
            ></img>
            <div className="ms-2 flex-grow-1">
              <div className="fw-bold">{product.name}</div>
              {editable ? (
                <QuantityControl product={product} />
              ) : (
                <Stack direction="horizontal">
                  <span>Qty:</span>
                  <Badge className="ms-2">{product.quantity}</Badge>
                  <span className="ms-2">Price:</span>
                  <Badge className="ms-2">
                    {product.price.toLocaleString()}
                  </Badge>
                </Stack>
              )}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
      <Stack direction="horizontal">
        <div>Total</div>
        <div className="ms-auto">{totalPrice.toLocaleString()}</div>
      </Stack>
    </>
  );
};

export default OrderDetails;
