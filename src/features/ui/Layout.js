import { Outlet, Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  ToastContainer,
  Toast,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "lodash";
import { clearAlert } from "./uiSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.ui.alert);
  console.log("alert => ", alert);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Code Sass POS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/products">
                  All Products
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/new">
                  Create Product
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/cart">
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/orders">
                Orders
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-2">
        <Outlet />
      </Container>
      <ToastContainer
        position="bottom-end"
        containerPosition="fixed"
        className="p-3"
      >
        <Toast
          show={!!alert}
          delay={3000}
          autohide
          bg={alert?.type}
          onClose={() => dispatch(clearAlert())}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{capitalize(alert?.type)}</strong>
          </Toast.Header>
          <Toast.Body>{alert?.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default Layout;
