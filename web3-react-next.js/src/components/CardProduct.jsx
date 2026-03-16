export default function CardProduct(props) {
  const { avatar, name, preco, cat } = props;

  



  return (
    <div className="flex flex-col items-start gap-4 p-4 border-1 rounded-xl w-full max-w-sm shadow-sm hover:shadow-md transition-shadow">
      
      <div className=" w-full h-50 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={avatar}
          alt={name}
          className=" h-full w-full object-cover"
        />
      </div>

     
      <div className=" flex flex-col w-full gap-5">
        <h2 className=" flex justify-center text-3xl font-semibold text-gray-800 truncate">{name}</h2>
        <h2 className=" flex w-20 justify-center text-1xl font-semibold text-white truncate bg-gray-800 ">{cat}</h2>
       <div className="flex rounded-md justify-start">
        <p className=" text-green-500 text-2xl font-bold italic">
          {preco}
        </p>
        </div> 
      </div>
    </div>  
  );
}