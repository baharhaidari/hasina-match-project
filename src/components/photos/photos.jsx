import img1 from "/assets/img-1.jpg";
import img2 from "/assets/img-2.jpg";
import img3 from "/assets/img-3.jpg";
import img4 from "/assets/img-4.jpg";
import img5 from "/assets/img-5.jpg";
import img6 from "/assets/img-6.jpg";
import img7 from "/assets/img-7.jpg";
import img8 from "/assets/img-8.jpg";
import img9 from "/assets/img-9.jpg";
import img11 from "/assets/img-11.jpg";
import img12 from "/assets/img-12.jpg";
import img13 from "/assets/img-13.jpg";
import img14 from "/assets/img-14.jpg";
import img15 from "/assets/img-15.jpg";
import img16 from "/assets/img-16.jpg";
import img17 from "/assets/img-17.jpg";
import img18 from "/assets/img-18.jpg";
import img19 from "/assets/img-19.jpg";
import img20 from "/assets/img-20.jpg";
import img21 from "/assets/img-21.jpg";
import img22 from "/assets/img-22.jpg";
import img23 from "/assets/img-23.jpg";
import img24 from "/assets/img-24.jpg";
import img25 from "/assets/img-25.jpg";
import img26 from "/assets/img-26.jpg";
import img27 from "/assets/img-27.jpg";
import img28 from "/assets/img-28.jpg";
import img29 from "/assets/img-29.jpg";
import img30 from "/assets/img-30.jpg";
import img31 from "/assets/img-31.jpg";
import img32 from "/assets/img-32.jpg";
import img33 from "/assets/img-33.jpg";
import img34 from "/assets/img-34.jpg";
import img35 from "/assets/img-35.jpg";
import img36 from "/assets/img-36.jpg";
import img37 from "/assets/img-37.jpg";
import img38 from "/assets/img-38.jpg";
import img39 from "/assets/img-40.jpg";
import img40 from "/assets/img-41.jpg";
import img41 from "/assets/img-42.jpg";
import img42 from "/assets/img-43.jpg";

import { useState } from "react";
import Card from "../cards/card";

