/* The `interface MessageProps` is defining the type of props that the `Message` component expects to
receive. It specifies that the component expects two props: `tipo` of type `string` and `children`
of type `string`. This helps with type checking and ensures that the component is used correctly. */
interface MessageProps {
    tipo: string;
    children: string;
  }

/* This code defines a functional component called `Message` that takes in two props: `tipo` of type
`string` and `children` of type `string`. The component returns a paragraph element with a class
name of `alerta` and the value of `tipo` interpolated into the class name. The text content of the
paragraph element is the value of the `children` prop. The component is exported as the default
export of the module. */
const Message = ({ tipo, children}: MessageProps) => {
  return <p className={`alerta ${tipo}`}>{children}</p>;
};

export default Message;
