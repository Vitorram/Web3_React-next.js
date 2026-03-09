import styles2 from "./Header.module.css"

export default function Header(){
    return (
        <header className="bg-[#471754] text-white flex justify-between p-5 gap-5 font-sans">
            <h1 className={styles2.logo}>Logo</h1>
            <nav>
                <ul style={styles.nav}>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>FAQ</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}


const styles = {
    nav: {
        display: "flex",
        listStyleType: "none",
        gap: 20,
        fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }
}