import { useState } from "react";

const products = [
  { id: 1, name: "Laptop",     category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000  },
  { id: 3, name: "T-shirt",    category: "Clothing",    price: 800   },
  { id: 4, name: "Shoes",      category: "Clothing",    price: 2500  },
  { id: 5, name: "Coffee Mug", category: "Home",        price: 300   },
];

export default function App() {
  const [search, setSearch]     = useState("");
  const [category, setCategory] = useState("All");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || p.category === category)
  );

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f5f5f5" }}>
      <div style={{ background: "white", padding: "24px", borderRadius: "10px", width: "380px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>

        <h2 style={{ textAlign: "center", marginBottom: "16px" }}>🛍️ Product Search</h2>

        <input
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "12px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "14px" }}
        />

        <select onChange={(e) => setCategory(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "16px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "14px" }}>
          <option>All</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Home</option>
        </select>

        {filtered.length === 0 && <p style={{ textAlign: "center", color: "gray" }}>No products found</p>}

        {filtered.map((p) => (
          <div key={p.id} style={{ padding: "10px", marginBottom: "8px", border: "1px solid #eee", borderRadius: "8px" }}>
            <b>{p.name}</b> — {p.category} — <span style={{ color: "green" }}>₹{p.price}</span>
          </div>
        ))}

      </div>
    </div>
  );
}