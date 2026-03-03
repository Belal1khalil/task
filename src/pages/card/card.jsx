import { Star, ShoppingCart } from "lucide-react";
export default function CardTask({ productInfo }) {
  return (
       <>
        
    <div className="bg-[#f5f1e8] p-4 rounded-2xl">
  
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
        <div className="relative">
          <img
            src={productInfo.main_image}
            alt={productInfo.name}
            className="w-full h-64 object-cover"
          />

          {productInfo.is_best_seller && (
            <span className="absolute top-3 right-3 bg-amber-700 text-white text-xs px-3 py-1 rounded-md">
              الأكثر مبيعاً
            </span>
          )}
        </div>

        <div className="p-4 text-right">
          <div className="flex items-center justify-end gap-1 text-sm text-gray-600 mb-2">
            <span>{Number(productInfo.average_rating).toFixed(1)}</span>
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>

          <h3 className="text-gray-800 font-medium mb-2">{productInfo.name}</h3>

          <div className="flex items-center justify-between mt-4">
            <button className="w-10 h-10 flex items-center justify-center bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition">
              <ShoppingCart className="w-5 h-5" />
            </button>

            <div className="text-lg font-semibold text-amber-700">
              {productInfo.price} ريال
            </div>
          </div>
        </div>
      </div>
    </div>
       </>
  );
}
