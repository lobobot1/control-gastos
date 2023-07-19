interface Props {
  filtro: string;
  setFiltro: (filtro: string) => void;
}

const Filtros = ({ filtro, setFiltro }: Props) => {
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
    <div className="filtros sombra contenedor">
      <form action="">
        <div className="campo">
          <label htmlFor="categoria">Filtro Gastos</label>

          <select
            name="categoria"
            id="categoria"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            {options.map((optionValue, index) => (
              <option value={optionValue} key={index}>
                {optionValue === "" ? "Todas las categorias" : optionValue}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
