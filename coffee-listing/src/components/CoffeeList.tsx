import { useState, useEffect } from "react";

// interface Coffee {
//   id: number;
//   name: string;
//   image: string;
// }

const CoffeeList = () => {
  const [coffeeList, setCoffeeList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoffeeList(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(coffeeList[0], "coffeeList");
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Coffee List</h1>
      <ul>
        {coffeeList.map((coffee: any) => (
          <>
            <li key={coffee.id}>{coffee.name}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeList;
