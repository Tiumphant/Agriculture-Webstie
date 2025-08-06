import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./services.css";

const service = [
  {
    name: "Healthcare",
    icon: "🩺",
    image:
      "https://t3.ftcdn.net/jpg/02/81/21/10/360_F_281211036_24KPea5poawt4mXYlEjRUwsCgomtjoVc.jpg",
    description:
      "Accessible and affordable medical facilities and wellness programs.",
  },
  {
    name: "Education",
    icon: "📚",
    image:
      "https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?fm=jpg&q=60&w=3000",
    description:
      "Quality primary and higher education resources for all age groups.",
  },
  {
    name: "Farming Support",
    icon: "🌾",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZFrfNy3c2aD_OqxIE7fDZdBSvkHKt76srA&s",
    description:
      "Tools, training, and subsidies for sustainable farming techniques.",
  },
  {
    name: "Employment",
    icon: "💼",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6y4r_F5DnK0-8E49TmPzlkYcBUwsChReEAQ&s",
    description: "Job training and placement programs to reduce unemployment.",
  },
  {
    name: "Water Supply",
    icon: "🚰",
    image:
      "https://media.istockphoto.com/id/695936038/photo/irrigation-in-the-field.jpg?s=612x612&w=0&k=20&c=BnEwImEWilc_oTbWZAi5_JLSSEv_OiooBhR7yWujT_s=",
    description: "Clean and reliable water access for drinking and irrigation.",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="services" data-aos="fade-in">
      <div className="container">
        <h2 className="text-center text-success mb-4">Our Services</h2>
        <div className="row justify-content-center">
          {service.map((s, i) => (
            <div
              key={i}
              className="col-md-4 mb-4 d-flex justify-content-center"
              data-aos="fade-up"
            >
              <div className="card service-card text-center shadow-sm p-3">
                <img
                  src={s.image}
                  alt={s.name}
                  className="card-img-top mx-auto"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {s.icon} {s.name}
                  </h5>
                  <p className="card-text">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
