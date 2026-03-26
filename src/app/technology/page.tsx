export default function TechnologyPage() {
    return (
        <div className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <header className="text-center mb-20 whitespace-normal">
                    <span className="inline-block px-4 py-1 bg-secondary text-primary font-bold text-sm rounded-full mb-6">הטכנולוגיה שלנו</span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 text-primary">Carestream CS 8100 3D</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        אנחנו לא מתפשרים על איכות. השימוש במכשור המתקדם בעולם מאפשר לנו להעניק לכם דיוק מקסימלי עם מינימום קרינה.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-secondary blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative aspect-square bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
                            <img
                                src="/machine.png"
                                alt="Carestream CS 8100 3D"
                                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700 rounded-[3rem]"
                            />
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-black text-primary mb-6">למה CS 8100 3D?</h2>
                            <div className="space-y-6">
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">רמת קרינה מינימלית</h3>
                                        <p className="text-gray-600">הטכנולוגיה החדשנית מאפשרת להפיק צילומים באיכות גבוהה עם חשיפה מינימלית לקרינה, תוך שמירה על בטיחות המטופל.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">הדמיה תלת-ממדית מדויקת</h3>
                                        <p className="text-gray-600">קבלת תמונה מרחבית מלאה של הלסת, מה שמאפשר לרופא לתכנן השתלות וטיפולים ברמת דיוק מוחלטת.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">נוחות מקסימלית (עיצוב פתוח)</h3>
                                        <p className="text-gray-600">העיצוב הפתוח והארגונומי של המכשיר מפחית תחושות של חוסר נוחות וקלאוסטרופוביה, ומתאים לכל המטופלים.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-8">החדשנות שמאחורי החיוך שלכם</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                            אנחנו ב-CT RN משקיעים בטכנולוגיה האיכותית ביותר כדי לוודא שאתם מקבלים את התוצאות הטובות ביותר, במהירות הגבוהה ביותר ובמחיר המשתלם ביותר.
                        </p>
                        <a href="https://wa.me/972549790938" className="inline-block px-12 py-4 bg-secondary text-primary font-black rounded-xl text-xl hover:scale-105 transition-transform">הזמינו תור עוד היום</a>
                    </div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 blur-[100px] rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
