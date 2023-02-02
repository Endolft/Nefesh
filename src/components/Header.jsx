import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Nefesh from "../assets/Nefesh.jpg";
import "../styles/headerStyles.css";
import { Input } from "./Input";
export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark  " id="container-header">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Nefesh} className="img-header" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span>Contacto </span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h1 className="offcanvas-title" id="offcanvasNavbarLabel">
                Nefesh 
              </h1>
              <button
                type="button"
                className=" btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                
              <a
                 href="mailto:nefesh2022@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <li className="nav-item">
                  <FontAwesomeIcon icon={faGoogle} size="xl" />{" "}
                  <b className="ml-50">nefesh2022@gmail.com</b>
                </li>
</a>
               {/*  <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="nav-item">
                    <FontAwesomeIcon icon={faInstagram} size="xl" />
                    <b className="ml-50"> Instagram</b>
                  </li>
                </a> */}
                <a>
                  <li className="nav-item">
                    <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                    <b className="ml-50">
                      {" "}
                      2615450638 - Marines
                      
                    </b>
                  <br/>
                    <b className="ms-4">
                     2615926346 - Luis
                    </b>
                  </li>
                </a>
                <li className="nav-item">
                  <Input />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
