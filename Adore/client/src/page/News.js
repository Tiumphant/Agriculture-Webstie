import React from "react";
import "./news.css"; // optional styling

export default function News() {
  const newsList = [
    {
      title: "Govt Launches Free Health Camps in Rural Villages",
      date: "August 1, 2025",
    },
    {
      title: "Solar Power Projects Bring Electricity to Remote Areas",
      date: "July 28, 2025",
    },
    {
      title: "New Mobile Library Service for Rural Students",
      date: "July 24, 2025",
    },
  ];

  return (
    <div className="news-section">
      <h2>📢 News & Updates</h2>
      <ul className="news-list">
        {newsList.map((news, index) => (
          <li key={index} className="news-item">
            <strong>{news.title}</strong>
            <p className="news-date">{news.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
