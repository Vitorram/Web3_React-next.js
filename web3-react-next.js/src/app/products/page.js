import Headers from "@/components/Header"
import Footer from "@/components/Footer"
import SideBar from "@/components/SideBar"
import '@/app/globals.css'
import CardProduct from "@/components/CardProduct"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Headers />

      <main className="flex flex-1 gap-6">
        <SideBar />

        {/* Adicionei flex-1 aqui para esta div ocupar todo o espaço restante */}
        <div className="flex-1 p-6">
          <header className="mb-6">
            <h1 className="text-3xl font-bold">Produtos</h1>
            <h3 className="text-xl">Lista de produtos</h3>
          </header>

          {/* O grid agora vai se expandir dentro do flex-1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <CardProduct 
              avatar="https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/646745167_1439418094589330_88233120893550145_n.jpg?ccb=11-4&oh=01_Q5Aa4AHKWC4spig5TdX5MkMyvaf5yYxAcMN9sSiunC7H9uWjAA&oe=69BED184&_nc_sid=5e03e0&_nc_cat=102"
              name="Carro"
              preco="R$ 40.999,00"
            />
            <CardProduct 
              avatar="https://th.bing.com/th/id/OIP.mZCQnQDxWI6Av-Qcmga2xgHaEK?w=306&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
              name="Carro"
              preco="R$ 40.999,00"
            />
            <CardProduct 
              avatar="https://i.pinimg.com/736x/d1/e2/41/d1e24192313211dfb83ae77fb1d1d9ed.jpg"
              name="Carro"
              preco="R$ 40.999,00"
            />
            <CardProduct 
              avatar="https://i.pinimg.com/1200x/30/a1/d8/30a1d84a7ad163623f99d9b5792c90ac.jpg"
              name="Carro"
              preco="R$ 40.999,00"
            />
            <CardProduct 
              avatar="https://i.pinimg.com/736x/43/20/58/43205840f4276f0c4ab3564853725a87.jpg"
              name="Carro"
              preco="R$ 40.999,00"
            />
            <CardProduct 
              avatar="https://i.pinimg.com/1200x/87/ef/e5/87efe534c515b2b5fced614a24071485.jpg"
              name="Carro"
              preco="R$ 40.999,00"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}