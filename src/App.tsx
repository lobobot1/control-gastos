/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import Filtros from "./components/Filtros";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";

import { generarId } from "./helpers";
import { Gastos } from "./helpers/types";

import iconNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);

  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState<Gastos[]>(
    JSON.parse(localStorage.getItem("gastos") ?? "[]")
  );

  const [gastoEditar, setGastoEditar] = useState<Gastos | null>(null);

  const [filtro, setFiltro] = useState("");

  const [gastoFiltrados, setGastoFiltrados] = useState<Gastos[] | null>(null);

  useEffect(() => {
    if (gastoEditar) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 1e2);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", JSON.stringify(presupuesto ?? 0));
  }, [presupuesto]);

  useEffect(() => {
    const presupuestoGuardado = Number(localStorage.getItem("presupuesto"));
    if (presupuestoGuardado > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? null);
  }, [gastos]);

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      setGastoFiltrados(gastosFiltrados);
    }
  }, [filtro]);

  /**
   * The function sets a modal to true and animates it after a short delay.
   */
  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar(null);
    setTimeout(() => {
      setAnimarModal(true);
    }, 1e2);
  };

  /**
   * This function adds a new expense to a list of expenses and closes a modal window after a short
   * delay.
   * @param {Gastos} gasto - "gasto" is a parameter of type "gasto", which is likely an object
   * containing information about a particular expense or cost. The function "guardarGasto" takes this
   * object as an argument and performs some actions with it, such as generating an ID for the expense,
   * adding it to an
   */
  const guardarGasto = (gasto: Gastos) => {
    if (gastoEditar) {
      const gastosActualizados = gastos.map((g) => {
        if (g.id === gastoEditar.id) {
          return gasto;
        }
        return g;
      });
      setGastos(gastosActualizados);
      setGastoEditar(null);
    } else {
      gasto.id = generarId();
      setGastos([...gastos, gasto]);
    }
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 1e2);
  };

  const eliminarGasto = (id: string) => {
    const gastosActualizados = gastos.filter((g) => g.id !== id);
    setGastos(gastosActualizados);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastoFiltrados={gastoFiltrados}
            />
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
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
