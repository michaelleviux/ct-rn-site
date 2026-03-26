"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "האם צריך הפניה מרופא לצילום?",
        answer: "מומלץ להגיע עם הפניה מרופא השיניים המטפל כדי שנדע בדיוק איזה אזור יש לצלם. עם זאת, ניתן לבצע צילום פנורמי כללי גם ללא הפניה לצורכי אבחון ראשוני."
    },
    {
        question: "כמה זמן לוקח הצילום?",
        answer: "הצילום עצמו מהיר מאוד - בין 8 ל-20 שניות בלבד. כל התהליך כולל הרישום לוקח כ-10-15 דקות."
    },
    {
        question: "איך אני מקבל את התוצאות?",
        answer: "מיד בסיום הצילום, המערכת שלנו שולחת קישור דיגיטלי ישירות לוואצאפ ולמייל שלך. בנוסף, נוכל לשלוח את התוצאות ישירות לרופא המטפל שלך."
    },
    {
        question: "האם צילום CT מסוכן בגלל קרינה?",
        answer: "מכשור ה-CS 8100 3D שלנו הוא מהמתקדמים בעולם ופולט רמת קרינה מינימלית ביותר, נמוכה משמעותית ממכשירים ישנים. הבטיחות שלך היא בעדיפות עליונה אצלנו."
    },
    {
        question: "האם המחירים אכן 149 ₪ ל-CT?",
        answer: "כן, אנחנו ב-CT RN חרטנו על דגלנו שבירת שוק במחירים כדי להפוך את הבריאות לנגישה לכולם. צילום CT עולה 149 ₪ בלבד ללא אותיות קטנות."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-primary">שאלות ותשובות</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-right p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-xl font-bold text-primary">{faq.question}</span>
                                <ChevronDown className={`text-secondary transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            {openIndex === index && (
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-lg bg-gray-50/50">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
