// Ce fichier représente la page d'accueil de votre application.
// Il contient le composant Banner et peut inclure d'autres éléments spécifiques à la page d'accueil.

import React from "react";
import Banner from "../components/Banner/Banner";

function Home() {
  return (
    <>
      <Banner />
      <main className="main-content">
        {/* Ajoutez ici le contenu de la page d'accueil */}
      </main>
    </>
  );
}

export default Home;
