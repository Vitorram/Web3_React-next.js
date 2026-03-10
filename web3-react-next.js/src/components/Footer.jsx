import Logo from "@/components/Logo"

export default function Footer(){
    return (
        <footer style={styles.footer_container}>
            <h1>Feito por Vitor esse é o Footer</h1>
            <h3>Esses manos fizeram o L</h3>
            <Logo />
        </footer>
    )
}

const styles = {
    footer_container: {
        backgroundColor: "#f2445e", 
        color: "#dec87a", 
        padding: "20px",
        width: "100%",             
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "end",
        textAlign: "center"
    }
}