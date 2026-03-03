export default function Footer(){
    return (
        <footer style={styles.footer_container}>
            <h1>Feito por Vitor esse é o Footer</h1>
            <h3>Esses manos fizeram o L</h3>
        </footer>
    )
}

const styles = {
    footer_container: {
        backgroundColor: "#e9a43cff",
        color: "#000000ff",
        padding: "20px",
        width: "100%",             
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }
    
}