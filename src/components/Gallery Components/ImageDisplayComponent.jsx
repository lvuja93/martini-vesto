import React, { useState } from "react";
import Slider from "react-slick";
import bg1 from "../../assets/BG April 2024/bfw10_77_11zon.jpg"
import bg2 from "../../assets/BG April 2024/bfw20_78_11zon.jpg"
import bg3 from "../../assets/BG April 2024/bfw22_79_11zon.jpg"
import bg4 from "../../assets/BG April 2024/bfw29_80_11zon.jpg"
import bg5 from "../../assets/BG April 2024/bfw31_81_11zon.jpg"
import bg6 from "../../assets/BG April 2024/bfw36_82_11zon.jpg"
import bg7 from "../../assets/BG April 2024/bfw41_83_11zon.jpg"
import bg8 from "../../assets/BG April 2024/bfw46_84_11zon.jpg"
import bg9 from "../../assets/BG April 2024/bfw8_76_11zon.jpg"
import malta1 from "../../assets/Malta-2024/2222_62_11zon.jpg"
import malta2 from "../../assets/Malta-2024/449459597_1010996377077987_7696293048127267846_n_64_11zon.jpg"
import malta3 from "../../assets/Malta-2024/449472431_1010997843744507_6157043370241661024_n_65_11zon.jpg"
import malta4 from "../../assets/Malta-2024/2222_62_11zon.jpg"
import malta5 from "../../assets/Malta-2024/449487467_1010996217078003_8528944051177023479_n_67_11zon.jpg"
import malta6 from "../../assets/Malta-2024/449529430_1010995807078044_4612151549079170834_n_68_11zon.jpg"
import malta7 from "../../assets/Malta-2024/449594880_1010998210411137_3759450828644252210_n_69_11zon.jpg"
import malta8 from "../../assets/Malta-2024/449612583_1010998363744455_2697918076027808065_n_70_11zon.jpg"
import malta9 from "../../assets/Malta-2024/449613381_1010995210411437_2781288821668268183_n_71_11zon.jpg"
import malta10 from "../../assets/Malta-2024/2222_62_11zon.jpg"
import malta11 from "../../assets/Malta-2024/449637044_1010997917077833_2877123695440205771_n_73_11zon.jpg"
import malta12 from "../../assets/Malta-2024/449638834_1010999847077640_4509634362780005740_n_74_11zon.jpg"
import malta13 from "../../assets/Malta-2024/449751109_1010995980411360_8342903675703731244_n_75_11zon.jpg"
import malta14 from "../../assets/Malta-2024/88888_63_11zon.jpg"
import malta15 from "../../assets/Malta-2024/555_61_11zon.jpg"
import mv241 from "../../assets/mv-2024/503A5710aaa_27_11zon.jpg"
import mv242 from "../../assets/mv-2024/IMG_1481_46_11zon.jpeg"
import mv243 from "../../assets/mv-2024/IMG_1486_47_11zon.jpeg"
import mv244 from "../../assets/mv-2024/bro114_28_11zon.jpg"
import mv245 from "../../assets/mv-2024/bro122_29_11zon.jpg"
import mv246 from "../../assets/mv-2024/bro126_30_11zon.jpg"
import mv247 from "../../assets/mv-2024/bro139_31_11zon.jpg"
import mv248 from "../../assets/mv-2024/bro147_32_11zon.jpg"
import mv249 from "../../assets/mv-2024/bro159_33_11zon.jpg"
import mv2410 from "../../assets/mv-2024/bro160_34_11zon.jpg"
import mv2411 from "../../assets/mv-2024/bro169_35_11zon.jpg"
import mv2412 from "../../assets/mv-2024/bro178_36_11zon.jpg"
import mv2413 from "../../assets/mv-2024/bro200_37_11zon.jpg"
import mv2414 from "../../assets/mv-2024/bro202_38_11zon.jpg"
import mv2415 from "../../assets/mv-2024/bro205_39_11zon.jpg"
import mv2416 from "../../assets/mv-2024/bro207_40_11zon.jpg"
import mv2417 from "../../assets/mv-2024/bro211_41_11zon.jpg"
import mv2418 from "../../assets/mv-2024/bro223_42_11zon.jpg"
import mv2419 from "../../assets/mv-2024/bro228_43_11zon.jpg"
import mv2420 from "../../assets/mv-2024/bro229_44_11zon.jpg"
import mv2421 from "../../assets/mv-2024/bro235_45_11zon.jpg"


const ImageDisplayComponent = () => {
  const [category, setCategory] = useState("all");
  const [activeSlides, setActiveSlides] = useState({}); // Track the active slide for each slider

  const items = [
    {
      id: 1,
      category: "beograd2024",
      images: [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9],
      description: "Zeleno odelo",
      price: "7,990 RSD",
    },
    {
      id: 2,
      category: "malta2024",
      images: [malta1, malta2, malta3, malta4, malta5, malta6, malta7, malta8, malta9, malta10, malta11, malta12, malta13, malta14, malta15],
      description: "Braon odelo",
      price: "6,590 RSD",
    },
    {
      id: 3,
      category: "mv2024",
      images: [mv241, mv242, mv243, mv244, mv245, mv246, mv247, mv248, mv249, mv2410, mv2411, mv2412, mv2413, mv2414, mv2415, mv2416, mv2417, mv2418, mv2419, mv2420, mv2421],
      description: "Crno odelo",
      price: "2,750 RSD",
    },
    {
      id: 4,
      category: "sweaters",
      images: [],
      description: "Crno odelo",
      price: "2,750 RSD",
    },
    {
      id: 5,
      category: "sweaters",
      images: [],
      description: "Crno odelo",
      price: "2,750 RSD",
    },
    {
      id: 6,
      category: "sweaters",
      images: [],
      description: "Crno odelo",
      price: "2,750 RSD",
    },
    {
      id: 7,
      category: "sweaters",
      images: [],
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
        className={`w-[31px] h-12 cursor-pointer rounded-md transition-transform duration-300 ${activeSlides[item.id] === i
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
        className="absolute top-1/2 right-7 transform -translate-y-1/2 w-12 h-12  opacity-0 group-hover:opacity-100 rounded-full flex justify-center items-center cursor-pointer z-10 transition-all duration-300 ease-in-out shadow-lg hidden md:flex"
      >
        <span className="text-[#f5821f] mb-1 text-5xl font-bold">{'>'}</span>
      </div>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 left-7 transform -translate-y-1/2 w-12 h-12 opacity-0 group-hover:opacity-100 rounded-full flex justify-center items-center cursor-pointer z-10 transition-all duration-300 ease-in-out shadow-lg hidden md:flex"
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
          onClick={() => filterCategory("beograd2024")}
        >
          Beograd 2024
        </button>
        <button
          className="px-4 py-2 bg-white border border-black text-black"
          onClick={() => filterCategory("malta2024")}
        >
          Malta 2024
        </button>
        <button
          className="px-4 py-2 bg-white border border-black text-black"
          onClick={() => filterCategory("mv2024")}
        >
          2024
        </button>
        <button
          className="px-4 py-2 bg-white border border-black text-black"
          onClick={() => filterCategory("coats")}
        >
          Arena 2024
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 min-h-[600px]">
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
                      className="w-[400px] h-[500px] xl:w-auto md:h-auto object-cover mx-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
              <div className="mt-14 text-xl font-bold">{item.description}</div>

            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageDisplayComponent;
