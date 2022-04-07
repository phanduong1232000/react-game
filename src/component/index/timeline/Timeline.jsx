import React from "react";
import Team from "../team/Team";
import "./Timeline.css";
import Timelinedetail from "./Timelinedetail";

export default function Timeline() {
  return (
    <section className="timeline">
      <div className="container">
        <div className="bg-title">Lộ trình</div>
        <div className="content">
          Xin lưu ý rằng quá trình phát triển trò chơi đang diễn ra và tất cả
          các ngày dự kiến có thể thay đổi. Mọi sự chậm trễ nếu phát sinh sẽ
          được thông báo đến cộng đồng trong thời gian sớm nhất.
        </div>
        <Timelinedetail />
        <Team />
      </div>
    </section>
  );
}
