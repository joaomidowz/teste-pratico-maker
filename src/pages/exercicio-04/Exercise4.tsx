import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};


type Status = "idle" | "loading" | "success" | "error";

const url = 'https://jsonplaceholder.typicode.com/users';

export default function Exercise4() {
  const [users] = useState(url);
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const [userData, setUserData] = useState<User[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [searchName, setSearchName] = useState<string>("");

  const handleChange = (value: string) => {
    setSearchName(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        const response = await fetch(users);
        if (!response.ok) {
          throw new Error("Internet não respondendo bem.");
        }
        const data: User[] = await response.json();
        setUserData(data);
        setStatus("success");
      } catch (error) {
        console.error("Error:", error);
        setStatus("error");
      }
    };
    fetchData();
  }, [users]);

  useEffect(() => {
    const filtered = userData.filter((user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchName, userData]);

  if (status === "loading") {
    return <p>Carregando...</p>;
  }
  if (status === "error") {
    return <p className="text-red-500">Erro ao carregar os dados.</p>;
  }


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>

      <label className='p-5' htmlFor="">Pesquise o Nome:</label>
      <input placeholder="Pesquise o nome" className='bg-white py-1.5 px-5 rounded-lg text-black' type="text" value={searchName} onChange={(e) => handleChange(e.target.value)} />

      <ul className="mt-4">
        {filteredData.map((user: User) => (
          <li key={user.id} className="mb-4 p-4 border rounded-lg">
            <p><strong>Nome:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Empresa:</strong> {user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}