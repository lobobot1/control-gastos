import cerrarModal from '../img/cerrar.svg'

interface Props {
    setModal: (modal: boolean) => void;
    animarModal: boolean;
    setAnimarModal: (animarModal: boolean) => void;
}

const Modal = ({setModal,animarModal,setAnimarModal}:Props) => {

    const closeModal = () => {
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 1e2);
    }

  return (
    <div className='modal'>
        <div className="cerrar-modal">
            <img 
                src={cerrarModal} 
                alt="Cerrar modal"
                onClick={closeModal}    
            />
        </div>
        <form action="" className={`formulario ${animarModal ? 'animar' : ''}`}>
            <legend>
                Nuevos gastos
            </legend>
        </form>
    </div>
  )
}

export default Modal
