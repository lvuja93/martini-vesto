import React, { useState } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";



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
import mv231 from "../../assets/mv-2023/mv10_15_11zon.jpg"
import mv232 from "../../assets/mv-2023/mv15_16_11zon.jpg"
import mv233 from "../../assets/mv-2023/mv18_17_11zon.jpg"
import mv234 from "../../assets/mv-2023/mv27_18_11zon.jpg"
import mv235 from "../../assets/mv-2023/mv29_19_11zon.jpg"
import mv236 from "../../assets/mv-2023/mv32_20_11zon.jpg"
import mv237 from "../../assets/mv-2023/mv42_21_11zon.jpg"
import mv238 from "../../assets/mv-2023/mv42_21_11zon.jpg"
import mv239 from "../../assets/mv-2023/mv46_22_11zon.jpg"
import mv2310 from "../../assets/mv-2023/mv67_23_11zon.jpg"
import mv2311 from "../../assets/mv-2023/mv78_24_11zon.jpg"
import mv2312 from "../../assets/mv-2023/mv89_25_11zon.jpg"
import mv2313 from "../../assets/mv-2023/mv8_14_11zon.jpg"
// import mv221 from "../../assets/mv-2022/_DJT8710_Martini Vesto by Boško_48.jpg"
// import mv222 from "../../assets/mv-2022/_DJT8720_Martini Vesto by Boško_49.jpg"
// import mv223 from "../../assets/mv-2022/_DJT8757_Martini Vesto by Boško_50.jpg"
// import mv224 from "../../assets/mv-2022/_DJT8781_Martini Vesto by Boško_51.jpg"
// import mv225 from "../../assets/mv-2022/_DJT8812_Martini Vesto by Boško_52.jpg"
// import mv226 from "../../assets/mv-2022/_DJT8836_Martini Vesto by Boško_53.jpg"
// import mv227 from "../../assets/mv-2022/_DJT8864_Martini Vesto by Boško_54.jpg"
// import mv228 from "../../assets/mv-2022/_DJT8879_Martini Vesto by Boško_55.jpg"
// import mv229 from "../../assets/mv-2022/_DJT8964_Martini Vesto by Boško_56.jpg"
// import mv2210 from "../../assets/mv-2022/_DJT9313_Martini Vesto by Boško_57.jpg"
// import mv2211 from "../../assets/mv-2022/_DJT9381_Martini Vesto by Boško_58.jpg"
// import mv2212 from "../../assets/mv-2022/_DJT9450_Martini Vesto by Boško_59.jpg"
// import mv2213 from "../../assets/mv-2022/_DJT9560_Martini Vesto by Boško_60.jpg"

