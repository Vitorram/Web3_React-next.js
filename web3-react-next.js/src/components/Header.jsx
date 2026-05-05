import Logo from "@/components/Logo"
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import {useRouter} from "next/navigation"

export default function Header(){

    const router = useRouter()

    return (
        <header className="bg-gray-900 text-white flex items-center justify-between p-5 h-30">
           
            <Logo />

            <nav>
                <ul className="flex items-center gap-6 text-1xl">
                    
                    <li>
                    <Link href="/">Home</Link>
                    </li>
                    <li >Sobre</li>
                    <li >FAQ</li>
                    <li>
                    <Link href="/signup">Signup</Link>
                    </li>
                    <li>
                        <button type="button" onClick={() => router.push('/signup' + createQueryString('id', 5))}>Cadastre-se</button>
                    </li>
                    <li className="flex gap-1 items-center"><FaPhone /> Contato</li>
                </ul>
            </nav>

        </header>
    )
}