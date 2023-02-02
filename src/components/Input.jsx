import React, { useRef, useState } from "react";
import "../styles/inputStyles.css";
import emailjs from "@emailjs/browser";

export const Input = () => {
  const form = useRef();
  const [itsOk, setitsOk] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    const name= e.target.from_name.value;
    const number= e.target.to_number.value;
    const correo = e.target.to_name.value;
  if ( [name,number,correo].includes("")){
    
    setitsOk(true)
    return
  }
    
    emailjs
      .sendForm(
        "service_wxfh74r",
        "template_rpoan7e",
        form.current,
        "2jobrnxFWqyC5cDdN"
      )
      .then(
        (result) => {
          alert("Ya tenemos tus datos!, nos pondremos en contacto  :3 ") 
          console.log(result.text);
          setitsOk(false)
        },
        (error) => {
          alert("hay problemas con tus datos, intenta comunicarte por nuestras redes") 
          console.log(error.text);
        }
      ); 
  };
  return (
    <>
    <h2 id='h2'>  O dejanos tus datos! y nosotros te contactamos</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label"> Nombre</label>
          <input type="text" className="form-control" name="from_name" />
        </div>
        <div className="mb-3">
          <label className="form-label"> Email</label>
          <input type="email" name="to_name" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label"> Numero de telefono</label>
          <input type="number" name="to_number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label"> Consulta (opcional)</label>
          <textarea name="message" className="form-control"/>
          <br/>
          { itsOk && <span className="aviso"> (Debe enviar Nombre, Email y telefono)</span>}
          
          <br/>
          <input type="submit" value="enviar"  className="btn btn-secondary mt-2" id="button"/>
        </div>
      </form>
    </>
  );
};
