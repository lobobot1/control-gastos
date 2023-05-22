import { useState } from "react";
import iconNuevoGasto from "./img/nuevo-gasto.svg";
import Header from "./components/Header";

function App() {
  const [presupuesto, setPresupuesto] = useState<number>(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState<boolean>(false);

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <div className="nuevo-gasto">
          <img src={iconNuevoGasto} alt="Icono de nuevo gasto" />
        </div>
      )}
    </div>
  );
}

export default App;
