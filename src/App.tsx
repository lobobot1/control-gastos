import { useState } from "react";
import Header from "./components/Header";
import iconNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";

function App() {
  const [presupuesto, setPresupuesto] = useState<number>(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState<boolean>(false);
  const [modal,setModal] = useState<boolean>(false);
  const [animarModal, setAnimarModal] = useState<boolean>(false)

  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    } , 1e2);

  };
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
          <img src={iconNuevoGasto} 
            alt="Icono de nuevo gasto" 
            onClick={handleNuevoGasto}
          />
        </div>
      )}
      {modal && <Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} />}
    </div>
  );
}

export default App;
