import profile from "/assets/prof2.png";

export default function About() {
  return (
    <section className="flex items-center justify-center min-h-screen flex-col gap-14 py-24 px-10">
      <div className="two alt-two">
        <h1 className="text-4xl">
          من کی هستم؟
          <span></span>
        </h1>
      </div>

      <div className="flex gap-20 items-center justify-center">
        <div>
          <h1 className="text-4xl mb-3">حسینا حیدری</h1>
          <h3 className="text-xl font-medium mb-10">
            دانش‌آموخته کارشناسی ارشد علوم کامپیوتر دانشکده آمار، ریاضی و رایانه
            <span className="block">دانشگاه علامه طباطبائی</span>
          </h3>
          <p className="text-xl">
            <span className="font-semibold">شماره دانشجویی: </span> ۴۰۰۲۳۱۴۱۰۳
          </p>
          <p className="text-xl">
            <span className="font-semibold">شماره تماس: </span> ۰۹۹۶۲۲۸۲۸۷۴
          </p>
          <p className="text-xl">
            <span className="font-semibold">ایمیل: </span>
            <a
              href="mailto:Hasina_Haidari@atu.ac.ir"
              className="hover:underline"
            >
              Hasina_Haidari@atu.ac.ir
            </a>
          </p>
        </div>

        <div className="h-96 w-96 rounded-full overflow-hidden">
          <img src={profile} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
