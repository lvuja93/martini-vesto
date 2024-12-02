import React, { useState } from "react";
import Slider from "react-slick";
import pic1 from "../../assets/RevijaOkt19/Black pants and green jacket.jpg";
import pic2 from "../../assets/RevijaOkt19/Burgundy suit.jpg";
import pic3 from "../../assets/RevijaOkt19/Elegant black.jpg";
import pic4 from "../../assets/RevijaOkt19/IMG_4226.jpg";
import pic5 from "../../assets/RevijaOkt19/IMG_4230.jpg";
import pic6 from "../../assets/RevijaOkt19/IMG_4267.jpg";

const ImageDisplayComponent = () => {
  const [category, setCategory] = useState("all");

  const items = [
    {
      id: 1,
      category: "coats",
      images: [pic1, pic4, pic5],
      description: "Zeleno odelo",
      price: "7,990 RSD",
    },
    {
      id: 2,
      category: "jackets",
      images: [pic2, pic6, pic3],
      description: "Braon odelo",
      price: "6,590 RSD",
    },
    {
      id: 3,
      category: "sweaters",
      images: [pic3, pic4, pic1],
      description: "Crno odelo",
      price: "2,750 RSD",
    },
    {
        id: 4,
        category: "sweaters",
        images: [pic3, pic4, pic1],
        description: "Crno odelo",
        price: "2,750 RSD",
      },
      {
        id: 5,
        category: "sweaters",
        images: [pic3, pic4, pic1],
        description: "Crno odelo",
        price: "2,750 RSD",
      },
      {
        id: 6,
        category: "sweaters",
        images: [pic3, pic4, pic1],
        description: "Crno odelo",
        price: "2,750 RSD",
      },
  ];

  const filterCategory = (category) => {
    setCategory(category);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 bg-[#7D7D7D] rounded-full flex justify-center items-center cursor-pointer z-10 transition-all duration-300 ease-in-out shadow-lg"
        >
            <span className="text-[#f5821f] mb-2 text-3xl font-bold transition-all duration-300 ease-in-out ">
                →
            </span>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 bg-[#7D7D7D] rounded-full flex justify-center items-center cursor-pointer z-10 transition-all duration-300 ease-in-out shadow-lg "
        >
            <span className="text-[#f5821f] mb-2 text-3xl font-bold transition-all duration-300 ease-in-out">
                ←
            </span>
        </div>
    );
}

  return (
    <div className="p-6 pt-32">
      <div className="flex gap-4 flex-wrap mb-6">
        <button
          className="px-4 py-2 bg-white border border-black text-black"
          onClick={() => filterCategory("all")}
        >
          Revija Pariz
        </button>
        <button
          className="px-4 py-2 bg-white border border-black text-black"
          onClick={() => filterCategory("jackets")}
        >
          Revija Madrid
        </button>
        <button
          className="px-4 py-2 bg-white border border-black text-black"
          onClick={() => filterCategory("sweaters")}
        >
          Beograd 2023
        </button>
        <button
          className="px-4 py-2 bg-white border border-black text-black"
          onClick={() => filterCategory("coats")}
        >
          Arena 2024
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 min-h-[600px]">
        {items
          .filter((item) => category === "all" || item.category === category)
          .map((item) => (
            <div key={item.id} className="p-4 text-center text-black">
              <Slider {...settings}>
                {item.images.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`${item.description} ${index}`}
                      className="w-[400px] h-[600px] object-cover mx-auto"
                    />
                  </div>
                ))}
              </Slider>
              <div className="mt-4 text-xl font-bold">{item.description}</div>
              <div className="mt-2 text-lg">{item.price}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageDisplayComponent;
