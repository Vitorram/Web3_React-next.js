export default function CardProduct(props) {
  const { avatar, name, preco } = props;

  return (
    <div className="flex flex-col items-start gap-4 p-4 border-2 rounded-xl w-full max-w-sm shadow-sm hover:shadow-md transition-shadow">
      
      <div className="border-2 w-full h-64 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className=" flex flex-col w-full gap-5">
        <h2 className=" flex justify-center text-3xl font-semibold text-gray-800 truncate">{name}</h2>
       <div className=" bg-black flex border border-black rounded-md justify-center">
        <p className=" text-white text-2xl font-bold italic">
          {preco}
        </p>
        </div> 
      </div>
    </div>
  );
}