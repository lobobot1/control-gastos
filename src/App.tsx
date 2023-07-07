import { useState } from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import iconNuevoGasto from "./img/nuevo-gasto.svg";

/* The `interface gasto` is defining the structure of an object that represents a "gasto" (expense) in
the application. It has four properties: `id` (a string representing the unique identifier of the
expense), `nombre` (a string representing the name of the expense), `cantidad` (a number
representing the amount of the expense), and `categoria` (a string representing the category of the
expense). This interface is used to ensure that all expenses in the application have the same
structure and properties. */
interface gasto {
  id: string;
  nombre: string;
  cantidad: number;
  categoria: string;
  fecha: Date;
}

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);

  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState<gasto[]>([]);

  /**
   * The function sets a modal to true and animates it after a short delay.
   */
  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 1e2);
  };

  /**
   * This function adds a new expense to a list of expenses and closes a modal window after a short
   * delay.
   * @param {gasto} gasto - "gasto" is a parameter of type "gasto", which is likely an object
   * containing information about a particular expense or cost. The function "guardarGasto" takes this
   * object as an argument and performs some actions with it, such as generating an ID for the expense,
   * adding it to an
   */
  const guardarGasto = (gasto: gasto) => {
    gasto.id = generarId();
    setGastos([...gastos, gasto]);
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 1e2);
  };

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos gastos={gastos} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={iconNuevoGasto}
              alt="Icono de nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  );
}

export default App;
