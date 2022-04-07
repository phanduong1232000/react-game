import React from "react";
import Video from "../video/Video";
import "./Aboutsqf.css";

export default function AboutSQF() {
  return (
    <section className="bg-about-sqf">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="bg-title">Về SQF GAME</div>
            <div className="content-about-sqf">
              SQF là game bắn súng chiến thuật bắn súng theo tọa độ đề xuất với
              lối chơi kéo thả. Người chơi sẽ được trải nghiệm qua các cấp độ
              khác nhau từ dễ, trung bình đến khó, thông qua đó, đầy đủ các chức
              năng của trò chơi sẽ được mở ra. Bối cảnh của mỗi trò chơi chiến
              đấu là một khu vực được thiết kế với bố cục hợp lý và có màu sắc
              rực rỡ. SQF được xây dựng trên nền đồ họa 3D thống nhất nên trong
              tất cả các nhiệm vụ, các nhân vật đều có ngoại hình anime bắt mắt
              dễ thương cùng với các hiệu ứng kỹ năng hào nhoáng. Khi vào game,
              người chơi sẽ biết lý do tại sao họ lại làm như vậy loại nhiệm vụ.
              Họ có thể chiến đấu solo hoặc phối hợp với nhóm của bạn để chiến
              đấu…, hoặc chống lại Boss. Sau đó, trở thành người chiến thắng,
              người chơi hoàn thành nhiệm vụ của mình để thu thập thiết bị, vàng
              để chuẩn bị và lên cấp. Hãy chơi và thưởng thức cú đánh của bạn
              trong SQF !!!
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 text-center">
            <img
              className="w-100"
              src="https://gunbow-project.vercel.app/img/SQF/capdoihoancanh.png"
              alt="..."
            />
            <div className="img-items-video">
              <img
                className="img-sqf-right"
                src="https://gunbow-project.vercel.app/img/SQF/buttonwatchvideo.png"
                alt="..."
              />
              <Video />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
