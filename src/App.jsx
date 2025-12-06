import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/CombinedContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Booking = lazy(() => import("./pages/Booking"));
const Booked = lazy(() => import("./pages/Booked"));
const Menu = lazy(() => import("./pages/Menu"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
           <Route path="/menu" element={<Menu />} />

            <Route path="/booking" element={<Booking />} />
            <Route path="/booked" element={<Booked />} />
                        <Route path="/about" element={<About />} />

            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
