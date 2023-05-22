import { useState } from "react";
import Message1 from "./Message";

type HeaderProps = {
  presupuesto: number;
  setPresupuesto: (value: number) => void;
  setIsValidPresupuesto: (value: boolean) => void;
};

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}: HeaderProps) => {
  const [Message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (presupuesto < 1) {
      setMessage("El presupuesto suministrado es incorrecto");
      return;
    }
    setMessage("");
    setIsValidPresupuesto(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleSubmit} action="" className="formulario">
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Add your budget"
            value={presupuesto}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPresupuesto(Number(e.target.value))
            }
          />
        </div>
        <input type="submit" value={"Add"} />

        {Message && <Message1 tipo="error">{Message}</Message1>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
