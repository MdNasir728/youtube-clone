import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "../src/utils/AppContext";
import { Navbar, Feed, SearchFeed, VideoDetail } from "./components/Index";
function App() {
  return (
    <BrowserRouter>
      <AppContext>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/:id" element={<Feed />} />
            <Route path="/search/:id" element={<SearchFeed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
          </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
