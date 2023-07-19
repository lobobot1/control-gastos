import ControlDePresupuesto from "./ControlDePresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

import { Gastos } from "../helpers/types";

/**
 * The type HeaderProps defines the props for a component that includes a budget value, a function to
 * set the budget value, a boolean indicating if the budget value is valid, and a function to set the
 * validity of the budget value.
 * @property {number} presupuesto - a number representing the budget value.
 * @property setPresupuesto - setPresupuesto is a function that takes a number as an argument and
 * returns void. It is used to update the value of the presupuesto property.
 * @property {boolean} isValidPresupuesto - isValidPresupuesto is a boolean property that indicates
 * whether the presupuesto (budget) value is valid or not.
 * @property setIsValidPresupuesto - `setIsValidPresupuesto` is a function that takes a boolean value
 * as its argument and sets the `isValidPresupuesto` state to that value. It is likely used to control
 * the validation of the `presupuesto` value in the component that uses these props.
 */
type HeaderProps = {
  presupuesto: number;
  setPresupuesto: (value: number) => void;
  isValidPresupuesto: boolean;
  setIsValidPresupuesto: (value: boolean) => void;
  gastos: Gastos[];
  setGastos: (value: Gastos[]) => void;
};

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  gastos,
  setGastos,
}: HeaderProps) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ? (
        <ControlDePresupuesto
          presupuesto={presupuesto}
          gastos={gastos}
          setGastos={setGastos}
          setPresupuesto={setPresupuesto}
          setValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
