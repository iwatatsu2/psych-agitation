"use client";

import { useState } from "react";
import Link from "next/link";
import { allDrugs } from "@/data/agitation";

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

export default function DrugsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("all");

  const filtered = allDrugs.filter((d) => {
    const matchesQuery =
      !query ||
      d.name.includes(query) ||
      d.route.includes(query) ||
      d.notes.includes(query);
    const matchesFilter = filter === "all" || d.category === filter;
    return matchesQuery && matchesFilter;
  });

  return (
    <div className="space-y-4">
      <Link
        href="/"
        className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
      >
        &larr; トップに戻る
      </Link>

      <h1 className="text-xl font-bold">薬剤一覧</h1>

      <input
        type="text"
        placeholder="薬剤名・投与経路で検索..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex gap-2 flex-wrap">
        {["all", "antipsychotic", "benzodiazepine", "antihistamine"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {cat === "all" ? "すべて" : categoryLabel[cat]}
            </button>
          )
        )}
      </div>

      <div className="space-y-3">
        {filtered.map((drug, i) => (
          <div
            key={i}
            className="rounded-xl bg-slate-900 border border-slate-800 p-4"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-bold text-white">{drug.name}</h3>
              <span
                className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${categoryColor[drug.category]}`}
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
            <p className="text-xs text-amber-400/80 mb-2">{drug.notes}</p>
            <div className="flex gap-1.5">
              {drug.levels.map((lv) => (
                <span
                  key={lv}
                  className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400"
                >
                  {lv}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-slate-500 py-8">
          該当する薬剤がありません
        </p>
      )}
    </div>
  );
}
