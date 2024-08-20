// src/pages/ComparePage.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "antd";
import ProductsModal from "../comnponents/ModalComponent";
// import ProductSelectionModal from "../components/ProductSelectionModal";

const ComparePage = () => {
  const location = useLocation();
  const [selectedProducts, setSelectedProducts] = useState(
    location.state?.products || []
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddMore = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleSelect = (product) => {
    let updatedSelection = [...selectedProducts];
    if (updatedSelection.some((p) => p.id === product.id)) {
      updatedSelection = updatedSelection.filter((p) => p.id !== product.id);
    } else {
      if (updatedSelection.length < 4) {
        updatedSelection.push(product);
      }
    }
    setSelectedProducts(updatedSelection);
  };

  return (
    <div>
      <h2>Compare Products</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {selectedProducts.map((product) => (
          <div
            key={product.id}
            style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "150px" }}
            />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
        {selectedProducts.length < 4 && (
          <Button type="primary" onClick={handleAddMore}>
            Add More
          </Button>
        )}
      </div>
      <ProductsModal
        visible={isModalVisible}
        onClose={handleModalClose}
        selectedProducts={selectedProducts}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default ComparePage;
