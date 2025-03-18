import React from "react";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";

function Home() {
  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" />
      <main className="main-content">
        <div className="gallery-container">
          <Gallery />
        </div>
      </main>
    </>
  );
}

export default Home;
