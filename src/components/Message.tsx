interface MessageProps {
    tipo: string;
    children: string;
  }
const Message = ({ tipo, children}: MessageProps) => {
  return <p className={`alerta ${tipo}`}>{children}</p>;
};

export default Message;
