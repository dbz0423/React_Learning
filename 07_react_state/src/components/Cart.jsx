import React from "react";
import useCartStore from "../store/cartStore";

const Cart = () => {
  const { items, addItem, removeItem } = useCartStore();

  const sampleProduct = {
    id: Date.now(),
    name: "示例商品",
    price: 99.99,
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>购物车 ({items.length})</h2>
      <button onClick={() => addItem(sampleProduct)}>添加测试商品</button>

      <div style={{ marginTop: "20px" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid #eee",
            }}
          >
            <h3>{item.name}</h3>
            <p>价格：¥{item.price}</p>
            <button onClick={() => removeItem(item.id)}>删除</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