export default function Photographies() {
  const categories = {
    University: [
      {
        img: img1,
        caption: "یک تک‌ درخت و هزار و یک حرف...",
        date: "7 میزان 1403",
        id: 1,
      },
      {
        img: img2,
        caption: "دانشگاه علامه طباطبایی",
        date: "13 آبان 1403",
        id: 2,
      },
      {
        img: img3,
        caption: "پاییز و ابر و باران و ...",
        date: "13 آبان 1403",
        id: 3,
      },
      {
        img: img4,
        caption: "در سرویس دانشگاه به سمت  خوابگاه مهدیه",
        date: "13 آبان 1403",
        id: 4,
      },
      {
        img: img5,
        caption: "از پنجره‌ی دانشکده روان‌شناسی دانشگاه علامه طباطبایی",
        date: "13 آبان 1403",
        id: 5,
      },
      {
        img: img7,
        caption: "بزن باران... دانشگاه علامه طباطبایی",
        date: "13 آبان 1403",
        id: 6,
      },
      {
        img: img8,
        caption: "مسجد دانشگاه علامه طباطبایی - تهران",
        date: "تابستان 1403",
        id: 7,
      },
      {
        img: img9,
        caption: "دانشکده آمار ریاضی رایانه",
        date: "7 مهر 1403",
        id: 8,
      },
      {
        img: img11,
        caption: "دانشکده آمار ریاضی رایانه",
        date: "7 مهر 1403",
        id: 9,
      },
      {
        img: img12,
        caption: "دانشگاه علامه طباطبایی-تهران",
        date: "25 شهریور 1403",
        id: 10,
      },
    ],
    Khan: [
      {
        img: img13,
        caption: "الهی! تو نور راه من باش ... ✨️🍃",
        date: "21 مرداد 1403",
        id: 11,
      },
      {
        img: img14,
        caption:
          "گل اگر خار نداشت دل اگر بی‌غم بود اگر از بهر قناری قفسی تنگ‌ نبود زندگی عشق اسارت قهر و آشتی بی‌معنا بود ... 🍃",
        date: "بهار 1403 - تهران",
        id: 12,
      },
      {
        img: img15,
        caption: "به وقت قدردانی و دوست‌داشتنِ خود 💐✌️🏻",
        date: "25 مهر 1403",
        id: 13,
      },
      {
        img: img16,
        caption: "هدیه‌های حال خوب کن | دفاع پایان نامه👩🏻‍🎓",
        date: "آخرین روز از مهرماه 1403",
        id: 14,
      },
      {
        img: img17,
        caption:
          "هم‌اتاقی خوب کلِ داستانه در روزهای دلتنگ خوابگاه و اضطراب دفاع پایان‌نامه ...",
        date: "13 مهر 1403",
        id: 15,
      },
      { img: img42, caption: `تهران`, date: "16 مهر 1403", id: 29 },
    ],
    Tehran: [
      {
        img: img18,
        caption: `- مسیر مهم‌تره یا مقصد ؟
+ همراه !
بلوار کشاورز، تهران`,
        date: "بهار 1403",
        id: 16,
      },
      {
        img: img19,
        caption: `در دلِ سنگ‌ترین جای زمین
نبضِ یک رویش باش ...🍃
تهران-پیاده رو`,
        date: "نوروز 1403",
        id: 17,
      },
      {
        img: img20,
        caption: `از سوز محبت چه خبر اهل هوس را ؟
این آتشِ عشق است، نسوزد همه کس را ...
بلوار کشاورز، تهران `,
        date: "زمستان 1402",
        id: 18,
      },
      {
        img: img21,
        caption: `هر طلوع پرامیدی را غروبی غریب و آرام در انتظار نشسته است و در پی هر غروبی، طلوعی‌ست 
جان‌‌بخش!
و زندگی با همه سخت و آسانش، جریان دارد ...
`,
        date: "تابستان 1403 - تهران (پشت بام)",
        id: 19,
      },
      { img: img22, caption: `تهران کرج`, date: "8 تیر 1403", id: 20 },
      {
        img: img23,
        caption: `نشانه‌ها
آرام آرام 
آمدنش را گواهی می‌دهند....
پاییز را می‌گویم،`,
        date: "5 شهریور 1403 - بولوار کشاورز",
        id: 21,
      },
      {
        img: img24,
        caption: `شب باشد
پاییز باشد
خنکای باد به جانت بزند
و دلت گرم باشد به مهر خدایی که بی انتهاست ...`,
        date: "تهران بام نیایش - 16 مهر 1403",
        id: 22,
      },
      {
        img: img25,
        caption: `ما یه جاهایی حریفِ جبرِ زندگی نمی‌شیم ...`,
        date: "2 آبان 1403 - پل طبیعت",
        id: 23,
      },
      {
        img: img26,
        caption: `و شاید غروب ... 
غریبانه‌ترین خلقت خدا بود`,
        date: "10 آبان 1403",
        id: 24,
      },
      {
        img: img27,
        caption: `قدم زدن در بساط دلبرانه‌ی پاییز همه‌جوره می‌چسبد`,
        date: "8 آبان 1403 - بولوار کشاورز",
        id: 25,
      },

      {
        img: img35,
        caption: `7 آبان 1403 - پارک لاله`,
        date: "2023-03-13",
        id: 26,
      },
      {
        img: img36,
        caption: `مهربانی را اگر قسمت کنیم
من یقین دارم به ما هم می‌رسد
آدمی گر ایستد بر بام عشق
دست‌هایش تا خدا هم می‌رسد`,
        date: "17 مهر 1403 - -بام تهران",
        id: 27,
      },
      {
        img: img37,
        caption: `در بیکرانه‌ی زندگی دو چیز افسونم کرد !
آبی آسمان که می‌بینم و می‌دانم نیست 
و خدایی که نمی‌بینم و می‌دانم هست ...`,
        date: "4 مهر 1403 - پادک جنگلی لویزان",
        id: 28,
      },
      { img: img38, caption: `نیایش مال-تهران`, date: "16 مهر 1403", id: 29 },
      { img: img39, caption: `تهران`, date: "18 مهر 1403", id: 30 },
      { img: img40, caption: `تهران`, date: "25 مهر 1403", id: 31 },
      { img: img41, caption: `تهران`, date: "16 مهر 1403", id: 32 },
    ],
    Sardasht: [
      {
        img: img28,
        caption: `آبشار شلماش
زیبای وحشی در غربی ترین نقطه‌ی ایران`,
        date: "11 شهریور 1403 - سردشت کردستان",
        id: 33,
      },
      {
        img: img29,
        caption: `شاید نوشیدن یک فنجان چای آتشی
 تنها لذت ساده‌ایست که برای ما باقی مانده ...`,
        date: "12 شهریور 1403 - روستای میر آباد",
        id: 34,
      },
      {
        img: img30,
        caption: `به‌یانیت باش سردشت- کردستان 🌞`,
        date: "10 شهریور 1403",
        id: 35,
      },
      {
        img: img31,
        caption: `و کلانه‌ی کردستان !
همان بولانی خودمان هست ولی با پیازچه پُر میشه ...
عکس درست حسابی نشد بگیرم ولی برای منِ روستا دوست خیلی شگفت‌انگیز بود`,
        date: "11 شهریور 1403 - روستای بیوران کردستان",
        id: 36,
      },
      {
        img: img32,
        caption: `و سفر 
شاید گریزی بود از دلتنگی‌های دیروز  ...`,
        date: "9 شهریور 1403 - در گذر قزوین",
        id: 37,
      },
      {
        img: img34,
        caption: `صبحانه‌ی سنتی کُردی`,
        date: "12 شهریور 1403 - شهرک نلاس سردشت کردستان",
        id: 38,
      },
      {
        img: img33,
        caption: `انگار جان تازه‌یی می‌گیرم وقتی
کسی یا چیزی را می‌بینم 
که بوی ناب اصالت قدیم را می‌دهد...`,
        date: "11 شهریور 1403",
        id: 39,
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("University");

  return (
    <section className="flex items-center justify-center flex-col gap-14 min-h-screen py-24">
      <div className="two alt-two">
        <h1 className="text-4xl">
          عکس های برگزیده
          <span></span>
        </h1>
      </div>

      <div>
        {/* Filter buttons for categories */}
        <div className="flex w-full items-center justify-center gap-8 mb-8 filters_wrapper">
          <button
            className={`text-lg ${
              activeCategory === "University" ? "font-bold active_category" : ""
            }`}
            onClick={() => setActiveCategory("University")}
          >
            نمایه هایی از دانشگاه
          </button>
          <button
            className={`text-lg ${
              activeCategory === "Khan" ? "font-bold active_category" : ""
            }`}
            onClick={() => setActiveCategory("Khan")}
          >
            نمایه هایی از خوابگاه مهدیه
          </button>
          <button
            className={`text-lg ${
              activeCategory === "Tehran" ? "font-bold active_category" : ""
            }`}
            onClick={() => setActiveCategory("Tehran")}
          >
            نمایه هایی از تهران
          </button>
          <button
            className={`text-lg ${
              activeCategory === "Sardasht" ? "font-bold active_category" : ""
            }`}
            onClick={() => setActiveCategory("Sardasht")}
          >
            نمایه هایی از سردشت
          </button>
        </div>

        {/* Display images for the selected category */}
        <div className="grid grid-cols-3 justify-between gap-4 items-center flex-wrap">
          {categories[activeCategory].map((item, index) => (
            <Card
              img={item.img}
              caption={item.caption}
              date={item.date}
              key={index}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
