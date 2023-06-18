import { useState } from "react";
import Message1 from "./Message";

/**
 * The type HeaderProps defines the props for a component that includes a budget value, a function to
 * set the budget value, and a function to set the validity of the budget value.
 * @property {number} presupuesto - a number representing the budget value.
 * @property setPresupuesto - setPresupuesto is a function that takes a number as its argument and
 * returns void. It is likely used to update the value of the presupuesto property.
 * @property setIsValidPresupuesto - setIsValidPresupuesto is a function that takes a boolean value as
 * its argument and does not return anything. It is likely used to update a state variable that
 * determines whether the presupuesto value is valid or not.
 */
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
