import Gasto from "./Gasto";

interface gasto {
  id: string;
  nombre: string;
  cantidad: number;
  categoria: string;
  fecha: Date;
}

type gastos = {
  gastos: gasto[];
};

const ListadoGastos = ({ gastos }: gastos) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay Gastos"}</h2>
      {gastos.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
};

export default ListadoGastos;
