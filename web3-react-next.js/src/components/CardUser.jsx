




export default function CardUser(props){ 

    const {avatar, name, mail} = props
    return(
<div className="flex items-center gap-4 p-4 border rounded-lg w-72">
    
    <img 
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full"
    />

    <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-emerald-500">{mail}</p>
    </div>

</div>
    )
}