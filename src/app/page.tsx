import Image from "next/image";
import { FadeIn, ScaleIn } from "@/components/Motion";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-24 md:py-48 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-ct.png"
            alt="Clinic Atmosphere"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <span className="inline-block px-4 py-1 bg-secondary text-primary font-bold text-xs md:text-sm rounded-full mb-6">מכון צילומי שיניים בפתח תקווה - הסניף המרכזי</span>
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] md:leading-tight">
              הדיוק המקסימלי במכון <br className="hidden md:block" />
              <span className="text-secondary underline decoration-4 underline-offset-8">המרכזי בפתח תקווה</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-white font-bold mb-10 max-w-3xl mx-auto drop-shadow-lg">
              צילומי CT ופנורמי בטכנולוגיה הכי מתקדמת בעולם. תוצאות ישירות לוואצאפ בתוך דקות במחיר המשתלם ביותר בלב פתח תקווה.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/972549790938"
                className="px-10 py-4 bg-secondary text-primary text-xl font-black rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                להזמנת תור בוואצאפ
              </a>
              <a
                href="#pricing"
                className="px-10 py-4 border-2 border-white/30 text-white text-xl font-bold rounded-full hover:bg-white/10 transition-colors"
              >
                למחירון המלא
              </a>
            </div>
          </FadeIn>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Price Cards Section */}
      <section id="pricing" className="container mx-auto px-4 relative overflow-hidden">
        <div className="text-center mb-16 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-4">המחירים המשתלמים בישראל</h2>
            <div className="w-20 h-2 bg-secondary mx-auto rounded-full"></div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
          {/* CT Card */}
          <ScaleIn>
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-xl hover:border-secondary transition-colors group relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
              <h3 className="text-2xl font-black mb-2">צילום CT</h3>
              <p className="text-gray-500 mb-6 font-medium">צילום תלת-ממדי מדויק להשתלות וטיפולים מורכבים</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black text-primary">₪149</span>
                <span className="text-gray-400 line-through text-lg">₪450</span>
              </div>
              <p className="text-secondary font-black text-sm mb-6 flex items-center gap-1">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                המחיר עבור לסת אחת
              </p>
              <a href="https://wa.me/972549790938" className="block text-center py-3 bg-primary text-white font-bold rounded-xl group-hover:bg-secondary group-hover:text-primary transition-colors">
                הזמן תור עכשיו
              </a>
            </div>
          </ScaleIn>

          {/* Panoramic Card */}
          <ScaleIn delay={0.2}>
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-xl hover:border-secondary transition-colors group relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
              <h3 className="text-2xl font-black mb-2">צילום פנורמי</h3>
              <p className="text-gray-500 mb-6 font-medium">צילום רחב ומקיף של כל חלל הפה בתמונה אחת</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black text-primary">₪79</span>
                <span className="text-gray-400 line-through text-lg">₪180</span>
              </div>
              <p className="text-secondary font-black text-sm mb-6 flex items-center gap-1">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                המחיר עבור פה מלא
              </p>
              <a href="https://wa.me/972549790938" className="block text-center py-3 bg-primary text-white font-bold rounded-xl group-hover:bg-secondary group-hover:text-primary transition-colors">
                הזמן תור עכשיו
              </a>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Why Us Section - Premium Redesign */}
      <section className="relative py-40 md:py-60 overflow-hidden bg-primary">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <img
            src="/clinic-lobby.png"
            alt="Clinic Lobby"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
          {/* Decorative Animated Glows */}
          <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
            <FadeIn>
              <span className="inline-block px-5 py-2 bg-secondary/10 border border-secondary/20 text-secondary font-black text-xs md:text-sm rounded-full mb-8 tracking-widest uppercase">
                סטנדרט קליני בינלאומי
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1] md:leading-tight">
                למה אלפי רופאים <br className="md:hidden" /> ומטופלים <br className="hidden md:block" />
                <span className="text-secondary">בוחרים ב-CT RN?</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
                אנחנו לא רק מכון צילום. אנחנו השותף הטכנולוגי שלכם לאבחון מדויק, מהיר ונגיש.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <FadeIn delay={0.1}>
              <div className="group relative p-10 rounded-[3.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-secondary/30 transition-all duration-700 h-full flex flex-col items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3.5rem]"></div>

                <div className="w-28 h-28 bg-primary rounded-[2rem] flex items-center justify-center text-secondary mb-10 relative shadow-2xl group-hover:scale-110 transition-transform duration-500 border border-white/5">
                  <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg viewBox="0 0 24 24" width="56" height="56" fill="currentColor" className="relative z-10">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>

                <h3 className="text-3xl font-black text-white mb-6 tracking-tight relative z-10">תוצאות בוואצאפ</h3>
                <p className="text-gray-400 font-medium text-lg leading-relaxed text-center relative z-10">
                  הטכנולוגיה שלנו שולחת את התוצאות ישירות אליכם לנייד תוך דקות ספורות. מהירות אבחונית ללא פשרות.
                </p>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn delay={0.2}>
              <div className="group relative p-10 rounded-[3.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-secondary/30 transition-all duration-700 h-full flex flex-col items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3.5rem]"></div>

                <div className="w-28 h-28 bg-primary rounded-[2rem] flex items-center justify-center text-secondary mb-10 relative shadow-2xl group-hover:scale-110 transition-transform duration-500 border border-white/5">
                  <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg viewBox="0 0 24 24" width="56" height="56" fill="currentColor" className="relative z-10">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>

                <h3 className="text-3xl font-black text-white mb-6 tracking-tight relative z-10">דיוק מקסימלי</h3>
                <p className="text-gray-400 font-medium text-lg leading-relaxed text-center relative z-10">
                  כל צילום מבוצע ברזולוציה של 75 מיקרון. דיוק שמאפשר לרופא שלכם לתכנן את הטיפול המושלם עבורכם.
                </p>
              </div>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn delay={0.3}>
              <div className="group relative p-10 rounded-[3.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-secondary/30 transition-all duration-700 h-full flex flex-col items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3.5rem]"></div>

                <div className="w-28 h-28 bg-primary rounded-[2rem] flex items-center justify-center text-secondary mb-10 relative shadow-2xl group-hover:scale-110 transition-transform duration-500 border border-white/5">
                  <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg viewBox="0 0 24 24" width="56" height="56" fill="currentColor" className="relative z-10">
                    <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.09-.36.14-.57.14s-.41-.05-.57-.14l-7.9-4.44c-.31-.17-.53-.5-.53-.88v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.09.36-.14.57-.14s.41.05.57.14l7.9 4.44c.32.17.53.5.53.88v9z" />
                  </svg>
                </div>

                <h3 className="text-3xl font-black text-white mb-6 tracking-tight relative z-10">בטיחות קרינה</h3>
                <p className="text-gray-400 font-medium text-lg leading-relaxed text-center relative z-10">
                  טכנולוגיית Cone Beam מתקדמת המפחיתה משמעותית את כמות הקרינה תוך שמירה על איכות הדמיה מעולה.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Digital Delivery CTA */}
      <section className="container mx-auto px-4 text-center">
        <FadeIn>
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <img src="/delivery.png" alt="Digital Delivery" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <div className="flex justify-center gap-6 mb-8 text-secondary">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.86L3 21l3.14-1.14C7.81 21.3 9.83 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" /></svg>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">התוצאות אצלכם ביד מיד בסיום הצילום</h2>
              <p className="text-xl text-gray-300 mb-0 font-medium font-heebo tracking-wider">שליחה אוטומטית לוואצאפ ולמייל</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/20 to-transparent"></div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
