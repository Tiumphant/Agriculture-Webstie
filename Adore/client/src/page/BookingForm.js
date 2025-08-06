import React, { useState, useEffect } from "react";

const BookingForm = ({ userId }) => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [bookings, setBookings] = useState([]);

  // ✅ Predefined product list
  const products = [
    "Wheat",
    "Rice",
    "Bread",
    "Butter",
    "Milk",
    "Fertilizer",
    "Seeds",
    "Tractor Rental",
  ];

  const handleAddProduct = () => {
    if (!productName) return;
    setCart([...cart, { name: productName, quantity }]);
    setProductName("");
    setQuantity(1);
  };

  const handleBookingSubmit = async () => {
    if (cart.length === 0) return alert("Cart is empty!");

    try {
      const response = await fetch("http://localhost:8000/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, products: cart }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Booking successful");
        setCart([]);
        fetchBookings();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking failed");
    }
  };

  const fetchBookings = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/bookings/user/${userId}`
      );
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [userId]);

  return (
    <div className="container my-4">
      <h2>🛒 Book Services / Products</h2>

      <div className="mb-3 d-flex gap-2">
        {/* 🔽 Product Dropdown */}
        <select
          className="form-control"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        >
          <option value="">-- Select Product --</option>
          {products.map((prod, index) => (
            <option key={index} value={prod}>
              {prod}
            </option>
          ))}
        </select>

        <input
          type="number"
          className="form-control"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button className="btn btn-primary" onClick={handleAddProduct}>
          Add
        </button>
      </div>

      {cart.length > 0 && (
        <div className="mb-3">
          <h5>🧺 Cart Items:</h5>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.quantity}
              </li>
            ))}
          </ul>
          <button className="btn btn-success" onClick={handleBookingSubmit}>
            Submit Booking
          </button>
        </div>
      )}

      <hr />
      <h4>📦 Your Bookings:</h4>
      {bookings.length > 0 ? (
        bookings.map((booking, idx) => (
          <div key={idx} className="border rounded p-2 mb-2">
            <strong>
              Booking #{idx + 1} (on{" "}
              {new Date(booking.createdAt).toLocaleString()}):
            </strong>
            <ul className="mb-0">
              {booking.products.map((p, i) => (
                <li key={i}>
                  {p.name} – {p.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No bookings yet.</p>
      )}
    </div>
  );
};

export default BookingForm;
