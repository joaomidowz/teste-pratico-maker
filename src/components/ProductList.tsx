type Product = {
    id: number;
    name: string;
    price: number;
};

type ProductList = {
    title?: string;
    products: Product[];
}

function formatBrl(value: number) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function ProductList({ title = "Lista dos Produtos", products }: ProductList) {
    return (
        <div className="flex flex-col items-center justify-center p-10">
            <p className="text-3xl">{title}</p>
            {products.length === 0 ? (
                <p className="text-xl text-red-500">Nenhum produto disponível</p>
            ) : (<table className="table-fixed ">
                <thead>
                    <tr className="text-2xl border-b ">
                        <th className="px-6 py-3">Produtos</th>
                        <th className="px-6 py-3">Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr className="border-b border-gray-700" key={product.id}>
                            <td className="text-gray-400">{product.name}</td>
                            <td className="text-gray-400">{formatBrl(product.price)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>)}
        </div>
    )
}