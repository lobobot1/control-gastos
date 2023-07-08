import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";

import "react-swipeable-list/dist/styles.css";

import { formattedDate } from "../helpers";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

interface GastoProps {
  gasto: {
    id: string;
    nombre: string;
    cantidad: number;
    categoria: string;
    fecha: Date;
  };
}
interface DictionaryIcon {
  [key: string]: string | undefined;
}
const dictionaryIcons: DictionaryIcon = {
  Ahorro: IconoAhorro,
  Casa: IconoCasa,
  Comida: IconoComida,
  Gastos: IconoGastos,
  Ocio: IconoOcio,
  Salud: IconoSalud,
  Suscripciones: IconoSuscripciones,
};

const Gasto = ({ gasto }: GastoProps) => {
  const LeadingAction = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.log("hola")}>Editar</SwipeAction>
    </LeadingActions>
  );
  const TrailingAction = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log("hola")}>Eliminar</SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={LeadingAction()}
        trailingActions={TrailingAction()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={dictionaryIcons[gasto.categoria]} alt="Icon" />
            <div className="descripcion-gasto">
              <p className="categoria">{gasto.categoria}</p>
              <p className="nombre-gasto">{gasto.nombre}</p>
              <p className="fecha-gasto">
                Agregado el: {""}
                <span>{formattedDate(gasto.fecha)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${gasto.cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
