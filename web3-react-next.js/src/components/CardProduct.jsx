




export default function CardProduct(props){ 

    const {avatar, name, preco} = props
    return(
    <div className="flex flex-col items-start gap-4 p-4 border w-full">
    
    <img 
        src={avatar}
        alt={name}
        className="w-full" 
    />
    <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-green-500 text-2xl">{preco}</p>
    </div>

</div>
    )
}