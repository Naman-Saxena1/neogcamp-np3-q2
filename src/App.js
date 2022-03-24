import "./styles.css";
import { useState } from "react";

export default function App() {
  const data = [
    {
      id: 1,
      item: "shoes",
      price: 100,
      quantity: 1
    },
    {
      id: 2,
      item: "jacket",
      price: 400,
      quantity: 1
    },
    {
      id: 3,
      item: "hat",
      price: 50,
      quantity: 1
    },
    {
      id: 4,
      item: "sunglasses",
      price: 250,
      quantity: 1
    },
    {
      id: 5,
      item: "gloves",
      price: 300,
      quantity: 1
    }
  ];
  const [dataList, setQtty] = useState(data);
  return (
    <div className="App">
      {dataList.map((item, i) => {
        return (
          <div key={i}>
            <span>
              {item.item}-{item.price}
            </span>

            <button
              onClick={() =>
                setQtty((data) => {
                  return [
                    ...data.slice(0, i),
                    {
                      ...data[i],
                      quantity:
                        data[i].quantity !== 0
                          ? data[i].quantity - 1
                          : data[i].quantity
                    },
                    ...data.slice(i + 1)
                  ];
                })
              }
            >
              -
            </button>
            {item.quantity}
            <button
              onClick={() =>
                setQtty((data) => {
                  return [
                    ...data.slice(0, i),
                    { ...data[i], quantity: data[i].quantity + 1 },
                    ...data.slice(i + 1)
                  ];
                })
              }
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
