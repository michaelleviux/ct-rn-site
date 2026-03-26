import { FadeIn, ScaleIn } from "@/components/Motion";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
    const articles = [
        {
            title: "מהפכת ה-CT: איך הורדנו את המחירים ב-50%?",
            excerpt: "איך שברנו את השוק בענף צילומי השיניים ואיך זה משפיע ישירות על הכיס שלכם.",
            category: "מחירים וצרכנות",
            slug: "ct-price-revolution",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "למה צילום CT קריטי לפני השתלת שיניים?",
            excerpt: "תכנון מדויק הוא המפתח להצלחה בהשתלה. כל מה שצריך לדעת על הדמיות תלת-ממדיות.",
            category: "השתלות שיניים",
            slug: "ct-before-implants",
            image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "המדריך המלא: מה ההבדל בין פנורמי ל-CT?",
            excerpt: "מתי מספיק צילום פנורמי ומתי חייבים לעלות לדרגת CT? עושים סדר במושגים.",
            category: "מדריכים",
            slug: "panoramic-vs-ct",
            image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "בטיחות קרינה בצילומי שיניים - כל מה שצריך לדעת.",
            excerpt: "כמה קרינה באמת מקבלים בצילום שיניים ואיך המכשור המודרני מצמצם אותה למינימום.",
            category: "בטיחות ובריאות",
            slug: "radiation-safety",
            image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "איך לקבל את צילום השיניים שלכם ישירות לנייד תוך דקות?",
            excerpt: "הפתרון הדיגיטלי של CT RN: צילמתם, קיבלתם, והרופא כבר רואה את התוצאה.",
            category: "טכנולוגיה",
            slug: "digital-delivery",
            image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "שיני בינה: מתי הצילום מציל את המצב?",
            excerpt: "למה אסור לעקור שן בינה בלי הדמיה מדויקת של מיקום העצב.",
            category: "טיפולים",
            slug: "wisdom-teeth-xray",
            image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "יישור שיניים מתחיל בצילום נכון",
            excerpt: "הקשר בין אבחון מדויק לבין תוצאות מושלמות בתהליך יישור שיניים.",
            category: "יישור שיניים",
            slug: "orthodontics-xray",
            image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "העתיד כבר כאן: טכנולוגיה רפואית בצילומי שיניים",
            excerpt: "איך בינה מלאכותית וחדשנות משנות את הדרך שבה אנחנו מאבחנים בעיות שיניים.",
            category: "טכנולוגיה",
            slug: "dental-tech-future",
            image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "חשיבות הצילומים לתחזוקה שוטפת",
            excerpt: "למה חשוב לבצע צילומים תקופתיים גם כשלא מרגישים כאבים.",
            category: "מניעה",
            slug: "routine-xrays-importance",
            image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "הכנה לצילום CT: כל הטיפים למטופל",
            excerpt: "איך להגיע מוכנים לצילום וכמה זמן זה באמת לוקח (רמז: פחות ממה שחשבתם).",
            category: "מדריכים",
            slug: "ct-preparation-tips",
            image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="py-20 lg:py-32 bg-accent/30">
            <div className="container mx-auto px-4">
                <header className="text-center mb-20">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 text-primary">מרכז המידע והמאמרים</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                            כל מה שצריך לדעת על צילומי שיניים, טכנולוגיה מתקדמת וחיסכון בעלויות.
                        </p>
                    </FadeIn>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <ScaleIn key={index} delay={index * 0.1}>
                            <Link href={`/blog/${article.slug}`}>
                                <article className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all border border-gray-100 group h-full">
                                    <div className="h-48 relative overflow-hidden group-hover:bg-secondary/20 transition-colors">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    </div>
                                    <div className="p-8">
                                        <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">{article.category}</span>
                                        <h2 className="text-2xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                                            {article.title}
                                        </h2>
                                        <p className="text-gray-600 mb-6 line-clamp-2 font-medium">
                                            {article.excerpt}
                                        </p>
                                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                                            <span className="text-sm font-bold text-primary">קראו עוד</span>
                                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-secondary">
                                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </ScaleIn>
                    ))}
                </div>
            </div>
        </div>
    );
}
