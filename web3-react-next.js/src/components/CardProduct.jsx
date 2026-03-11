export default function CardProduct(props) {
  const { avatar, name, preco } = props;

  return (
    <div className="flex flex-col items-start gap-4 p-4 border rounded-xl w-full max-w-sm shadow-sm hover:shadow-md transition-shadow">
      
      <div className="w-full h-64 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="w-full space-y-1">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{name}</h2>
        <p className="text-green-600 text-2xl font-bold italic">
          {preco}
        </p>
      </div>
      
      
      <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
        Comprar Agora
      </button>
    </div>
  );
}