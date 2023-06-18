interface Props {
  presupuesto: number;
}

/**
 * The function formats a number as a currency string in USD.
 * @param {number} money - The parameter "money" is a number that represents a monetary value.
 * @returns The `amount` function is returning a formatted string representation of a number, using the
 * `toLocaleString` method with the options of displaying the currency in US dollars, with no decimal
 * places, and with a minimum fraction digits of 0.
 */
const ControlDePresupuesto = ({ presupuesto }: Props) => {
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
            <span>Restante: </span>{amount(presupuesto)}
          </p>
          <p>
            <span>Disponible: </span>{amount(0)}
          </p>
          <p>
            <span>Gastado: </span>{amount(0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ControlDePresupuesto;
