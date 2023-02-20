import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCustomerInfo } from "./cartSlice";

const CustomerInfo = () => {
  const dispatch = useDispatch();
  const customerInfo = useSelector((state) => state.cart.customerInfo);

  const setField = (field, e) =>
    dispatch(setCustomerInfo({ field, value: e.target.value }));

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={customerInfo?.name ?? ""}
          placeholder="Enter name"
          onChange={(e) => setField("name", e)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={customerInfo?.email ?? ""}
          placeholder="Enter email"
          onChange={(e) => setField("email", e)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tel</Form.Label>
        <Form.Control
          value={customerInfo?.tel ?? ""}
          placeholder="Enter tel"
          onChange={(e) => setField("tel", e)}
        />
      </Form.Group>
    </Form>
  );
};

export default CustomerInfo;
