import { useEffect, useMemo, useState } from "react";
import { Card } from "../../components/Cards";
import { BarChart } from "../../components/Bar";

type Cart = {
  id: number;
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
}

type Status = "idle" | "loading" | "success" | "error";

const url = 'https://fakestoreapi.com/';
const pricePerProduct = 100;

export default function Exercise5() {
  const [status, setStatus] = useState<Status>("idle");
  const [dataCarts, setDataCarts] = useState<Cart[]>([]);


  const dashboard = useMemo(() => {

    const totalPerUser: { [key: number]: number } = {};
    dataCarts.forEach(cart => {
      const cartTotal = cart.products.reduce((sum, product) => sum + product.quantity * pricePerProduct, 0);
      if (totalPerUser[cart.userId]) {
        totalPerUser[cart.userId] += cartTotal;
      } else {
        totalPerUser[cart.userId] = cartTotal;
      }
    });

    const totalCarts = dataCarts.length;

    const sumQuantity = dataCarts.reduce((sum, cart) => {
      return sum + cart.products.reduce((cartSum, product) => cartSum + product.quantity, 0);
    }, 0);

    const totalPrice = sumQuantity * pricePerProduct;

    const chartData = Object.entries(totalPerUser).map(
      ([userId, total]) => ({
        userId: Number(userId),
        total: Number(total),
      })
    );

    return { totalCarts, sumQuantity, totalPrice, chartData };
  }, [dataCarts]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        const response = await fetch(url + 'carts');
        if (!response.ok) {
          throw new Error("Internet não respondendo bem.");
        }
        const data: Cart[] = await response.json();
        setDataCarts(data);
        setStatus("success");
      } catch (error) {
        console.error("Error:", error);
        setStatus("error");
      }
    };
    fetchData();
  }, []);

  if (status === "loading") {
    return <p>Carregando...</p>;
  }
  if (status === "error") {
    return <p className="text-red-500">Erro ao carregar os dados.</p>;
  }



  return (
    <div>
      <h1 className="font-bold mb-4">Carts</h1>
      <div className="flex flex-row gap-4 w-lvh">
        <Card titleCard="Total de Carts" total={dashboard.totalCarts}></Card>
        <Card titleCard="Total de produtos Pedidos" total={dashboard.sumQuantity}></Card>
        <Card titleCard="Total de dinheiro" total={dashboard.totalPrice}></Card>


      </div>
        <BarChart dataUsers={dashboard.chartData} />
    </div>
  );
}
