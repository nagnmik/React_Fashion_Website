import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
            <div className="bottom">
                <div className='column'>
                        <h4>Về Fashion</h4>
                        <p>"Tận hưởng niềm vui của việc diện đồ chính là một nghệ thuật đích thực."</p>
                </div>
                <div className='column'>
                    <h4>Hệ thống cửa hàng</h4>
                    <p>CN1: Số 329 Huỳnh Văn Bánh, Phường 11, Quận Phú Nhuận, TPHCM.</p>
                    <p>CN2: Số 107 Võ Oanh, Phường 13, Quận Bình Thạnh, TPHCM</p>
                </div>
                <div className='column'>
                    <h4>Hỗ trợ khách hàng</h4>
                    <a href="/">Theo dõi đơn hàng</a>
                    <a href="/">Hướng dẫn mua hàng</a>
                    <a href="/">Chính sách đổi trả</a>
                </div>
                <div className='column'>
                    <h4>Chăm sóc khách hàng</h4>
                    <a href="/">
                        <i className='fa-solid fa-phone'></i>
                        0384 739 485
                    </a>
                    <a href="/">
                        <i className="fa-solid fa-envelope"></i>
                        info@fashion.com
                    </a>
                    <div>
                    <h4>Follow Us</h4>
                    <div className='follow_us'>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
  )
}

export default Footer
