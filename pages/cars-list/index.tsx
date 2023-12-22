
interface IProps {
    cars: Car[];
}

const CarsList = ({cars}: IProps) => {
    return (
        <>
        <h1>hello Mongole</h1>
        <ul>
            {cars.map((car) => (
                <li key={car.name}>
                {car.name} | {car.make} | {car.color} | {car.km} |{" "}
                {String(car.year)}
                </li>
            ))}
        </ul>
        </>
  );
};

export default CarsList;