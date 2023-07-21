//   Q. What is React Router?
//      ----------------------
// 1. React Router is a standard library system built on top of the React and used to create routing in 
//    the React application using React Router Package. It provides the synchronous URL on the browser with 
//    data that will be displayed on the web page. 
// 2. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, 
//    and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

// -> Package- react-router-dom: It is used for web applications design.
// -> Component- <BrowserRouter>: It is used for handling the dynamic URL.

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import CoinPage from "./pages/coin";
import ComparePage from "./pages/compare";
import WatchlistPage from "./pages/watchlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Footer from "./components/Common/Footer/footer";
       
function App() {
  return (
    <div className="App">
      {/* <div className="cursor" id="cursor" />
      <div className="cursor-pointer" id="cursor-pointer" /> */}
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;


