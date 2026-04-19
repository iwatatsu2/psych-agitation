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

      <Link href="/delirium" className="block group mt-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6 transition-transform active:scale-[0.98]">
          <div className="relative z-10">
            <span className="text-2xl font-bold text-white">せん妄対応</span>
            <p className="text-white/90 text-sm mt-1">
              診断・臨床像・薬物療法・アルコール離脱せん妄
            </p>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 text-5xl font-black">
            D
          </div>
        </div>
      </Link>

      <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-red-900/50">
        <h2 className="text-sm font-semibold text-red-400 mb-3">
          免責事項・使用上の注意
        </h2>
        <ul className="text-xs text-slate-400 space-y-2">
          <li>
            本アプリは医療従事者向けの参考資料であり、医学的助言を提供するものではありません。
          </li>
          <li>
            掲載内容は一般的な対応例であり、すべての患者・状況に適用されるものではありません。実際の対応は各施設のプロトコル・マニュアルに従ってください。
          </li>
          <li>
            薬剤の投与は必ず医師の診察・指示のもとで行ってください。用法・用量は患者の年齢、体重、腎機能・肝機能、併用薬等を考慮し個別に判断する必要があります。
          </li>
          <li>
            身体拘束を行う場合は、精神保健及び精神障害者福祉に関する法律（精神保健福祉法）に基づく適切な手続きを遵守してください。
          </li>
          <li>
            本アプリの情報に基づいて行われた医療行為の結果について、開発者は一切の責任を負いません。
          </li>
          <li>
            掲載されている薬剤情報は作成時点のものです。最新の添付文書・ガイドラインを必ず確認してください。
          </li>
          <li>
            本アプリに患者の個人情報を入力・保存する機能はありません。
          </li>
        </ul>
      </div>
    </div>
  );
}
