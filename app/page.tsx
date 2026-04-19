import Link from "next/link";
import { levels } from "@/data/agitation";

export default function Home() {
  return (
    <div className="space-y-4">
      <p className="text-slate-400 text-sm">
        不穏レベルを選択してください
      </p>

      {levels.map((level) => (
        <Link
          key={level.id}
          href={`/level/${level.id}`}
          className="block group"
        >
          <div
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${level.color} p-6 transition-transform active:scale-[0.98]`}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  {level.label}
                </span>
                <span className="text-2xl font-bold text-white">
                  {level.name}
                </span>
              </div>
              <p className="text-white/90 text-lg font-medium mb-3">
                {level.description}
              </p>
              <ul className="space-y-1">
                {level.examples.slice(0, 2).map((ex, i) => (
                  <li
                    key={i}
                    className="text-sm text-white/70 flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-white/50 shrink-0" />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 text-6xl font-black">
              {level.label.split(" ")[1]}
            </div>
          </div>
        </Link>
      ))}

      <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800">
        <h2 className="text-sm font-semibold text-slate-300 mb-2">
          使用上の注意
        </h2>
        <ul className="text-xs text-slate-500 space-y-1">
          <li>
            本アプリは参考情報です。実際の対応は施設のプロトコルに従ってください。
          </li>
          <li>薬剤投与は必ず医師の指示のもとで行ってください。</li>
          <li>患者の個別性を考慮した判断が必要です。</li>
        </ul>
      </div>
    </div>
  );
}
