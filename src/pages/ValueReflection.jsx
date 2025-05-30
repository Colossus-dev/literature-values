import React, { useState, useEffect } from 'react';

const VALUE_OPTIONS = [
    'Ерлік', 'Адалдық', 'Отансүйгіштік', 'Білім', 'Мейірімділік', 'Сабырлық', 'Сүйіспеншілік'
];

const ValueReflection = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [answer, setAnswer] = useState('');
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('my-value-reflection'));
        if (savedData) {
            setSelectedValue(savedData.value);
            setAnswer(savedData.text);
        }
    }, []);

    const handleSave = () => {
        if (!selectedValue || !answer.trim()) {
            alert('Өтінеміз, барлық өрістерді толтырыңыз!');
            return;
        }

        localStorage.setItem(
            'my-value-reflection',
            JSON.stringify({ value: selectedValue, text: answer })
        );
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-extrabold text-teal-700 mb-6 text-center">
                💭 Сен таңдаған құндылық
            </h2>

            <label className="block mb-2 font-medium text-gray-700">Қай құндылықты таңдадың?</label>
            <select
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
                <option value="" disabled>Құндылықты таңдаңыз...</option>
                {VALUE_OPTIONS.map((val, i) => (
                    <option key={i} value={val}>{val}</option>
                ))}
            </select>

            <label className="block mb-2 font-medium text-gray-700">Осы құндылық туралы ойың</label>
            <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Бұл құндылық сен үшін не білдіреді? Мысал келтір."
            ></textarea>

            <button
                onClick={handleSave}
                className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-all shadow-md"
            >
                💾 Сақтау
            </button>

            {saved && (
                <p className="text-green-600 mt-4 text-sm text-center animate-fade-in">
                    ✅ Рефлексия сәтті сақталды!
                </p>
            )}
        </div>
    );
};

export default ValueReflection;
