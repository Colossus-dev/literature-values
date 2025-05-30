import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/asd.jpg'; // өз иконыңа апаратын жол

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md rounded-b-xl px-6 py-4 mb-6">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                {/* Логотип */}
                <div className="flex items-center gap-2">
                    <a href="/"> <img src={logo} alt="Логотип" className="h-20 w-30 rounded-full object-cover" /></a>
                <h1 className="text-xl font-bold text-teal-700">Ізгілік Платформасы </h1>
                </div>

                {/* Мәзір */}
                <div className="space-x-4 text-sm font-medium">
                    <NavLink to="/" className={({ isActive }) =>
                        `hover:text-teal-600 transition ${isActive ? 'text-teal-700 font-semibold' : 'text-gray-700'}`
                    }>
                        Басты бет
                    </NavLink>

                    <NavLink to="/literature" className={({ isActive }) =>
                        `hover:text-teal-600 transition ${isActive ? 'text-teal-700 font-semibold' : 'text-gray-700'}`
                    }>
                        Шығармалар
                    </NavLink>

                    <NavLink to="/values" className={({ isActive }) =>
                        `hover:text-teal-600 transition ${isActive ? 'text-teal-700 font-semibold' : 'text-gray-700'}`
                    }>
                        Құндылық
                    </NavLink>

                    <NavLink to="/discussion" className={({ isActive }) =>
                        `hover:text-teal-600 transition ${isActive ? 'text-teal-700 font-semibold' : 'text-gray-700'}`
                    }>
                        Пікірталас
                    </NavLink>

                    <NavLink to="/teacher" className={({ isActive }) =>
                        `hover:text-teal-600 transition ${isActive ? 'text-teal-700 font-semibold' : 'text-gray-700'}`
                    }>
                        Мұғалімге
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
