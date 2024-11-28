import React, { useState } from 'react';

const ImageDisplayComponent = () => {
    const [category, setCategory] = useState('all');

    const items = [
        { id: 1, category: 'coats', imgSrc: 'https://via.placeholder.com/150?text=Coat+1', description: 'Kaput sa odvojivom kapuljačom', price: '7,990 RSD' },
        { id: 2, category: 'jackets', imgSrc: 'https://via.placeholder.com/150?text=Jacket+1', description: 'Duga postavljena jakna', price: '6,590 RSD' },
        { id: 3, category: 'sweaters', imgSrc: 'https://via.placeholder.com/150?text=Sweater+1', description: 'Pletena polo majica', price: '2,750 RSD' },
        { id: 4, category: 'jackets', imgSrc: 'https://via.placeholder.com/150?text=Jacket+2', description: 'Kontrastna jakna', price: '5,390 RSD' },
        { id: 5, category: 'sweaters', imgSrc: 'https://via.placeholder.com/150?text=Sweater+2', description: 'Džemper pleten patent bodom', price: '2,390 RSD' },
        { id: 5, category: 'sweaters', imgSrc: 'https://via.placeholder.com/150?text=Sweater+2', description: 'Džemper pleten patent bodom', price: '2,390 RSD' },
    ];

    const filterCategory = (category) => {
        setCategory(category);
    };

    return (
        <div className="p-6 pt-32 ">
            <div className="flex gap-4 flex-wrap mb-6">
                <button className="px-4 py-2 bg-white border border-black text-black hover:" onClick={() => filterCategory('all')}>Pregledajte Sve</button>
                <button className="px-4 py-2 bg-white border border-black text-black" onClick={() => filterCategory('jackets')}>Jakne | Prsluci</button>
                <button className="px-4 py-2 bg-white border border-black text-black" onClick={() => filterCategory('sweaters')}>Džemperi | Kardigani</button>
                <button className="px-4 py-2 bg-white border border-black text-black" onClick={() => filterCategory('coats')}>Kaputi</button>
                <button className="px-4 py-2 bg-white border border-black text-black" onClick={() => filterCategory('pants')}>Pantalone</button>
                <button className="px-4 py-2 bg-white border border-black text-black" onClick={() => filterCategory('shirts')}>Majice</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 min-h-[600px] bg-white">
                {items.filter(item => category === 'all' || item.category === category).map(item => (
                    <div key={item.id} className=" p-4 rounded-lg text-center text-black">
                        <img src={item.imgSrc} alt={item.description} className="w-[400px] h-[600px] object-cover rounded-lg mx-auto" />
                        <div className="mt-4 text-xl font-bold text-black">{item.description}</div>
                        {/* <div className="mt-2 text-lg text-black font-bold">{item.price}</div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageDisplayComponent;