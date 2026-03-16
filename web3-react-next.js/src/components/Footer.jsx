import Logo from "@/components/Logo"

export default function Footer(){
    return (
        <footer className="bg-gray-900 text-white p-5 flex text-center flex-col justify-center items-end ">

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