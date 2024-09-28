import { useState } from "react";
import { createShortUrlAPI } from "../apis"; // Make sure this path points correctly to your API file

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(null);     // Reset any existing errors
    setShortUrl(null);  // Reset the shortened URL state

    try {
      // Make the API call with the original URL entered by the user
      const response = await createShortUrlAPI({ originalUrl: longUrl });
      
      // Set the shortened URL from the response
      setShortUrl(response.shortUrl);
    } catch (e) {
      console.error("Error:", e);
      setError("Failed to shorten URL. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "500px" }}>
        <h2 className="text-center mb-4">URL Shortener</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Enter Long URL</label>
            <input
              type="url"
              className="form-control"
              placeholder="Enter URL"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block w-100">
            Shorten URL
          </button>
        </form>

        {shortUrl && (
          <div className="mt-3">
            <p>
              Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
            </p>
          </div>
        )}
        
        {error && (
          <div className="mt-3 alert alert-danger">{error}</div>
        )}
      </div>
    </div>
  );
};

export default UrlShortener;
