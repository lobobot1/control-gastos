import { formattedDate } from "../helpers";

interface GastoProps {
  gasto: {
    id: string;
    nombre: string;
    cantidad: number;
    categoria: string;
    fecha: Date;
  };
}

const Gasto = ({ gasto }: GastoProps) => {
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{gasto.categoria}</p>
          <p className="nombre-gasto">{gasto.nombre}</p>
          <p className="fecha-gasto">
            Agregado el: {""}
            <span>{formattedDate(gasto.fecha)}</span>
          </p>
        </div>
        <p className="cantidad-gasto">${gasto.cantidad}</p>
      </div>
    </div>
  );
};

export default Gasto;
