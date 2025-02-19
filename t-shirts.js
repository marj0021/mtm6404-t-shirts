// Import React hooks since we are using state
const { useState } = React;

// T-Shirt Component (Displays a single t-shirt)
function TShirt({ tshirt, onBuy }) {
  const [stock, setStock] = useState(tshirt.stock);
  const [quantity, setQuantity] = useState(1);

  // Function to handle buying
  function handleBuy() {
    if (stock >= quantity) {
      setStock(stock - quantity);
      setQuantity(1); // Reset selection
    }
  }

  return (
    <div className="tshirt-card">
      {/* Display image */}
      <img src={`images/${tshirt.image}`} alt={tshirt.title} />

      {/* Display title */}
      <h2>{tshirt.title}</h2>

      {/* Display price */}
      <p className="price">${tshirt.price.toFixed(2)}</p>

      {/* Display stock */}
      <p className={stock > 0 ? "stock-available" : "out-of-stock"}>
        {stock > 0 ? `${stock} left` : "Out of Stock"}
      </p>

      {/* Show buy options only if in stock */}
      {stock > 0 && (
        <>
          {/* Select quantity */}
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {[...Array(stock).keys()].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          {/* Buy button */}
          <button onClick={handleBuy}>Buy</button>
        </>
      )}
    </div>
  );
}

// Main Component (Handles all t-shirts)
function App() {
  const tshirts = [
    { title: "Blue T-Shirt", image: "blue-t-shirt.jpg", price: 7.99, stock: 4 },
    { title: "Bright Purple T-Shirt", image: "bright-purple-t-shirt.jpg", price: 5.99, stock: 1 },
    { title: "Cobalt Blue T-Shirt", image: "cobalt-blue-t-shirt.jpg", price: 9.99, stock: 5 },
    { title: "Green T-Shirt", image: "green-t-shirt.jpg", price: 6.99, stock: 0 },
    { title: "Grey T-Shirt", image: "grey-t-shirt.jpg", price: 4.99, stock: 2 },
    { title: "Light Green T-Shirt", image: "light-green-t-shirt.jpg", price: 7.99, stock: 4 },
    { title: "Purple T-Shirt", image: "purple-t-shirt.jpg", price: 7.99, stock: 0 },
    { title: "Red T-Shirt", image: "red-t-shirt.jpg", price: 6.99, stock: 3 },
    { title: "Teal T-Shirt", image: "teal-t-shirt.jpg", price: 7.99, stock: 2 },
  ];

  return (
    <div className="container">
      <h1>T-Shirt Store</h1>
      <div className="grid">
        {tshirts.map((tshirt) => (
          <TShirt key={tshirt.title} tshirt={tshirt} />
        ))}
      </div>
    </div>
  );
}

// Render the App inside the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
