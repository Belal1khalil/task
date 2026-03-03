// import axios from "axios";
// import { Star, ShoppingCart } from "lucide-react";
// import { useEffect, useState } from "react";

// import CardTask from "../../pages/card/card";

// export default function NewCard() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   async function getProducts() {
//     try {
//       const options = {
//         method: "GET",
//         url: "https://wooden.ahdafweb.com/public/api/products/latest-items",
//       };
//       const { data } = await axios.request(options);
//       console.log(data);
//       if (data.success === true) {
//         setProducts(data.data);
//       }
//       console.log(data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     getProducts();
//   }, []);
//   console.log(".....", products);
//   return (
//     <>
//       <div className="flex flex-col items-end gap-1 my-3 text-right px-4 ">
//         <h3 className="text-xl font-bold">منتجات جاهزه للطلب</h3>
//         <p className="text-sm text-gray-600">
//           يمكنك اختيار القطعه المناسبه وطلبها مباشرة بدون اي خطوات اضافيه
//         </p>
//       </div>
//       <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <>
//             {products.map((product) => (
//               <CardTask key={product.id} productInfo={product} />
//             ))}
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// NewCard.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import CardTask from "../../pages/card/card";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Lucide icon
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NewCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getProducts() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://wooden.ahdafweb.com/public/api/products/latest-items",
      );
      if (data.success) setProducts(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="px-4">
      {/* عنوان + وصف */}
      <div className="flex flex-col items-end gap-1 my-3 text-right">
        <h3 className="text-xl font-bold">منتجات جاهزه للطلب</h3>
        <p className="text-sm text-gray-600">
          يمكنك اختيار القطعه المناسبه وطلبها مباشرة بدون اي خطوات اضافيه
        </p>
      </div>

      {/* Swiper */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <CardTask productInfo={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation arrows at bottom right */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            <div className="swiper-button-prev static p-2 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition m-0">
              <ChevronRight size={20} />{" "}
              {/* Previous should point right in RTL */}
            </div>
            <div className="swiper-button-next static p-2 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition m-0">
              <ChevronLeft size={20} /> {/* Next should point left in RTL */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
