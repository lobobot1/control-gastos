import { useEffect , useState } from "react";

/* The `interface Props` defines the type of the props that the `ControlDePresupuesto` component
expects. It specifies that the component expects two props: `presupuesto` of type `number` and
`gastos` of type `Gasto[]`. */
interface Props {
  presupuesto: number;
  gastos: Gasto[];
}

/* The `interface Gasto` defines the structure of an object representing a "gasto" (expense) in the
application. It specifies that a "gasto" object should have the following properties: */
interface Gasto {
  id: string;
  nombre: string;
  cantidad: number;
  categoria: string;
  fecha: Date;
}

/* The `interface Amount` is defining the structure of an object representing the different amounts in
the application. It specifies that an `Amount` object should have three properties: "Restante: " of
type `number`, "Disponible: " of type `number`, and "Gastado: " of type `number`. These properties
represent the remaining amount, the available amount, and the amount spent, respectively. */
interface Amount {
  "Restante: ": number;
  "Disponible: ": number;
  "Gastado: ": number;
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

  const options:string[]=[
    "Restante: ",
    "Disponible: ",
    "Gastado: "
  ]

  const amountOption:Amount = {
    "Restante: ": presupuesto,
    "Disponible: ": disponible,
    "Gastado: ": gastado
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>

        <div className="contenido-presupuesto">
          {options.map((option:string) =>
            <p>
              <span>{option}</span>
              {amount(amountOption[option as keyof typeof amountOption])}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ControlDePresupuesto;
