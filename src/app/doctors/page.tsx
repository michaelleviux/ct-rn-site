import { FadeIn, ScaleIn } from "@/components/Motion";

export default function DoctorsPage() {
    const clinicalSpecs = [
        {
            title: "פורמט DICOM סטנדרטי",
            description: "קבצי הצילום נשלחים בפורמט DICOM מלא, התואם את כל תוכנות הניהול והתכנון המקובלות (Simplant, NobelGuide ועוד)."
        },
        {
            title: "דיוק של 75 מיקרון",
            description: "המכשור שלנו מאפשר רזולוציה גבוהה במיוחד לאבחון מדויק של תעלות עצב, מבנה לסת וסינוסים."
        },
        {
            title: "תמיכה בשבלונות כירורגיות",
            description: "הדאטה שאנו מפיקים מתאים ליצירת Surgical Guides מותאמים אישית להשתלות מונחות מחשב."
        },
        {
            title: "שליחה דיגיטלית מיידית",
            description: "התוצאות נשלחות אליכם ישירות למייל או לוואצאפ מיד עם סיום הבדיקה, ללא צורך בהמתנה לשליחים."
        }
    ];

    return (
        <div className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4">
                <header className="max-w-4xl mb-24">
                    <FadeIn>
                        <span className="inline-block px-4 py-1 bg-secondary text-primary font-bold text-sm rounded-full mb-6 uppercase tracking-wider">Clinical Collaboration</span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 text-primary leading-tight">
                            השותפים שלכם לאבחון <br /> <span className="text-secondary">מדויק ובטוח</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            אנחנו ב-CT RN מבינים את החשיבות של איכות הצילום להצלחת הטיפול שלכם. המטרה שלנו היא לספק לכם את כל הכלים הדרושים לתכנון טיפול מושלם, במהירות ובדיוק מקסימלי.
                        </p>
                    </FadeIn>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {clinicalSpecs.map((spec, index) => (
                        <ScaleIn key={index} delay={index * 0.1}>
                            <div className="p-10 bg-accent rounded-[2.5rem] border border-gray-100 hover:border-secondary transition-colors group h-full">
                                <h3 className="text-2xl font-black text-primary mb-4 group-hover:text-secondary transition-colors">{spec.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed font-medium">{spec.description}</p>
                            </div>
                        </ScaleIn>
                    ))}
                </div>

                <section className="bg-primary rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">מעוניינים במידע טכני נוסף או בתיאום סיור בסניף?</h2>
                            <p className="text-xl text-gray-300 mb-10 font-medium leading-relaxed">
                                צוות המנהלים הרפואיים שלנו זמין עבורכם לכל שאלה טכנית או בקשה להתאמת פורמט הצילום לצרכי המרפאה שלכם.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="tel:0549790938" className="px-10 py-4 bg-secondary text-primary font-black rounded-xl text-xl hover:scale-105 transition-transform">התקשרו אלינו</a>
                                <a href="https://wa.me/972549790938" className="px-10 py-4 border-2 border-white/20 text-white font-bold rounded-xl text-xl hover:bg-white/10 transition-colors">שלחו וואצאפ</a>
                            </div>
                        </div>
                        <div className="hidden lg:block relative">
                            <div className="w-full aspect-square bg-white/5 rounded-full blur-[80px] absolute inset-0"></div>
                            <div className="relative border-4 border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-xl">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                                        <div className="w-12 h-12 bg-secondary rounded-full"></div>
                                        <div>
                                            <p className="font-bold text-lg">DICOM compatible</p>
                                            <p className="text-sm text-gray-400 font-medium">Standards Compliant</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                                        <div className="w-12 h-12 bg-secondary rounded-full"></div>
                                        <div>
                                            <p className="font-bold text-lg">75μm Voxel Size</p>
                                            <p className="text-sm text-gray-400 font-medium">High Resolution</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-secondary rounded-full"></div>
                                        <div>
                                            <p className="font-bold text-lg">Cloud Integration</p>
                                            <p className="text-sm text-gray-400 font-medium">Auto-Delivery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
