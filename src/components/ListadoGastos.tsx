import Gasto from "./Gasto";

import { Gastos } from "../helpers/types";

interface IGasto {
  gastos: Gastos[];
  setGastoEditar: (gasto: Gastos) => void;
  eliminarGasto: (id: string) => void;
  filtro: string;
  gastoFiltrados: Gastos[] | null;
}

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastoFiltrados,
}: IGasto) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro.length ? (
        <>
          <h2>{gastoFiltrados?.length ? "Gastos" : "No hay Gastos en esta categoria"}</h2>
          {gastoFiltrados?.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay Gastos"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
