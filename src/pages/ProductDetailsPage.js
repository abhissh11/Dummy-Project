import React, { useState } from "react";
import { Button, Table, Checkbox } from "antd";

const ProductPage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState(() =>
    Array.from({ length: 10 }).map((_, i) => ({
      key: i,
      name: `Product ${i}`,
      price: `$${(i + 1) * 10}`,
      category: `Category ${i % 3}`,
      rating: `${Math.floor(Math.random() * 5) + 1} stars`,
      selected: false,
    }))
  );

  const handleSelect = (key) => {
    const updatedData = dataSource.map((item) =>
      item.key === key ? { ...item, selected: !item.selected } : item
    );

    const newSelectedRowKeys = updatedData
      .filter((item) => item.selected)
      .map((item) => item.key);

    if (newSelectedRowKeys.length <= 4) {
      setSelectedRowKeys(newSelectedRowKeys);
      setDataSource(updatedData);
    }
  };

  const columns = [
    {
      title: "Select",
      dataIndex: "select",
      render: (_, record) => (
        <Checkbox
          checked={record.selected}
          onChange={() => handleSelect(record.key)}
          disabled={selectedRowKeys.length >= 4 && !record.selected}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Rating",
      dataIndex: "rating",
    },
  ];

  const handleCompare = () => {
    const selectedProducts = dataSource.filter((item) => item.selected);
    console.log("Selected products for comparison:", selectedProducts);
    // Implement comparison logic here
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={handleCompare}
        disabled={selectedRowKeys.length === 0}
      >
        Compare Products
      </Button>
      {selectedRowKeys.length >= 4 && (
        <p style={{ color: "red" }}>You can select a maximum of 4 products.</p>
      )}
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
        rowKey="key"
      />
    </div>
  );
};

export default ProductPage;
