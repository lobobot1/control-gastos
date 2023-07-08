import { useState } from "react";
import cerrarModal from "../img/cerrar.svg";
import Message from "./Message";

/* The `interface Props` is defining the props that the `Modal` component is expecting to receive. It
includes four properties: `setModal`, `animarModal`, `setAnimarModal`, and `guardarGasto`. */
interface Props {
  setModal: (modal: boolean) => void;
  animarModal: boolean;
  setAnimarModal: (animarModal: boolean) => void;
  guardarGasto: (gasto: gasto) => void;
}
interface gasto {
  id: string;
  nombre: string;
  cantidad: number;
  categoria: string;
  fecha: Date;
}

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
}: Props) => {
  const [nombre, setNombre] = useState<string>("");
  const [cantidad, setCantidad] = useState<number>(0);
  const [categoria, setCategoria] = useState<string>("");
  const [mens, setMens] = useState<string>("");
  //const [gastos, setGastos] = useState<gasto[]>([]);

  /**
   * The function closes a modal by setting animation and modal states to false and using a timeout to
   * delay setting the modal state to false.
   */
  const closeModal = () => {
    setAnimarModal(false);
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
      id: "",
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
        <legend>Nuevos gastos</legend>

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
            {options.map((optionValue) => (
              <option value={optionValue}>
                {optionValue === "" ? "Selecciona" : optionValue}
              </option>
            ))}
          </select>

          <input type="submit" value={"Añadir Gastos"} />
        </div>
      </form>
    </div>
  );
};

export default Modal;
