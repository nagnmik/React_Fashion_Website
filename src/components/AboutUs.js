import React from 'react';
import AboutUsData from './AboutUsData';
import './AboutUs.css';
import Image1 from '../assets/38.jpg';
import Image2 from '../assets/39.jpg';



function AboutUs() {
  return (
    <>
      <div className="aboutus">
              <AboutUsData
                  heading="Phong cách thời trang Unisex"
                  text="Phong cách thời trang Unisex sẽ chủ yếu là những bộ trang phục có mẫu thiết kế nổi bật, độc đáo phù hợp cho cả phái nam và phái nữ. Phong cách này sẽ phù hợp với những bạn yêu thích những bộ trang phục rộng rãi, thoải mái, không bị gò bó về kiểu cách mẫu thiết kế. Đồng thời thể hiện cá tính, chất riêng của mình trong các mix – match đem tới sự năng động, trẻ trung và hiện đại hơn. "
                  img1={Image1}
                  img2={Image2}
              />
        </div>
      </>
  )
}

export default AboutUs
