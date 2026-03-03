export default function SideBar(){
    return (
        <div style={styles.sideBar}>
            <ul style={styles.nav}>
                <li>Config</li>
                <li>Clientes</li>
                <li>Lojas</li>
                <li>Locais</li>
                <li>Sair</li>
            </ul>
        </div>
    )
}

const styles = {
    sideBar: {
        backgroundColor: "#caeeacff",
        height: "100vh", 
        width: 250
    },
    nav: {
    listStyleType: "none",
    fontSize: 55, 
    color: "#070401ff",
    padding: 40,
    margin: 0,

    display: "flex",
    flexDirection: "column",
    gap: "20px"   
}
}