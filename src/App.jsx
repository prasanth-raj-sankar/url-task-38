import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import UrlShortener from "./pages/UrlShortener";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        {/* URL Shortener Routes */}
        <Route path="/shorten-url" element={<UrlShortener />} />
      </Routes>
    </Router>
  );
}

export default App;
