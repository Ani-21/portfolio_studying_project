import React from "react";
import "./testimonials.css";
import user1 from "../../assets/user-1.jpg";
import user2 from "../../assets/user-2.jpg";
import user3 from "../../assets/user-3.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    user: user1,
    name: "Andrei Show",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Ursus turpis massa tincidunt dui ut ornare lectus sit. Adipiscing diam done",
  },
  {
    user: user2,
    name: "Shatta Wale",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    user: user3,
    name: "Hello World",
    review:
      "Pretium lectus quam id leo in vitae turpis. Habitant morbi tristique senectus et. Cursus turpis massa tincidunt dui ut ornare lectus sit. Adipiscing diam donec adipiscing tristique risus nec. Volutpat ac tincidunt vitae semper quis.",
  },
];

const Testimonials = () => {
  const reviewsList = data.map(({ user, name, review }) => (
    <SwiperSlide className="testimonial">
      <div className="client__avatar">
        <img src={user} alt="" />
      </div>
      <h5 className="client__name">{name}</h5>
      <p>{review}</p>
      <small className="client__review"></small>
    </SwiperSlide>
  ));

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        className="container testimonials__container"
        pagination={{ clickable: true }}
      >
        {reviewsList}
      </Swiper>
    </section>
  );
};

export default Testimonials;
