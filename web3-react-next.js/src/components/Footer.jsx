import Logo from "@/components/Logo"

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 flex flex-col items-end gap-2">
      
      <Logo />

      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} - Todos os direitos reservados
      </p>

    </footer>
  )
}