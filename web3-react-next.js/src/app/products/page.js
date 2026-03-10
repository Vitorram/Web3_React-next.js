import Headers from "@/components/Header"
import Footer from "@/components/Footer"
import SideBar from "@/components/SideBar"
import Image from "next/image"



import '@/app/globals.css'
import CardProduct from "@/components/CardProduct"


export default function Home(){
    return (
      <div style={style.page}> 
        <Headers />
        
        <main style={style.main}>
          <SideBar />
          <div>
            <h1 className="text-3xl font-bold">Produtos</h1>
            <h3 className="text-xl">Lista de produtos</h3>
        <div className="grid grid-cols-5 gap-5">
            <CardProduct 
            avatar="https://github.com/Vitorram.png"
            name="Carro"
            preco="R$ 40,999,00"/>
            <CardProduct 
            avatar="https://th.bing.com/th/id/OIP.mZCQnQDxWI6Av-Qcmga2xgHaEK?w=306&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
            name="Carro"
            preco="R$ 40,999,00"/>
            <CardProduct 
            avatar="https://github.com/Vitorram.png"
            name="Carro"
            preco="R$ 40,999,00"/>
            <CardProduct 
            avatar="https://github.com/Vitorram.png"
            name="Carro"
            preco="R$ 40,999,00"/>
            <CardProduct 
            avatar="https://github.com/Vitorram.png"
            name="Carro"
            preco="R$ 40,999,00"/>
            <CardProduct 
            avatar="https://github.com/Vitorram.png"
            name="Carro"
            preco="R$ 40,999,00"/>
            <CardProduct 
            avatar="https://github.com/Vitorram.png"
            name="Carro"
            preco="R$ 40,999,00"/>
            <CardProduct 
            avatar="https://github.com/Vitorram.png"
            name="Carro"
            preco="R$ 40,999,00"/>
        </div>
          </div>
        </main>

        <Footer />
      </div>
    )
}

const style = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: "0px",
  },

  main:{
    display: "flex",
    flex: 1,
    gap: "24px",
  },

}