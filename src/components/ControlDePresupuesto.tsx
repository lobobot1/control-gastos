interface Props {
    presupuesto: number;
}

const ControlDePresupuesto = ({presupuesto}:Props) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>
            Grafica aqui
        </p>

        <div className="contenido-presupuesto">
            <p>
                <span>
                    Restante: 
                </span>
                $ {presupuesto}
            </p>
        </div>
      </div>
    </div>
  )
}

export default ControlDePresupuesto
