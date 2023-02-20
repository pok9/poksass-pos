import { useState } from "react";
import ProductForm from "./ProductForm";
import { useEffect } from "react";
import axios from "axios";
import { omit } from "lodash";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAlert } from "features/ui/uiSlice";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const updateProduct = async (product) => {
    try {
      await axios.patch(`/products/${id}`, product, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/products");
      dispatch(
        setAlert({
          type: "success",
          message: "The product has already updated.",
        })
      );
    } catch (error) {
      dispatch(
        setAlert({
          type: "danger",
          message: error.response.data.error,
        })
      );
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/products/${id}`);
      const product = omit(data, ["id", "category"]);

      console.log("product => ", { ...product, categoryId: data.category.id });
      setProduct({ ...product, categoryId: data.category.id });
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <ProductForm
      currentProduct={product}
      onSubmit={updateProduct}
    ></ProductForm>
  );
};

export default EditProduct;
