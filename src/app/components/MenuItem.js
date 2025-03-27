// components/MenuItem.js
import Image from "next/image";
import Link from "next/link";

const MenuItem = ({ dish }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image src={dish.image} alt={dish.name} width={300} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{dish.name}</h3>
        <p className="text-red-500 font-bold">{dish.price ? `${dish.price}₫` : "Giá: Liên hệ"}</p>
        <Link href="#">
          <button className="mt-2 bg-brown-600 text-white py-2 px-4 rounded hover:bg-brown-700 w-full">Mua khóa học</button>
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
