export interface Drug {
  name: string;
  route: string;
  dose: string;
  onset: string;
  notes: string;
  category: "antipsychotic" | "benzodiazepine" | "antihistamine";
}

export interface Level {
  id: string;
  name: string;
  label: string;
  description: string;
  color: string;
  colorDark: string;
  examples: string[];
  steps: string[];
  drugs: Drug[];
  cautions: string[];
}

export const levels: Level[] = [
  {
    id: "mild",
    name: "軽度",
    label: "Level 1",
    description: "興奮・焦燥・易怒性",
    color: "from-amber-400 to-amber-600",
    colorDark: "dark:from-amber-500 dark:to-amber-700",
    examples: [
      "落ち着きがない、そわそわしている",
      "声が大きくなる、イライラしている",
      "要求が多い、繰り返し訴える",
    ],
    steps: [
      "環境調整（刺激の軽減、静かな場所への移動）",
      "傾聴・共感的対応、要望の確認",
      "口頭での落ち着きの促し（ディエスカレーション）",
      "改善なければ頓服薬の提案・投与",
      "15〜30分後に再評価",
    ],
    drugs: [
      {
        name: "リスペリドン内用液",
        route: "経口",
        dose: "0.5〜1mg",
        onset: "30〜60分",
        notes: "液剤で服用しやすい。糖尿病患者には注意",
        category: "antipsychotic",
      },
      {
        name: "クエチアピン",
        route: "経口",
        dose: "25〜50mg",
        onset: "30〜60分",
        notes: "鎮静作用が強い。糖尿病禁忌",
        category: "antipsychotic",
      },
      {
        name: "ロラゼパム",
        route: "経口",
        dose: "0.5〜1mg",
        onset: "30〜60分",
        notes: "不安・焦燥が主体の場合に。呼吸抑制に注意",
        category: "benzodiazepine",
      },
      {
        name: "ヒドロキシジン",
        route: "経口",
        dose: "25〜50mg",
        onset: "30〜60分",
        notes: "抗ヒスタミン薬。軽度の鎮静に",
        category: "antihistamine",
      },
    ],
    cautions: [
      "バイタルサイン確認（血圧・脈拍・SpO2）",
      "転倒リスクの評価",
      "投与時刻・薬剤・用量を記録",
      "30分後に効果判定 → 改善なければ中等度対応へ",
    ],
  },
  {
    id: "moderate",
    name: "中等度",
    label: "Level 2",
    description: "暴言・物を投げる・拒薬",
    color: "from-orange-500 to-red-500",
    colorDark: "dark:from-orange-600 dark:to-red-600",
    examples: [
      "大声で怒鳴る、暴言を吐く",
      "物を投げる、壁を叩く",
      "内服を拒否する",
      "スタッフへの威嚇行為",
    ],
    steps: [
      "複数スタッフで対応（2名以上）",
      "安全な距離を確保",
      "簡潔・明確な言葉で対応を説明",
      "筋注薬剤の準備・投与",
      "必要に応じて点滴ルート確保",
      "15分後に再評価、改善なければ追加投与または重度対応へ",
    ],
    drugs: [
      {
        name: "ハロペリドール",
        route: "筋注",
        dose: "5mg",
        onset: "15〜30分",
        notes:
          "第一選択。錐体外路症状に注意。QT延長リスク",
        category: "antipsychotic",
      },
      {
        name: "オランザピン筋注",
        route: "筋注",
        dose: "10mg",
        onset: "15〜30分",
        notes:
          "ベンゾジアゼピンとの併用禁忌（呼吸抑制）。糖尿病禁忌",
        category: "antipsychotic",
      },
      {
        name: "ロラゼパム",
        route: "筋注",
        dose: "2mg（※日本未承認）",
        onset: "15〜30分",
        notes: "海外ではIM使用あり。施設の方針確認",
        category: "benzodiazepine",
      },
      {
        name: "ヒドロキシジン",
        route: "筋注",
        dose: "25〜50mg",
        onset: "15〜30分",
        notes: "抗ヒスタミン薬。呼吸抑制リスク低い",
        category: "antihistamine",
      },
    ],
    cautions: [
      "投与前に必ずバイタルサイン測定",
      "呼吸状態のモニタリング（SpO2）",
      "オランザピン筋注後はベンゾジアゼピン投与禁忌（2時間）",
      "ハロペリドール投与前に可能であれば心電図確認",
      "投与後30分間は頻回観察",
      "行動制限の必要性を評価",
    ],
  },
  {
    id: "severe",
    name: "重度",
    label: "Level 3",
    description: "暴力・自傷他害の危険",
    color: "from-red-600 to-red-800",
    colorDark: "dark:from-red-700 dark:to-red-900",
    examples: [
      "他者への暴力行為",
      "自傷行為（頭を打ちつける等）",
      "器物破損",
      "離院の危険",
      "制止不能な興奮状態",
    ],
    steps: [
      "応援要請（コードホワイト等）",
      "患者・スタッフの安全確保を最優先",
      "複数名（5名以上推奨）で身体抑制",
      "医師の指示のもと身体拘束を実施",
      "静注薬剤の投与（ルート確保）",
      "持続モニタリング開始（SpO2、心電図）",
      "拘束開始後は定期的な再評価（2時間ごと）",
    ],
    drugs: [
      {
        name: "ハロペリドール",
        route: "静注",
        dose: "5mg（緩徐に）",
        onset: "5〜10分",
        notes:
          "心電図モニター下で投与。QT延長・TdPリスク",
        category: "antipsychotic",
      },
      {
        name: "ミダゾラム",
        route: "筋注/静注",
        dose: "筋注5mg / 静注2〜3mg",
        onset: "筋注10〜15分 / 静注2〜3分",
        notes:
          "呼吸抑制リスク高い。気道確保の準備必須。フルマゼニル準備",
        category: "benzodiazepine",
      },
      {
        name: "フルニトラゼパム",
        route: "静注",
        dose: "1mg（緩徐に）",
        onset: "2〜3分",
        notes: "強力な鎮静。呼吸抑制に厳重注意。希釈して緩徐に投与",
        category: "benzodiazepine",
      },
      {
        name: "ジアゼパム",
        route: "静注",
        dose: "5〜10mg（緩徐に）",
        onset: "2〜5分",
        notes: "筋注は吸収不安定のため静注推奨。血管痛あり",
        category: "benzodiazepine",
      },
    ],
    cautions: [
      "身体拘束は医師の指示・診察が必須",
      "拘束中は15分ごとのバイタル確認",
      "拘束部位の循環障害チェック（末梢冷感、色調）",
      "静注ベンゾジアゼピン使用時はフルマゼニル準備",
      "挿管・バッグバルブマスクの準備",
      "拘束開始・解除の時刻を記録",
      "精神保健福祉法に基づく手続きの確認",
    ],
  },
];

export const allDrugs: (Drug & { levels: string[] })[] = (() => {
  const drugMap = new Map<string, Drug & { levels: string[] }>();
  levels.forEach((level) => {
    level.drugs.forEach((drug) => {
      const key = `${drug.name}-${drug.route}`;
      if (drugMap.has(key)) {
        drugMap.get(key)!.levels.push(level.name);
      } else {
        drugMap.set(key, { ...drug, levels: [level.name] });
      }
    });
  });
  return Array.from(drugMap.values());
})();
