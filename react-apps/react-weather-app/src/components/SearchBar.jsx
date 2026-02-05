import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSearch(city);     
    setCity(""); 
  };

  return (
    <div className="search-wrapper">
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    </div>
  );
}