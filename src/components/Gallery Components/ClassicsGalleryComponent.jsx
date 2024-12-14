import React, { useState } from 'react';
import classic1 from "../../assets/classics/IMG_2160_1_11zon.jpeg"
import classic2 from "../../assets/classics/IMG_2164_2_11zon.jpeg"
import classic3 from "../../assets/classics/IMG_2167_3_11zon.jpeg"
import classic4 from "../../assets/classics/IMG_2191_jpg_4_11zon.jpeg"
import classic5 from "../../assets/classics/IMG_2195_jpg_5_11zon.jpeg"
import classic6 from "../../assets/classics/IMG_2202_jpg_6_11zon.jpeg"
import classic7 from "../../assets/classics/IMG_2249_jpg_7_11zon.jpeg"
import classic8 from "../../assets/classics/IMG_2252_jpg_8_11zon.jpeg"
import classic9 from "../../assets/classics/IMG_2253_jpg_9_11zon.jpeg"
import classic10 from "../../assets/classics/IMG_2278_jpg_10_11zon.jpeg"
import classic11 from "../../assets/classics/IMG_2285_jpg_11_11zon.jpeg"
import classic12 from "../../assets/classics/IMG_2315_jpg_12_11zon.jpeg"
import classic13 from "../../assets/classics/IMG_2317_jpg_13_11zon.jpeg"
import classic14 from "../../assets/classics/IMG_2329_jpg_14_11zon.jpeg"
import classic15 from "../../assets/classics/IMG_2368_15_11zon.jpeg"
import classic16 from "../../assets/classics/IMG_2385_16_11zon.jpeg"
import classic17 from "../../assets/classics/IMG_2387_17_11zon.jpeg"
import classic18 from "../../assets/classics/IMG_2408_18_11zon.jpeg"
import classic19 from "../../assets/classics/IMG_2409_19_11zon.jpeg"
import classic20 from "../../assets/classics/IMG_2420_20_11zon.jpeg"
import classic21 from "../../assets/classics/IMG_2432_21_11zon.jpeg"
import classic22 from "../../assets/classics/IMG_2437_22_11zon.jpeg"

const ClassicsGalleryComponent = () => {
    const [category, setCategory] = useState("all");

    const items = [
        { id: 1, category: "beograd2024", image: classic1, description: "Zeleno odelo", price: "7,990 RSD" },
        { id: 2, category: "beograd2024", image: classic2, description: "Plavo odelo", price: "8,500 RSD" },
        { id: 3, category: "beograd2024", image: classic3, description: "Crno odelo", price: "6,700 RSD" },
        { id: 4, category: "beograd2024", image: classic4, description: "Belo odelo", price: "7,200 RSD" },
        { id: 5, category: "beograd2024", image: classic5, description: "Sivo odelo", price: "7,800 RSD" },
        { id: 6, category: "beograd2024", image: classic6, description: "Tamno zeleno odelo", price: "8,100 RSD" },
        { id: 7, category: "beograd2024", image: classic7, description: "Svetlo plavo odelo", price: "6,900 RSD" },
        { id: 8, category: "beograd2024", image: classic8, description: "Tamnije odelo", price: "7,500 RSD" },
        { id: 9, category: "beograd2024", image: classic9, description: "Klasično odelo", price: "8,000 RSD" },
        { id: 10, category: "beograd2024", image: classic10, description: "Zeleno odelo", price: "7,990 RSD" },
        { id: 11, category: "beograd2024", image: classic11, description: "Plavo odelo", price: "8,500 RSD" },
        { id: 12, category: "beograd2024", image: classic12, description: "Crno odelo", price: "6,700 RSD" },
        { id: 13, category: "beograd2024", image: classic13, description: "Belo odelo", price: "7,200 RSD" },
        { id: 14, category: "beograd2024", image: classic14, description: "Sivo odelo", price: "7,800 RSD" },
        { id: 15, category: "beograd2024", image: classic15, description: "Tamno zeleno odelo", price: "8,100 RSD" },
        { id: 16, category: "beograd2024", image: classic16, description: "Svetlo plavo odelo", price: "6,900 RSD" },
        { id: 17, category: "beograd2024", image: classic17, description: "Tamnije odelo", price: "7,500 RSD" },
        { id: 18, category: "beograd2024", image: classic18, description: "Klasično odelo", price: "8,000 RSD" },
        { id: 19, category: "beograd2024", image: classic19, description: "Tamno zeleno odelo", price: "8,100 RSD" },
        { id: 20, category: "beograd2024", image: classic20, description: "Svetlo plavo odelo", price: "6,900 RSD" },
        { id: 21, category: "beograd2024", image: classic21, description: "Tamnije odelo", price: "7,500 RSD" },
        { id: 22, category: "beograd2024", image: classic22, description: "Klasično odelo", price: "8,000 RSD" },
    ];

    return (
        <div className='bg-gray-300'>
            <div className='pt-40 mb-16 px-5 text-black text-xl'>
                <h4> Dobrodošli u svet besprekornog stila i bezvremenske sofisticiranosti. Naša nova kolekcija klasičnih odela osmišljena je za modernog muškarca koji neguje tradiciju, ali ceni udobnost i savremeni dizajn.

                    Svako odelo u kolekciji izrađeno je od najfinijih materijala – vuna, kašmir i pažljivo odabrani blendovi koji pružaju luksuzan osećaj i savršen izgled. Uz vrhunsku krojačku preciznost, naša odela su oblikovana tako da savršeno prate liniju tela, pružajući istovremeno udobnost i besprekornu siluetu.   </h4>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[600px] bg-white ">
                {items

                    .map((item) => (
                        <div key={item.id} className="p-4 text-center text-black">
                            <img
                                src={item.image}
                                alt={item.description}
                                className="w-[400px] h-[500px] xl:w-auto md:h-auto object-cover mx-auto"
                                loading="lazy"
                            />

                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ClassicsGalleryComponent;