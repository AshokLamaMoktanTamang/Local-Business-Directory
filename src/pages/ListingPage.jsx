import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const ListingsPage = () => {
  return (
    <div>
      <Navbar />
      <section className="listings">
        <h1>Business Listings</h1>
        <p>Find businesses by category, location, and more!</p>
        {/* Add listing components here */}
      </section>
      <Footer />
    </div>
  );
};

export default ListingsPage;
