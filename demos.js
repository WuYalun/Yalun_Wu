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
        N("q", 15, 90, 70, 44, ["Question", "问题"]),
        N("ret", 100, 90, 100, 44, ["Retrieve\ncandidates", "检索\n候选页面"]),
        N("adm", 215, 90, 110, 44, ["Evidence\nadmission", "证据准入"]),
        N("act", 345, 90, 150, 44, ["Acting model\nreads & summarises", "主模型\n阅读并总结"]),
        N("ans", 530, 90, 95, 44, ["Answer", "作答"], "ok"),
        N("st", 15, 190, 190, 44, ["Requirement state\n(unresolved needs)", "需求状态\n（未解决的需求）"], "accent"),
        N("vis", 220, 190, 115, 44, ["Visual detail\nallocation", "视觉细节\n分配"]),
        N("mem", 350, 190, 140, 44, ["Adaptive memory\nexposure", "自适应\n记忆呈现"]),
        N("gm", 530, 190, 95, 44, ["Graph +\nmemory", "轨迹图\n与记忆"], "soft"),
        E("e1", "q", "ret"), E("e2", "ret", "adm"), E("e3", "adm", "act"), E("e4", "act", "ans"),
        E("qs", "q", "st", "M50,134 L50,190"),
        E("s1", "st", "adm", "M190,190 L240,134"),
        E("s2", "st", "vis", "M205,212 L220,212"),
        E("s3", "st", "mem", "M110,234 L110,272 L420,272 L420,234"),
        E("g1", "act", "gm", "M480,134 L560,190"),
        E("g2", "gm", "mem", "M530,212 L490,212"),
        E("g3", "mem", "vis", "M350,212 L335,212"),
        E("g4", "vis", "act", "M277,190 L277,162 L400,162 L400,134"),
        E("loop", "act", "ret", "M420,90 L420,62 L150,62 L150,90"),
        BARS("res", 60, 40, 520, 230, ["Mean accuracy, 12 settings (%)", "12 组设置平均准确率（%）"], [
          { t: "Vanilla", v: 60.3 }, { t: "ViDoRAG", v: 59.4 }, { t: "ReAct", v: 61.0, label: "61.0" },
          { t: ["DAG agent", "DAG agent"], v: 62.3 }, { t: "TAEC", v: 66.8, k: "accent" }], 70),
      ],
      steps: [
        S(["q", "st", "qs"], "From the question, TAEC keeps a few answer requirements, and its shared state focuses on the ones not yet resolved.", "TAEC 从问题中整理出几项答题需求，共享状态重点关注尚未解决的那些。"),
        S(["ret", "adm", "e1", "e2", "s1"], "Evidence admission picks retrieved pages that are relevant and cover unresolved requirements, and penalises pages that repeat each other.", "证据准入从检索结果中挑选相关、且能覆盖未解决需求的页面，并对彼此重复的页面扣分。"),
        S(["act", "gm", "e3", "g1"], "The acting model reads the admitted pages and writes a summary into the trajectory graph and memory.", "主模型阅读准入的页面，把总结写入轨迹图和记忆。"),
        S(["mem", "g2", "s3"], "Before the next call, memory exposure keeps active observations in full, condenses resolved ones, and shortens failed searches to brief traces.", "下一次调用前，记忆呈现完整保留仍在进行的观察，把已解决的压缩成简短结论，失败的搜索只留简短痕迹。"),
        S(["vis", "g3", "g4", "s2"], "Visual detail allocation splits the image budget among retained images, giving more detail where it is expected to help.", "视觉细节分配把图像预算分给保留的历史图片，把更多细节留给预计有帮助的图片。"),
        S(["ans", "e4", "loop"], "The acting model itself decides whether to search again or answer; no model is trained.", "是否继续搜索或作答由主模型自己决定，所有模型都不经过训练。"),
        S(["res"], "Averaged over 3 benchmarks and 4 acting models, TAEC reaches 66.8% accuracy, 4.5 points above the DAG agent it builds on.", "在 3 个基准、4 个主模型上平均，TAEC 准确率为 66.8%，比它所基于的 DAG agent 高 4.5 个百分点。",
          null, ["q", "ret", "adm", "act", "ans", "st", "vis", "mem", "gm", "e1", "e2", "e3", "e4", "qs", "s1", "s2", "s3", "g1", "g2", "g3", "g4", "loop"]),
      ],
    },

    evolvemas: {
      els: [
        N("env", 15, 10, 610, 30, ["Cooperative · Mixed-motive · Adversarial", "合作 · 混合动机 · 对抗"], "muted"),
        N("peers", 15, 62, 120, 44, ["Peers +\nenvironment", "其他 Agent\n与环境"]),
        N("ex", 175, 62, 120, 44, ["Execute\n(main agent)", "Execute\n（主 Agent 行动）"]),
        N("ev", 335, 62, 120, 44, ["Evaluate\n(task result)", "Evaluate\n（任务结果）"]),
        N("evo", 495, 62, 130, 44, ["Evolve\n(distil)", "Evolve\n（提炼经验）"], "accent"),
        N("sm", 15, 150, 140, 60, ["Structured memory\nepisodic · semantic\n· working", "结构化记忆\n情景 · 语义 · 工作"]),
        N("ma", 175, 150, 120, 40, "MemoryAgent", "soft"),
        N("kb", 335, 150, 170, 60, ["Interaction knowledge\nstrategies +\npartner profiles", "交互知识\n策略 + 伙伴画像"], "ok"),
        E("i1", "peers", "ex", "M135,84 L175,84"),
        E("w1", "ex", "ma", "M220,106 L220,150"),
        E("w2", "ma", "sm", "M175,170 L155,170"),
        E("w3", "sm", "ex", "M140,150 L190,106"),
        E("c1", "ex", "ev"), E("c2", "ev", "evo"),
        E("k0", "sm", "evo", "M85,210 L85,272 L600,272 L600,106"),
        E("k1", "evo", "kb", "M560,106 L560,180 L505,180"),
        E("k2", "kb", "ex", "M380,150 L380,128 L270,128 L270,106"),
        BARS("res", 60, 40, 520, 230, ["Normalized average, 6 metrics on 5 benchmarks", "归一化平均分（5 个基准、6 项指标）"], [
          { t: "LLM-Deliberation", v: 67.5 }, { t: "Self-Memory", v: 69.5 }, { t: "EvolveMAS", v: 77.2, k: "accent" }], 80),
      ],
      steps: [
        S(["env", "peers", "ex", "i1"], "Main agents interact with each other, without central control, in cooperative, mixed-motive, and adversarial tasks.", "多个主 Agent 在没有中心控制的情况下互相交互，覆盖合作、混合动机和对抗任务。"),
        S(["ma", "sm", "w1", "w2"], "Each main agent has its own MemoryAgent, which keeps episodic, semantic, and working memory outside the agent's reasoning context.", "每个主 Agent 都有自己的 MemoryAgent，在主 Agent 的推理上下文之外维护情景、语义和工作记忆。"),
        S(["w3"], "Within an episode, each turn's new evidence updates this memory, which then shapes the agent's next turn.", "在一局之内，每轮新出现的信息都会更新记忆，再影响主 Agent 的下一轮行动。"),
        S(["ev", "c1"], "When the episode ends, Evaluate turns its outcome into a task-native result signal.", "一局结束后，Evaluate 把交互结果转成该任务自身的结果信号。"),
        S(["evo", "kb", "c2", "k0", "k1"], "In Evolve, the main agent distils its memory and the result into interaction strategies and partner profiles.", "Evolve 阶段，主 Agent 根据记忆和结果，提炼出交互策略和伙伴画像。"),
        S(["k2"], "This knowledge guides Execute in later episodes; no model parameters are updated.", "这些知识在之后的对局中指导 Execute，整个过程不更新模型参数。"),
        S(["res"], "Across six metrics on five benchmarks, EvolveMAS averages 77.2, versus 69.5 for Self-Memory and 67.5 for the best setting-specific method.", "在五个基准的六项指标上，EvolveMAS 平均得分 77.2，Self-Memory 为 69.5，最强的专用方法为 67.5。",
          null, ["env", "peers", "ex", "ev", "evo", "sm", "ma", "kb", "i1", "w1", "w2", "w3", "c1", "c2", "k0", "k1", "k2"]),
      ],
    },

    progress: {
      els: [
        N("dut", 10, 20, 150, 54, ["Reporting duty\nτ²-bench + StageIF", "汇报义务\nτ²-bench + StageIF"], "muted"),
        N("or", 190, 20, 160, 44, ["Oracle: true stage\nfrom runtime state", "Oracle：从运行时\n状态读真实阶段"], "accent"),
        N("md", 190, 84, 160, 44, ["Model's report\n(parsed)", "模型的汇报\n（解析后）"]),
        N("cmp", 380, 52, 90, 44, ["Match?", "是否一致？"]),
        N("f1", 500, 10, 130, 40, ["Acted instead", "以工具调用代替"], "bad"),
        N("f2", 500, 62, 130, 40, ["Omitted", "漏报"], "bad"),
        N("f3", 500, 114, 130, 40, ["Malformed", "格式错误"], "bad"),
        N("f4", 500, 166, 130, 40, ["Wrong stage", "阶段错误"], "bad"),
        N("int", 380, 226, 120, 54, ["True stage or\nreminder given", "给出真实阶段\n或提醒"], "warn"),
        N("fw", 510, 226, 120, 54, ["Verify against\nruntime state", "用运行时状态\n核验"], "accent"),
        E("a1", "dut", "or"), E("a2", "dut", "md"), E("b1", "or", "cmp"), E("b2", "md", "cmp"),
        E("c1", "cmp", "f1"), E("c2", "cmp", "f2"), E("c3", "cmp", "f3"), E("c4", "cmp", "f4"),
        E("d1", "int", "fw"),
        BARS("res", 10, 150, 350, 140, ["Correct stage reports, one model family (%)", "同一模型家族的阶段汇报正确率（%）"], [
          { t: ["Oldest · mid-task", "最早 · 中途"], v: 5.8, k: "bad" },
          { t: ["Oldest · completed", "最早 · 完成"], v: 88.9 },
          { t: ["Newest · mid-task", "最新 · 中途"], v: 100, k: "ok" },
          { t: ["Newest · completed", "最新 · 完成"], v: 48.1, k: "warn" }], 100),
      ],
      steps: [
        S(["dut"], "Each reply must end with the task's stage (needs info, ready, step done, or completed); StageIF also has checkpoints where no report is due.", "每条回复末尾都要标出任务所处阶段（待补信息、准备执行、已完成一步、已完成），StageIF 还设置了不该汇报的检查点。"),
        S(["or", "md", "cmp", "a1", "a2", "b1", "b2"], "Before the reply is opened, an oracle reads the true stage from runtime state; a parser then checks whether the model's report matches.", "在读取回复之前，Oracle 先从运行时状态得出真实阶段，再由解析器核对模型的汇报是否一致。"),
        S(["f1", "f2", "f3", "f4", "c1", "c2", "c3", "c4"], "StageIF scores four failures separately: calling a tool instead of reporting, omitting the report, malforming it, and naming the wrong stage.", "StageIF 分别统计四类失败：用工具调用代替汇报、漏报、格式错误、报错阶段。"),
        S(["res"], "On τ²-bench, the oldest model of one family is correct only 5.8% of the time mid-task but 88.9% at completion.", "在 τ²-bench 上，同一家族最早的模型在任务中途仅 5.8% 汇报正确，完成时却有 88.9%。"),
        S([], "The family's newest model, read after unwrapping its JSON replies, is 100% correct mid-task but only 48.1% at completion.", "该家族最新的模型（去掉 JSON 外壳后读取）中途 100% 正确，完成时却只有 48.1%。", ["res"]),
        S(["int", "fw", "d1"], "Supplying the true stage or adding a reminder does not close the gap, so frameworks should check reports against runtime state.", "直接告知真实阶段或加提醒都无法消除差距，因此框架应以运行时状态核验汇报。"),
      ],
    },

    flyeval: {
      els: [
        N("in", 10, 30, 125, 54, ["Flight state\n(PilotBench)", "飞行状态\n（PilotBench）"], "muted"),
        N("tk", 10, 120, 125, 70, ["S1: one step\nM1: from history\nM3: 3-step rollout", "S1：单步\nM1：基于历史\nM3：三步滚动"], "muted"),
        N("llm", 155, 85, 110, 54, ["LLM output\n45-field JSON", "LLM 输出\n45 字段 JSON"]),
        N("d1", 285, 85, 105, 54, ["D1 protocol\ngate", "D1 协议\n门控"], "warn"),
        N("rej", 285, 205, 105, 40, ["Score 0, stop", "记 0 分，终止"], "bad"),
        N("v2", 410, 12, 120, 36, ["D2 field validity", "D2 字段有效性"]),
        N("v3", 410, 58, 120, 36, ["D3 physics", "D3 物理一致性"]),
        N("v4", 410, 104, 120, 36, ["D4 safety", "D4 安全"]),
        N("v5", 410, 150, 120, 36, ["D5 accuracy", "D5 预测精度"]),
        N("agg", 548, 52, 86, 90, ["Severity-\nweighted\nscores", "按严重度\n加权评分"], "accent"),
        E("e1", "in", "llm"), E("e2", "tk", "llm"), E("e3", "llm", "d1"), E("e4", "d1", "rej"),
        E("g2", "d1", "v2"), E("g3", "d1", "v3"), E("g4", "d1", "v4"), E("g5", "d1", "v5"),
        E("h2", "v2", "agg"), E("h3", "v3", "agg"), E("h4", "v4", "agg"), E("h5", "v5", "agg"),
        BARS("res", 410, 200, 224, 90, ["D4 safety at near-equal accuracy", "精度相近时的 D4 安全分"], [
          { t: "Gemini-3-Pro", v: 92.7, k: "ok" }, { t: "DeepSeek-V3", v: 64.5, k: "warn" }], 100),
      ],
      steps: [
        S(["in", "tk", "e1", "e2", "llm"], "Using 708 real flights from PilotBench, an LLM predicts the next flight state from one state, from a short history, or as a three-step rollout.", "基于 PilotBench 的 708 条真实飞行，LLM 根据当前状态或短历史预测下一时刻，或一次滚动预测三步。"),
        S(["d1", "rej", "e3", "e4"], "Protocol first: output that fails to parse or misses any of the 45 required fields scores 0 and is not checked further, which removed 67% of 66 models.", "先查协议：无法解析或缺少 45 个必填字段中任意一个的输出记 0 分、不再往下检查，66 个模型中有 67% 在这一步被淘汰。"),
        S(["v2", "v3", "v4", "v5", "g2", "g3", "g4", "g5"], "Deterministic verifiers then emit typed evidence atoms for field validity, physics consistency, safety error thresholds, and accuracy.", "随后由确定性检查器生成带类型的证据原子，覆盖字段有效性、物理一致性、安全误差阈值和预测精度。"),
        S(["agg", "h2", "h3", "h4", "h5"], "Each dimension is a severity-weighted mean of its atoms, with critical atoms counting three times; no LLM is used for scoring.", "每个维度按严重度对证据原子加权平均（关键项权重为 3），打分全程不用 LLM。"),
        S(["res"], "Among 21 fully evaluated models, safety varies the most: at near-equal accuracy, DeepSeek-V3 scores 64.5 on safety and Gemini-3-Pro 92.7, a 28.2-point gap.", "在 21 个全量评测的模型中，安全分差异最大：精度相近时，DeepSeek-V3 安全分为 64.5，Gemini-3-Pro 为 92.7，相差 28.2 分。"),
        S([], "One-step prediction with history barely separates models, while three-step rollouts bring the safety spread back (60.2–75.7).", "基于历史的单步预测几乎拉不开差距，三步滚动预测则让安全分重新拉开（60.2–75.7）。", ["v4", "tk"]),
      ],
    },

    pilot: {
      els: [
        N("data", 10, 30, 170, 60, ["708 GA trajectories\n9 phases · 34 channels", "708 条通航轨迹\n9 个阶段 · 34 通道"]),
        N("ph", 10, 110, 170, 54, ["5 straight legs P1–P5\n+ 4 turns T1–T4", "5 段直线 P1–P5\n+ 4 段转弯 T1–T4"], "muted"),
        N("task", 210, 30, 160, 54, ["One-step trajectory\n+ attitude prediction", "单步预测\n轨迹 + 姿态"]),
        N("llm", 210, 110, 160, 44, ["41 LLMs screened", "筛选 41 个 LLM"]),
        N("trad", 210, 180, 160, 60, ["3 forecasters\nFlightPatchNet · DLinear\n· PatchTST", "3 个传统预测器\nFlightPatchNet · DLinear\n· PatchTST"]),
        N("ps", 400, 20, 230, 60, ["Pilot-Score\n60% accuracy · 40% instruction", "Pilot-Score\n60% 精度 · 40% 指令遵循"], "accent"),
        N("best", 10, 220, 170, 60, ["Qwen3-32B + Phy-CoT\nPilot-Score 69.21", "Qwen3-32B + Phy-CoT\nPilot-Score 69.21"], "ok"),
        E("e1", "data", "task"), E("e2", "ph", "task"), E("e3", "task", "llm"),
        E("e4", "task", "trad", "M210,70 L198,70 L198,205 L210,205"),
        E("e5", "llm", "ps", "M370,125 L400,62"),
        E("e6", "trad", "ps", "M370,200 L392,200 L392,72 L400,72"),
        BARS("mae", 400, 110, 230, 170, ["MAE, lower is better", "MAE（越低越好）"], [
          { t: "FlightPatchNet", v: 7.01 }, { t: ["Best LLM", "最好的 LLM"], v: 11.28, k: "warn" }], 14),
      ],
      steps: [
        S(["data", "ph"], "708 real general-aviation trajectory segments with 34-channel telemetry, split into nine traffic-pattern phases.", "708 段真实通航飞行轨迹，含 34 通道遥测，按起落航线划分为 9 个阶段。"),
        S(["task", "llm", "e1", "e2", "e3"], "From past waypoints, 41 LLMs predict the next trajectory and attitude in a fixed format.", "41 个 LLM 根据历史航点，按固定格式预测下一步的轨迹与姿态。"),
        S(["ps", "e5"], "Pilot-Score gives 60% to regression accuracy (MAE, RMSE) and 40% to field completeness, validity, and format.", "Pilot-Score 中回归精度（MAE、RMSE）占 60%，字段完整性、有效性与格式占 40%。"),
        S(["trad", "e4", "e6"], "An ablation sets three time-series forecasters against six GPT-4o and Qwen3-32B prompting variants.", "消融实验让 3 个时序预测器与 6 个 GPT-4o、Qwen3-32B 提示变体同台比较。"),
        S(["mae"], "FlightPatchNet reaches 7.01 MAE and the best LLM variant 11.28, though the LLMs follow 86–89% of instructions.", "FlightPatchNet 的 MAE 为 7.01，最好的 LLM 变体为 11.28，但 LLM 能遵循 86–89% 的指令。"),
        S(["best"], "Physics chain-of-thought cuts violations by about 25%; Qwen3-32B with it strikes the best balance at Pilot-Score 69.21.", "物理思维链让违规率下降约 25%，用它的 Qwen3-32B 以 69.21 分取得最佳平衡。"),
      ],
    },

    u2: {
      els: [
        N("data", 10, 95, 165, 78, ["7,241 cases\n40 datasets · 15 anatomies\n50 scenarios", "7,241 例\n40 个数据集 · 15 个部位\n50 个应用场景"]),
        N("t1", 205, 12, 175, 46, ["Classification (2,999)\nDiagnosis · View", "分类（2,999）\n疾病诊断 · 切面识别"]),
        N("t2", 205, 70, 175, 46, ["Detection (2,921)\nLesion · Organ · Keypoint", "检测（2,921）\n病灶 · 器官 · 关键点"]),
        N("t3", 205, 128, 175, 46, ["Regression (521)\nClinical value", "回归（521）\n临床数值估计"]),
        N("t4", 205, 186, 175, 46, ["Generation (800)\nReport · Caption", "文本生成（800）\n报告 · 描述"]),
        N("vlm", 410, 12, 105, 62, ["23 LVLMs\nopen · closed\n· medical", "23 个 LVLM\n开源 · 闭源\n· 医学"]),
        N("score", 535, 12, 95, 62, ["U2-Score\nsize-weighted", "U2-Score\n按样本量加权"], "accent"),
        E("e1", "data", "t1"), E("e2", "data", "t2"), E("e3", "data", "t3"), E("e4", "data", "t4"),
        E("f1", "t1", "vlm"), E("f2", "t2", "vlm"), E("f3", "t3", "vlm"), E("f4", "t4", "vlm"),
        E("g", "vlm", "score"),
        BARS("res", 405, 100, 225, 180, "U2-Score", [
          { t: "Dolphin-V1", v: 0.5835, label: "0.58", k: "accent" }, { t: "GPT-5", v: 0.325, label: "0.33" },
          { t: ["DeepSeek-VL2", "DeepSeek-VL2"], v: 0.263, label: "0.26" }], 0.7),
      ],
      steps: [
        S(["data"], "7,241 ultrasound cases from 40 licensed datasets, covering 15 anatomical regions and 50 clinical scenarios.", "7,241 例超声数据来自 40 个授权数据集，覆盖 15 个解剖部位与 50 个临床场景。"),
        S(["t1", "t2", "t3", "t4", "e1", "e2", "e3", "e4"], "Eight tasks fall into four groups: classification, detection, regression, and text generation.", "8 项任务分为四类：分类、检测、回归与文本生成。"),
        S([], "Because many models could not output valid boxes, detection is scored as picking one of nine image regions.", "很多模型输出不了有效的检测框，所以检测改为在 9 个图像区域中选一个来评分。", ["t2"]),
        S(["vlm", "f1", "f2", "f3", "f4"], "23 open-source, closed-source, and medical LVLMs are tested with the same prompts.", "23 个开源、闭源与医学 LVLM 使用同一套提示词测试。"),
        S(["score", "g"], "U2-Score combines the task scores, weighting each task by how many cases it has.", "U2-Score 按各任务的样本量加权，汇总每项任务的得分。"),
        S(["res"], "Dolphin-V1 leads at 0.58, ahead of GPT-5 at 0.33 and the best open model, DeepSeek-VL2, at 0.26.", "Dolphin-V1 以 0.58 领先，GPT-5 为 0.33，最强开源模型 DeepSeek-VL2 为 0.26。", null, ["f1", "f2", "f3", "f4"]),
        S([], "Models handle image-level classification well, but spatial reasoning and report writing remain hard.", "模型擅长图像级分类，但空间推理和报告撰写仍然困难。", ["t2", "t4"]),
      ],
    },

    h2h: {
      els: [
        N("sc", 10, 108, 140, 56, ["4,650 scenarios\n11 subtasks", "4,650 个场景\n11 个子任务"]),
        N("d1", 175, 18, 175, 40, ["Companion dialogue", "陪伴对话"]),
        N("d2", 175, 110, 175, 40, ["Companion recollection", "陪伴回忆"]),
        N("d3", 175, 202, 175, 40, ["Companion itinerary", "陪伴行程"]),
        N("met", 385, 18, 245, 40, "BLEU · ROUGE · BGE-M3 + GPT-4o"),
        N("m", 385, 100, 110, 56, ["50 LLMs\nscored", "50 个 LLM\n统一评分"]),
        N("sap", 385, 222, 150, 56, ["SAP persona\n(attachment theory)", "SAP 人格\n（依恋理论）"], "accent"),
        E("e1", "sc", "d1"), E("e2", "sc", "d2"), E("e3", "sc", "d3"),
        E("f1", "d1", "m"), E("f2", "d2", "m"), E("f3", "d3", "m"),
        E("g", "met", "m", "M440,58 L440,100"),
        BARS("res", 20, 40, 340, 150, ["33 high-risk scenarios", "33 个高风险场景"], [
          { t: ["Violations, with SAP", "违规率，有 SAP"], v: 0.7, label: "0.7%", k: "accent" },
          { t: ["Violations, no SAP", "违规率，无 SAP"], v: 7.1, label: "7.1%", k: "bad" }], 8),
      ],
      steps: [
        S(["sc", "d1", "d2", "d3", "e1", "e2", "e3"], "H2HTalk has 4,650 scenarios across three companion skills: dialogue, recollection (memory), and itinerary (planning one's own day).", "H2HTalk 包含 4,650 个场景，覆盖三种陪伴能力：对话、回忆（记忆）和行程（规划自己的日常）。"),
        S(["met", "m", "f1", "f2", "f3", "g"], "50 LLMs are scored on BLEU, ROUGE, and embedding similarity, with GPT-4o rubric scores for planning tasks and human review for low scores.", "50 个模型按 BLEU、ROUGE 与语义相似度打分，规划类任务另加 GPT-4o 评分，低分样本交由人工复核。"),
        S([], "Memory retention and long-horizon planning are the hardest parts, and models struggle when user needs are implicit; DeepSeek-V2.5 tops at 54.47.", "记忆保持与长程规划最难，用户需求隐含时模型表现明显下降；DeepSeek-V2.5 以 54.47 分居首。", ["d2", "d3"]),
        S(["sap"], "The Secure Attachment Persona (SAP) applies attachment theory, giving the companion clear boundaries and safety-first responses.", "安全依恋人格（SAP）基于依恋理论，让陪伴者有清晰边界并优先保证安全。"),
        S(["res"], "Without SAP, wording scores barely change, but on 33 high-risk scenarios violations rise from 0.7% to 7.1% and safety ratings fall from 4.8 to 3.2.", "去掉 SAP 后文本指标几乎不变，但在 33 个高风险场景中违规率从 0.7% 升至 7.1%，安全评分从 4.8 降到 3.2。",
          ["res", "sap"], ["sc", "d1", "d2", "d3", "met", "m", "e1", "e2", "e3", "f1", "f2", "f3", "g"]),
      ],
    },

    dolphin: {
      els: [
        N("data", 10, 18, 370, 40, ["Data: textbooks · diagnostic · distilled · general", "数据：教材 · 诊断 · 蒸馏 · 通用"], "muted"),
        N("base", 10, 110, 90, 44, ["Qwen2.5-VL\n7B / 72B", "Qwen2.5-VL\n7B / 72B"], "muted"),
        N("s1", 120, 110, 120, 44, ["Post-training\n~2M samples", "后训练\n约 200 万样本"]),
        N("s2", 260, 110, 120, 44, ["Instruction\ntuning 10.3K", "指令微调\n1.03 万样本"]),
        N("v1", 260, 212, 120, 44, ["Dolphin Chat", "Dolphin Chat"], "ok"),
        N("s3", 400, 110, 110, 44, ["UARPO RL\n60.7K", "UARPO 强化学习\n6.07 万"], "accent"),
        N("r1", 530, 105, 100, 54, ["Dolphin\nReasoning", "Dolphin\nReasoning"], "ok"),
        N("rew", 400, 18, 230, 40, ["Reward = ½ format + ½ answer", "奖励 = ½ 格式 + ½ 答案"]),
        E("e1", "base", "s1"), E("e2", "s1", "s2"), E("e3", "s2", "s3"), E("e4", "s3", "r1"),
        E("d", "data", "s1", "M180,58 L180,110"),
        E("v", "s2", "v1", "M320,154 L320,212"),
        E("r", "rew", "s3", "M455,58 L455,110"),
        BARS("res", 400, 175, 230, 115, "U2-Score (U2-Bench)", [
          { t: ["Random", "随机"], v: 0.2125, label: "0.21" }, { t: "Gemini-2.5", v: 0.2968, label: "0.30" },
          { t: "Chat", v: 0.539, label: "0.54" }, { t: "Reasoning", v: 0.5835, label: "0.58", k: "accent" }], 0.6),
      ],
      steps: [
        S(["data", "base", "s1", "e1", "d"], "Starting from Qwen2.5-VL, stage one post-trains on over 2 million ultrasound and general-domain samples to build medical knowledge while keeping general skills.", "以 Qwen2.5-VL 为基座，第一阶段用 200 万条以上的超声与通用数据做后训练，建立医学知识的同时保留通用能力。"),
        S(["s2", "v1", "e2", "v"], "Stage two is instruction tuning on 10.3K samples of multi-turn dialogue and deep-reasoning tasks; the first two stages produce Dolphin Chat.", "第二阶段用 1.03 万条多轮对话与深度推理样本做指令微调，前两个阶段得到 Dolphin Chat。"),
        S(["s3", "rew", "r1", "e3", "e4", "r"], "Stage three runs UARPO (Ultrasound Answer Reward Preference Optimization), rewarding correct format and correct diagnosis equally, and yields Dolphin Reasoning.", "第三阶段进行 UARPO（超声答案奖励偏好优化）强化学习，格式正确与诊断正确各占一半奖励，得到 Dolphin Reasoning。"),
        S(["res"], "On U2-Bench, Dolphin Reasoning scores 0.5835, about twice the best non-Dolphin model (Gemini-2.5-Pro, 0.2968).", "在 U2-Bench 上，Dolphin Reasoning 得分 0.5835，约为最强非 Dolphin 模型（Gemini-2.5-Pro，0.2968）的两倍。"),
        S([], "Compared with Dolphin Chat, Dolphin Reasoning locates lesions and organs more accurately and cuts measurement error (RMSE) by 10.6%.", "与 Dolphin Chat 相比，Dolphin Reasoning 的病灶与器官定位更准确，测量误差（RMSE）降低 10.6%。", ["v1", "r1"]),
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
        // Size the label column to the longest label (CJK glyphs are about twice as wide).
        const textW = (str) => [...String(str)].reduce((w, ch) => w + (ch.charCodeAt(0) > 0x2e80 ? 12 : 6.6), 0);
        const longest = Math.max(...d.items.map((it) => textW(pick(it.t))));
        const labelW = Math.min(d.w * 0.6, Math.max(d.w * 0.3, longest + 22));
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
