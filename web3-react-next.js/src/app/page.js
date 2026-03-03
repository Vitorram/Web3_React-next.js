import Headers from "@/components/Header"
import Footer from "@/components/Footer"
import SideBar from "@/components/SideBar"

export default function Home(){
    return (
      <div style={style.page}> 
        <Headers />
        
        <main style={style.main}>
          <SideBar />
          <div>
            <p>Parte destacada para o main</p>
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
  },

  main:{
    display: "flex",
    flex: 1,
  },

}