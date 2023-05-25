import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container mx-auto">
        <SectionTitle
            title={"TESTIMONIALS"}
            subTitle={"What our client say"}
        ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-20 text-center flex flex-col items-center space-y-4">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <FaQuoteRight></FaQuoteRight>
              <p>{review.details}</p>
              <h2 className="text-3xl text-amber-600">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
