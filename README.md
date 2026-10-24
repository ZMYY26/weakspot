# 错因档案 · Weakspot

刷题 App 只告诉你"这题错了"。这个工具管的是下一层：**为什么错、错在哪个认知环节、下次怎么不犯。**

- 记：把做错的题和**你当时的答案**记下来（这一步最值钱）
- 归：AI 把错误归类成 概念混淆 / 审题失误 / 记忆缺口 / 计算错误 / 干扰项识别失败
- 练：同一个考点换问法，干扰项直接来自你这次的错法
- 复：按遗忘曲线排复习，考前只补真正薄弱的考点

线上地址：https://zmyy26.github.io/weakspot/

## 为什么不做题库

题库这条路打不过粉笔、万题库——内容体量是几十万题的护城河，个人做不了。
这个产品刻意**不做题库**，只做刷题之外没人管的那一层：

> 你刷 1000 道题，系统只会记录"你错了 200 道"；真正决定下次对错的是
> "这 200 道里，有多少是同一个错因"。错因档案就是回答这个问题的。

所以它可以和任何刷题 App 共存：错题顺手截个图、粘一段文字进来就行。

## 本地运行

没有构建步骤，任意静态服务器即可：

```bash
npx --yes serve .
```

> Service Worker 只在 `https://` 或 `localhost` 下生效。

## 与 A 版本共用一套引擎

这个仓库是 **B 版本（错因档案）**。A 版本（面试复盘 / Interview Loop）在 `ZMYY26/ZM`。

两个仓库的引擎完全一致，差异**只在 `product.js`**：品牌、导航、术语、表单文案、
示例数据、AI 提示词都在这里。换一个 `product.js` 就是另一个垂直场景。

```
product.js          ← 唯一的场景差异层
app.js              ← 编辑器、复习调度、统计、分享卡片
image-store.js      ← 图片 IndexedDB
account.js          ← 账号（Supabase Auth REST，零 SDK）
cloud-sync.js       ← 云端同步（离线优先、LWW、墓碑）
supabase/schema.sql ← 云端表结构与 RLS
tests/              ← jsdom 场景测试 + 内存版 Supabase
```

## 账号与云端同步（可选）

不填配置就是纯本地应用。要启用：

1. [supabase.com](https://supabase.com) 建项目（免费额度够个人用）
2. Settings → API 复制 URL 和 anon key，填进 `cloud-config.js`
3. SQL Editor 执行 `supabase/schema.sql`
4. 个人自用可在 Authentication 里关掉 "Confirm email"

`anon` key 是公开值，数据隔离靠 `schema.sql` 里的 RLS 策略；不要把 `service_role` key 放前端。

## 改代码时的约定

1. **改静态资源要同步版本号**：`index.html` 的 `?v=N` 与 `sw.js` 的 `CACHE_NAME` 必须一致。
2. **`vendor/` 带 SRI**：`integrity` 按文件字节算，所以 `.gitattributes` 把 `vendor/**` 标成
   `-text`；否则 Git 在 Windows 上把 LF 转 CRLF，哈希失效，浏览器会拒绝加载脚本。
3. **自检**：`node scripts/check.mjs`。
4. **测试**：`npm i -D jsdom fake-indexeddb` 后 `node tests/sync-test.mjs`。

## 已知遗留

- `app.js` 仍是单体脚本，内联 `onclick` 让 CSP 无法启用
- 桌面端还没做响应式（固定 480px 列宽）
- 详情页悬浮的 + 按钮会遮挡内容