const ImageDisplayComponent = () => {
  const [category, setCategory] = useState("all");

  const items = [
    // Beograd 2024
    { id: 1, category: "beograd2024", image: bg1, description: "Zeleno odelo", price: "7,990 RSD" },
    { id: 2, category: "beograd2024", image: bg2, description: "Plavo odelo", price: "8,500 RSD" },
    { id: 3, category: "beograd2024", image: bg3, description: "Crno odelo", price: "6,700 RSD" },
    { id: 4, category: "beograd2024", image: bg4, description: "Belo odelo", price: "7,200 RSD" },
    { id: 5, category: "beograd2024", image: bg5, description: "Sivo odelo", price: "7,800 RSD" },
    { id: 6, category: "beograd2024", image: bg6, description: "Tamno zeleno odelo", price: "8,100 RSD" },
    { id: 7, category: "beograd2024", image: bg7, description: "Svetlo plavo odelo", price: "6,900 RSD" },
    { id: 8, category: "beograd2024", image: bg8, description: "Tamnije odelo", price: "7,500 RSD" },
    { id: 9, category: "beograd2024", image: bg9, description: "Klasično odelo", price: "8,000 RSD" },

    // Malta 2024
    { id: 10, category: "malta2024", image: malta1, description: "Braon odelo", price: "6,590 RSD" },
    { id: 11, category: "malta2024", image: malta2, description: "Crveno odelo", price: "6,800 RSD" },
    { id: 12, category: "malta2024", image: malta3, description: "Tamno braon odelo", price: "7,000 RSD" },
    { id: 13, category: "malta2024", image: malta4, description: "Bež odelo", price: "6,400 RSD" },
    { id: 14, category: "malta2024", image: malta5, description: "Ljubičasto odelo", price: "7,200 RSD" },
    { id: 15, category: "malta2024", image: malta6, description: "Svetlo crveno odelo", price: "6,900 RSD" },
    { id: 16, category: "malta2024", image: malta7, description: "Zlatno odelo", price: "8,100 RSD" },
    { id: 17, category: "malta2024", image: malta8, description: "Bronz odelo", price: "7,700 RSD" },
    { id: 18, category: "malta2024", image: malta9, description: "Tamnije braon odelo", price: "7,500 RSD" },
    { id: 19, category: "malta2024", image: malta10, description: "Klasično bež odelo", price: "8,200 RSD" },
    { id: 20, category: "malta2024", image: malta11, description: "Elegantno odelo", price: "7,900 RSD" },
    { id: 21, category: "malta2024", image: malta12, description: "Formalno odelo", price: "8,000 RSD" },
    { id: 22, category: "malta2024", image: malta13, description: "Svečano odelo", price: "8,500 RSD" },
    { id: 23, category: "malta2024", image: malta14, description: "Prolećno odelo", price: "7,300 RSD" },
    { id: 24, category: "malta2024", image: malta15, description: "Letnje odelo", price: "6,800 RSD" },

    // MV 2024
    { id: 25, category: "mv2024", image: mv241, description: "Crno odelo", price: "2,750 RSD" },
    { id: 26, category: "mv2024", image: mv242, description: "Belo odelo", price: "3,000 RSD" },
    { id: 27, category: "mv2024", image: mv243, description: "Sivo odelo", price: "2,900 RSD" },
    { id: 28, category: "mv2024", image: mv244, description: "Tamno crno odelo", price: "3,100 RSD" },
    { id: 29, category: "mv2024", image: mv245, description: "Svetlo belo odelo", price: "3,200 RSD" },
    { id: 30, category: "mv2024", image: mv246, description: "Zlatno odelo", price: "3,400 RSD" },
    { id: 31, category: "mv2024", image: mv247, description: "Bronz odelo", price: "3,500 RSD" },
    { id: 32, category: "mv2024", image: mv248, description: "Elegantno odelo", price: "3,800 RSD" },
    { id: 33, category: "mv2024", image: mv249, description: "Formalno odelo", price: "3,900 RSD" },
    { id: 34, category: "mv2024", image: mv2410, description: "Svečano odelo", price: "4,000 RSD" },
    { id: 35, category: "mv2024", image: mv2411, description: "Prolećno odelo", price: "4,200 RSD" },
    { id: 36, category: "mv2024", image: mv2412, description: "Letnje odelo", price: "4,300 RSD" },
    { id: 37, category: "mv2024", image: mv2413, description: "Jesenje odelo", price: "4,500 RSD" },
    { id: 38, category: "mv2024", image: mv2414, description: "Zimsko odelo", price: "4,700 RSD" },


    // MV 2023
    { id: 39, category: "mv2023", image: mv231, description: "Crno odelo", price: "2,750 RSD" },
    { id: 40, category: "mv2023", image: mv232, description: "Belo odelo", price: "3,000 RSD" },
    { id: 41, category: "mv2023", image: mv233, description: "Sivo odelo", price: "2,900 RSD" },
    { id: 42, category: "mv2023", image: mv234, description: "Tamno crno odelo", price: "3,100 RSD" },
    { id: 43, category: "mv2023", image: mv235, description: "Svetlo belo odelo", price: "3,200 RSD" },
    { id: 44, category: "mv2023", image: mv236, description: "Zlatno odelo", price: "3,400 RSD" },
    { id: 45, category: "mv2023", image: mv237, description: "Bronz odelo", price: "3,500 RSD" },
    { id: 46, category: "mv2023", image: mv238, description: "Elegantno odelo", price: "3,800 RSD" },
    { id: 47, category: "mv2023", image: mv239, description: "Formalno odelo", price: "3,900 RSD" },
    { id: 48, category: "mv2023", image: mv2310, description: "Svečano odelo", price: "4,000 RSD" },
    { id: 49, category: "mv2023", image: mv2311, description: "Prolećno odelo", price: "4,200 RSD" },
    { id: 50, category: "mv2023", image: mv2312, description: "Svečano odelo", price: "4,000 RSD" },
    { id: 51, category: "mv2023", image: mv2313, description: "Prolećno odelo", price: "4,200 RSD" },

    // MV 2022
    // { id: 52, category: "mv2022", image: mv221, description: "Crno odelo", price: "2,750 RSD" },
    // { id: 53, category: "mv2022", image: mv222, description: "Belo odelo", price: "3,000 RSD" },
    // { id: 54, category: "mv2022", image: mv223, description: "Sivo odelo", price: "2,900 RSD" },
    // { id: 55, category: "mv2022", image: mv224, description: "Tamno crno odelo", price: "3,100 RSD" },
    // { id: 56, category: "mv2022", image: mv225, description: "Svetlo belo odelo", price: "3,200 RSD" },
    // { id: 57, category: "mv2022", image: mv226, description: "Zlatno odelo", price: "3,400 RSD" },
    // { id: 58, category: "mv2022", image: mv227, description: "Bronz odelo", price: "3,500 RSD" },
    // { id: 59, category: "mv2022", image: mv228, description: "Elegantno odelo", price: "3,800 RSD" },
    // { id: 60, category: "mv2022", image: mv229, description: "Formalno odelo", price: "3,900 RSD" },
    // { id: 61, category: "mv2022", image: mv2210, description: "Svečano odelo", price: "4,000 RSD" },
    // { id: 62, category: "mv2022", image: mv2211, description: "Prolećno odelo", price: "4,200 RSD" },
    // { id: 63, category: "mv2022", image: mv2212, description: "Svečano odelo", price: "4,000 RSD" },
    // { id: 64, category: "mv2022", image: mv2213, description: "Prolećno odelo", price: "4,200 RSD" },

  ];

  const filterCategory = (category) => {
    setCategory(category);
  };

  const dynamicEl = items
  .filter((item) => category === "all" || item.category === category)
  .map((item) => ({
    src: item.image,
    thumb: item.image,
    subHtml: `<h4>${item.description}</h4><p>${item.price}</p>`,
  }));

  return (
    <div className="p-6 pt-32">
      <div className="flex justify-center gap-4 flex-wrap mb-6 ">
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
          onClick={() => filterCategory("mv2023")}
        >
          2023
        </button>
        <button
          className="px-4 py-2 bg-white border border-black text-black"
          onClick={() => filterCategory("mv2022")}
        >
          2022
        </button>
        <button
          className="px-4 py-2 bg-white border border-black text-black"
          onClick={() => filterCategory("all")}
        >
          Prikaži sve
        </button>

      </div>

      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        closable={true}
        elementClassNames="grid grid-cols-1 md:grid-cols-4 min-h-[600px] gap-6"
      >
        {items
          .filter((item) => category === "all" || item.category === category)
          .map((item) => (
            <a
              key={item.id}
              href={item.image}
              className="block p-4 text-center text-black"
              data-lg-size="1400-800"
            >
              <img
                src={item.image}
                alt={item.description}
                className="w-[400px] h-[500px] xl:w-auto md:h-auto object-cover mx-auto hover:scale-105 transition-all ease-in-out duration-300"
                loading="lazy"
              />
              <div className="mt-2">{item.description}</div>
            </a>
          ))}
      </LightGallery>
    </div>
  );
};

export default ImageDisplayComponent;
