const orders = [
  {
    id: 1,
    customer: "Rahul",
    food: "Pizza",
    price: 500,
    delivered: true
  },
  {
    id: 2,
    customer: "Aman",
    food: "Burger",
    price: 250,
    delivered: false
  },
  {
    id: 3,
    customer: "Priya",
    food: "Pasta",
    price: 400,
    delivered: true
  },
  {
    id: 4,
    customer: "Riya",
    food: "Momos",
    price: 150,
    delivered: false
  }
];

const result = orders.map(order => ({
  food: order.food,
  price: order.price
}));

console.log(result);