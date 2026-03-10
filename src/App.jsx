import { useState } from "react";

const products = [
  { id: 1, name: "Laptop",      category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones",  category: "Electronics", price: 2000  },
  { id: 3, name: "T-shirt",     category: "Clothing",    price: 800   },
  { id: 4, name: "Shoes",       category: "Clothing",    price: 2500  },
  { id: 5, name: "Coffee Mug",  category: "Home",        price: 300   },
];

const categories = ["All", "Electronics", "Clothing", "Home"];

export default function App() {
  const [search, setSearch]     = useState("");
  const [category, setCategory] = useState("All");

  const filtered = products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCat  = category === "All" || p.category === category;
    return matchName && matchCat;
  });

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" }}>
      <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "10px", width: "400px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🛍️ Product Search</h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "12px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "14px" }}
        />

        {/* Category Buttons */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{ padding: "6px 14px", borderRadius: "20px", border: "none", cursor: "pointer",
                backgroundColor: category === cat ? "#333" : "#e0e0e0",
                color: category === cat ? "white" : "black", fontSize: "13px" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product List */}
        {filtered.length === 0 ? (
          <p style={{ textAlign: "center", color: "gray" }}>No products found</p>
        ) : (
          filtered.map((p) => (
            <div key={p.id} style={{ padding: "10px", marginBottom: "8px", borderRadius: "8px", backgroundColor: "#f9f9f9", border: "1px solid #eee" }}>
              <strong>{p.name}</strong> — {p.category} — <span style={{ color: "green" }}>₹{p.price}</span>
            </div>
          ))
        )}

      </div>
    </div>
  );
}