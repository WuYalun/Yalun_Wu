const I18N = {
  zh: {
    role: "新加坡国立大学 · 计算机硕士",
    affiliation: "NExT++ Lab",
    label_email: "邮箱",
    download_cv: "下载简历",
    nav_about: "简介",
    nav_education: "教育",
    nav_publications: "论文",
    nav_experience: "经历",
    nav_contact: "联系",
    about_title: "简介",
    about_p1:
      "我是吴亚伦，目前在新加坡国立大学攻读计算机硕士，所属 NExT++ Lab。研究方向为 LLM Evaluation、Multimodal Reasoning 与 AI Agents。",
    about_p2:
      "我关心的问题是：当模型进入真实业务、长时记忆和安全关键环境时，如何把开放式生成变成可验证、可审计、可复现的系统行为。实践上覆盖从问题抽象、任务定义、评测体系到系统实现与业务闭环。",
    chip_eval: "LLM Evaluation",
    chip_mm: "Multimodal Reasoning",
    chip_agent: "AI Agents",
    edu_title: "教育背景",
    edu_nus_school: "新加坡国立大学（NUS）",
    edu_nus_meta: "计算机硕士 · NExT++ Lab · 预计 2026.12",
    edu_buaa_school: "北京航空航天大学（BUAA）",
    edu_buaa_meta: "工学学士，网络空间安全 · GPA 89/100",
    edu_extra: "雅思 6.5；GRE 322（V152 / Q170）。",
    pub_title: "论文与项目",
    filter_all: "全部",
    filter_agent: "Agent / RAG",
    filter_embodied: "具身与安全",
    filter_domain: "领域大模型",
    group_agent: "Agent 系统、记忆与 RAG",
    group_embodied: "具身与安全约束场景可信评测",
    group_domain: "领域大模型与多模态基础设施",
    status_prep_iclr: "论文撰写阶段 · 预计投稿 ICLR 2027",
    status_aaai: "AAAI 2027 在投",
    status_cikm: "成品论文",
    status_emnlp_demo: "成品论文",
    status_emnlp: "成品论文",
    status_nmi: "进行中 · 预计投稿 Nature Machine Intelligence",
    status_nc: "整理中 · 预计投稿 Nature Communications",
    role_first: "第一作者",
    role_cofirst: "共同第一作者",
    role_core: "核心贡献者",
    role_dolphin: "核心贡献者 · 共同一作后首位",
    role_second: "第二作者",
    authors_lhmg: "Yalun Wu 等",
    authors_procura: "Yalun Wu 等",
    authors_ftap: "Yalun Wu 等",
    authors_neuro: "Yalun Wu 等",
    abs_memoryagent:
      "面向去中心化多智能体系统提出跨设定自进化范式，用统一 Execute–Evaluate–Evolve（EEE）协议覆盖合作、混合动机与对抗三类交互。回合内由外部 MemoryAgent 维护隔离的 Episodic / Semantic / Working 结构化记忆；回合间将经验蒸馏为 Partner Profiles 与 Interaction Strategies。在 BBH、HumanEval、LLM-Deliberation、SOTOPIA 与 Werewolf 上验证，一套协议与记忆模式覆盖三种体制。",
    abs_veb:
      "多步视觉 RAG 中，检索到相关证据并不等于模型能有效使用这些证据。TARC 是一套无需训练的轨迹感知资源控制框架：通过证据准入、记忆渲染与视觉预算，把有限的输入、记忆和视觉资源对齐到当前尚未解决的问题需求。ViDoSeek 准确率由 72.1% 提升至 80.8%，SlideVQA 由 79.1% 提升至 85.6%；在固定多步子集上分别提升 13.0 与 23.9 个百分点。",
    abs_lhmg:
      "将 LLM Agent 长时记忆建模为可治理状态，结合 Revision Graph、Risk-Gated Memory Conditioning、Consistency-Constrained Decoding 与 Governed Forgetting。冲突事实更新准确率由 40% 提升至 100%，GPT-4o 跨轮一致性最高提升 13pp。",
    abs_procura:
      "源自华住餐饮供应链场景。将采购、补货与菜单规划抽象为可评测的上下文感知采购搜索问题，并在公开基准与真实流量中验证酒店画像驱动的企业级检索框架。",
    abs_schema:
      "面向电信多端设备的意图识别与槽位抽取，将 NER / RE / EE / SLU 映射到统一 USP schema，覆盖 61 个数据集与约 275 万级多语言语料，并讨论低延迟部署与训练-部署 schema mismatch。",
    abs_pilot:
      "面向具身飞行的轨迹—姿态联合预测基准，基于 708 条真实飞行数据，对 41 个模型评测。PILOT-SCORE 融合回归精度、指令遵循与安全合规，并揭示精度与可控性之间的张力。",
    abs_flyeval:
      "证据驱动的两阶段评测协议：先对结构化输出、物理可行性与 20 条 FAA 约束做确定性校验，再聚合为可解释分数，全程不依赖 LLM 打分。在 21 个模型上识别出五类系统性失效模式。",
    abs_ftap:
      "围绕长时序、安全关键飞行建模，重建高保真 FTAP 数据集，并显式区分物理可行预测与语言合理但存在安全风险的输出。",
    abs_u2:
      "超声理解综合基准：7,241 例、15 个解剖区域、8 类临床任务。评测通用与医学 VLM 在分类、检测、回归与报告生成上的能力边界。",
    abs_dolphin:
      "超声多模态大模型。三阶段训练含后训练、指令微调与 UARPO。U2-Score 0.5835 达到 SOTA；推理模式相对标准模式诊断准确率 +2.4%，测量 RMSE −10.6%，检测准确率 +16%。",
    abs_neuro:
      "神经精神科大模型评测，组织文本医学推理与脑影像视觉理解双轨任务。主导 BrainVLM 流程，在 16 个 VLM、6 类任务上做统一对比。",
    abs_h2h:
      "情感伴侣评测基准，覆盖 4,800+ 多轮场景，并引入基于依恋理论的 SAP 安全模块。长程记忆与隐式需求理解仍是主要瓶颈；去掉 SAP 后违规率显著上升。",
    exp_title: "实习经历",
    now: "至今",
    exp_meituan_org: "美团",
    exp_meituan_meta: "大模型算法实习生 · 多步视觉 RAG 与业务智能",
    exp_meituan_1: "重构检索—推理—评测闭环，搭建三路混合检索与多步推理框架，Recall@3 从 51.9% 提升至 79%+。",
    exp_meituan_2: "主导 85+ 组受控实验，沉淀 TARC 轨迹感知资源控制方法；GPT-4.1 严判准确率 70.8% → 81.5%（+10.7pp），P50 延迟 164s → 21s。",
    exp_meituan_3: "框架迁移到用户 query 多模态改写与纯文本任务，分别提升 +7pp 与 +4pp。",
    exp_huazhu_org: "华住集团",
    exp_huazhu_meta: "企业 Agent 落地实习生 · 智能餐饮供应链 / AI 赋能基础设施",
    exp_huazhu_1: "围绕智能统购、批量采购、补货与菜单规划，梳理规则约束与模型可介入环节，实现早期多 Agent 决策原型。",
    exp_huazhu_2: "探索有限上下文下可解释、可校验的 skill 生成；相关工作扩展为 ProcuraClaw 成品论文。",
    exp_dolphin_org: "海豚之声医疗科技有限公司",
    exp_dolphin_meta: "大模型评测算法实习生 · 视觉语言模型评测",
    exp_dolphin_1: "主导医学超声 VLM 的部署、调用与大规模 benchmark 实验。",
    exp_dolphin_2: "参与 U2-BENCH 与 DOLPHIN 的设计实现，并负责 prompt 策略、结构化数据与实验分析。",
    exp_uav_org: "北京飞熊科技有限公司",
    exp_uav_meta: "实习生 · 无人机研发部门",
    exp_uav_1: "参与无人机通信链路安全测试与问题排查，协助缺陷定位与功能验证。",
    skills_title: "技术能力",
    skill_agent_h: "大模型与 Agent",
    skill_agent_p: "Agentic Workflow、Agent Harness、任务分解、多 Agent 协作、工具调用与业务动作闭环。",
    skill_rag_h: "RAG 与上下文工程",
    skill_rag_p: "多步 RAG、长上下文管理、证据链路优化、上下文压缩与多模态 RAG。",
    skill_eval_h: "可信评测",
    skill_eval_p: "Benchmark 构建、Failure Taxonomy、Rubric / Evidence-driven Scoring、Schema 约束与安全规则验证。",
    skill_mm_h: "多模态与领域模型",
    skill_mm_p: "VLM、医学影像理解、具身时序建模、视觉 RAG 与业务智能搜索。",
    contact_title: "联系",
    contact_p: "欢迎就 Agent 记忆、多步 RAG、可信评测与安全关键系统交流。邮件是最快的联系方式。",
  },
  en: {
    role: "M.Comp. student, National University of Singapore",
    affiliation: "NExT++ Lab",
    label_email: "Email",
    download_cv: "Download CV",
    nav_about: "About",
    nav_education: "Education",
    nav_publications: "Publications",
    nav_experience: "Experience",
    nav_contact: "Contact",
    about_title: "About",
    about_p1:
      "I am Yalun Wu, a Master of Computing student at NUS NExT++ Lab. Research interests: LLM Evaluation, Multimodal Reasoning, and AI Agents.",
    about_p2:
      "I care about a practical question: once models enter real workflows, long-horizon memory, and safety-critical settings, how can open-ended generation become verifiable, auditable, and reproducible system behavior.",
    chip_eval: "LLM Evaluation",
    chip_mm: "Multimodal Reasoning",
    chip_agent: "AI Agents",
    edu_title: "Education",
    edu_nus_school: "National University of Singapore",
    edu_nus_meta: "Master of Computing · NExT++ Lab · expected Dec 2026",
    edu_buaa_school: "Beihang University (BUAA)",
    edu_buaa_meta: "B.E. in Cyberspace Security · GPA 89/100",
    edu_extra: "IELTS 6.5; GRE 322 (V152 / Q170).",
    pub_title: "Publications & projects",
    filter_all: "All",
    filter_agent: "Agent / RAG",
    filter_embodied: "Embodied & safety",
    filter_domain: "Domain models",
    group_agent: "Agents, memory, and RAG",
    group_embodied: "Embodied and safety-constrained evaluation",
    group_domain: "Domain models and multimodal infrastructure",
    status_prep_iclr: "In preparation · targeting ICLR 2027",
    status_aaai: "Under review, AAAI 2027",
    status_cikm: "Completed manuscript",
    status_emnlp_demo: "Completed manuscript",
    status_emnlp: "Completed manuscript",
    status_nmi: "In progress · targeting Nature Machine Intelligence",
    status_nc: "In preparation · targeting Nature Communications",
    role_first: "First author",
    role_cofirst: "Co-first author",
    role_core: "Core contributor",
    role_dolphin: "Core contributor · first after co-first authors",
    role_second: "Second author",
    authors_lhmg: "Yalun Wu et al.",
    authors_procura: "Yalun Wu et al.",
    authors_ftap: "Yalun Wu et al.",
    authors_neuro: "Yalun Wu et al.",
    abs_memoryagent:
      "A cross-setting self-evolution paradigm for decentralized MAS, with a unified Execute–Evaluate–Evolve (EEE) protocol covering cooperative, mixed-motive, and adversarial regimes. Within an episode, an external MemoryAgent maintains isolated episodic / semantic / working memory; across episodes, experience is distilled into partner profiles and interaction strategies. Results on BBH, HumanEval, LLM-Deliberation, SOTOPIA, and Werewolf show one protocol and one memory schema covering all three regimes.",
    abs_veb:
      "In multi-step visual RAG, retrieving relevant evidence does not mean the model can use it. TARC is a training-free, trajectory-aware resource-control framework: evidence admission, memory rendering, and visual budgeting align limited input, memory, and visual resources with currently unresolved requirements. Accuracy rises from 72.1% to 80.8% on ViDoSeek and from 79.1% to 85.6% on SlideVQA; on fixed multi-step subsets the gains are 13.0 and 23.9 points.",
    abs_lhmg:
      "Treats long-horizon agent memory as a governable state via a revision graph, risk-gated conditioning, consistency-constrained decoding, and governed forgetting. Conflict-update accuracy rises from 40% to 100%; GPT-4o cross-turn consistency improves by up to 13 pp.",
    abs_procura:
      "From H World's food-supply chain operations. Casts procurement, replenishment, and menu planning as context-aware search, and evaluates a hotel-profile-driven enterprise retrieval system on public benchmarks and real traffic.",
    abs_schema:
      "Unifies intent detection and slot filling for telecom devices by mapping NER / RE / EE / SLU onto a USP schema over 61 datasets and ~2.75M multilingual examples, with a system demo on low-latency deployment and train-serve schema mismatch.",
    abs_pilot:
      "A trajectory-attitude benchmark for embodied flight from 708 real segments, evaluating 41 models. PILOT-SCORE combines regression accuracy, instruction following, and safety compliance.",
    abs_flyeval:
      "An evidence-driven two-stage protocol: deterministic checks over structured outputs, physics feasibility, and 20 FAA constraints, then interpretable aggregation with no LLM-as-judge. Identifies five systematic failure modes across 21 models.",
    abs_ftap:
      "Builds a high-fidelity FTAP temporal dataset for safety-critical long-horizon flight modeling, and separates physically feasible predictions from fluent but unsafe outputs.",
    abs_u2:
      "A comprehensive ultrasound understanding benchmark: 7,241 cases, 15 anatomical regions, and 8 clinical tasks spanning classification, detection, regression, and report generation.",
    abs_dolphin:
      "A multimodal LLM for ultrasound with post-training, instruction tuning, and UARPO. Achieves a U2-Score of 0.5835 (SOTA). The reasoning mode improves diagnosis by 2.4%, reduces measurement RMSE by 10.6%, and lifts detection by 16%.",
    abs_neuro:
      "A dual-track evaluation for neuropsychiatric foundation models, covering textual medical reasoning and brain-MRI visual understanding across 16 VLMs and 6 tasks.",
    abs_h2h:
      "A benchmark for LLM emotional companions over 4,800+ multi-turn scenarios, with an attachment-theory SAP safety module. Long-horizon memory and implicit-need understanding remain the main bottlenecks.",
    exp_title: "Experience",
    now: "present",
    exp_meituan_org: "Meituan",
    exp_meituan_meta: "LLM Algorithm Intern · multi-step visual RAG and business intelligence",
    exp_meituan_1: "Rebuilt the retrieve-reason-evaluate loop with hybrid retrieval and multi-step reasoning; Recall@3 rose from 51.9% to 79%+.",
    exp_meituan_2: "Led 85+ controlled experiments that produced TARC, a trajectory-aware resource-control method. GPT-4.1 strict accuracy 70.8% → 81.5% (+10.7 pp); P50 latency 164s → 21s.",
    exp_meituan_3: "Transferred the framework to multimodal query rewriting and text-only tasks, gaining +7 pp and +4 pp.",
    exp_huazhu_org: "H World Group (Huazhu)",
    exp_huazhu_meta: "Enterprise Agent Intern · intelligent catering supply chain",
    exp_huazhu_1: "Mapped procurement, replenishment, and menu-planning workflows into callable multi-agent modules under operational constraints.",
    exp_huazhu_2: "Explored interpretable skill generation under limited context; later extended into ProcuraClaw as a completed manuscript.",
    exp_dolphin_org: "Dolphin Sound Medical Technology",
    exp_dolphin_meta: "LLM Evaluation Intern · vision-language model evaluation",
    exp_dolphin_1: "Led deployment, serving, and large-scale evaluation of medical ultrasound VLMs.",
    exp_dolphin_2: "Contributed to U2-BENCH and DOLPHIN, including prompt strategy, structured data, and experimental analysis.",
    exp_uav_org: "Beijing Feixiong Technology",
    exp_uav_meta: "Intern · UAV R&D",
    exp_uav_1: "Supported security testing and troubleshooting of UAV communication links.",
    skills_title: "Skills",
    skill_agent_h: "LLMs and agents",
    skill_agent_p: "Agentic workflows, agent harnesses, task decomposition, multi-agent collaboration, and tool-to-action loops.",
    skill_rag_h: "RAG and context engineering",
    skill_rag_p: "Multi-step RAG, long-context management, evidence-chain optimization, compression, and multimodal RAG.",
    skill_eval_h: "Trustworthy evaluation",
    skill_eval_p: "Benchmark construction, failure taxonomies, rubric / evidence-driven scoring, schema constraints, and safety-rule checks.",
    skill_mm_h: "Multimodal and domain models",
    skill_mm_p: "VLMs, medical image understanding, embodied temporal modeling, visual RAG, and business-intelligence search.",
    contact_title: "Contact",
    contact_p: "I am happy to discuss agent memory, multi-step RAG, trustworthy evaluation, and safety-critical systems. Email is the fastest way to reach me.",
  },
};

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

function applyLang(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = lang === "zh" ? "English" : "中文";
  localStorage.setItem("site-lang", lang);
}

const saved = localStorage.getItem("site-lang") === "en" ? "en" : "zh";
applyLang(saved);

document.getElementById("lang-toggle")?.addEventListener("click", () => {
  const next = document.documentElement.lang.startsWith("zh") ? "en" : "zh";
  applyLang(next);
});

const filters = document.querySelectorAll(".filter");
const pubs = document.querySelectorAll(".pub");
const groups = document.querySelectorAll(".group-title");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const value = btn.dataset.filter;
    pubs.forEach((pub) => {
      pub.classList.toggle("is-hidden", value !== "all" && pub.dataset.group !== value);
    });
    groups.forEach((title) => {
      title.classList.toggle("is-hidden", value !== "all" && title.dataset.group !== value);
    });
  });
});
