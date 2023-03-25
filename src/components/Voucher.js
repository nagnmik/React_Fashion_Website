import React from 'react';
import './Voucher.css';
import VoucherData from './VoucherData';

function Voucher() {
  return (
    <>
        <div className='voucher-container'>
            <h4 className='voucher-heading'>ưu đãi dành cho bạn hôm nay!</h4>
            <div className='voucher'>
                <VoucherData
                    title="giao hàng tiêu chuẩn"
                    text="Freeship cho hoá đơn mua hàng 1 triệu (không áp dụng với các khuyến mãi khác)"
                />
                <VoucherData
                    title="giao hoả tốc tại Sài Gòn"
                    text="Tặng ngay mã giảm giá phí ship. Áp dụng cho hoá đơn 500.000 VNĐ"
                />
                <VoucherData
                    title="Tặng 125.000đ"
                    text="Áp dụng đặc biệt cho đơn hàng từ 2,5 triệu đồng."
                />
                <VoucherData
                    title="Khuyến mãi đến 10%"
                    text="Mã giảm 10% cho hoá đơn mua hàng trên 5 triệu đồng"
                />
            </div>
        </div>
    </>

  )
}

export default Voucher;
