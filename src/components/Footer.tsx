import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-primary font-black text-xl group-hover:rotate-12 transition-transform shadow-lg">CT</div>
                            <span className="text-2xl font-black text-white tracking-widest uppercase">RN</span>
                        </Link>
                        <p className="text-gray-300 max-w-md">
                            המומחים לצילומי שיניים CT. שבירת שוק במחירים, טכנולוגיה מתקדמת, ושליחה דיגיטלית ישירה לוואצאפ ולמייל שלכם ושל הרופא המטפל.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary">ניווט מהיר</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">דף הבית</Link></li>
                            <li><Link href="/branches" className="text-gray-300 hover:text-white transition-colors">סניפים</Link></li>
                            <li><Link href="/technology" className="text-gray-300 hover:text-white transition-colors">הציוד שלנו</Link></li>
                            <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">בלוג ומאמרים</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 text-secondary">סניף מרכזי</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><span className="font-bold text-white">פתח תקווה:</span> חיים עוזר 32</li>
                            <li>טלפון: 054-9790938</li>
                            <li>מייל: ctrnctrn1@gmail.com</li>
                            <li>שעות פעילות: 10:00-19:00</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm flex flex-col items-center gap-2">
                    <p>© {new Date().getFullYear()} CT RN. כל הזכויות שמורות.</p>
                    <a href="https://fem.co.il/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
                        פול אפקט מדיה ניהול קמפיינים ברשת
                    </a>
                </div>
            </div>
        </footer>
    );
}
