import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlDePresupuesto from "./ControlDePresupuesto";

type HeaderProps = {
  presupuesto: number;
  setPresupuesto: (value: number) => void;
  isValidPresupuesto: boolean;
  setIsValidPresupuesto: (value: boolean) => void;
};

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}: HeaderProps) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ? (
        <ControlDePresupuesto presupuesto={presupuesto} />
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
