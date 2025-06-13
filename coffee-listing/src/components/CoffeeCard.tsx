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
            <img src={coffee.image} alt={coffee.name} />
            <p className="bg-red-200">{coffee.name}</p>
            <p>{coffee.price}</p>
            <p>{coffee.rating}</p>
            <p>{coffee.votes}</p>
          </div>
        );
      })}
    </div>
  );
}
