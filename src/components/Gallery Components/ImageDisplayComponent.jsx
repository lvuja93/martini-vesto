import React, { useState } from 'react';
import pic1 from "../../assets/RevijaOkt19/Black pants and green jacket.jpg"
import pic2 from "../../assets/RevijaOkt19/Burgundy suit.jpg"
import pic3 from "../../assets/RevijaOkt19/Elegant black.jpg"
import pic4 from "../../assets/RevijaOkt19/IMG_4226.jpg"
import pic5 from "../../assets/RevijaOkt19/IMG_4230.jpg"
import pic6 from "../../assets/RevijaOkt19/IMG_4267.jpg"
import pic7 from "../../assets/RevijaOkt19/IMG_4269.jpg"
import pic8 from "../../assets/RevijaOkt19/IMG_4272.jpg"
import pic9 from "../../assets/RevijaOkt19/IMG_4281.jpg"
import pic10 from "../../assets/RevijaOkt19/IMG_4408.jpg"
import pic11 from "../../assets/RevijaOkt19/IMG_4412.jpg"
import pic12 from "../../assets/RevijaOkt19/IMG_4418.jpg"

const ImageDisplayComponent = () => {
    const [category, setCategory] = useState('all');

    const items = [
        { id: 1, category: 'coats', imgSrc: pic1, description: 'Zeleno odelo', price: '7,990 RSD' },
        { id: 2, category: 'jackets', imgSrc: pic2, description: 'Braon odelo', price: '6,590 RSD' },
        { id: 3, category: 'sweaters', imgSrc: pic3, description: 'Crno odelo', price: '2,750 RSD' },
        { id: 4, category: 'jackets', imgSrc: pic4, description: '23656', price: '5,390 RSD' },
        { id: 5, category: 'sweaters', imgSrc: pic5, description: '23656', price: '2,390 RSD' },
        { id: 5, category: 'sweaters', imgSrc: pic6, description: 'Sako crveni', price: '2,390 RSD' },
        { id: 1, category: 'coats', imgSrc: pic1, description: 'Kaput sa odvojivom kapuljačom', price: '7,990 RSD' },
        { id: 2, category: 'jackets', imgSrc: pic2, description: 'Duga postavljena jakna', price: '6,590 RSD' },
        { id: 3, category: 'sweaters', imgSrc: pic3, description: 'Pletena polo majica', price: '2,750 RSD' },
        { id: 4, category: 'jackets', imgSrc: pic4, description: 'Kontrastna jakna', price: '5,390 RSD' },
        { id: 5, category: 'sweaters', imgSrc: pic5, description: 'Džemper pleten patent bodom', price: '2,390 RSD' },
        { id: 5, category: 'sweaters', imgSrc: pic6, description: 'Džemper pleten patent bodom', price: '2,390 RSD' },
    ];

    const filterCategory = (category) => {
        setCategory(category);
    };

    return (
        <div className="p-6 pt-32 ">
            <div className="flex gap-4 flex-wrap mb-6">
                <button className="px-4 py-2 bg-white border border-black text-black hover:" onClick={() => filterCategory('all')}>Revija Pariz</button>
                <button className="px-4 py-2 bg-white border border-black text-black" onClick={() => filterCategory('jackets')}>Revija Madrid</button>
                <button className="px-4 py-2 bg-white border border-black text-black" onClick={() => filterCategory('sweaters')}>Beograd 2023</button>
                <button className="px-4 py-2 bg-white border border-black text-black" onClick={() => filterCategory('coats')}>Arena 2024</button>
                <button className="px-4 py-2 bg-white border border-black text-black" onClick={() => filterCategory('pants')}>Fashon week</button>
                <button className="px-4 py-2 bg-white border border-black text-black" onClick={() => filterCategory('shirts')}>No idea</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 min-h-[600px]">
                {items.filter(item => category === 'all' || item.category === category).map(item => (
                    <div key={item.id} className="p-4 md:py-4 border-b border-black  text-center text-black">
                        <img src={item.imgSrc} alt={item.description} className="w-[400px] h-[600px] object-cover mx-auto" />
                        <div className="mt-4 text-xl font-bold text-black">{item.description}</div>
                        {/* <div className="mt-2 text-lg text-black font-bold">{item.price}</div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageDisplayComponent;