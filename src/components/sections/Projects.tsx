import { useState } from "react";
import { PROJECTS } from "../../data/projects";
import type { Project } from "../../data/projects";
import { Reveal } from "../Reveal";

/* پیش‌نمایش پروژه:
   اسکرین‌شات در public/projects/{id}.jpg → عکس واقعی
   نبودش → کارت عنوانِ طراحی‌شده (سایت هیچ‌وقت خراب به نظر نمی‌رسد) */
function ProjectImage({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const src = `${import.meta.env.BASE_URL}projects/${project.id}.jpg`;

  const frame =
    "aspect-[2.5/1] w-full overflow-hidden rounded-[10px] border border-line bg-cream";

  if (failed) {
    return (
      <div className={`${frame} grid place-items-center`}>
        <div className="text-center">
          <span className="block font-display text-5xl font-semibold leading-none text-terra/35">
            {project.idx}
          </span>
          <span
            dir="ltr"
            className="mt-2 block font-mono text-[10px] tracking-widest text-mute/70"
          >
            projects/{project.id}.jpg
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={frame}>
      <img
        src={src}
        alt={`نمای پروژه ${project.title}`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group overflow-hidden rounded-[14px] border border-line bg-surface p-2.5 transition-all duration-200 hover:-translate-y-0.75 hover:border-line2 hover:shadow-[0_18px_36px_-24px_rgba(33,29,22,0.3)]">
        {/* تصویر — مثل عکس قاب‌شده با حاشیه باریک */}
        <ProjectImage project={project} />

        <div className="px-3 pb-2 pt-4 sm:px-3.5 sm:pb-3">
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="font-mono text-xs text-terra">{project.idx}</span>
            <h3 className="text-[1.05rem] font-bold text-ink transition-colors group-hover:text-terra">
              {project.title}
            </h3>
            <span
              className="ms-auto font-mono text-[11.5px] text-mute"
              dir="ltr"
            >
              {project.year}
            </span>
          </div>

          <p className="mt-2 text-sm leading-7 text-mute">
            {project.description}
          </p>

          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                dir="ltr"
                className="rounded-md border border-line bg-cream px-2.5 py-0.5 font-mono text-[11px] text-soft"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-5">
            <a
              className="arrow-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              گیت‌هاب <span className="arr">↗</span>
            </a>
            <a
              className="arrow-link"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              دمو زنده <span className="arr">↗</span>
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <div className="space-y-3.5">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.id} project={project} delay={i * 0.08} />
      ))}
    </div>
  );
}
