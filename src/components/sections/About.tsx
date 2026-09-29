import { useState } from "react";
import { PROFILE } from "../../data/profile";
import { FACTS, ROTATOR_WORDS } from "../../data/skills";
import { useGreeting } from "../../hooks/useGreeting";
import { Reveal } from "../Reveal";

function Rotator() {
  const words = [...ROTATOR_WORDS, ROTATOR_WORDS[0]];
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-[1.35em] overflow-hidden align-bottom text-terra"
    >
      <span className="rot-track flex flex-col">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="h-[1.35em] whitespace-nowrap leading-[1.35em]"
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}

function Avatar() {
  const [failed, setFailed] = useState(false);
  const src = `${import.meta.env.BASE_URL}profile.jpg`;

  const frameClass =
    "aspect-[4/5] w-full rotate-2 rounded-[18px] border border-line2 object-cover " +
    "shadow-[0_16px_32px_-20px_rgba(33,29,22,0.4)] transition-transform duration-300 " +
    "hover:rotate-0 hover:scale-[1.02]";

  if (failed) {
    return (
      <div
        className={`${frameClass} grid place-items-center bg-surface font-display text-4xl text-mute`}
      >
        ن.س
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={`عکس ${PROFILE.name}`}
      onError={() => setFailed(true)}
      className={frameClass}
    />
  );
}

export function About() {
  const greeting = useGreeting();

  return (
    <>
      <Reveal>
        <p className="mb-2.5 text-sm text-mute">{greeting} 👋</p>
      </Reveal>

      <Reveal delay={0.06}>
        <h1 className="font-display text-[clamp(2.3rem,6.5vw,3.5rem)] font-semibold leading-[1.35] text-ink">
          رابط‌هایی{" "}
          <span className="relative inline-block">
            می‌سازم
            <svg
              className="uline absolute inset-x-0 -bottom-1 h-3 w-full"
              viewBox="0 0 140 12"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M4 8 C 40 3, 90 10, 136 5"
                fill="none"
                stroke="#C9431A"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          که <Rotator /> هستند.
        </h1>
      </Reveal>

      <div className="mt-7 grid items-start gap-7 md:grid-cols-[1fr_230px] md:gap-10">
        <Reveal delay={0.15}>
          
          <p className="bio">
  سلام، من <span className="hl">{PROFILE.firstName}</span> هستم <small>(متولد ۱۳۸۰)</small>؛
  دانش‌آموخته مهندسی نرم‌افزار و
  <span className="hl"> توسعه‌دهنده فرانت‌اند </span>
  علاقه‌مند به ساخت رابط‌های کاربری مدرن، سریع، ریسپانسیو و تجربه‌های کاربری جذاب هستم.
  یادگیری مداوم و تبدیل ایده‌ها به پروژه‌های واقعی، بخش مهمی از مسیر حرفه‌ای من است.
</p>

<p className="bio">
  در توسعه رابط‌های کاربری با
  <span className="hl font-mono" dir="ltr">
    HTML, CSS, JavaScript, TypeScript, React
  </span>
  کار می‌کنم و برای طراحی و استایل‌دهی از
  <span className="hl font-mono" dir="ltr">
    Tailwind CSS, Bootstrap
  </span>
  استفاده می‌کنم.
  با <span className="hl font-mono" dir="ltr">React Router</span>،
  ساختاردهی کامپوننت‌ها، طراحی صفحات ریسپانسیو و پیاده‌سازی رابط‌های کاربری
  تعاملی آشنا هستم و پروژه‌هایم را با
  <span className="hl font-mono" dir="ltr">Git & GitHub</span>
  مدیریت و توسعه می‌دهم.
</p>

<p className="bio">
  بیشتر از هر چیز، یادگیری من با ساختن اتفاق می‌افتد؛
  پروژه می‌سازم، با چالش‌های واقعی روبه‌رو می‌شوم، مشکلات را حل می‌کنم
  و با هر پروژه تجربه بیشتری به دست می‌آورم.
  در کنار توسعه فرانت‌اند، در حال یادگیری
  <span className="hl"> هوش مصنوعی و یادگیری ماشین </span>
  <span className="hl font-mono" dir="ltr">(Machine Learning)</span>
  هستم و قصد دارم در ادامه، این دو حوزه را به هم نزدیک‌تر کنم و
  در مسیر توسعه
  <span className="hl"> اپلیکیشن‌های هوشمند و AI-powered </span>
  فعالیت کنم.
</p>

<p className="bio">
  هدف من این است که فقط یک توسعه‌دهنده رابط کاربری نباشم؛
  بلکه درک عمیق‌تری از فناوری‌های مدرن داشته باشم و بتوانم
  تجربه‌های کاربری را با قابلیت‌های هوش مصنوعی ترکیب کنم.
  به همین دلیل، مسیر یادگیری من در حال حاضر از
  <span className="hl"> توسعه فرانت‌اند </span>
  به سمت
  <span className="hl"> توسعه محصولات مبتنی بر هوش مصنوعی </span>
  در حال گسترش است.
</p>

          <div className="mt-6 flex flex-wrap gap-6 md:gap-8">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <b className="block font-display text-[1.7rem] font-semibold leading-tight text-terra">
                  {fact.value}
                </b>
                <span className="text-[13px] text-mute">{fact.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <figure className="mx-auto w-full max-w-57.5 md:max-w-none">
            <Avatar />
          </figure>
        </Reveal>
      </div>
    </>
  );
}
