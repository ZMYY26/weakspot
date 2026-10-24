/* ========================================
 * 产品变体层 · B 版本：错因档案（Weakspot）
 *
 * 定位：考证 / 考研人群的「错因外挂」——不做题库（打不过粉笔、万题库），
 * 只做刷题之外没人管的那一层：为什么错、错在哪个认知环节、下次怎么不犯。
 *
 * 与 A 版本（面试复盘）共用同一套引擎，差异全部在这个文件里。
 * ======================================== */
window.PRODUCT = {
    id: 'weakspot',
    brand: '错因档案',
    brandEn: 'Weakspot',
    title: '错因档案 · 考前只补真正薄弱的地方',
    tagline: '把做错的题变成一张错因图谱，考前只补真正薄弱的地方',
    description: '记录刷题时踩的坑，AI 帮你归类错因（概念混淆 / 审题 / 记忆 / 计算），按遗忘曲线安排复习，考前只补最薄弱的考点。',
    shortName: '错因',
    themeColor: '#0071e3',
    background: '#f5f5f7',

    // ---------- 导航与页头 ----------
    nav: {
        pageHome: '错因库',
        pageCategory: '科目',
        pageKnowledge: '考点卡',
        pagePractice: '同类题',
        pageReview: '复习',
        pageStats: '图谱',
    },
    status: { pending: '待复习', tomorrow: '明日复习', reviewing: '复习中', mastered: '已掌握' },
    detail: { desc: '题干', wrong: '我的答案', right: '正确答案', note: '错因分析' },

    titles: {
        pageHome: '错因库',
        pageCategory: '按科目',
        pageReview: '复习计划',
        pageEdit: '记一道错题',
        pageEditExisting: '修改这道错题',
        pageDetail: '错因详情',
        pageKnowledge: '考点卡',
        pagePractice: '同类题',
        pageStats: '薄弱图谱',
    },

    // ---------- 表单与统计的静态文案 ----------
    fields: {
        statTotal: '记录',
        statPending: '待复习',
        statMastered: '已吃透',
        ringLabel: '掌握率',
        fTitle: '题目 / 考点 *',
        fLang: '科目 *',
        fDesc: '题干摘录',
        fWrong: '我的答案 *',
        fRight: '正确答案',
        fTags: '错因标签（逗号分隔）',
        fNote: '错因分析',
        fSource: '来源',
    },
    placeholders: {
        inputTitle: '例如：无权代理的法律效力',
        inputDesc: '把题干和你的判断写下来，越具体越好',
        inputWrongCode: '你当时选了什么？为什么选它？（这一步最值钱）',
        inputRightCode: '正确答案与依据',
        inputTags: '例如: 概念混淆, 表见代理',
        inputNote: '错在哪个环节：没记住 / 记混了 / 审题漏了限制条件',
    },
    allLabel: '全部科目',
    langOptions: [
        { v: '教资·综合素质', t: '教资·综合素质' },
        { v: '教资·教育知识', t: '教资·教育知识与能力' },
        { v: '法考·民法', t: '法考·民法' },
        { v: '法考·刑法', t: '法考·刑法' },
        { v: '考研政治', t: '考研政治' },
        { v: '通用', t: '备考通用' },
    ],
    sources: ['真题', '模拟题', '章节练习', '冲刺卷', '其他'],
    tagSuggestions: ['概念混淆', '审题失误', '记忆缺口', '计算错误', '时间不够', '干扰项'],

    // ---------- 首页文案 ----------
    hero: {
        empty: '记下第一道错题，开始建档案',
        allMastered: '全部吃透，可以上考场了',
        some: (n, t) => `已吃透 ${n}/${t} 道`,
        none: (t) => `${t} 道待复习，先从最近错的那道开始`,
    },
    empty: {
        title: '还没有错因记录',
        hint: '把最近做错的一道题记下来，AI 会帮你归类错因',
        action: '记第一道错题',
    },
    today: {
        title: '今天要复习',
        unit: '道',
        allDone: '今天的复习清单清空了',
        cta: '开始同类题',
        ctaHint: '换问法、只考同一个考点',
    },
    actions: { variant: '同类变式', diagnosis: '错因归类', chat: '问老师', share: '分享错因' },

    // 考证人群吃打卡/积分这套，游戏化保留；答案是文本，用换行渲染
    features: { gamification: true, answersAsProse: true },

    // ---------- 示例数据 ----------
    seed: [
        {
            id: 'seed-w1',
            title: '教师职业道德的核心是什么',
            lang: '教资·综合素质',
            desc: '2025 上半年 综合素质 单选第 12 题',
            wrongCode: '我选的是「爱国守法」。\n理由：觉得爱国守法是每个公民的义务，层级最高。',
            rightCode: '正确答案：关爱学生。\n依据：教师职业道德规范六条里「核心」和「灵魂」是易混点——\n1. 核心：关爱学生\n2. 灵魂：爱岗敬业\n3. 内在要求：为人师表\n把「核心 / 灵魂 / 要求」三个提法对应的条目做成一张小卡背下来，不要靠语感。',
            tags: ['概念混淆', '教资'],
            note: '把"核心/灵魂/要求"三个提法混了。这类题不是理解问题，是记忆锚点没建好。',
            source: '真题',
            imageId: null,
            status: 'pending',
            reviewCount: 0,
            lastReviewAt: Date.now() - 3 * 86400000,
            createdAt: Date.now() - 3 * 86400000,
            updatedAt: Date.now() - 3 * 86400000,
        },
        {
            id: 'seed-w2',
            title: '无权代理的法律效力',
            lang: '法考·民法',
            desc: '民法真题 单选，考表见代理与狭义无权代理的区别',
            wrongCode: '我选的是「代理行为无效」。\n理由：没有代理权，那行为当然不算数。',
            rightCode: '正确答案：效力待定。\n要点：\n1. 狭义无权代理 = 效力待定，被代理人追认则有效，拒绝则对被代理人不发生效力。\n2. 表见代理 = 相对人有理由相信有代理权 → 直接有效，被代理人承担后果后可向无权代理人追偿。\n3. 我漏掉的判断步骤：先看是否构成表见代理，再谈效力待定。',
            tags: ['概念混淆', '效力待定'],
            note: '看到"没有代理权"就直接判无效，跳过了"表见代理"这一层。做题要先分类型再定效力。',
            source: '真题',
            imageId: null,
            status: 'pending',
            reviewCount: 2,
            lastReviewAt: Date.now() - 86400000,
            createdAt: Date.now() - 9 * 86400000,
            updatedAt: Date.now() - 86400000,
        },
        {
            id: 'seed-w3',
            title: '实践是检验真理的唯一标准',
            lang: '考研政治',
            desc: '肖八 多选，错选了「理性认识」',
            wrongCode: '多选题我选了「理性认识」，漏了「实践」。',
            rightCode: '正确答案：实践。\n记忆锚点：真理的检验标准必须来自主观之外——实践具有直接现实性，能把主观认识与客观对象联系起来。理性认识仍属主观范畴，不能充当标准。',
            tags: ['记忆缺口', '考研政治'],
            note: '错在概念层次：把"认识的阶段"和"检验的标准"混成一个问题。',
            source: '模拟题',
            imageId: null,
            status: 'mastered',
            reviewCount: 4,
            lastReviewAt: Date.now() - 2 * 3600000,
            createdAt: Date.now() - 20 * 86400000,
            updatedAt: Date.now() - 2 * 3600000,
        },
    ],

    // ---------- AI 提示词 ----------
    ai: {
        systemVariant: '你是一位资格证/考研培训老师，擅长针对同一考点换问法出题，专门抓学生的易错点。只输出严格 JSON。',
        systemDiagnosis: '你是一位考证培训老师，擅长判断学生错在哪一个认知环节，并给出能背下来的锚点。只输出严格 JSON。',
        systemChat: '你是考证/考研的陪学老师，用简体中文 Markdown 回答，控制在 250 字以内，重点给「怎么记住、怎么别再错」。',
        systemAutotag: '你是考证培训老师，擅长给错题归纳科目、错因类型与考点。只输出合法 JSON。',

        /** 同类变式：同一个考点，换问法 */
        variantPrompt: (x) => `# 角色
你是一位资格证 / 考研培训老师。学生刚在这道题上栽了，你要出 ${x.count} 道**同考点的变式题**：换问法、换情境，但只考同一个知识点。

# 任务
生成 ${x.count} 道四选一选择题，干扰项必须来自学生真实的错法（见下面的「我的答案」），逼他把这次的错因纠正过来。

# 原始记录
- 题目：${x.title}
- 科目：${x.langName}
- 错因标签：${x.tags}
- 题干摘录：${x.desc}
- 我的答案：
\`\`\`
${x.wrongCode}
\`\`\`
- 正确答案与依据：
\`\`\`
${x.rightCode}
\`\`\`
- 错因分析：${x.note}

# 出题原则
## 1. 变式角度（整组覆盖多个）
- **正向复述**：同一考点的标准问法（检验是否记住）
- **反向设问**：问「下列哪项不符合」，制造审题陷阱
- **情境迁移**：换一个案例场景，仍然只考这个考点
- **易混对比**：把这个考点与最容易混淆的另一个概念并排考
- **干扰项识别**：4 个选项里只有一个正确，其余必须是学生最容易选错的那类

## 2. 难度梯度
- difficulty=1：直接考定义 / 层级 / 归属
- difficulty=2：需要一步判断或结合案例
- difficulty=3：多概念辨析，含审题陷阱

## 3. 选项与题干
- 4 个选项长度相近、句式一致，禁止「以上都对 / 都错」
- 干扰项必须对应学生这次的错法或同类常见误区
- 题干用考试口吻，简洁，不超过 80 字

# 输出格式（必须严格遵守）
只输出一个 JSON 对象，禁止解释性文字，禁止代码块包裹：

{
  "questions": [
    {
      "type": "choice",
      "topic": "考点名，如：教师职业道德的核心",
      "difficulty": 1,
      "question": "题干",
      "options": ["选项A", "选项B", "选项C", "选项D"],
      "answer": 0,
      "explanation": "一句话点明考点与易错点",
      "mnemonic": "一句话记忆锚点，考场能默念"
    }
  ]
}

约束：恰好 ${x.count} 道；options 恰好 4 个字符串；answer 是 0~3 整数；difficulty 为 1/2/3 且至少覆盖 2 档；explanation ≤ 60 字；mnemonic ≤ 30 字`,

        /** 错因归类：错在哪个认知环节、怎么记住 */
        diagnosisPrompt: (x) => `# 角色
你是一位资格证 / 考研培训老师，擅长判断学生错在哪一个认知环节。

# 任务
直接给结论，禁止复述题目。要判断这次错误属于哪一类：概念混淆 / 审题失误 / 记忆缺口 / 计算错误 / 时间不够 / 干扰项识别失败，并给出可执行的补救办法。

# 记录
- 题目：${x.title}
- 科目：${x.langName}
- 错因标签：${x.tags}
- 题干摘录：${x.desc}
- 我的答案：
\`\`\`
${x.wrongCode}
\`\`\`
- 正确答案与依据：
\`\`\`
${x.rightCode}
\`\`\`

# 输出要求
只输出单个严格 JSON 对象，不要任何其他内容：

{
  "summary": "一句话概括这次错在哪（≤25字）",
  "cause": "归类到具体错因，并解释为什么是这个归类（2-4 句，≤120字）",
  "correctCode": "这道题的正确答案 + 依据，分点写（纯文本，不要代码块标记）",
  "explanation": "下次遇到同类题的判断动作是什么（≤80字）",
  "tips": ["记忆锚点1", "记忆锚点2", "记忆锚点3"],
  "lang": "text"
}

约束：
- summary / explanation 不得照抄题目或原答案
- tips 三条，每条 ≤20 字，要能直接背
- correctCode 用「1. 2. 3.」分点，禁止嵌套 JSON`,

        autoTagPrompt: (x) => `请分析这道考证 / 考研错题，返回严格 JSON（不要多余文字）：
{
  "tags": ["错因标签1", "错因标签2", "错因标签3"],
  "title": "简洁题目标题（仅当原标题为空时返回，否则返回空字符串）",
  "reason": "一句话错因",
  "category": "概念混淆/审题失误/记忆缺口/计算错误/时间不够 之一"
}
已有标签（避免重复）：${(x.tags || []).join('、') || '无'}
现有标题：${x.title || '（空）'}
题干摘录：${x.desc || '（无）'}
我的答案：${x.wrongCode || '（无）'}`,
    },
};
