import React from "react";
import Carrito from "../Carrito/Carrito";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <img src="/img/descarga.png" alt="logo" style={{ width: "100px" }} />
        <a className="navbar-brand" href="#">
          Armory
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Carrito />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Acerca de
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
