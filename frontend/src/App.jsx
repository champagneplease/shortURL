import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;

    try {
      setLoading(true);
      setError("");
      setShortUrl("");

      const res = await fetch(`${import.meta.env.VITE_API_URL}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al conectar");

      setShortUrl(data.shortUrl);
    } catch (err) {
      setError(err.message || "Ocurrió un error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-card">
      <h1>ShortURL</h1>
      <p className="subtitle">Simplifica tus enlaces.</p>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="https://www.google.com/"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Procesando..." : "Acortar URL"}
        </button>
      </form>

      {error && (
        <p style={{ color: "#e66", fontSize: "0.85rem", marginTop: "1rem" }}>
          {error}
        </p>
      )}

      {shortUrl && (
        <div className="short-url">
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
          <button
            onClick={() => {
              navigator.clipboard.writeText(shortUrl);
              alert("Enlace copiado");
            }}
          >
            Copiar
          </button>
        </div>
      )}
      <footer className="footer">
        <span className="tag">@champagne</span>
      </footer>
    </div>
  );
}

export default App;
