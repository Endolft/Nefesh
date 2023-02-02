import foto1 from "../../pictures/foto1.jpg";
import foto2 from "../../pictures/foto2.jpg";
import foto3 from "../../pictures/foto3.jpg";
import foto8 from "../../pictures/foto8.jpg";
import foto9 from "../../pictures/foto9.jpg";
import foto10 from "../../pictures/foto10.jpg";
import foto4 from "../../pictures/foto4.jpg";
import foto5 from "../../pictures/foto5.jpg";
import foto6 from "../../pictures/foto6.jpg";
import foto7 from "../../pictures/foto7.jpg";

export const Fotos = () => {
  const fotos = [
    { foto: foto2, description: "Contáctanos y pedinos nuestros muestrarios" },
    { foto: foto3, description: "Cambiamos la imagen de tus cortinas" },
    { foto: foto4, description: "Un trabajo completamente terminado!" },
    { foto: foto5, description: "Cambiamos la imagen de tus cortinas." },
    { foto: foto6, description: "Elegí el color, trama y diseña tu cortina!" },
    { foto: foto7, description: "Un trabajo completamente terminado!" },
    {
      foto: foto8,
      description: "Sí prefieren screen, hay variedad de colores!",
    },
    { foto: foto1, description: "Contáctanos y pedinos nuestros muestrarios!" },
    {
      foto: foto10,
      description: "Cierres verticales manuales o automatizados.",
    },
  ];
  return (
    <>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        {fotos.map((foto, index) => {
          const numero = index + 1;
          return (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={numero}
              aria-label={`Slide + ${numero + 1}`}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={foto9} className="d-block " alt="primera de presentacion" />
          <div className="carousel-caption d-none d-md-block">
            <h5> Te ofrecemos toldos con brazos y automáticos</h5>
          </div>
        </div>
        {fotos.map((foto) => {
          return (
            <div className="carousel-item">
              <img
                src={foto.foto}
                className="d-block"
                alt={foto.description}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5> {foto.description}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
