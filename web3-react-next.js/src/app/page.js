import Headers from "@/components/Header"
import Footer from "@/components/Footer"
import SideBar from "@/components/SideBar"
import Image from "next/image"



import '../app/globals.css'
import CardUser from "@/components/CardUser"

export default function Home(){
    return (
      <div style={style.page}> 
        <Headers />
        
        <main style={style.main}>
          <SideBar />
          <div>
            <h1 className="text-3xl font-bold">Home</h1>
            <h3 className="text-xl">Essa é a nossa home</h3>
            <Image
            src="/bot.svg"
            alt="bot"
            width={200}
            height={200}
          />
        <div className="flex flex-col gap-5">
          <CardUser 
          avatar="https://github.com/Vitorram.png"
          name="Vitor Ramos" 
          mail="vitorramo@gmail.com"/>
          <CardUser 
          avatar="https://github.com/r.png"
          name="Joao Beta" 
          mail="1212@gmail.com"/>
          <CardUser 
          avatar="https://github.com/JGabrielFBeserra.png"
          name="Lucas Small" 
          mail="vitor1sdramo@gmail.com"/>
          <CardUser 
          avatar="https://github.com/tiago.png"
          name="Arthur neguinho" 
          mail="visadtorramo@gmail.com"/>
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