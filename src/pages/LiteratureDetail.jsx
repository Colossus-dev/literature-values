import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import literatureData from '../data/literatureData';

const LiteratureDetail = () => {
    const { slug } = useParams();
    const literature = literatureData.find((item) => item.slug === slug);

    const [reflection, setReflection] = useState('');
    const [showTasks, setShowTasks] = useState(false);
    const localKey = `reflection-${slug}`;

    useEffect(() => {
        const saved = localStorage.getItem(localKey);
        if (saved) setReflection(saved);
    }, [localKey]);

    const handleSave = () => {
        localStorage.setItem(localKey, reflection);
        alert('✅ Рефлексия сақталды!');
    };

    if (!literature) return <p className="text-center text-red-500 font-semibold">Шығарма табылмады.</p>;

    return (
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-5xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold text-teal-700 mb-4 text-center animate-fade-in">{literature.title}</h2>
            <p className="text-gray-700 text-lg mb-6 text-center">{literature.description}</p>

            {/* Видео */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg border hover:shadow-2xl transition-all duration-300">
                <iframe
                    className="w-full aspect-video"
                    src={literature.video}
                    title="Видеосабақ"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Интерактивті тапсырмалар */}
            <div className="mb-8 text-center">
                <button
                    onClick={() => setShowTasks(!showTasks)}
                    className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 text-lg shadow-md hover:scale-105"
                >
                    {showTasks ? "▲ Тапсырмаларды жасыру" : "▼ Интерактивті тапсырмалар"}
                </button>

                {showTasks && (
                    <ul className="mt-5 space-y-3 text-left list-disc list-inside text-gray-700 bg-gray-50 p-5 rounded-xl border border-purple-200 animate-slide-down">
                        {literature.tasks.map((task, idx) => (
                            <li key={idx} className="leading-relaxed">{task}</li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Quiz батырмасы */}
            <div className="mb-8 text-center">
                <a
                    href={literature.quizUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition text-lg shadow-md hover:scale-105"
                >
                    🎮 Quizizz ойынын бастау
                </a>
            </div>

            {/* Рефлексия */}
            <div className="bg-teal-50 p-6 rounded-xl shadow-inner border border-teal-200 animate-fade-in">
                <h4 className="text-xl font-semibold mb-3 text-teal-800">📌 Рефлексия:</h4>
                <textarea
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                    rows="5"
                    className="w-full border border-gray-300 rounded-lg p-4 text-gray-800 focus:ring-2 focus:ring-teal-500 transition"
                    placeholder="Ойыңызды жазыңыз..."
                ></textarea>
                <button
                    onClick={handleSave}
                    className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition shadow hover:scale-105"
                >
                    💾 Сақтау
                </button>
            </div>
        </div>
    );
};

export default LiteratureDetail;
