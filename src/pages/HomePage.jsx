    import React from 'react';
    import { useNavigate } from 'react-router-dom';

    const HomePage = () => {
        const navigate = useNavigate();

        const features = [
            {
                title: '📚 Шығармалар',
                text: 'Әдеби шығармалар тізімі, қысқаша мазмұн, видеосабақтар',
                route: '/literature',
            },
            {
                title: '💡 Құндылықтар',
                text: 'Оқушы шығармадан алған құндылығын жазады',
                route: '/values',
            },
            {
                title: '🗣️ Пікірталас',
                text: 'Оқушылар өз ойларын ашық білдіретін орта',
                route: '/discussion',
            },
            {
                title: '👩‍🏫 Мұғалімге',
                text: 'ҚМЖ, бағалау критерийлері, бейнесабақтар',
                route: '/teacher',
            },
        ];

        return (
            <div className="fade-in">

                {/* 1. Приветствие секция */}
                <section className="text-center mb-12 bg-gradient-to-br from-green-300 via-white to-teal-300 p-12 rounded-3xl shadow-xl">
                    <h1 className="text-5xl font-extrabold text-teal-900 mb-4 drop-shadow-md">
                        Құндылықтармен өрілген әдебиет
                    </h1>
                    <p className="text-gray-700 text-lg font-medium">
                        8-сынып оқушыларына арналған интерактивті платформа
                    </p>
                    <button
                        onClick={() => navigate('/literature')}
                        className="mt-6 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
                    >
                        🚀 Бастау
                    </button>
                </section>



                {/* 3. Бөлім карточкалары */}
                <section
                    className="mt-20 bg-gradient-to-br from-purple-100 via-white to-indigo-100 py-14 px-6 rounded-3xl shadow-xl">
                    <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">🔍 Бөлімдер</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((f, idx) => (
                            <div
                                key={idx}
                                onClick={() => navigate(f.route)}
                                className="cursor-pointer bg-white p-6 rounded-3xl border border-gray-100 hover:border-teal-400 hover:bg-teal-50 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <h3 className="text-2xl font-bold text-teal-700 mb-2">{f.title}</h3>
                                <p className="text-base text-gray-600">{f.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Платформада не бар */}
                <section
                    className="mt-20 bg-gradient-to-br from-pink-200 via-white to-yellow-100 p-12 rounded-3xl shadow-xl max-w-6xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-teal-800 mb-10 text-center">
                        ✨ Платформада не бар?
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: '📘', title: 'Шығармалар', desc: 'Бақытсыз Жамал, Ұшқан ұя, Еңлік-Кебек секілді шығармалары жинақталған.' },
                            { icon: '💡', title: 'Құндылықтар', desc: 'Әр шығарма арқылы құндылықтарға бағытталған оқыту жүзеге асады.' },
                            { icon: '📝', title: 'Рефлексия', desc: 'Оқушы ойы мен сезімін жазуға мүмкіндік беріледі.' },
                            { icon: '🎮', title: 'Интерактив тапсырмалар', desc: 'Ойын түрінде ұсынылған тапсырмалар.' },
                            { icon: '💬', title: 'Пікірталас алаңы', desc: 'Оқушылар өз ойымен бөлісетін орта құрылды.' },
                            { icon: '👩‍🏫', title: 'Мұғалімге', desc: 'ҚМЖ, бағалау критерийлері, бейнесабақтар мұғалімдерге арналған.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-start border border-gray-100 hover:border-teal-400">
                                <span className="text-3xl mb-3">{item.icon}</span>
                                <h3 className="text-lg font-semibold text-teal-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* 2. Пікірлер секциясы */}
                <section className="mt-20 bg-gradient-to-br from-blue-100 via-white to-indigo-100 py-16 px-6 rounded-3xl shadow-xl">
                    <h2 className="text-4xl font-extrabold text-center text-teal-800 mb-12 animate-fade-in">
                        🗨️ Пікірлер
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Айгүл Қалдыбекқызы',
                                city: 'Алматы',
                                school: '№159 мектеп',
                                date: '2025 ж. ақпан',
                                feedback: 'Бұл платформа оқушылардың әдеби шығарманы түсінуіне және құндылықтарды бойына сіңіруіне зор ықпал етеді.'
                            },
                            {
                                name: 'Жанар Төлеубекова',
                                city: 'Түркістан',
                                school: 'Дарынды қыздар лицейі',
                                date: '2025 ж. наурыз',
                                feedback: 'Интерактив элементтер мен тапсырмалар өте тиімді. Сабақтарымда үнемі қолданамын.'
                            },
                            {
                                name: 'Мақпал Ержанқызы',
                                city: 'Астана',
                                school: '№82 мектеп-гимназия',
                                date: '2025 ж. ақпан',
                                feedback: 'ҚМЖ мен бейнематериалдардың болуы мұғалім жұмысына үлкен көмек.'
                            },
                            {
                                name: 'Серікгүл Бақытбекқызы',
                                city: 'Шымкент',
                                school: '№47 мектеп-лицей',
                                date: '2025 ж. Cәуір',
                                feedback: 'Оқушы пікірін еркін білдіруге, әдебиетке деген сүйіспеншілігін арттыруға мүмкіндік береді.'
                            },
                            {
                                name: 'Назерке Әлиханқызы',
                                city: 'Қарағанды',
                                school: '№12 мектеп',
                                date: '2025 ж. Мамыр',
                                feedback: 'Әр бөлім көркем жасалған. Заманауи және мазмұнды.'
                            },
                            {
                                name: 'Гүлнар Әділханқызы',
                                city: 'Павлодар',
                                school: 'Жалпы білім беретін мектеп №6',
                                date: '2025 ж. наурыз',
                                feedback: 'Осы секілді платформалар қазақ тілі мен әдебиеті пәнінің дамуына жол ашады.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 border-l-4 border-teal-400 transition-all duration-300">
                                <p className="text-gray-700 italic mb-4">“{item.feedback}”</p>
                                <div className="text-sm text-gray-600">
                                    <p><strong>{item.name}</strong>, {item.city}</p>
                                    <p>{item.school}</p>
                                    <p className="text-gray-400 text-xs mt-1">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. Біз жайлы секция */}
                <section
                    className="mt-20 bg-gradient-to-br from-yellow-100 via-white to-pink-100 py-16 px-6 rounded-3xl shadow-xl">
                    <h2 className="text-4xl font-extrabold text-center text-teal-800 mb-12 animate-fade-in">
                        👥 Біз жайлы
                    </h2>

                    <div
                        className="max-w-md mx-auto bg-white border-2 border-yellow-400 p-8 rounded-3xl shadow-xl text-center mb-20 animate-fade-in-up">
                        <img
                            src="/images/mentor.png"
                            alt="Қабатай Бидана Тұрсынханқызы"
                            className="w-36 h-36 mx-auto rounded-full object-cover mb-4 shadow-md border-4 border-yellow-300"
                        />
                        <h4 className="text-2xl font-extrabold text-yellow-700">Қабатай Бидана Тұрсынханқызы</h4>
                        <p className="text-lg text-gray-600">Жетекші</p>
                        <p className="mt-4 text-sm text-gray-500 italic">

                            Абай атындағы Қазақ ұлттық педагогикалық университетінің доценті, педагогика ғылымдарының
                            кандидаты, «Әдебиеттік оқу» кітабының жетекші авторы.</p>
                    </div>

                    {/* Команда мүшелері */}
                    <div className="flex flex-wrap justify-center gap-8 mb-10">
                        {[
                            {
                                name: 'Дадажанова Зарина Нұрланқызы',
                                role: 'Абай атындағы Қазақ ұлттық педагогикалық университетінің 4-курс студенті. 2023-2025 жж. “Президенттік шәкіртақы” иегері',
                                img: '/images/student1.png',
                            },
                            {
                                name: 'Данай Гүлжауһар Бектұрғанқызы',
                                role: 'Абай атындағы Қазақ ұлттық педагогикалық университетінің 4-курс студенті. «Қазақстан халқына» білім беру грантының иегері, «Білімнің жұлдызы» шәкіртқасының иегері.',
                                img: '/images/student2.png',
                            },
                            {
                                name: 'Жарылқасын Ботагөз Сабитқызы',
                                role: 'Абай атындағы Қазақ ұлттық педагогикалық университетінің 4-курс студенті. «Мамандығым-мақтанышым» байқауының жеңімпазы, мемлекеттік жоғарылатылған шәкіртақы иегері.',
                                img: '/images/student3.png',
                            }
                        ].map((person, idx) => (
                            <div
                                key={idx}
                                className="w-full sm:w-[280px] bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center transform hover:-translate-y-1"
                            >
                                <img
                                    src={person.img}
                                    alt={person.name}
                                    className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-md"
                                />
                                <h4 className="text-xl font-bold text-teal-700 mb-2">{person.name}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed min-h-[96px] flex items-center justify-center">
                                    {person.role}
                                </p>
                            </div>
                        ))}
                    </div>


                    {/* Платформаның мақсаты */}
                    <div
                        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center border border-teal-200 animate-fade-in-up">
                        <h3 className="text-2xl font-semibold text-teal-800 mb-4">🎯 Платформаның мақсаты</h3>
                        <p className="text-gray-700 text-lg">
                            8 сыныпта «Қазақ әдебиеті пәнін құндылықтар теориясында оқытудың тиімді жолдарын көрсету»
                        </p>
                    </div>
                </section>
            </div>

        );
    };

    export default HomePage;
