import React from "react";
import "../styles/containerStyles.css";
import Nosotros from "../assets/Nosotros.jpg";
import Trabajo from "../assets/Trabajo.jpg";
export const Info = () => {
  return (
    <>
      <div className="container">
        <div className="bloque1">
          <h2> Sobre Nosotros</h2>
          <div className="card ">
            <div className="row g-0">
              <div className="col-md-8" id="card-contain">
                <div className="card-body">
                  <h4 className="card-title">Misión, Visión y Valores:</h4>
                  <p className="card-text">
                    Somos una empresa familiar que hemos tenido la oportunidad
                    de independizarnos y cumplir con nuestro deseo de ofrecer un
                    servicio de excelencia en limpieza y mantenimiento de
                    cortinas roller.
                  </p>
                  <p className="card-text">
                    Ofrecemos un servicio de limpieza de cortinas roller, en
                    tiempo y forma, con el objetivo de dar solución
                    satisfactoria a nuestros clientes y a precios muy
                    competitivos.
                  </p>
                  <p className="card-text">
                    Logramos ser referente en Mendoza, alcanzamos un estándar de
                    calidad que nos distingue por la excelencia en la prestación
                    de servicios.
                  </p>
                  <p className="card-text">
                    <small className="text">
                      - Eficiencia, calidad, responsabilidad, Integridad y
                      Pasión.
                    </small>
                  </p>
                </div>
                <div className="card-img">
                  <img src={Nosotros} className="img-info" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bloque1">
          <h2> Nuestra forma de trabajo</h2>
          <div className="card ">
            <div className="row g-0">
              <div className="col-md-8" id="card-contain">
                <div className="card-body">
                  <p className="card-text">
                    Realizamos el proceso completo de ir hasta su domicilio o
                    empresa, retiramos las cortinas, lavamos y las volvemos a
                    instalar en su posición original.
                  </p>
                  <p className="card-text">
                    En el momento de desinstalar analizamos el estado de la
                    cortina, soportes y accesorios de la misma. Informamos, en
                    caso de ser necesario, reposición de cadenas, varillas,
                    soportes, etc. para que luzcan como nuevas. Esto está fuera
                    del presupuesto inicial. Se identifican las cortinas, lo que
                    facilita la posterior instalación en el lugar que
                    corresponde.
                  </p>

                  <p className="card-text">
                    <small className="text">
                      Lavado, diagnóstico, mantenimiento, desinstalación,
                      reparación, instalación.
                    </small>
                  </p>
                </div>
                <div className="card-img">
                  <img src={Trabajo} className="img-info" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-map">
          <h2 className="i-wait"> TE ESPERAMOS</h2>
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.0050915407073!2d-68.83459168481355!3d-32.95087498091985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b29aef5cfbe18d4!2zMzLCsDU3JzAzLjIiUyA2OMKwNDknNTYuNyJX!5e0!3m2!1ses!2sar!4v1675367648780!5m2!1ses!2sar"
            width="100%"
            height="450"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};
