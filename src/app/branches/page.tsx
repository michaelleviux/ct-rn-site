export default function BranchesPage() {
    const branches = [
        {
            name: "סניף פתח תקווה (סניף מרכזי)",
            address: "רחוב חיים עוזר 32, פתח תקווה",
            hours: "10:00-19:00",
            phone: "054-9790938",
            map: "https://maps.google.com/maps?q=חיים+עוזר+32+פתח+תקווה&output=embed",
            isMain: true
        },
        {
            name: "סניף באר שבע",
            address: "רחוב יצחק בן צבי 8, באר שבע",
            hours: "10:00-19:00",
            map: "https://maps.google.com/maps?q=יצחק+בן+צבי+8+באר+שבע&output=embed"
        },
        {
            name: "סניף חיפה",
            address: "רחוב נווה שאנן 9, חיפה",
            hours: "10:00-19:00",
            map: "https://maps.google.com/maps?q=נווה+שאנן+9+חיפה&output=embed"
        }
    ];

    return (
        <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <header className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-primary">הסניפים שלנו</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        צוות המומחים שלנו מחכה לכם בפריסה ארצית עם המכשור המתקדם ביותר והשירות המקצועי ביותר.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-12 lg:gap-24">
                    {branches.map((branch, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row gap-12 items-center ${branch.isMain ? 'bg-secondary/5 rounded-[3rem] p-8 lg:p-16 border-2 border-secondary/20' : ''
                                }`}
                        >
                            <div className="flex-1 space-y-6">
                                {branch.isMain && (
                                    <span className="inline-block px-4 py-1 bg-secondary text-primary font-bold text-sm rounded-full mb-4">
                                        סניף מרכזי
                                    </span>
                                )}
                                <h2 className="text-3xl md:text-4xl font-black text-primary">{branch.name}</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-lg">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-secondary">
                                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
                                        </div>
                                        <span>{branch.address}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-lg">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-secondary">
                                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                            </svg>
                                        </div>
                                        <span>שעות פעילות: {branch.hours}</span>
                                    </div>
                                    {branch.phone && (
                                        <div className="flex items-center gap-4 text-lg">
                                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-secondary">
                                                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                                    <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                                </svg>
                                            </div>
                                            <a href={`tel:${branch.phone.replace('-', '')}`} className="font-bold hover:text-secondary transition-colors">{branch.phone}</a>
                                        </div>
                                    )}
                                </div>
                                <div className="pt-6">
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-secondary hover:text-primary transition-all"
                                    >
                                        ניווט לסניף
                                    </a>
                                </div>
                            </div>
                            <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <iframe
                                    src={branch.map}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
