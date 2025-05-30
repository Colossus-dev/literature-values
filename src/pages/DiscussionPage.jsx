import React, { useEffect, useState } from 'react';
import { FaCommentDots, FaTrashAlt } from 'react-icons/fa';

const DiscussionPage = () => {
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('comments')) || [];
        setCommentsList(stored);
    }, []);

    const handleSubmit = () => {
        if (!comment.trim()) return;

        const newComment = {
            id: Date.now(),
            text: comment.trim(),
            time: new Date().toLocaleString(),
        };

        const updated = [newComment, ...commentsList];
        localStorage.setItem('comments', JSON.stringify(updated));
        setCommentsList(updated);
        setComment('');
    };

    const handleDelete = (id) => {
        const filtered = commentsList.filter((c) => c.id !== id);
        localStorage.setItem('comments', JSON.stringify(filtered));
        setCommentsList(filtered);
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl animate-fade-in">
            <h2 className="text-3xl font-extrabold text-teal-700 mb-6 flex items-center gap-2">
                <FaCommentDots className="text-2xl text-teal-600" />
                Пікірталас алаңы
            </h2>

            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ойыңызды жазыңыз..."
                rows="4"
                maxLength={500}
                autoFocus
                className="w-full border border-gray-300 rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>

            <button
                onClick={handleSubmit}
                className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-all shadow"
            >
                💬 Пікір қалдыру
            </button>

            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">
                    Барлығы: {commentsList.length} пікір
                </h3>

                {commentsList.length === 0 ? (
                    <p className="text-gray-500">Әзірге пікірлер жоқ.</p>
                ) : (
                    commentsList.map((c) => (
                        <div
                            key={c.id}
                            className="border border-gray-200 rounded-xl p-4 mb-3 shadow-sm bg-gray-50 hover:shadow transition relative"
                        >
                            <p className="mb-2 text-gray-800">{c.text}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">{c.time}</span>
                                <button
                                    onClick={() => handleDelete(c.id)}
                                    className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1"
                                    title="Өшіру"
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default DiscussionPage;
