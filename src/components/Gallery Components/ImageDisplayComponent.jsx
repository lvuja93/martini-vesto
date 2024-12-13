import React, { useState } from "react";
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
  ];

  const filterCategory = (category) => {
    setCategory(category);
  };

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
          onClick={() => filterCategory("all")}
        >
          All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 min-h-[600px] gap-6">
        {items
          .filter((item) => category === "all" || item.category === category)
          .map((item) => (
            <div key={item.id} className="p-4 text-center text-black">
              <img
                src={item.image}
                alt={item.description}
                className="w-[400px] h-[500px] xl:w-auto md:h-auto object-cover mx-auto"
                loading="lazy"
              />
              <div className="mt-4 text-xl font-bold">{item.description}</div>
              <div className="text-lg text-gray-600">{item.price}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageDisplayComponent;
