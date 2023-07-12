import Gasto from "./Gasto";

import { Gastos } from "../helpers/types";

interface IGasto {
  gastos: Gastos[];
  setGastoEditar: (gasto: Gastos) => void;
}

const ListadoGastos = ({ gastos, setGastoEditar }: IGasto) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay Gastos"}</h2>
      {gastos.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} setGastoEditar={setGastoEditar} />
      ))}
    </div>
  );
};

export default ListadoGastos;
