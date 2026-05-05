'use client';

import CardUser from "@/components/CardUser";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/SideBar";
import { useEffect, useState } from "react";
import { useUserStore } from "@/stores/userStrore";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  //const [users, setUsers] = useState([]);
  //importa o estado global de usuários do Zustand
  //faz o destructuring para pegar a lista de usuários e a função para atualizar essa lista
  const {users, setUser } = useUserStore();

  useEffect(() => {

    const getUsers = async () => {
      try {
        const response = await fetch('http://localhost:3333/user');

        if (response.ok) {
          const data = await response.json();
          setUser(data.users);
          router.push('/') // Redireciona para a home após carregar os usuários
        } else {
          const data = await response?.json();
          console.error('Erro ao buscar usuários', data);
        }

      } catch (error) {
        console.error('Erro na requisição:', error);
      } finally {
        setIsLoading(false); // ✅ agora no lugar certo
      }
    };

    getUsers();

  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />

      <section className="flex flex-1">
        
        <Sidebar />

        <main className="flex-1 p-6 bg-gray-50">
          
          <h1 className="text-2xl font-bold mb-2">Home</h1>
          <p className="text-gray-600 mb-6">Lista de usuários</p>

          <div className="flex flex-col gap-4">
            {isLoading ? (
              <p className="text-gray-500">Carregando...</p>
            ) : users.length === 0 ? (
              <p className="text-gray-500">Nenhum usuário encontrado</p>
            ) : (
              users.map(user => (
                <CardUser 
                  key={user.id}
                  id={user.id}
                  avatar={user.avatar}
                  name={user.name}
                  email={user.email}
                />
              ))
            )}
          </div>

        </main>
      </section>

      <Footer />
    </div>
  );
}