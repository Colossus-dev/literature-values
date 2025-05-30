import React from 'react';
import literatureData from '../data/literatureData';
import { Link } from 'react-router-dom';

const LiteratureList = () => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 fade-in">
            {literatureData.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-[2/2] object-cover rounded-t-xl"
                    />                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-teal-700">{item.title}</h2>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>

                        <div className="mt-4 flex justify-between items-center">
                            <Link to={`/literature/${item.slug}`}>
                                <button className="px-3 py-1 bg-teal-600 text-white rounded hover:bg-teal-700 transition text-sm">Толығырақ</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LiteratureList;
