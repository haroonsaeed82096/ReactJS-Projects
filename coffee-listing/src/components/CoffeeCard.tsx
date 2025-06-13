interface Coffee {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
}
export default function CoffeeCard(props: { coffeeList: Coffee[] }) {
  const { coffeeList } = props;
  return (
    <div>
      {coffeeList.map((coffee: Coffee) => {
        return (
          <div key={coffee.id}>
            <h2>{coffee.name}</h2>
            <img src={coffee.image} alt={coffee.name} />
            <p>{coffee.price}</p>
            <p>{coffee.rating}</p>
            <p>{coffee.votes}</p>
            <p>{coffee.popular}</p>
            <p>{coffee.available}</p>
          </div>
        );
      })}
    </div>
  );
}
