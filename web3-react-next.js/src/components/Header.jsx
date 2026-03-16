import Logo from "@/components/Logo"
import { FaPhone } from "react-icons/fa";
export default function Header(){
    return (
        <header className="bg-gray-900 text-white flex items-center justify-between p-5 h-30">
           
            <Logo />

            <nav>
                <ul className="flex items-center gap-6 text-1xl">
                    
                    <li >Home</li>
                    <li >Sobre</li>
                    <li >FAQ</li>
                    <li className="flex gap-1 items-center"><FaPhone /> Contato</li>
                </ul>
            </nav>

        </header>
    )
}