import { useEffect, useState } from "react";
import { Gastos } from "../helpers/types";
import cerrarModal from "../img/cerrar.svg";
import Message from "./Message";

/* The `interface Props` is defining the props that the `Modal` component is expecting to receive. It
includes four properties: `setModal`, `animarModal`, `setAnimarModal`, and `guardarGasto`. */
interface Props {
  setModal: (modal: boolean) => void;
  animarModal: boolean;
  setAnimarModal: (animarModal: boolean) => void;
  guardarGasto: (gasto: Gastos) => void;
  gastoEditar: Gastos | null;
  setGastoEditar: (gasto: Gastos | null) => void;
}

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}: Props) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [mens, setMens] = useState("");
  const [id, setId] = useState("");
  //const [gastos, setGastos] = useState<gasto[]>([]);

  useEffect(() => {
    if (gastoEditar) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
    }
  }, [gastoEditar]);

  /**
   * The function closes a modal by setting animation and modal states to false and using a timeout to
   * delay setting the modal state to false.
   */
  const closeModal = () => {
    setAnimarModal(false);
    setGastoEditar(null);
    setTimeout(() => {
      setModal(false);
    }, 1e2);
  };

  /**
   * This function handles form submission and checks if all required fields are filled before saving
   * the data.
   * @param e - React.FormEvent<HTMLFormElement>
   * @returns The function `handleSubmit` is not returning anything explicitly. It is updating the
   * state of `mens` and calling the function `guardarGasto` with the values of `nombre`, `cantidad`,
   * and `categoria`.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ([nombre, categoria].includes("") && cantidad === 0) {
      setTimeout(() => {
        setMens("Todos los campos son obligatorios");
      }, 1e2);
      return;
    }
    guardarGasto({
      id,
      nombre,
      cantidad,
      categoria,
      fecha: new Date(),
    });
    setMens("");
  };

  const options: string[] = [
    "",
    "Ahorro",
    "Comida",
    "Casa",
    "Gastos Varios",
    "Ocio",
    "Salud",
    "Subscripciones",
  ];

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarModal} alt="Cerrar modal" onClick={closeModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : ""}`}
      >
        <legend>{gastoEditar ? "Editar Gasto" : "Nuevos gastos"}</legend>

        {mens && <Message tipo="error">{mens}</Message>}
        <div className="campo">
          <label htmlFor="nombre">Nombre gastos</label>
          <input
            type="text"
            id="nombre"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <label htmlFor="amount">Cantidad</label>
          <input
            type="text"
            id="amount"
            placeholder="Añade la cantidad del gasto"
            value={cantidad === 0 ? "" : cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />

          <label htmlFor="categoria">Categoria</label>

          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            {options.map((optionValue, index) => (
              <option value={optionValue} key={index}>
                {optionValue === "" ? "Selecciona" : optionValue}
              </option>
            ))}
          </select>

          <input
            type="submit"
            value={gastoEditar ? "Guardar Gasto" : "Añadir Gastos"}
          />
        </div>
      </form>
    </div>
  );
};

export default Modal;
