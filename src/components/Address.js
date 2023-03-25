import React from 'react'
import AddressData from './AddressData'

function Address() {
  return (
    <>
        <AddressData
            City="HỒ CHÍ MINH"
            NameStore="CỬA HÀNG FASHION (THẢO ĐIỀN)"
            Time="8h30 – 21h (Cả tuần)"
            Acreage="Diện tích: 900 m2 (Có chỗ đậu xe ô tô)"
            NumberPhone="Điện thoại: (028) 3535 1505 | (028) 3535 1506"
            Email="fashion_thaodien@company.com.vn"
            Address="107 - 109 Xa Lộ Hà Nội, Phường Thảo Điền, Quận 2, Thành phố Hồ Chí Minh"
        />
        <AddressData
            City="BÌNH DƯƠNG"
            NameStore="CỬA HÀNG NHÀ XINH (BÌNH DƯƠNG)"
            Time="8h30 - 20h00 (Từ thứ 2 đến thứ 6) & 8h30 - 20h30 (Thứ 7 & Chủ nhật)"
            Acreage="Diện tích: 500 m2 (Có chỗ đậu xe ô tô)"
            NumberPhone="Điện thoại: (028) 5413 6657"
            Email="Email: fashion_bd@company.com.vn"
            Address="442A Đại Lộ Bình Dương, Thành phố Thuận An"
        />
    </>
  )
}

export default Address
