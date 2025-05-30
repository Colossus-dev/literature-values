import React from 'react';
import teacherResources from '../data/teacherResourcesData';

const TeacherCorner = () => {
    return (
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-xl animate-fade-in">
            <h2 className="text-3xl font-extrabold text-teal-700 mb-6 text-center">
                👩‍🏫 Мұғалімге арналған материалдар
            </h2>

            {teacherResources.map((res, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-md mb-8 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-teal-800 mb-2">{res.title}</h3>
                    <p className="text-gray-600 mb-3">{res.description}</p>

                    <div className="bg-white border border-teal-100 p-4 rounded-lg mb-4 whitespace-pre-line text-gray-700 text-sm">
                        {res.kmzh}
                    </div>

                    {res.video && (
                        <div className="aspect-video rounded overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src={res.video}
                                title={res.title}
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TeacherCorner;
