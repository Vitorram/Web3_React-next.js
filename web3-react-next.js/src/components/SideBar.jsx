export default function SideBar(){
    return (
        <div style={styles.sideBar}>
            <ul style={styles.nav}>
                <h1 className="text-3xl font-bold">SideBar</h1>
            <h3 className="text-xl">Esse é o SideBar</h3>
            </ul>
        </div>
    )
}

const styles = {
   sideBar: {
  backgroundColor: "#fff",
  width: 250,
  borderRightWidth: 1,
  borderColor: "#000",
},
    nav: {
    listStyleType: "none",
    color: "#070401ff",
    padding: 40,
    margin: 0,
    fontFamily: "'Roboto', Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: "20px"   
}
}