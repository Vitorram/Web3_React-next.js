import styles2 from "./Header.module.css"

export default function Logo(){
    return (
        <div className="flex gap-10 items-center">
           <img
             src="https://avatars.githubusercontent.com/u/161902126?v=4" 
             alt="Avatar GitHub" 
             width={80}
             height={80}
             className=" rounded-full "
           />
           <h1 className={styles2.logo}>Vitor Ramos</h1>
        </div>
    )
}