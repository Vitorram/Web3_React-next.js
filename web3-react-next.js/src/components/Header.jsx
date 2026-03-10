import Logo from "@/components/Logo"
import { AiOutlineAlipay } from "react-icons/ai";

export default function Header(){
    return (
        <header className="bg-[#471754] text-white flex items-center justify-between p-5">
           
            <Logo />

            <nav>
                <ul className="flex items-center gap-6 text-2xl">
                    
                    <li >Home</li>
                    <li >Sobre</li>
                    <li >FAQ</li>
                    <li className="flex gap-1">Contato <AiOutlineAlipay /> </li>
                </ul>
            </nav>

        </header>
    )
}