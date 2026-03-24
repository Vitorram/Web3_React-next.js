'use client'

import { useState } from "react"
import { useRouter } from "next/navigation" // Para navegar após o cadastro
import Headers from "@/components/Header"
import Footer from "@/components/Footer"
import SideBar from "@/components/SideBar"

export default function SignUp() {
  const router = useRouter()
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [avatar, setAvatar] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('http://localhost:3333/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, pass, avatar })
      })

      if (response.ok) {
        alert("Conta criada com sucesso!")
        // Limpa os campos
        setName("")
        setEmail("")
        setPass("")
        setAvatar("")
        
        // Opcional: Redireciona para a home
        router.push('/') 
      } else {
        const errorData = await response.json()
        alert(`Erro: ${errorData.message || 'Falha ao criar conta'}`)
      }
    } catch (err) {
      console.error('Erro na requisição:', err)
      alert("Servidor fora do ar!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Headers />

      <main className="flex flex-1 gap-6 p-6">
        <SideBar />

        <div className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-sm h-fit">
          <h1 className="text-3xl font-bold text-gray-800">Cadastre-se</h1>
          <h3 className="text-gray-600 text-lg">Preencha os dados para criar sua conta</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 mt-4">
            
            <div className="flex flex-col gap-1">
              <label className="font-semibold">Nome:</label>
              <input
                required
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Email:</label>
              <input
                required
                type="email"
                placeholder="exemplo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">Senha:</label>
              <input
                required
                type="password"
                placeholder="********"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold">URL do Avatar:</label>
              <input
                type="text"
                placeholder="https://github.com/usuario.png"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            </div>

            <button 
              disabled={loading}
              className={`py-2 rounded-md mt-2 font-bold text-white transition-colors 
                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              {loading ? "Cadastrando..." : "Criar Conta"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}