// Step-by-step animated explainers for each publication and internship.
// Each demo is a small diagram (nodes, edges, bar charts) plus steps that
// reveal and highlight parts of it, with a bilingual caption per step.

(() => {
  const W = 640;
  const H = 300;

  // Label helpers: a string is shared by both languages, [en, zh] is per language.
  const N = (id, x, y, w, h, t, k, s) => ({ type: "node", id, x, y, w, h, t, k, s });
  const E = (id, a, b, p) => ({ type: "edge", id, a, b, p });
  const BARS = (id, x, y, w, h, t, items, max) => ({ type: "bars", id, x, y, w, h, t, items, max });
  const S = (show, en, zh, hot, hide) => ({ show, c: [en, zh], hot, hide });

  const DEMOS = {
    taec: {
      els: [
        N("q", 15, 120, 95, 44, ["Question", "问题"]),
        N("ret", 130, 120, 95, 44, ["Retrieve\npages", "检索页面"]),
        N("st", 250, 18, 340, 44, ["Unmet answer requirements (shared state)", "尚未满足的答题需求（共享状态）"], "accent"),
        N("adm", 250, 120, 100, 44, ["Evidence\nadmission", "证据准入"]),
        N("mem", 370, 120, 100, 44, ["Memory\nrendering", "记忆呈现"]),
        N("vis", 490, 120, 100, 44, ["Visual\nbudget", "视觉预算"]),
        N("ans", 470, 222, 140, 44, ["Answer or\nnext step", "作答或进入下一步"], "ok"),
        E("e1", "q", "ret"),
        E("e2", "ret", "adm"),
        E("e3", "adm", "mem"),
        E("e4", "mem", "vis"),
        E("s1", "st", "adm", "M300,62 L300,120"),
        E("s2", "st", "mem", "M420,62 L420,120"),
        E("s3", "st", "vis", "M540,62 L540,120"),
        E("e5", "vis", "ans", "M540,164 L540,222"),
        E("loop", "ans", "ret", "M470,244 L177,244 L177,164"),
        BARS("res", 15, 196, 150, 90, ["Mean accuracy (%)", "平均准确率（%）"],
          [{ t: "DAG", v: 62.3 }, { t: "TAEC", v: 66.8, k: "accent" }], 70),
      ],
      steps: [
        S(["q", "ret", "e1"], "At each step, the agent retrieves candidate pages for the question.", "每一步，Agent 为问题检索候选页面。"),
        S(["st"], "TAEC keeps one shared state: the answer requirements that are still unmet.", "TAEC 维护一个共享状态：尚未满足的答题需求。"),
        S(["adm", "e2", "s1"], "Evidence admission keeps pages that cover unmet requirements and drops redundant ones.", "证据准入：保留覆盖未满足需求的页面，剔除冗余页面。"),
        S(["mem", "e3", "s2"], "Memory rendering keeps useful observations and compresses what is already resolved.", "记忆呈现：保留有效观察，压缩已经解决的信息。"),
        S(["vis", "e4", "s3"], "The visual budget spends high resolution only on pages tied to unmet requirements.", "视觉预算：只把高分辨率留给与未满足需求相关的页面。"),
        S(["ans", "e5", "loop"], "The updated state carries into the next step, or the agent answers.", "更新后的状态带入下一步，或直接作答。"),
        S(["res"], "Across 12 settings (3 benchmarks × 4 backbones): 66.8% mean accuracy, 4.5 pp above DAG.", "12 组设置（3 个基准 × 4 个骨干）：平均准确率 66.8%，较 DAG 高 4.5pp。"),
      ],
    },

    evolvemas: {
      els: [
        N("env", 15, 12, 610, 32, ["Cooperative · Mixed-motive · Adversarial", "合作 · 混合动机 · 对抗"], "muted"),
        N("a", 15, 66, 95, 42, ["Agent A", "Agent A"]),
        N("b", 15, 140, 95, 42, ["Agent B", "Agent B"]),
        N("c", 15, 214, 95, 42, ["Agent C", "Agent C"]),
        N("ma", 135, 66, 130, 42, "MemoryAgent", "soft"),
        N("mb", 135, 140, 130, 42, "MemoryAgent", "soft"),
        N("mc", 135, 214, 130, 42, "MemoryAgent", "soft"),
        E("la", "a", "ma"), E("lb", "b", "mb"), E("lc", "c", "mc"),
        N("ex", 310, 66, 110, 40, "Execute"),
        N("ev", 490, 66, 110, 40, "Evaluate"),
        N("evo", 400, 140, 110, 40, "Evolve", "accent"),
        E("m1", "ma", "ex"),
        E("c1", "ex", "ev"),
        E("c2", "ev", "evo", "M545,106 L490,140"),
        E("c3", "evo", "ex", "M420,140 L365,106"),
        N("kb", 330, 214, 250, 44, ["Reusable strategies + partner profiles", "可复用策略 + 伙伴画像"], "ok"),
        E("k1", "evo", "kb", "M455,180 L455,214"),
        E("k2", "kb", "mc"),
        BARS("res", 310, 70, 300, 110, ["Normalized mean score, 5 benchmarks", "归一化平均分，5 个基准"],
          [{ t: "Self-Memory", v: 69.5 }, { t: "EvolveMAS", v: 77.2, k: "accent" }], 80),
      ],
      steps: [
        S(["env", "a", "b", "c"], "Decentralized agents interact in cooperative, mixed-motive, and adversarial settings.", "去中心化的多个 Agent 在合作、混合动机与对抗场景中交互。"),
        S(["ma", "mb", "mc", "la", "lb", "lc"], "Each agent gets its own MemoryAgent, which keeps episodic, semantic, and working memory outside the agent's reasoning context.", "每个 Agent 配一个独立的 MemoryAgent，在推理上下文之外维护情景、语义与工作记忆。"),
        S(["ex", "m1"], "Execute: the agent acts while its MemoryAgent records the interaction.", "Execute：Agent 行动，MemoryAgent 记录交互过程。"),
        S(["ev", "c1"], "Evaluate: the episode's outcomes are assessed.", "Evaluate：评估本局交互结果。"),
        S(["evo", "c2", "c3"], "Evolve: experience is distilled into reusable knowledge, with no model weight updates.", "Evolve：把经验提炼为可复用知识，不更新模型参数。"),
        S(["kb", "k1", "k2"], "Strategies and partner profiles carry over and guide decisions in later episodes.", "策略与伙伴画像跨局沉淀，指导后续决策。"),
        S(["res"], "Best normalized mean score across 5 benchmarks and 6 configurations: 77.2, 7.7 points above Self-Memory.", "在 5 个基准、6 组配置上取得最高归一化平均分 77.2，较 Self-Memory 高 7.7 分。",
          null, ["ex", "ev", "evo", "kb", "m1", "c1", "c2", "c3", "k1", "k2"]),
      ],
    },

    progress: {
      els: [
        N("h1", 150, 14, 140, 32, ["Early", "前期"], "muted"),
        N("h2", 315, 14, 140, 32, ["Mid-task", "执行中途"], "muted"),
        N("h3", 480, 14, 140, 32, ["Finish", "收尾"], "muted"),
        N("ra", 10, 66, 125, 50, ["Most deployed\nmodels", "多数部署模型"]),
        N("a1", 150, 70, 140, 42, ["reliable", "可靠"], "ok"),
        N("a2", 315, 70, 140, 42, ["unreliable", "失准"], "bad"),
        N("a3", 480, 70, 140, 42, ["recovers", "恢复"], "ok"),
        N("rb", 10, 140, 125, 50, ["Newest\ngeneration", "最新一代"]),
        N("b1", 150, 144, 140, 42, ["reliable", "可靠"], "ok"),
        N("b2", 315, 144, 140, 42, ["reliable", "可靠"], "ok"),
        N("b3", 480, 144, 140, 42, ["too conservative", "过于保守"], "warn"),
        N("fw", 170, 226, 300, 50, ["Framework: continue or stop?\nDon't rely on self-reports alone", "框架：继续还是停止？\n不能只看模型自报"], "accent"),
      ],
      steps: [
        S(["h1", "h2", "h3"], "Checkpoints ask the agent to report its progress at every stage of a task, on τ²-bench and the controlled StageIF testbed.", "在任务各阶段设置检查点，要求 Agent 汇报进度；评测基于 τ²-bench 与可控测试平台 StageIF。"),
        S(["ra", "a1", "a2", "a3"], "Most deployed models lose accuracy once work is under way, then recover when the task is done.", "多数部署模型在执行中途汇报失准，任务完成后恢复。", ["a2"]),
        S(["rb", "b1", "b2", "b3"], "The newest generation closes the mid-task drop but turns conservative at the finish line.", "最新一代模型补上了中途的下滑，却在收尾阶段趋于保守。", ["b3"]),
        S(["fw"], "Reliability depends on the stage, so agent frameworks should not control task flow on the model's state reports alone.", "可靠性随任务阶段变化，因此 Agent 框架不应仅凭模型的状态汇报控制任务流程。"),
      ],
    },

    lhmg: {
      els: [
        N("in", 15, 110, 120, 54, ["New fact or\nconversation turn", "新事实 / 对话轮次"]),
        N("rg", 165, 30, 180, 54, ["Revision graph\nappend-only + audit log", "Revision Graph\n追加式版本 + 审计日志"], "accent"),
        N("risk", 165, 130, 180, 44, ["Risk gate", "风险门控"]),
        N("dec", 380, 80, 170, 54, ["Consistency-constrained\ndecoding (NLI)", "一致性约束解码\n（NLI 打分）"]),
        N("out", 570, 87, 60, 40, ["Answer", "回答"], "ok"),
        N("fg", 380, 190, 170, 44, ["Governed forgetting", "治理式遗忘"]),
        E("e1", "in", "rg"), E("e2", "in", "risk"),
        E("e3", "rg", "dec"), E("e4", "risk", "dec"), E("e5", "dec", "out"),
        BARS("res", 15, 200, 330, 86, ["Conflicting-fact update accuracy (%)", "冲突事实更新准确率（%）"],
          [{ t: ["Baseline", "基线"], v: 40 }, { t: "LHMG", v: 100, k: "accent" }], 100),
      ],
      steps: [
        S(["in"], "A new fact can conflict with what the agent already remembers.", "新事实可能与 Agent 已有的记忆冲突。"),
        S(["rg", "e1"], "Revision graph: updates are appended as new versions with an immutable audit log, never overwritten.", "Revision Graph：更新以新版本追加，并保留不可变审计日志，不覆盖旧记录。"),
        S(["risk", "e2"], "A risk gate decides how strongly each memory may condition the answer.", "风险门控决定每条记忆能在多大程度上影响回答。"),
        S(["dec", "out", "e3", "e4", "e5"], "Decoding is constrained with NLI scores to suppress answers that contradict current memory.", "解码时用 NLI 打分约束，抑制与当前记忆矛盾的输出。", ["dec"]),
        S(["fg"], "Governed forgetting retires stale memory under explicit rules.", "治理式遗忘按明确规则清退过时记忆。"),
        S(["res"], "Conflicting-fact update accuracy rises from 40% to 100%; cross-turn consistency improves by up to 13 pp.", "冲突事实更新准确率从 40% 提升到 100%；跨轮次决策一致性最高提升 13pp。"),
      ],
    },

    lfuse: {
      els: [
        N("sp", 15, 40, 140, 54, ["Spoken query\n(noisy transcript)", "语音查询\n（转写含噪）"]),
        N("img", 15, 160, 140, 54, ["Product photo", "商品图片"]),
        N("e_sp", 195, 44, 140, 46, ["Speech evidence", "语音证据"]),
        N("e_img", 195, 164, 140, 46, ["Image evidence", "图像证据"]),
        N("fuse", 375, 98, 130, 58, ["Learned\nevidence fusion", "学习式\n证据融合"], "accent"),
        N("cat", 375, 220, 130, 44, ["Product catalog", "商品库"], "muted"),
        N("rank", 535, 98, 95, 58, ["Ranked\nproducts", "商品排序"], "ok"),
        E("a1", "sp", "e_sp"), E("a2", "img", "e_img"),
        E("b1", "e_sp", "fuse"), E("b2", "e_img", "fuse"),
        E("c1", "fuse", "rank"), E("c2", "cat", "rank", "M505,242 L582,242 L582,156"),
      ],
      steps: [
        S(["sp", "img"], "Buyers search for products by voice and by photo; speech transcripts are often noisy.", "采购人员用语音和图片搜索商品，语音转写往往含噪。"),
        S(["e_sp", "e_img", "a1", "a2"], "Each signal is turned into evidence about the target product.", "两路输入各自转化为关于目标商品的证据。"),
        S(["fuse", "b1", "b2"], "LFUSE learns how to fuse the two kinds of evidence instead of trusting either signal alone.", "LFUSE 学习如何融合两类证据，而不是单独依赖某一路信号。"),
        S(["cat", "rank", "c1", "c2"], "The fused evidence ranks products from the catalog. Tasks and evaluation were defined from real procurement scenarios.", "融合后的证据对商品库排序。任务与评测基于真实采购场景定义。"),
      ],
    },

    schema: {
      els: [
        N("ner", 15, 20, 110, 40, "NER"),
        N("re", 15, 88, 110, 40, "RE"),
        N("ee", 15, 156, 110, 40, "EE"),
        N("slu", 15, 224, 110, 40, ["SLU / intent", "SLU / 意图"]),
        N("sch", 210, 115, 180, 60, ["Unified schema\ncategory → args", "统一 Schema\ncategory → args"], "accent"),
        N("corp", 210, 20, 180, 54, ["61 datasets\n2.75M multilingual examples", "61 个数据集\n275 万多语言样本"], "muted"),
        N("par", 450, 70, 170, 44, ["One parser", "统一解析器"]),
        N("dep", 450, 165, 170, 54, ["Production intent engine\n(Parallel Match)", "生产级 Intent Engine\n（Parallel Match）"], "ok"),
        E("e1", "ner", "sch"), E("e2", "re", "sch"), E("e3", "ee", "sch"), E("e4", "slu", "sch"),
        E("e5", "corp", "sch"), E("e6", "sch", "par"), E("e7", "par", "dep"),
      ],
      steps: [
        S(["ner", "re", "ee", "slu"], "Entity, relation, event, and intent tasks each use their own label formats.", "NER、RE、EE、SLU 四类任务各自使用不同的标注格式。"),
        S(["sch", "e1", "e2", "e3", "e4"], "SchemaBridge maps all four into one hierarchical category–args schema.", "SchemaBridge 把四类任务映射到统一的 category–args 层级 Schema。"),
        S(["corp", "e5"], "61 datasets and 2.75M multilingual examples are unified under one evaluation protocol.", "61 个数据集、275 万级多语言样本统一到同一套评测协议下。"),
        S(["par", "dep", "e6", "e7"], "One parser serves every task; the paper also analyzes latency and training–deployment schema mismatch in a production intent engine.", "一个解析器覆盖全部任务；论文还分析了生产级 Intent Engine 的部署延迟及训练与部署之间的 Schema 差异。"),
      ],
    },

    flyeval: {
      els: [
        N("in", 10, 110, 110, 54, ["34-channel\nsensor input", "34 通道\n传感器输入"]),
        N("llm", 145, 110, 145, 54, ["LLM prediction\nattitude + trajectory", "LLM 预测\n姿态 + 轨迹"]),
        N("a1", 320, 30, 145, 40, ["Structure & fields", "结构与字段"]),
        N("a2", 320, 117, 145, 40, ["Physical feasibility", "物理可行性"]),
        N("a3", 320, 204, 145, 40, ["20 FAA rules", "20 条 FAA 约束"]),
        N("agg", 495, 104, 135, 54, ["Rubric\naggregation", "评分标准聚合"], "accent"),
        N("gap", 480, 216, 150, 54, ["Similar accuracy,\n>28-pt safety gap", "精度相近，\n安全分差 >28"], "warn"),
        E("e0", "in", "llm"),
        E("e1", "llm", "a1"), E("e2", "llm", "a2"), E("e3", "llm", "a3"),
        E("f1", "a1", "agg", "M465,50 L495,116"), E("f2", "a2", "agg"), E("f3", "a3", "agg", "M465,224 L495,148"),
      ],
      steps: [
        S(["in", "llm", "e0"], "From 34 sensor channels, an LLM predicts attitude and trajectory, one step or many steps ahead.", "LLM 根据 34 通道传感器输入预测姿态与轨迹，支持单步与多步滚动预测。"),
        S(["a1", "a2", "a3", "e1", "e2", "e3"], "Deterministic evidence atoms check output structure, physical feasibility, and 20 FAA operational constraints.", "形式化证据原子确定性地检查输出结构、物理可行性与 20 条 FAA 操作约束。"),
        S(["agg", "f1", "f2", "f3"], "A rubric aggregates the atoms into interpretable, multi-dimensional scores, with no LLM-as-judge.", "按评分标准把证据原子聚合为可解释的多维分数，全程不用 LLM 打分。"),
        S(["gap"], "Of 66 screened LLMs, 21 were fully evaluated: models with similar accuracy differ by more than 28 safety points.", "从 66 个 LLM 中筛选 21 个全量评测：精度相近的模型，安全得分差距超过 28 分。"),
      ],
    },

    pilot: {
      els: [
        N("data", 10, 105, 160, 64, ["708 real flights\n9 phases · 34 channels", "708 条真实飞行\n9 个阶段 · 34 通道"]),
        N("llm", 210, 50, 130, 44, ["41 models", "41 个模型"]),
        N("trad", 210, 170, 130, 54, ["Traditional\nforecasters", "传统预测器"]),
        N("ps", 375, 95, 255, 64, ["Pilot-Score\n60% regression · 40% instruction & safety", "Pilot-Score\n60% 回归精度 · 40% 指令与安全"], "accent"),
        E("e1", "data", "llm"), E("e2", "data", "trad"), E("e3", "llm", "ps"), E("e4", "trad", "ps", "M340,197 L375,148"),
        BARS("mae", 375, 186, 255, 100, ["Trajectory MAE (lower is better)", "轨迹 MAE（越低越好）"],
          [{ t: ["Forecasters", "传统预测器"], v: 7.01 }, { t: "LLMs", v: 12.5, label: "11–14", k: "warn" }], 15),
      ],
      steps: [
        S(["data"], "708 real general-aviation flights across nine flight phases, with synchronized 34-channel telemetry.", "708 条真实通用航空飞行数据，覆盖 9 个飞行阶段，34 通道遥测同步。"),
        S(["llm", "trad", "e1", "e2"], "41 models are compared with traditional forecasters on joint trajectory–attitude prediction.", "在轨迹–姿态联合预测任务上，比较 41 个模型与传统预测器。"),
        S(["ps", "e3", "e4"], "Pilot-Score weights regression accuracy at 60% and instruction following plus safety compliance at 40%.", "Pilot-Score 中回归精度占 60%，指令遵循与安全合规占 40%。"),
        S(["mae"], "Precision–controllability trade-off: forecasters reach 7.01 MAE; LLMs follow 86–89% of instructions but sit at 11–14 MAE, worst in high-workload phases such as Climb and Approach.", "精度与可控性的权衡：传统预测器 MAE 为 7.01；LLM 指令遵循率达 86–89%，但 MAE 在 11–14，在爬升、进近等高负荷阶段退化最明显。"),
      ],
    },

    ftap: {
      els: [
        N("s1", 10, 40, 150, 54, ["FTAP time series\n(reconstructed)", "FTAP 时序数据\n（重建）"]),
        N("s2", 10, 170, 150, 54, ["Public aviation\ndata", "公开航空数据"]),
        N("bench", 200, 100, 180, 64, ["Physics-constrained\nlong-horizon benchmark", "含物理约束的\n长时程预测基准"], "accent"),
        N("ok", 435, 40, 190, 46, ["Physically feasible", "物理可行"], "ok"),
        N("bad", 435, 178, 190, 46, ["Plausible but unsafe", "看似合理但不安全"], "bad"),
        N("obj", 200, 225, 180, 54, ["Safety-constrained\ntraining objective", "安全约束\n训练目标"]),
        E("e1", "s1", "bench"), E("e2", "s2", "bench"),
        E("e3", "bench", "ok"), E("e4", "bench", "bad"),
        E("e5", "bad", "obj", "M435,215 L380,245"),
      ],
      steps: [
        S(["s1", "s2"], "Reconstruct high-fidelity FTAP flight time series and merge them with public aviation data.", "重建高保真 FTAP 飞行时序数据，并整合多源公开航空数据。"),
        S(["bench", "e1", "e2"], "Build a long-horizon flight-prediction benchmark with physical constraints.", "构建含物理约束的长时程飞行预测基准。"),
        S(["ok", "bad", "e3", "e4"], "Evaluation separates physically feasible forecasts from ones that read well but are unsafe.", "评测区分物理可行的预测与语言上合理但存在安全风险的输出。", ["bad"]),
        S(["obj", "e5"], "Safety-constrained training objectives are being explored, with ablations and validation (work in progress).", "正在探索安全约束训练目标，并推进消融实验与方法验证（进行中）。"),
      ],
    },

    u2: {
      els: [
        N("data", 10, 105, 165, 64, ["7,241 ultrasound cases\n15 anatomical regions", "7,241 例超声影像\n15 个解剖区域"]),
        N("t1", 215, 18, 150, 40, ["Classification", "分类"]),
        N("t2", 215, 82, 150, 40, ["Detection", "检测"]),
        N("t3", 215, 146, 150, 40, ["Regression", "回归（测量）"]),
        N("t4", 215, 210, 150, 40, ["Report generation", "报告生成"]),
        N("vlm", 400, 105, 120, 64, ["20 VLMs\ngeneral + medical", "20 个 VLM\n通用 + 医学"]),
        N("score", 545, 112, 85, 50, "U2-Score", "accent"),
        E("e1", "data", "t1"), E("e2", "data", "t2"), E("e3", "data", "t3"), E("e4", "data", "t4"),
        E("f1", "t1", "vlm"), E("f2", "t2", "vlm"), E("f3", "t3", "vlm"), E("f4", "t4", "vlm"),
        E("g", "vlm", "score"),
      ],
      steps: [
        S(["data"], "7,241 ultrasound cases with diagnostic text, across 15 anatomical regions.", "7,241 例超声影像及诊断文本，覆盖 15 个解剖区域。"),
        S(["t1", "t2", "t3", "t4", "e1", "e2", "e3", "e4"], "8 clinical tasks span classification, detection, regression, and report generation.", "8 类临床任务，涵盖分类、检测、回归与报告生成。"),
        S(["vlm", "f1", "f2", "f3", "f4"], "20 general-purpose and medical VLMs are run under one protocol, with results verified and standardized.", "在统一流程下评测 20 个通用与医学 VLM，并核验、统一结果格式。"),
        S(["score", "g"], "Scores combine into a comparable U2-Score, and failure cases explain where models fall short.", "结果汇总为可比较的 U2-Score，并用失效案例解释模型的能力差异。"),
      ],
    },

    h2h: {
      els: [
        N("sc", 10, 100, 165, 64, ["4,800+ multi-turn\ncompanion scenarios", "4,800+ 多轮\n情感陪伴场景"]),
        N("m", 210, 105, 110, 54, ["49 LLMs", "49 个 LLM"]),
        N("d1", 365, 22, 165, 40, ["Long-term memory", "长程记忆"]),
        N("d2", 365, 112, 165, 40, ["Emotional feedback", "情绪反馈"]),
        N("d3", 365, 202, 165, 40, ["Implicit needs", "隐式需求理解"]),
        E("e0", "sc", "m"), E("e1", "m", "d1"), E("e2", "m", "d2"), E("e3", "m", "d3"),
        N("sap", 15, 214, 190, 54, ["SAP safety module\n(attachment theory)", "SAP 安全模块\n（依恋理论）"], "accent"),
        N("abl", 240, 214, 140, 54, ["Remove SAP:\nviolations ~10×", "去掉 SAP：\n违规率约 10 倍"], "bad"),
        E("e4", "sap", "abl"),
      ],
      steps: [
        S(["sc"], "A companion benchmark built on 4,800+ multi-turn scenarios with emotional-support and persona-consistency goals.", "基于 4,800+ 个多轮场景构建情感陪伴评测，关注情感支持与人格一致性。"),
        S(["m", "d1", "d2", "d3", "e0", "e1", "e2", "e3"], "49 models are evaluated on memory recall, emotional feedback, and implicit-need understanding (ROUGE, BERTScore, persona comparisons).", "评测 49 个模型的记忆调用、情绪反馈与隐式需求理解（ROUGE、BERTScore、情境化角色比较）。"),
        S([], "Long-term memory and implicit needs turn out to be the main bottlenecks.", "长程记忆保持与隐式需求理解是主要瓶颈。", ["d1", "d3"]),
        S(["sap", "abl", "e4"], "An attachment-theory SAP module guards safety; removing it raises violation rates by an order of magnitude.", "基于依恋理论的 SAP 模块守住安全边界；去掉后违规率上升一个数量级。"),
      ],
    },

    dolphin: {
      els: [
        N("base", 10, 110, 95, 44, ["Base model", "基座模型"], "muted"),
        N("s1", 125, 110, 115, 44, ["Post-training", "后训练"]),
        N("s2", 260, 110, 125, 44, ["Instruction tuning", "指令微调"]),
        N("s3", 405, 110, 95, 44, ["UARPO RL", "UARPO\n强化学习"], "accent"),
        N("dol", 520, 105, 110, 54, "Dolphin v1.0", "ok"),
        E("e1", "base", "s1"), E("e2", "s1", "s2"), E("e3", "s2", "s3"), E("e4", "s3", "dol"),
        N("std", 395, 222, 110, 42, ["Standard mode", "标准模式"]),
        N("rsn", 520, 222, 110, 42, ["Reasoning mode", "推理模式"], "ok"),
        E("m1", "dol", "std", "M545,159 L470,222"), E("m2", "dol", "rsn", "M575,159 L575,222"),
        N("score", 60, 215, 260, 54, ["U2-Score 0.5835 on U2-BENCH", "U2-BENCH 上 U2-Score 0.5835"], "accent"),
      ],
      steps: [
        S(["base", "s1", "e1"], "An ultrasound multimodal LLM is trained in three stages, starting with post-training.", "超声多模态大模型分三个阶段训练，第一阶段是后训练。"),
        S(["s2", "e2"], "Stage two: instruction tuning.", "第二阶段：指令微调。"),
        S(["s3", "dol", "e3", "e4"], "Stage three: UARPO reinforcement learning.", "第三阶段：UARPO 强化学习。"),
        S(["std", "rsn", "m1", "m2"], "The model answers in a standard mode or a step-by-step reasoning mode; both were compared across 16 anatomical regions.", "模型支持标准模式与逐步推理模式，两种模式在 16 个身体部位上做了对照。"),
        S(["score"], "U2-Score 0.5835; reasoning mode raises diagnosis accuracy by 2.4% and detection by 16%, and cuts measurement RMSE by 10.6%.", "U2-Score 0.5835；推理模式诊断准确率提升 2.4%、检测准确率提升 16%，测量 RMSE 降低 10.6%。"),
      ],
    },

    neuro: {
      els: [
        N("t1", 10, 40, 185, 54, ["Text track\nmedical reasoning", "文本轨道\n医学推理"]),
        N("t2", 10, 180, 185, 54, ["Vision track\nbrain MRI (BrainVLM)", "视觉轨道\n脑 MRI（BrainVLM）"], "accent"),
        N("mri", 235, 180, 165, 54, ["Multi-source MRI\n16 VLMs × 6 tasks", "多源脑 MRI\n16 个 VLM × 6 类任务"]),
        N("joint", 445, 106, 185, 64, ["Joint trustworthiness\nmetrics", "联合可信度\n指标"], "ok"),
        E("e1", "t2", "mri"), E("e2", "mri", "joint"), E("e3", "t1", "joint"),
      ],
      steps: [
        S(["t1", "t2"], "Neuropsychiatric evaluation runs on two tracks: medical-text reasoning and brain-image understanding.", "神经精神科评测分为两条轨道：医学文本推理与脑影像视觉理解。"),
        S(["mri", "e1"], "The BrainVLM track integrates multi-source brain MRI and runs 16 VLMs on 6 tasks with unified inference, parsing, and scoring.", "BrainVLM 轨道整合多源脑 MRI，对 16 个 VLM 在 6 类任务上统一推理、解析与评分。"),
        S(["joint", "e2", "e3"], "Both tracks report accuracy together with trustworthiness metrics.", "两条轨道同时报告准确率与可信度指标。"),
      ],
    },

    meituan: {
      els: [
        N("q", 10, 110, 105, 44, ["User question", "用户问题"]),
        N("hy", 135, 105, 130, 54, ["Hybrid retrieval\n3 routes", "三路混合检索"]),
        N("rag", 285, 105, 125, 54, ["Multi-step\nvisual RAG", "多步视觉 RAG"], "accent"),
        N("c1", 455, 30, 175, 40, ["Evidence selection", "证据筛选"]),
        N("c2", 455, 112, 175, 40, ["Memory control", "记忆管控"]),
        N("c3", 455, 194, 175, 40, ["Pixel allocation", "像素分配"]),
        N("ans", 285, 222, 125, 44, ["Answer", "回答"], "ok"),
        E("e1", "q", "hy"), E("e2", "hy", "rag"),
        E("f1", "rag", "c1"), E("f2", "rag", "c2"), E("f3", "rag", "c3"),
        E("g", "rag", "ans", "M347,159 L347,222"),
        BARS("res", 40, 30, 560, 240, ["Before → after (%)", "优化前 → 优化后（%）"], [
          { t: ["Image–text QA", "图文问答"], v: 70.8 },
          { t: "", v: 82.8, k: "accent" },
          { t: ["Query rewriting", "查询改写"], v: 79.0, label: "79.0" },
          { t: "", v: 95.8, k: "accent" },
          { t: ["Text / AV QA", "文本 / 音视频问答"], v: 70.33 },
          { t: "", v: 77.22, k: "accent" },
        ], 100),
      ],
      steps: [
        S(["q", "hy", "e1"], "Three retrieval routes recall candidate documents and pages for a knowledge-base question.", "三路混合检索为知识库问题召回候选文档与页面。"),
        S(["rag", "e2"], "A multi-step visual RAG agent reads the evidence and decides what to look up next.", "多步视觉 RAG Agent 阅读证据，并决定下一步检索什么。"),
        S(["c1", "c2", "c3", "f1", "f2", "f3"], "Accuracy suffered from noisy inputs, decaying cross-step memory, and limited visual capacity, so evidence selection, memory control, and pixel allocation are coordinated.", "效果退化来自输入污染、跨步记忆退化与视觉容量限制，因此协调证据筛选、记忆管控与像素分配。"),
        S(["ans", "g"], "The agent invokes these controls adaptively as its reasoning proceeds.", "Agent 根据推理状态自适应地调用这些控制。"),
        S(["res"], "Image–text QA 70.8% → 82.8%; query rewriting 79.0% → 95.8%, shipped at 4.01 s P90; text and audio–video QA 70.33% → 77.22%.", "图文问答 70.8% → 82.8%；查询改写 79.0% → 95.8%，已上线，P90 延迟 4.01s；文本及音视频问答 70.33% → 77.22%。",
          null, ["q", "hy", "rag", "c1", "c2", "c3", "ans", "e1", "e2", "f1", "f2", "f3", "g"]),
      ],
    },

    huazhu: {
      els: [
        N("i1", 10, 22, 140, 40, ["Store demand", "门店需求"], "muted"),
        N("i2", 10, 88, 140, 40, ["Prices", "价格信号"], "muted"),
        N("i3", 10, 154, 140, 40, ["Supplier policies", "供应商策略"], "muted"),
        N("i4", 10, 220, 140, 40, ["Product constraints", "商品约束"], "muted"),
        N("a1", 200, 22, 165, 40, ["Demand analysis", "需求分析"]),
        N("a2", 200, 85, 165, 46, ["Product / supplier\nextraction", "商品/供应商抽取"]),
        N("a3", 200, 154, 165, 40, ["Replenishment", "补货建议"]),
        N("a4", 200, 220, 165, 40, ["Menu planning", "菜单规划"]),
        N("rec", 420, 92, 150, 58, ["Purchase\nrecommendation", "采购建议"], "accent"),
        N("hr", 420, 212, 150, 44, ["Human review", "人工复核"], "ok"),
        E("e1", "i1", "a1"), E("e2", "i2", "a2"), E("e3", "i3", "a3"), E("e4", "i4", "a4"),
        E("f1", "a1", "rec"), E("f2", "a2", "rec"), E("f3", "a3", "rec"), E("f4", "a4", "rec"),
        E("g", "rec", "hr"),
      ],
      steps: [
        S(["i1", "i2", "i3", "i4"], "Food-service supply-chain decisions draw on store demand, prices, supplier policies, and product constraints.", "餐饮供应链决策依赖门店需求、价格信号、供应商策略与商品约束。"),
        S(["a1", "a2", "a3", "a4", "e1", "e2", "e3", "e4"], "The workflow is split into callable agent modules.", "把业务流程拆解为可调用的 Agent 任务模块。"),
        S(["rec", "f1", "f2", "f3", "f4"], "Modules compose into end-to-end purchase recommendations.", "模块组合成从数据接入到采购建议的端到端流程。"),
        S(["hr", "g"], "Outputs stay interpretable and checkable by business reviewers.", "输出保持可解释，业务人员可以校验与复核。"),
      ],
    },

    dolphinIntern: {
      els: [
        N("m", 10, 110, 120, 54, ["Ultrasound\nVLMs", "超声 VLM"], "muted"),
        N("dep", 155, 115, 120, 44, ["Deploy & serve", "部署与调用"]),
        N("run", 300, 115, 130, 44, ["Benchmark runs", "基准评测"]),
        N("ver", 455, 110, 175, 54, ["Verify &\nstandardize", "结果核验与\n统一格式"]),
        N("fail", 300, 215, 155, 54, ["Prompt design &\nfailure analysis", "Prompt 设计与\n失效分析"]),
        N("pap", 480, 215, 150, 54, "U2-BENCH · Dolphin", "accent"),
        E("e1", "m", "dep"), E("e2", "dep", "run"), E("e3", "run", "ver"),
        E("e4", "run", "fail", "M365,159 L377,215"), E("e5", "fail", "pap"), E("e6", "ver", "pap", "M542,164 L555,215"),
      ],
      steps: [
        S(["m", "dep", "e1"], "Deploy and serve general and medical ultrasound VLMs.", "部署并调用通用与医学超声视觉语言模型。"),
        S(["run", "e2"], "Run benchmark experiments at scale.", "批量执行基准评测实验。"),
        S(["ver", "e3"], "Verify results and standardize outputs so models can be compared.", "核验结果并统一格式，保证跨模型可比。"),
        S(["fail", "e4"], "Design prompts and analyze failure cases, such as reasoning versus standard mode and cross-region generalization.", "设计 Prompt 并分析失效案例，如推理模式对照与跨身体部位泛化。"),
        S(["pap", "e5", "e6"], "This work fed the U2-BENCH benchmark and the Dolphin model's evaluation.", "这些工作支撑了 U2-BENCH 基准与 Dolphin 模型评测。"),
      ],
    },
  };

  // ---------- rendering ----------
  const SVGNS = "http://www.w3.org/2000/svg";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lang = () => (document.documentElement.lang.startsWith("zh") ? 1 : 0);
  const pick = (t) => (Array.isArray(t) ? t[lang()] : t);

  function el(tag, attrs, parent) {
    const n = document.createElementNS(SVGNS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }

  function textBlock(g, x, y, w, h, label, size) {
    const lines = String(pick(label)).split("\n");
    const lh = size * 1.25;
    const top = y + h / 2 - ((lines.length - 1) * lh) / 2;
    lines.forEach((line, i) => {
      const t = el("text", { x: x + w / 2, y: top + i * lh, "text-anchor": "middle", "dominant-baseline": "central", "font-size": size }, g);
      t.textContent = line;
    });
  }

  function anchor(n, toward) {
    const cx = n.x + n.w / 2;
    const cy = n.y + n.h / 2;
    const dx = toward.x - cx;
    const dy = toward.y - cy;
    if (Math.abs(dx) * n.h > Math.abs(dy) * n.w) return { x: dx > 0 ? n.x + n.w : n.x, y: cy };
    return { x: cx, y: dy > 0 ? n.y + n.h : n.y };
  }

  function edgePath(e, nodes) {
    if (e.p) return e.p;
    const a = nodes[e.a];
    const b = nodes[e.b];
    const ca = { x: a.x + a.w / 2, y: a.y + a.h / 2 };
    const cb = { x: b.x + b.w / 2, y: b.y + b.h / 2 };
    const p1 = anchor(a, cb);
    const p2 = anchor(b, ca);
    return `M${p1.x},${p1.y} L${p2.x},${p2.y}`;
  }

  function render(demo, svg) {
    svg.innerHTML = "";
    const defs = el("defs", {}, svg);
    const mk = el("marker", { id: "arrow", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" }, defs);
    el("path", { d: "M0,0 L10,5 L0,10 z", class: "d-arrow" }, mk);

    const nodes = {};
    demo.els.forEach((d) => { if (d.type === "node") nodes[d.id] = d; });
    const map = {};
    // Edges first so nodes sit on top of them.
    demo.els.filter((d) => d.type === "edge").forEach((d) => {
      const g = el("g", { class: "d-el d-edge", "data-id": d.id }, svg);
      const path = edgePath(d, nodes);
      el("path", { d: path, pathLength: 1, class: "d-line", "marker-end": "url(#arrow)" }, g);
      if (!reduceMotion) {
        const dot = el("circle", { r: 4, class: "d-pkt" }, g);
        el("animateMotion", { dur: "1.6s", repeatCount: "indefinite", path }, dot);
      }
      map[d.id] = g;
    });
    demo.els.filter((d) => d.type !== "edge").forEach((d) => {
      const g = el("g", { class: `d-el d-${d.type}`, "data-id": d.id }, svg);
      if (d.type === "node") {
        el("rect", { x: d.x, y: d.y, width: d.w, height: d.h, rx: 8, class: `d-box k-${d.k || "plain"}` }, g);
        textBlock(g, d.x, d.y, d.w, d.h, d.t, 13);
      } else if (d.type === "bars") {
        el("rect", { x: d.x, y: d.y, width: d.w, height: d.h, rx: 8, class: "d-box k-panel" }, g);
        const title = el("text", { x: d.x + 10, y: d.y + 16, "font-size": 12, class: "d-caption" }, g);
        title.textContent = pick(d.t);
        const n = d.items.length;
        const top = d.y + 28;
        const rowH = (d.h - 36) / n;
        const labelW = d.w * 0.36;
        const barX = d.x + labelW;
        const barW = d.w - labelW - 46;
        d.items.forEach((it, i) => {
          const y = top + i * rowH;
          const bh = Math.min(16, rowH - 6);
          const lt = el("text", { x: barX - 8, y: y + rowH / 2, "text-anchor": "end", "dominant-baseline": "central", "font-size": 12 }, g);
          lt.textContent = pick(it.t);
          const w = Math.max(2, (barW * it.v) / d.max);
          el("rect", { x: barX, y: y + (rowH - bh) / 2, width: w, height: bh, rx: 3, class: `d-bar k-${it.k || "muted"}`, style: `transform-origin:${barX}px 0` }, g);
          const vt = el("text", { x: barX + w + 6, y: y + rowH / 2, "dominant-baseline": "central", "font-size": 12, class: "d-val" }, g);
          vt.textContent = it.label || String(it.v);
        });
      }
      map[d.id] = g;
    });
    return map;
  }

  // ---------- modal ----------
  let dlg, svg, cap, dots, playBtn, current, map, idx, timer, playing;

  function buildDialog() {
    dlg = document.createElement("dialog");
    dlg.className = "demo";
    dlg.innerHTML = `
      <div class="demo-head">
        <div>
          <p class="demo-kicker"></p>
          <h3 class="demo-title"></h3>
          <p class="demo-authors"></p>
          <div class="demo-venue"></div>
        </div>
        <button class="demo-close" type="button" aria-label="Close" autofocus>×</button>
      </div>
      <div class="demo-stage"><svg viewBox="0 0 ${W} ${H}" role="img"></svg></div>
      <p class="demo-cap" aria-live="polite"></p>
      <div class="demo-ctrl">
        <button type="button" class="demo-prev" aria-label="Previous step">‹</button>
        <button type="button" class="demo-play"></button>
        <button type="button" class="demo-next" aria-label="Next step">›</button>
        <div class="demo-dots"></div>
      </div>
      <div class="demo-body"></div>`;
    document.body.appendChild(dlg);
    svg = dlg.querySelector("svg");
    cap = dlg.querySelector(".demo-cap");
    dots = dlg.querySelector(".demo-dots");
    playBtn = dlg.querySelector(".demo-play");
    dlg.querySelector(".demo-close").addEventListener("click", () => dlg.close());
    dlg.querySelector(".demo-prev").addEventListener("click", () => { stop(); go(idx - 1); });
    dlg.querySelector(".demo-next").addEventListener("click", () => { stop(); go(idx + 1); });
    playBtn.addEventListener("click", () => (playing ? stop() : play()));
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("close", () => { stop(); document.body.classList.remove("modal-open"); });
  }

  function labels() {
    const zh = lang() === 1;
    playBtn.textContent = playing ? (zh ? "暂停" : "Pause") : (zh ? "播放" : "Play");
    dlg.querySelector(".demo-kicker").textContent = zh ? "动画演示" : "Animated walkthrough";
  }

  function go(i) {
    const steps = current.steps;
    idx = (i + steps.length) % steps.length;
    const visible = new Set();
    for (let k = 0; k <= idx; k++) {
      steps[k].show.forEach((id) => visible.add(id));
      (steps[k].hide || []).forEach((id) => visible.delete(id));
    }
    const hot = new Set(steps[idx].hot || steps[idx].show);
    Object.entries(map).forEach(([id, g]) => {
      g.classList.toggle("on", visible.has(id));
      g.classList.toggle("hot", visible.has(id) && hot.has(id));
    });
    cap.textContent = pick(steps[idx].c);
    dots.innerHTML = "";
    steps.forEach((_, k) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "demo-dot" + (k === idx ? " is-on" : "");
      b.setAttribute("aria-label", `Step ${k + 1}`);
      b.addEventListener("click", () => { stop(); go(k); });
      dots.appendChild(b);
    });
  }

  function play() {
    playing = true;
    labels();
    clearInterval(timer);
    timer = setInterval(() => go(idx + 1), 3200);
  }

  function stop() {
    playing = false;
    clearInterval(timer);
    if (playBtn) labels();
  }

  function fill(card) {
    const q = (sel) => card.querySelector(sel);
    const title = q(".pub-title") || q("h3");
    dlg.querySelector(".demo-title").textContent = title.textContent;
    const authors = q(".pub-authors");
    dlg.querySelector(".demo-authors").innerHTML = authors ? authors.innerHTML : (q(".meta") ? q(".meta").innerHTML : "");
    const venue = q(".pub-venue");
    const v = dlg.querySelector(".demo-venue");
    v.innerHTML = venue ? venue.innerHTML : "";
    v.querySelectorAll(".demo-btn").forEach((b) => b.remove());
    const body = dlg.querySelector(".demo-body");
    const abs = q(".pub-abs");
    const list = q("ul");
    body.innerHTML = abs ? `<p>${abs.textContent}</p>` : list ? `<ul>${list.innerHTML}</ul>` : "";
  }

  function open(card) {
    const demo = DEMOS[card.dataset.demo];
    if (!demo) return;
    if (!dlg) buildDialog();
    current = demo;
    current.card = card;
    map = render(demo, svg);
    fill(card);
    dlg.showModal();
    document.body.classList.add("modal-open");
    go(0);
    if (reduceMotion) stop(); else play();
    labels();
  }

  document.querySelectorAll("[data-demo]").forEach((card) => {
    card.classList.add("has-demo");
    card.setAttribute("tabindex", "0");
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      open(card);
    });
    card.addEventListener("keydown", (e) => {
      if (e.target !== card) return;
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(card); }
    });
  });

  // Deep link: #demo=<id> opens that walkthrough, optionally at &step=<n>.
  const m = location.hash.match(/demo=([\w]+)(?:&step=(\d+))?/);
  if (m) {
    const card = document.querySelector(`[data-demo="${m[1]}"]`);
    if (card) {
      open(card);
      if (m[2]) { stop(); go(Number(m[2]) - 1); }
    }
  }

  document.addEventListener("langchange", () => {
    if (!dlg || !dlg.open) return;
    const keep = idx;
    map = render(current, svg);
    fill(current.card);
    go(keep);
    labels();
  });
})();
