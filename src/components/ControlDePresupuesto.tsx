import { useEffect , useState } from "react";

interface Props {
  presupuesto: number;
  gastos: gasto[];
}

interface gasto {
  id: string;
  nombre: string;
  cantidad: number;
  categoria: string;
  fecha: Date;
}

/**
 * The function formats a number as a currency string in USD.
 * @param {number} money - The parameter "money" is a number that represents a monetary value.
 * @returns The `amount` function is returning a formatted string representation of a number, using the
 * `toLocaleString` method with the options of displaying the currency in US dollars, with no decimal
 * places, and with a minimum fraction digits of 0.
 */
const ControlDePresupuesto = ({ presupuesto, gastos }: Props) => {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado:number = gastos.reduce((acc, gasto) => acc + gasto.cantidad, 0);
    const totalDisponible:number = presupuesto - totalGastado;
    setDisponible(totalDisponible);
    setGastado(totalGastado);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gastos]);

  const amount = (money: number): string => {
    return money.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>

        <div className="contenido-presupuesto">
          <p>
            <span>Restante: </span>
            {amount(presupuesto)}
          </p>
          <p>
            <span>Disponible: </span>
            {amount(disponible)}
          </p>
          <p>
            <span>Gastado: </span>
            {amount(gastado)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ControlDePresupuesto;
