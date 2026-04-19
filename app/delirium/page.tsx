import Link from "next/link";
import {
  deliriumTypes,
  riskFactors,
  precursors,
  assessmentQuestions,
  differentialDiagnosis,
  treatmentSteps,
  deliriumDrugs,
  deliriumCautions,
  alcoholWithdrawal,
} from "@/data/delirium";

function DrugCard({ drug }: { drug: { name: string; route: string; dose: string; notes: string } }) {
  return (
    <div className="rounded-lg bg-slate-800 border border-slate-700 p-3">
      <h4 className="font-bold text-white text-sm">{drug.name}</h4>
      <div className="grid grid-cols-2 gap-2 text-xs mt-1.5">
        <div>
          <span className="text-slate-500">投与経路</span>
          <p className="text-slate-300">{drug.route}</p>
        </div>
        <div>
          <span className="text-slate-500">用量</span>
          <p className="text-slate-300">{drug.dose}</p>
        </div>
      </div>
      {drug.notes && (
        <p className="text-xs text-amber-400/80 mt-1.5">{drug.notes}</p>
      )}
    </div>
  );
}

export default function DeliriumPage() {
  return (
    <div className="space-y-6">
      <Link
        href="/"
        className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
      >
        &larr; トップに戻る
      </Link>

      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-5">
        <h1 className="text-2xl font-bold text-white mb-1">せん妄対応ガイド</h1>
        <p className="text-white/80 text-sm">
          一過性・可逆性の意識障害。急激な発症と症状の変動が特徴
        </p>
      </div>

      {/* 臨床像 */}
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
          臨床像（3型）
        </h2>
        <div className="space-y-3">
          {deliriumTypes.map((type) => (
            <div
              key={type.name}
              className="rounded-xl bg-slate-900 border border-slate-800 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-white">{type.name}</h3>
                <span className="text-xs text-slate-500">
                  {type.description}
                </span>
              </div>
              <ul className="space-y-1">
                {type.features.map((f, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-300 flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 前駆症状 */}
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
          前駆症状
        </h2>
        <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">
          <ul className="space-y-2">
            {precursors.map((p, i) => (
              <li
                key={i}
                className="text-sm text-slate-300 flex items-start gap-2"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 発症危険因子 */}
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
          発症危険因子
        </h2>
        <div className="space-y-3">
          <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">
            <h3 className="text-xs font-semibold text-red-400 mb-2">直接因子</h3>
            <ul className="space-y-1">
              {riskFactors.direct.map((f, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="mt-1 w-1 h-1 rounded-full bg-red-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">
              <h3 className="text-xs font-semibold text-orange-400 mb-2">準備因子</h3>
              <ul className="space-y-1">
                {riskFactors.predisposing.map((f, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="mt-1 w-1 h-1 rounded-full bg-orange-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">
              <h3 className="text-xs font-semibold text-yellow-400 mb-2">誘発因子</h3>
              <ul className="space-y-1">
                {riskFactors.precipitating.map((f, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="mt-1 w-1 h-1 rounded-full bg-yellow-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 問診ポイント */}
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
          問診ポイント
        </h2>
        <div className="space-y-3">
          {assessmentQuestions.map((q) => (
            <div
              key={q.category}
              className="rounded-xl bg-slate-900 border border-slate-800 p-4"
            >
              <h3 className="text-sm font-semibold text-sky-400 mb-2">
                {q.category}
              </h3>
              <ul className="space-y-1.5">
                {q.items.map((item, i) => (
                  <li key={i} className="text-xs text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 鑑別診断 */}
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
          鑑別診断
        </h2>
        <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">
          <ul className="space-y-2">
            {differentialDiagnosis.map((d, i) => (
              <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 対応フロー */}
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
          対応フロー
        </h2>
        <div className="space-y-0">
          {treatmentSteps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-indigo-500 flex items-center justify-center text-xs font-bold text-indigo-300 shrink-0">
                  {i + 1}
                </div>
                {i < treatmentSteps.length - 1 && (
                  <div className="w-0.5 h-6 bg-slate-700" />
                )}
              </div>
              <p className="text-sm text-slate-200 pt-1.5 pb-4">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 薬物療法 */}
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
          薬物療法
        </h2>
        <div className="space-y-4">
          {Object.values(deliriumDrugs).map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-indigo-300 mb-2">
                {group.label}
              </h3>
              <div className="space-y-2">
                {group.drugs.map((drug, i) => (
                  <DrugCard key={i} drug={drug} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 注意事項 */}
      <section>
        <h2 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
          注意事項
        </h2>
        <div className="rounded-xl bg-red-950/30 border border-red-900/50 p-4">
          <ul className="space-y-2">
            {deliriumCautions.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-red-200/80">
                <span className="text-red-400 shrink-0">!</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* アルコール離脱せん妄 */}
      <section>
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
          アルコール離脱せん妄
        </h2>
        <div className="rounded-xl bg-amber-950/30 border border-amber-900/50 p-4 mb-3">
          <p className="text-sm text-amber-300 font-semibold mb-2">
            通常のせん妄と治療法が異なる（BZ系が第一選択）
          </p>
        </div>

        <h3 className="text-xs font-semibold text-slate-400 mb-2">診断</h3>
        <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 mb-3">
          <ul className="space-y-1.5">
            {alcoholWithdrawal.diagnosis.map((d, i) => (
              <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-xs font-semibold text-slate-400 mb-2">薬物療法（経口）</h3>
        <div className="space-y-2 mb-3">
          {alcoholWithdrawal.drugs.oral.map((drug, i) => (
            <DrugCard key={i} drug={drug} />
          ))}
        </div>

        <h3 className="text-xs font-semibold text-slate-400 mb-2">薬物療法（経口不可）</h3>
        <div className="space-y-2 mb-3">
          {alcoholWithdrawal.drugs.parenteral.map((drug, i) => (
            <DrugCard key={i} drug={drug} />
          ))}
        </div>

        <h3 className="text-xs font-semibold text-slate-400 mb-2">補助療法</h3>
        <div className="space-y-2">
          {alcoholWithdrawal.drugs.adjunct.map((drug, i) => (
            <DrugCard key={i} drug={drug} />
          ))}
        </div>
      </section>
    </div>
  );
}
