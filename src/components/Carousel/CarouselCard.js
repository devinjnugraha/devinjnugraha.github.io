import React from "react";
import "./CarouselCard.scss";

export default function CarouselCard({cardInfo, isDark}) {
  return (
    <div style={{padding: "2.5rem"}}>
      <div className={isDark ? "dark-mode carousel-card" : "carousel-card"}>
        <div className="certificate-image-div-carousel">
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Card Thumbnail"}
            className="card-image-carousel"
          ></img>
        </div>
        <div className="certificate-detail-div">
          <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
            {cardInfo.title}
          </h5>
        </div>
      </div>
    </div>
  );
}
