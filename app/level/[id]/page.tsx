import Link from "next/link";
import { levels } from "@/data/agitation";
import { notFound } from "next/navigation";

const categoryLabel: Record<string, string> = {
  antipsychotic: "抗精神病薬",
  benzodiazepine: "ベンゾジアゼピン",
  antihistamine: "抗ヒスタミン薬",
};

const categoryColor: Record<string, string> = {
  antipsychotic: "bg-violet-500/20 text-violet-300",
  benzodiazepine: "bg-sky-500/20 text-sky-300",
  antihistamine: "bg-emerald-500/20 text-emerald-300",
};

export function generateStaticParams() {
  return levels.map((l) => ({ id: l.id }));
}

export default async function LevelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const level = levels.find((l) => l.id === id);
  if (!level) notFound();

  const levelIndex = levels.findIndex((l) => l.id === id);

  return (
    <div className="space-y-6">
      <Link
        href="/"
        className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
      >
        &larr; レベル選択に戻る
      </Link>

      {/* Header */}
      <div
        className={`rounded-2xl bg-gradient-to-r ${level.color} p-5`}
      >
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
            {level.label}
          </span>
          <span className="text-2xl font-bold text-white">
            {level.name}
          </span>
        </div>
        <p className="text-white/90 font-medium">{level.description}</p>
      </div>

      {/* Examples */}
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
          具体的な状況
        </h2>
        <ul className="space-y-2">
          {level.examples.map((ex, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-slate-300"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
              {ex}
            </li>
          ))}
        </ul>
      </section>

      {/* Flow */}
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
          対応フロー
        </h2>
        <div className="space-y-0">
          {level.steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-xs font-bold text-slate-300 shrink-0">
                  {i + 1}
                </div>
                {i < level.steps.length - 1 && (
                  <div className="w-0.5 h-6 bg-slate-700" />
                )}
              </div>
              <p className="text-sm text-slate-200 pt-1.5 pb-4">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Drugs */}
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
          使用薬剤
        </h2>
        <div className="space-y-3">
          {level.drugs.map((drug, i) => (
            <div
              key={i}
              className="rounded-xl bg-slate-900 border border-slate-800 p-4"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-white">{drug.name}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${categoryColor[drug.category]}`}
                >
                  {categoryLabel[drug.category]}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm mb-2">
                <div>
                  <span className="text-slate-500 text-xs">投与経路</span>
                  <p className="text-slate-200">{drug.route}</p>
                </div>
                <div>
                  <span className="text-slate-500 text-xs">用量</span>
                  <p className="text-slate-200">{drug.dose}</p>
                </div>
                <div>
                  <span className="text-slate-500 text-xs">効果発現</span>
                  <p className="text-slate-200">{drug.onset}</p>
                </div>
              </div>
              <p className="text-xs text-amber-400/80">{drug.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cautions */}
      <section>
        <h2 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
          注意事項
        </h2>
        <div className="rounded-xl bg-red-950/30 border border-red-900/50 p-4">
          <ul className="space-y-2">
            {level.cautions.map((c, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-red-200/80"
              >
                <span className="text-red-400 shrink-0">!</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex gap-3 pt-4">
        {levelIndex > 0 && (
          <Link
            href={`/level/${levels[levelIndex - 1].id}`}
            className="flex-1 text-center py-3 rounded-xl bg-slate-800 text-slate-300 text-sm hover:bg-slate-700 transition-colors"
          >
            &larr; {levels[levelIndex - 1].name}
          </Link>
        )}
        {levelIndex < levels.length - 1 && (
          <Link
            href={`/level/${levels[levelIndex + 1].id}`}
            className="flex-1 text-center py-3 rounded-xl bg-slate-800 text-slate-300 text-sm hover:bg-slate-700 transition-colors"
          >
            {levels[levelIndex + 1].name} &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}
