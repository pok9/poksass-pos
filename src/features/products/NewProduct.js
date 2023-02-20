import { useNavigate } from "react-router-dom";
import ProductForm from "./ProductForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAlert } from "features/ui/uiSlice";

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createProduct = async (product) => {
    try {
      await axios.post("/products", product, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/products");
      dispatch(
        setAlert({
          type: "success",
          message: "The product has already created.",
        })
      );
    } catch (error) {
      dispatch(setAlert({type: 'danger',message: error.respinse.data.error}))
    }
  };
  return (
    <>
      <h1 className="text-center fs-3">Create Product</h1>
      <ProductForm onSubmit={createProduct}></ProductForm>
    </>
  );
};

export default NewProduct;
