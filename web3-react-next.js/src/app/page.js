'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Headers from "@/components/Header"
import Footer from "@/components/Footer"
import SideBar from "@/components/SideBar"
import CardUser from "@/components/CardUser"
import "../app/globals.css"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true)

        const response = await fetch('http://localhost:3333/user')

        if (response.ok) {
          const data = await response.json()
          setUsers(data.users || [])
        } else {
          console.log('Erro ao buscar usuários no servidor')
        }
      } catch (error) {
        console.log('Erro de conexão com a API:', error)
      } finally {
        setIsLoading(false)
      }
    }

    getUsers()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Headers />

      <main className="flex flex-1 gap-6 p-6">
        <SideBar />

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Home</h1>
          <h3 className="text-xl">Essa é a nossa home</h3>

          <Image
            src="/bot.svg"
            alt="bot"
            width={200}
            height={200}
            priority
          />

          <div className="flex flex-col gap-5">
            {isLoading ? (
              <p className="animate-pulse text-blue-500">
                Carregando usuários...
              </p>
            ) : users.length > 0 ? (
              users.map((user) => (
                <CardUser
                  key={user.id}
                  name={user.name}
                  email={user.email}
                  avatar={user.avatar}
                />
              ))
            ) : (
              <p className="text-gray-500 italic">
                Nenhum usuário encontrado.
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}