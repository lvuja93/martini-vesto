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
  const [activeSlides, setActiveSlides] = useState({}); // Track the active slide for each slider

  const items = [
    {
      id: 1,
      category: "coats",
      images: [pic1, pic4, pic5, pic3, pic6],
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
      {
        id: 7,
        category: "sweaters",
        images: [pic3, pic4, pic1],
        description: "Crno odelo",
        price: "2,750 RSD",
      },
  ];

  const filterCategory = (category) => {
    setCategory(category);
  };

  const handleBeforeChange = (sliderId, _, next) => {
    setActiveSlides((prev) => ({
      ...prev,
      [sliderId]: next,
    }));
  };

  const createSettings = (item) => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_, next) => handleBeforeChange(item.id, _, next), // Update active slide for individual slider
    customPaging: (i) => (
      <div
        className={`w-[31px] h-12 cursor-pointer rounded-md transition-transform duration-300 ${
          activeSlides[item.id] === i
            ? "border-2 border-[#f5821f] transform scale-105 shadow-lg"
            : "border-2 border-transparent"
        }`}
        style={{
          margin: '0px -4px', // Add left and right margin to ensure proper spacing
          boxSizing: 'border-box', // Ensure that padding is part of the width
        }}
      >
        <img
          src={item.images[i % item.images.length]}
          alt={`Thumbnail ${i + 1}`}
          className="w-full h-full object-cover rounded-md "
          style={{
            // display: 'block', // Ensure that the image takes full space
            maxWidth: '100%', // Avoid overflow
            height: '100%', // Ensure correct aspect ratio
          }}
        />
      </div>
    ),
    dotsClass: "slick-dots flex justify-center gap-2 mt-4", // Reduce gap to adjust thumbnail spacing
  });

  function SampleNextArrow({ onClick }) {
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 right-11 transform -translate-y-1/2 w-12 h-12  opacity-0 group-hover:opacity-100 rounded-full flex justify-center items-center cursor-pointer z-10 transition-all duration-300 ease-in-out shadow-lg hidden md:flex"
      >
        <span className="text-[#f5821f] mb-1 text-5xl font-bold">{'>'}</span>
      </div>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 left-11 transform -translate-y-1/2 w-12 h-12 opacity-0 group-hover:opacity-100 rounded-full flex justify-center items-center cursor-pointer z-10 transition-all duration-300 ease-in-out shadow-lg hidden md:flex"
      >
        <span className="text-[#f5821f] mb-1 text-5xl font-bold">{'<'}</span>
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

      <div className="grid grid-cols-1 md:grid-cols-6 min-h-[600px]">
        {items
          .filter((item) => category === "all" || item.category === category)
          .map((item) => (
            <div key={item.id} className="p-4 text-center text-black relative group">
              <Slider {...createSettings(item)}>
                {item.images.map((img, index) => (
                  <div key={index}>
                    <img
                      src={img}
                      alt={`${item.description} ${index}`}
                      className="w-[400px] h-[500px] md:h-[600px] object-cover mx-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
              <div className="mt-16 text-xl font-bold">{item.description}</div>
              <div className="mt-2 text-lg">{item.price}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageDisplayComponent;
