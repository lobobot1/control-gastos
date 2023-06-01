import { useState } from "react";
import cerrarModal from "../img/cerrar.svg";
import Message from "./Message";

interface Props {
  setModal: (modal: boolean) => void;
  animarModal: boolean;
  setAnimarModal: (animarModal: boolean) => void;
  guardarGasto: (gasto: any) => void;
}

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }: Props) => {
  const [nombre, setNombre] = useState<string>("");
  const [cantidad, setCantidad] = useState<number>(0);
  const [categoria, setCategoria] = useState<string>("");
  const [mens, setMens] = useState<string>("");
  const [gastos,setGastos] = useState<any[]>([]);

  const closeModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 1e2);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if([nombre, categoria].includes("") && cantidad === 0 ){
      setTimeout(() => {
        setMens("Todos los campos son obligatorios");
      }, 1e2);
        return;
    }
    guardarGasto({
      nombre,
      cantidad,
      categoria
    });
    setMens("");
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarModal} alt="Cerrar modal" onClick={closeModal} />
      </div>
      <form 
      onSubmit={handleSubmit}
      className={`formulario ${animarModal ? "animar" : ""}`}>
        <legend>Nuevos gastos</legend>

        {mens && <Message tipo="error" >{mens}</Message>}
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
            value={cantidad=== 0 ? '' : cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />

          <label htmlFor="categoria">Categoria</label>

          <select 
            name="categoria" 
            id="vategoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            >
            <option value=""> Selecciona</option>
            <option value="Ahorro">Ahorro</option>
            <option value="Comidas">Comidas</option>
            <option value="Casa">Casa</option>
            <option value="Gastos Varios">Gastos Varios</option>
            <option value="Ocio">Ocio</option>
            <option value="Salud">Salud</option>
            <option value="Subscripciones">Subscripciones</option>
          </select>

          <input type="submit" value={"Añadir Gastos"} />
        </div>
      </form>
    </div>
  );
};

export default Modal;
