import { useState } from "react";
function App() {
  // Your state and logic for managing cart and count
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);

    //item sent to cart when we increment
    setCart([
      ...cart,
      { id: Date.now(), name: "Dessert", price: 10, quantity: 1 },
    ]);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // Calculate total price based on cart items
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <h1
        style={{ paddingLeft: "240px", fontWeight: "bold", margin: "20px 0px" }}
      >
        Desserts
      </h1>
      <div
        className="shop"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="cards">
          {/* card */}
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              className="image"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <img
                src="/assets/1.jpg"
                alt=""
                style={{
                  width: "50%",
                  border: "5px solid #ca3700",
                  borderRadius: "10px",
                }}
              />
            </div>
            {/* buttons */}
            <div
              className="buttons"
              style={{
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                bottom: -17,
                left: 28,
              }}
            >
              <button
                onClick={decrement}
                style={{
                  backgroundColor: "#ca3700",
                  padding: "5px 10px",
                  borderRadius: "0px",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  color: "white",
                  border: "none",
                }}
              >
                -
              </button>
              <input
                type="text"
                value={count}
                style={{
                  textAlign: "center",
                  width: "20%",
                  backgroundColor: "#ca3700",
                  color: "white",
                }}
              />
              <button
                onClick={increment}
                style={{
                  backgroundColor: "#ca3700",
                  padding: "5px 10px",
                  borderRadius: "0px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  color: "white",
                  border: "none",
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Cart component displaying cart items and total */}
        </div>
        <div
          className="cart"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ fontSize: "30px", paddingBottom: "10px" }}>
            Your Cart:
          </h2>
          <div className="items">
            {cart.map((item) => (
              <div key={item.id}>
                {item.name} x {item.quantity}
              </div>
            ))}
          </div>
          <div
            className="total-order"
            style={{ fontSize: "20px", paddingBottom: "10px" }}
          >
            <b>
              Order Total: <span style={{fontSize:'25px'}}>${total}</span>
            </b>
          </div>
          <div>
            <button
              className="confirm"
              style={{ backgroundColor: "lightpink", border: "none" }}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
