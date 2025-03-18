// Ce fichier représente la page d'erreur 404, affichée lorsque l'utilisateur tente d'accéder à une page qui n'existe pas.
//  Il contient un message indiquant que la page n'a pas été trouvée.
//  Vous pouvez personnaliser ce message en ajoutant du contenu supplémentaire à la page 404.

import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default NotFound;
