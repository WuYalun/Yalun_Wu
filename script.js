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
    about_p2: "我关心的问题是：当大模型进入真实业务流程、需要长期记忆或运行在安全关键环境中时，如何让开放式生成变成可验证、可审计、可复现的系统行为。实践上覆盖从问题抽象、任务定义、评测体系到系统实现与业务闭环。",
    chip_eval: "LLM Evaluation",
    chip_mm: "Multimodal Reasoning",
    chip_agent: "AI Agents",
    edu_title: "教育背景",
    edu_nus_school: "新加坡国立大学（NUS）",
    edu_nus_meta: "计算机硕士 · NExT++ Lab · 预计 2026.12",
    edu_buaa_school: "北京航空航天大学（BUAA）",
    edu_buaa_meta: "工学学士，网络空间安全 · GPA 89/100",
    pub_title: "论文与项目",
    filter_all: "全部",
    filter_agent: "Agent / RAG",
    filter_embodied: "具身与安全",
    filter_domain: "领域大模型",
    group_agent: "Agent / RAG",
    group_embodied: "具身与安全约束场景可信评测",
    group_domain: "领域大模型与多模态基础设施",
    status_iclr: "ICLR 2027 在投",
    status_icassp: "ICASSP 2027 在投",
    status_aaai: "AAAI 2027 在投",
    status_naacl: "NAACL 2027 拟投",
    status_cvpr: "CVPR 2027 拟投",
    status_nmi: "进行中 · 预计投稿 Nature Machine Intelligence",
    status_nc: "整理中 · 预计投稿 Nature Communications",
    role_first: "第一作者",
    role_cofirst: "共同第一作者",
    role_core: "核心贡献者",
    role_second: "第二作者",
    role_corr: "通讯作者",
    authors_lhmg: "Yalun Wu 等",
    authors_procura: "Yalun Wu 等",
    authors_ftap: "Yalun Wu 等",
    authors_neuro: "Yalun Wu 等",
    abs_memoryagent: "面向去中心化多 Agent 系统的自进化框架，覆盖合作、混合动机与对抗场景。每个 Agent 配有独立 MemoryAgent，在推理上下文之外管理记忆，并把经验提炼为可复用的策略与伙伴画像，无需更新模型参数。在 5 个基准、6 组配置上取得最高归一化平均分 77.2，较 Self-Memory 高 7.7 分。",
    abs_veb: "多步视觉 RAG 中，检索到相关证据并不等于整条推理轨迹都能用上它。TAEC 无需训练，以尚未满足的答题需求作为共享状态，统一协调证据准入、记忆呈现与视觉细节分配。12 组设置下平均准确率 66.8%，较 DAG 基线提升 4.5pp。",
    abs_spec: "Agent 经常把未完成的任务报告为已完成，运行时因此越来越依赖外部检查。我们研究这种外部监督需要哪些可执行的成功条件：在 50% 条件覆盖率下，依据另一模型的稳定失败记录优先选取检查条件，两个模型的严格通过率较随机选择分别提升 18.5/19.3pp，同时减少错误放行。",
    abs_lhmg:
      "以版本化修订、风险门控、约束解码和治理式遗忘管理 Agent 记忆，冲突事实更新准确率 40% → 100%，跨轮次决策一致性最高 +13pp。",
    abs_procura:
      "学习融合噪声语音与图像证据，用于商品搜索。",
    abs_schema:
      "跨任务语义解析的统一 Schema 接口与语料。",
    abs_pilot:
      "面向具身飞行的轨迹—姿态联合预测基准，基于 708 条真实飞行数据，对 41 个模型评测。PILOT-SCORE 融合回归精度、指令遵循与安全合规，并揭示精度与可控性之间的张力。",
    abs_flyeval:
      "证据驱动的两阶段评测协议：先对结构化输出、物理可行性与 20 条 FAA 约束做确定性校验，再聚合为可解释分数，全程不依赖 LLM 打分。在 21 个模型上识别出五类系统性失效模式。",
    abs_ftap:
      "围绕长时序、安全关键飞行建模，重建高保真 FTAP 数据集，并显式区分物理可行预测与语言合理但存在安全风险的输出。",
    abs_u2:
      "超声理解综合基准：7,241 例、15 个解剖区域、8 类临床任务。评测通用与医学 VLM 在分类、检测、回归与报告生成上的能力边界。",
    abs_dolphin: "超声多模态大模型技术报告，训练覆盖后训练、指令微调与 UARPO 强化学习三个阶段，在 U2-BENCH 上取得 U2-Score 0.5835。",
    abs_neuro:
      "神经精神科大模型评测，组织文本医学推理与脑影像视觉理解双轨任务。主导 BrainVLM 流程，在 16 个 VLM、6 类任务上做统一对比。",
    abs_h2h:
      "情感伴侣评测基准，覆盖 4,800+ 多轮场景，并引入基于依恋理论的 SAP 安全模块。长程记忆与隐式需求理解仍是主要瓶颈；去掉 SAP 后违规率显著上升。",
    exp_title: "实习经历",
    now: "至今",
    exp_meituan_org: "美团",
    exp_meituan_meta: "大模型算法实习生 · 多步视觉 RAG 与业务智能",
    exp_meituan_1: "面向线上知识库问答，搭建三路混合检索与多步视觉 RAG，优化证据筛选、跨步记忆与视觉输入，Recall@3 从 51.9% 提升至 79%+。",
    exp_meituan_2: "主导 85+ 组受控实验，分析检索策略、推理参数、上下文积累、视觉质量与 Agent 框架的影响，形成可迁移的配置与调优流程。",
    exp_meituan_3: "内部严格评测准确率 70.8% → 81.5%（+10.7pp），P50 推理延迟 164s → 21s。",
    exp_meituan_4: "扩展至用户查询多模态改写与纯文本问答，业务数据集上分别 +7pp 与 +4pp，完成查询改写上线。",
    exp_huazhu_org: "华住集团",
    exp_huazhu_meta: "企业 Agent 落地实习生 · 智能餐饮供应链 / AI 赋能基础设施",
    exp_huazhu_1: "围绕智能统购、批量采购、补货与菜单规划，梳理规则约束与模型可介入环节，实现早期多 Agent 决策原型。",
    exp_huazhu_2: "整理门店需求、价格信号、商品约束与供应商策略，探索结构化 skill 生成与判别；为后续 LFUSE 商品搜索研究（ICASSP 2027 在投）提供场景定义与业务规则基础。",
    exp_dolphin_org: "海豚之声医疗科技有限公司",
    exp_dolphin_meta: "大模型评测算法实习生 · 视觉语言模型评测",
    exp_dolphin_1: "主导医学超声 VLM 的部署、调用与基准评测，完成实验执行、结果核验与统一格式整理。",
    exp_dolphin_2: "参与 U2-BENCH 基准建设与 DOLPHIN 评测，开展推理模式对照、跨身体部位泛化分析及消融实验。",
    exp_dolphin_3: "负责 Prompt 策略、结构化数据与模型输出分析，撰写实验报告与失效案例分析。",
    exp_uav_org: "北京飞熊科技有限公司",
    exp_uav_meta: "实习生 · 无人机研发部门",
    exp_uav_1: "参与无人机通信链路安全测试与问题排查，协助缺陷定位与功能验证。",
    skills_title: "技术能力",
    skill_agent_h: "大模型与 Agent",
    skill_agent_p: "Agentic Workflow、Agent Harness、任务分解、多 Agent 协作、工具调用、结构化记忆与可验证执行。",
    skill_rag_h: "RAG 与上下文工程",
    skill_rag_p: "多步 RAG、长上下文管理、证据链路优化、上下文压缩与多模态 RAG。",
    skill_eval_h: "可信评测",
    skill_eval_p: "Benchmark 构建、失效模式归纳、证据驱动评分、多模型横评与消融；结合 Schema 约束、运行时校验与物理/安全规则设计可复现评测。",
    skill_mm_h: "多模态与领域模型",
    skill_mm_p: "VLM、医学影像理解、具身时序建模、视觉 RAG 与业务智能搜索。",
    contact_title: "联系",
    contact_p: "欢迎就 Agent 记忆、多步 RAG、可信评测与安全关键系统交流。邮件是最快的联系方式。",
    hl_text: "FLY-EVAL++ 被 COLM 2026 接收（第一作者）：面向安全约束飞行预测的证据驱动评测协议，不依赖 LLM 打分。",
    hl_paper: "论文",
    status_preprint: "arXiv 预印本",
    authors_schema: "Yalun Wu 等",
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
    about_p2: "I am interested in how open-ended generation can become verifiable, auditable, and reproducible system behavior when LLMs are deployed in real workflows, rely on long-term memory, or operate in safety-critical settings.",
    chip_eval: "LLM Evaluation",
    chip_mm: "Multimodal Reasoning",
    chip_agent: "AI Agents",
    edu_title: "Education",
    edu_nus_school: "National University of Singapore",
    edu_nus_meta: "Master of Computing · NExT++ Lab · expected Dec 2026",
    edu_buaa_school: "Beihang University (BUAA)",
    edu_buaa_meta: "B.E. in Cyberspace Security · GPA 89/100",
    pub_title: "Publications & projects",
    filter_all: "All",
    filter_agent: "Agent / RAG",
    filter_embodied: "Embodied & safety",
    filter_domain: "Domain models",
    group_agent: "Agent / RAG",
    group_embodied: "Embodied and safety-constrained evaluation",
    group_domain: "Domain models and multimodal infrastructure",
    status_iclr: "Under review, ICLR 2027",
    status_icassp: "Under review, ICASSP 2027",
    status_aaai: "Under review, AAAI 2027",
    status_naacl: "Planned submission, NAACL 2027",
    status_cvpr: "Planned submission, CVPR 2027",
    status_nmi: "In progress · targeting Nature Machine Intelligence",
    status_nc: "In preparation · targeting Nature Communications",
    role_first: "First author",
    role_cofirst: "Co-first author",
    role_core: "Core contributor",
    role_second: "Second author",
    role_corr: "Corresponding author",
    authors_lhmg: "Yalun Wu et al.",
    authors_procura: "Yalun Wu et al.",
    authors_ftap: "Yalun Wu et al.",
    authors_neuro: "Yalun Wu et al.",
    abs_memoryagent: "A self-evolution framework for decentralized multi-agent systems across cooperative, mixed-motive, and adversarial settings. Each agent is paired with a MemoryAgent that manages memory outside its reasoning context and distills experience into reusable strategies and partner profiles, without updating model weights. It achieves the best normalized mean score (77.2) across 5 benchmarks and 6 configurations, 7.7 points above Self-Memory.",
    abs_veb: "In multi-step visual RAG, retrieving the right evidence does not mean the reasoning trajectory keeps using it. TAEC is a training-free framework that tracks unmet answer requirements as shared state to coordinate evidence admission, memory rendering, and visual detail. It reaches 66.8% mean accuracy across 12 settings, 4.5 pp above DAG.",
    abs_spec: "Agents often report unfinished tasks as complete, so runtimes increasingly rely on external checks. We study which executable success conditions such supervision needs. At 50% coverage, choosing conditions from another model's recorded failures raises strict pass rates by 18.5/19.3 pp over random selection for two models and lets fewer incomplete tasks through.",
    abs_lhmg:
      "Governs agent memory via versioned revision, risk gating, constrained decoding, and governed forgetting; conflicting-fact update accuracy 40% → 100%, cross-turn consistency up to +13 pp.",
    abs_procura:
      "Learns to fuse noisy speech and image-grounded evidence for product search.",
    abs_schema:
      "A unified schema interface and corpus for cross-task semantic parsing.",
    abs_pilot:
      "A trajectory-attitude benchmark for embodied flight from 708 real segments, evaluating 41 models. PILOT-SCORE combines regression accuracy, instruction following, and safety compliance.",
    abs_flyeval:
      "An evidence-driven two-stage protocol: deterministic checks over structured outputs, physics feasibility, and 20 FAA constraints, then interpretable aggregation with no LLM-as-judge. Identifies five systematic failure modes across 21 models.",
    abs_ftap:
      "Builds a high-fidelity FTAP temporal dataset for safety-critical long-horizon flight modeling, and separates physically feasible predictions from fluent but unsafe outputs.",
    abs_u2:
      "A comprehensive ultrasound understanding benchmark: 7,241 cases, 15 anatomical regions, and 8 clinical tasks spanning classification, detection, regression, and report generation.",
    abs_dolphin: "Technical report for an ultrasound multimodal LLM trained with post-training, instruction tuning, and UARPO reinforcement learning; reaches a U2-Score of 0.5835 on U2-BENCH.",
    abs_neuro:
      "A dual-track evaluation for neuropsychiatric foundation models, covering textual medical reasoning and brain-MRI visual understanding across 16 VLMs and 6 tasks.",
    abs_h2h:
      "A benchmark for LLM emotional companions over 4,800+ multi-turn scenarios, with an attachment-theory SAP safety module. Long-horizon memory and implicit-need understanding remain the main bottlenecks.",
    exp_title: "Experience",
    now: "present",
    exp_meituan_org: "Meituan",
    exp_meituan_meta: "LLM Algorithm Intern · multi-step visual RAG and business intelligence",
    exp_meituan_1: "Built three-route hybrid retrieval and multi-step visual RAG for production knowledge-base QA; optimized evidence selection, cross-step memory, and visual inputs, raising Recall@3 from 51.9% to 79%+.",
    exp_meituan_2: "Led 85+ controlled experiments on retrieval, inference settings, accumulated context, visual quality, and agent architectures, producing reusable configuration and tuning procedures.",
    exp_meituan_3: "Raised strict internal accuracy from 70.8% to 81.5% (+10.7 pp); cut P50 inference latency from 164s to 21s.",
    exp_meituan_4: "Extended to multimodal query rewriting and text-only QA, gaining 7/4 pp on business benchmarks; deployed query rewriting to production.",
    exp_huazhu_org: "H World Group (Huazhu)",
    exp_huazhu_meta: "Enterprise Agent Intern · intelligent catering supply chain",
    exp_huazhu_1: "Mapped procurement, replenishment, and menu-planning workflows into callable multi-agent modules under operational constraints.",
    exp_huazhu_2: "Consolidated store needs, prices, product constraints, and supplier policies; explored structured skill generation and validation, informing the scenarios and business rules of LFUSE (ICASSP 2027, under review).",
    exp_dolphin_org: "Dolphin Sound Medical Technology",
    exp_dolphin_meta: "LLM Evaluation Intern · vision-language model evaluation",
    exp_dolphin_1: "Led ultrasound VLM deployment and benchmarking; ran experiments, verified results, and standardized outputs for model comparisons.",
    exp_dolphin_2: "Contributed to U2-BENCH and DOLPHIN through reasoning-mode comparisons, cross-anatomy generalization analysis, and ablations.",
    exp_dolphin_3: "Designed prompts, structured data, and analyzed outputs; wrote experiment and failure-case reports.",
    exp_uav_org: "Beijing Feixiong Technology",
    exp_uav_meta: "Intern · UAV R&D",
    exp_uav_1: "Supported security testing and troubleshooting of UAV communication links.",
    skills_title: "Skills",
    skill_agent_h: "LLMs and agents",
    skill_agent_p: "Agentic workflows, agent harnesses, task decomposition, multi-agent collaboration, tool use, structured memory, and verifiable execution.",
    skill_rag_h: "RAG and context engineering",
    skill_rag_p: "Multi-step RAG, long-context management, evidence-chain optimization, compression, and multimodal RAG.",
    skill_eval_h: "Trustworthy evaluation",
    skill_eval_p: "Benchmarks, failure taxonomies, evidence-based scoring, model comparisons, and ablations; reproducible tests with schema constraints, runtime checks, and physical/safety rules.",
    skill_mm_h: "Multimodal and domain models",
    skill_mm_p: "VLMs, medical image understanding, embodied temporal modeling, visual RAG, and business-intelligence search.",
    contact_title: "Contact",
    contact_p: "I am happy to discuss agent memory, multi-step RAG, trustworthy evaluation, and safety-critical systems. Email is the fastest way to reach me.",
    hl_text: "FLY-EVAL++ (first author) was accepted at COLM 2026: an evidence-driven evaluation protocol for safety-constrained flight prediction, with no LLM-as-judge.",
    hl_paper: "Paper",
    status_preprint: "arXiv preprint",
    authors_schema: "Yalun Wu et al.",
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
  document.querySelectorAll(".lang-toggle").forEach((t) => {
    t.textContent = lang === "zh" ? "English" : "中文";
  });
  const cv = document.getElementById("cv-link");
  if (cv) cv.href = lang === "zh" ? "./assets/resume.pdf" : "./assets/resume_en.pdf";
  try { localStorage.setItem("site-lang", lang); } catch (e) {}
}

let saved = "en";
try { if (localStorage.getItem("site-lang") === "zh") saved = "zh"; } catch (e) {}
applyLang(saved);

document.querySelectorAll(".lang-toggle").forEach((t) => {
  t.addEventListener("click", () => {
    const next = document.documentElement.lang.startsWith("zh") ? "en" : "zh";
    applyLang(next);
  });
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
