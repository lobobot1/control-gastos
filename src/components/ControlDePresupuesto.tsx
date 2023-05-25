interface Props {
  presupuesto: number;
}

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
