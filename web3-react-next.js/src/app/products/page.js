import Headers from "@/components/Header"
import Footer from "@/components/Footer"
import SideBar from "@/components/SideBar"
import "@/app/globals.css"
import CardProduct from "@/components/CardProduct"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Headers />

      <main className="flex flex-1 gap-6 p-6">
        <SideBar />

        <div className="flex flex-col gap-6 flex-1">
          <header>
            <h1 className="text-3xl font-bold">Produtos</h1>
            <h3 className="text-xl">Lista de produtos</h3>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <CardProduct 
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpyF-PsECD3Tosuzp-Qo39C1wdFJ_Tsn2e_A&s"
              name="HB20 - 2022 - 1.6"
              cat="Hatch"
              preco="R$ 45.999,00"
            />

            <CardProduct 
              avatar="https://th.bing.com/th/id/OIP.mZCQnQDxWI6Av-Qcmga2xgHaEK"
              name="Troller - 2024 "
              cat="4x4"
              preco="R$ 240.999,00"
            />

            <CardProduct 
              avatar="https://i.pinimg.com/736x/d1/e2/41/d1e24192313211dfb83ae77fb1d1d9ed.jpg"
              name="Porsche 911 - 1968"
              cat="Esportivo"
              preco="R$ 40.999,00"
            />

            <CardProduct 
              avatar="https://i.pinimg.com/1200x/30/a1/d8/30a1d84a7ad163623f99d9b5792c90ac.jpg"
              name="Chevette - 1967"
              cat="Esportivo"
              preco="R$ 30.999,00"
            />

            <CardProduct 
              avatar="https://i.pinimg.com/736x/43/20/58/43205840f4276f0c4ab3564853725a87.jpg"
              name="Porsche 911 - 1998"
              cat="Esportivo"
              preco="R$ 400.999,00"
            />

            <CardProduct 
              avatar="https://i.pinimg.com/1200x/87/ef/e5/87efe534c515b2b5fced614a24071485.jpg"
              name="Porsche 911 - 1999"
              cat="Esportivo"
              preco="R$ 402.999,00"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}