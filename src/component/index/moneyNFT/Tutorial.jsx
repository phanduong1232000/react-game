import React from "react";

export default function Tutorial() {
  return (
    <React.Fragment>
      <div className="bg-title">Lối chơi</div>
      <div className="content">Mô tả về lối chơi của trò chơi !</div>
      <div className="text-center mt-5">
        <img className="w-100"
          src="https://gunbow-project.vercel.app/img/gameplay/gameplay1.png"
          alt="..."
        />
      </div>
      <div className="icon-tutorial">
      <img className="icon1-tutorial"
          src="https://gunbow-project.vercel.app/img/collections/Collection9.png"
          alt="..."
        />
        <img className="icon2-tutorial"
          src="https://gunbow-project.vercel.app/img/collections/Collection1.png"
          alt="..."
        />
      </div>
      
    </React.Fragment>
  );
}
