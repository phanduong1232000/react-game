import React from "react";
import "./Monneynft.css";
import Slidermoney from "./Slidermoney";
import Tutorial from "./Tutorial";


export default function Monneynft() {
  return (
    <section className="bg-monney-nft">
      <div className="container">
        <div className="bg-title">Bộ tài sản NFT</div>
        <div className="content">
          Có nhiều loại NFT trong dự án này mà bạn có thể sử dụng để tăng sức
          mạnh cho các nhân vật của mình. Nhìn chung, NFT được chia thành 2 loại
          chính: NFT giới hạn và NFT tiêu hao. NFT có giới hạn: bao gồm vũ khí,
          trang phục, phụ kiện, vật nuôi, ... Những loại NFT này có số lượng
          giới hạn, trong đó người chơi lưu trữ giá trị khi họ nâng cấp cấp độ
          từng ngày ngày. NFT có thể được trao đổi, mua hoặc bán trên thị
          trường. NFT tích lũy: bao gồm các loại đá cường hóa, vật liệu nâng
          cấp, ngọc, thẻ, bùa, ... Đây là những loại NFT có thể tiêu hao, nghĩa
          là sau khi sử dụng, chúng sẽ trực tiếp bị đốt cháy. Những NFT này vẫn
          được trao đổi trên thị trường như NFT giới hạn. NFT tiêu hao là vật
          liệu mà mọi người có thể sử dụng để tăng NFT giới hạn mà họ sở hữu.
        </div>

        <Slidermoney />
        <Tutorial />
      </div>
    </section>

  );
}
