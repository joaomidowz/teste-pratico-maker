
import ProductList from "../../components/ProductList";

export default function Exercise2() {

  type Product = {
    id: number;
    name: string;
    price: number;
  };

  const products1: Product[] = [
    { id: 1, name: 'Banana', price: 10.98 },
    { id: 2, name: 'Computador Logitech', price: 4998.98 },
    { id: 3, name: 'Limpador de Tela', price: 29.99 },
  ];

  const products2: Product[] = [];


  return (
    <div>
      <h1>Product List</h1>
      <div className="flex flex-col items-center justify-center p-10">
        <ProductList title="Lista de produto 01" products={products1} />
        <ProductList title="Lista de produto 02" products={products2} />
      </div>
    </div>
  );
}