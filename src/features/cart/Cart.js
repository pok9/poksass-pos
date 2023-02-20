import { isEmpty } from "lodash";
import { Accordion, ButtonGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import OrderDetails from "./OrderDetails";
import CustomerInfo from "./CustomerInfo";
import axios from "axios";
import { clear } from "./cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.products);
  const customerInfo = useSelector((state) => state.cart.customerInfo);
  const productItems = Object.values(products);

  const save = async () => {
    const payload = { ...customerInfo, products: productItems };
    await axios.post("/orders", payload);
    dispatch(clear());
    navigate("/products");
  };

  if (isEmpty(products)) return <p>Empty Cart</p>;
  return (
    <>
      <h1 className="text-center my-4">Order Summary</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Order Details</Accordion.Header>
          <Accordion.Body>
            <OrderDetails products={productItems} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Customer Info</Accordion.Header>
          <Accordion.Body>
            <CustomerInfo />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      <ButtonGroup>
        <Button onClick={save}>Save</Button>
        <Button variant="danger" onClick={() => dispatch(clear())}>
          Clear
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Cart;
