import React from "react";

const posts = [
  {
    image: "https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/cach-lam-banh-flan-thom-ngon.jpg",
    title: 'Thực đơn giá “sinh viên” đi chợ chỉ hết 60k mà đủ các món ngon lành',
    date: '16/04/2019',
  },
  {
    image: "https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/cach-lam-banh-flan-thom-ngon.jpg",
    title: 'Bí quyết làm bánh flan mịn căng mềm mượt đẹp “như hoa hậu”',
    date: '16/04/2019',
  },
  {
    image: "https://demo.tamnguyen.vn/nhahang/wp-content/uploads/2019/04/mi-tron-ga-xe-6-1552905753415121749128-1.jpg",
    title: 'Tôi làm mì trộn mang đi ăn trưa, cả văn phòng nhao nhao đòi ăn ké',
    date: '16/04/2019',
  },
];

export default function NewPosts() {
  return (
    <section className="py-14 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-normal italic mb-2 text-black"style={{ fontFamily: '"Lobster", sans-serif' }}>Bài viết mới</h2>
      <p className="text-gray-600 mb-10">
        Cùng đầu bếp của Nhà hàng chúng tôi tìm hiểu và học cách chế biến một số món ăn thông dụng nhé!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="text-left">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-black">{post.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
