```jsx
import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Foundation",
    subtitle: "Weeks 1–2",
    color: "#C8A96E",
    icon: "◈",
    tagline: "Build your brain & your base",
    steps: [
      {
        title: "Understand What You're Actually Selling",
        icon: "🎯",
        content: `A Geopolitical Intelligence Newsletter is NOT a news channel. You are NOT reporting what happened. You are explaining WHY it happened, WHAT it means for money/business/people, and WHAT will happen next.

Think of yourself as a translator between:
→ Complex global events (wars, sanctions, elections, currency collapses)
→ And people who need to make decisions (investors, startup founders, business owners, students)

Real example: When Russia invaded Ukraine in 2022, everyone reported the news. Intelligence newsletters explained: "Here's what happens to wheat prices, here's which Indian companies are exposed to Russian oil, here's what this means for the dollar."

THAT is the product you are building. Insight, not information.`,
      },
      {
        title: "Pick Your Specific Niche (Critical Step)",
        icon: "🔬",
        content: `The biggest mistake beginners make: writing about "everything geopolitical." That is too broad. Nobody subscribes to vague.

You need to narrow down to ONE intersection. Here are combinations that work:

• India + Global Trade Routes (great for Indian exporters/importers)
• South Asia Political Risk (for investors in India/Pakistan/Bangladesh)
• BRICS & De-dollarization (huge topic, growing audience)
• China-India Relations & Business Impact (very timely)
• Energy Geopolitics (oil, gas, green energy — always relevant)
• Africa Emerging Markets (massively underserved, growing fast)

How to choose YOUR niche:
1. What do you already know deeply? Start there.
2. What can you read about for 3 hours and feel energized, not tired?
3. Is there an existing audience for it? (Check if subreddits, Twitter accounts, YouTube channels exist around it)

For you, given your BCA background + finance interest: "BRICS, De-dollarization & What It Means for Indian Business" could be a powerful niche. It combines tech, finance, and geopolitics naturally.`,
      },
      {
        title: "Set Up Your Free Publishing Platform",
        icon: "🛠️",
        content: `You need zero money for this. Here's exactly what to use:

PLATFORM: Substack (substack.com)
→ Go to substack.com → Click "Start writing" → Sign up free
→ Create your publication name (e.g., "The India Dispatch" or "Meridian Brief")
→ Write a one-line description of what you cover
→ Set up your profile photo and bio

WHY SUBSTACK?
• Free to publish, free to collect subscribers
• Built-in email delivery (subscribers get your newsletter in inbox)
• You can later add paid subscriptions (Substack takes 10% only)
• Readers can discover you inside Substack's ecosystem

YOUR PROFILE BIO should say:
"I analyze [your niche] and explain what it means for [your audience]. Published every [day]. Read by [type of people]."

Example: "I track BRICS economic moves and explain what they mean for Indian investors and entrepreneurs. Published every Wednesday."

Don't overthink the name. You can change it later. Just start.`,
      },
      {
        title: "Build Your Daily Reading System (Free)",
        icon: "📡",
        content: `To write good intelligence analysis, you need good inputs. Here's your free daily reading list:

NEWS SOURCES (Free):
• Reuters (reuters.com) — most factual, least bias
• Al Jazeera (aljazeera.com) — good for Global South coverage
• The Wire (thewire.in) — India geopolitics
• Foreign Policy (foreignpolicy.com) — some free articles
• Mint / Business Standard — India business impact

NEWSLETTERS TO STUDY (read them to learn the format):
• Finimize (free tier) — see how they simplify complex topics
• The Dispatch — tone and structure
• Geopolitical Futures (study their structure even if paywalled)

TWITTER/X ACCOUNTS TO FOLLOW:
• @Kaushik_Basu (former World Bank chief economist)
• @CFR_org (Council on Foreign Relations)
• @RALJeremy (geopolitics analyst)
• Search "India geopolitics" and follow active accounts

YOUR DAILY ROUTINE (6+ hours):
• 7–9 AM: Read news (Reuters, Al Jazeera, The Wire)
• 9–11 AM: Go deeper on 1 story — find 3–5 sources on same topic
• 11 AM–1 PM: Write your analysis draft
• 2–4 PM: Edit, research gaps, add data
• 4–6 PM: LinkedIn/Twitter engagement & audience building
• Evening: Read 1 long-form article or chapter for depth`,
      },
    ],
  },
  {
    id: 2,
    title: "Content Creation",
    subtitle: "Weeks 3–5",
    color: "#6E9EC8",
    icon: "◉",
    tagline: "Learn to write intelligence analysis",
    steps: [
      {
        title: "The Exact Format of an Intelligence Newsletter",
        icon: "📝",
        content: `Every great intelligence newsletter follows a structure. Here is the formula:

━━━━━━━━━━━━━━━━━━━━━━━
HEADLINE: Make a bold claim or ask a provocative question
Example: "Why Saudi Arabia's yuan deal is India's hidden opportunity"

HOOK (2–3 sentences): The one thing that happened this week that matters
Example: "Saudi Aramco just signed a $3.6B deal settling oil payments in Chinese yuan. The dollar didn't move. Most people missed what that means."

CONTEXT (1 paragraph): Why this has been building for years
Example: "Since 2022, BRICS nations have been quietly..."

THE ANALYSIS (2–3 paragraphs): YOUR original insight
• What is really happening beneath the surface?
• What does history tell us about similar moments?
• What are the 2nd and 3rd order consequences?

THE IMPLICATION (1 paragraph): So what does this mean?
• For investors? For Indian exporters? For policy?
• Be specific. Vague = useless.

THE CALL (1 sentence): What to watch next
Example: "Watch whether India's next trade deal with UAE is denominated in rupees — that's the signal."
━━━━━━━━━━━━━━━━━━━━━━━

LENGTH: 400–700 words. Not more. People read on phones.
FREQUENCY: Start with once per week. Consistency > quantity.`,
      },
      {
        title: "Write Your First 4 Issues (Before You Launch)",
        icon: "✍️",
        content: `Do NOT launch with zero content. Write 4 issues first. Here's why:
→ If someone discovers you and sees only 1 post, they leave.
→ If they see 4 thoughtful posts, they subscribe.

How to write your first 4 issues:

ISSUE 1: Your "Why This Newsletter Exists" post
→ What gap does your newsletter fill?
→ Who are you, and why should they trust your analysis?
→ What will readers gain each week?

ISSUE 2–4: Pick 3 recent events in your niche and analyze them.

WRITING TIPS FOR BEGINNERS:
• Write like you're explaining to a smart friend, not writing an essay
• Avoid phrases like "It is pertinent to note that..." — too academic
• Use short paragraphs. 2–3 sentences max per paragraph.
• Every paragraph should earn its place. If it doesn't add insight, cut it.
• Read your draft out loud. If you stumble, rewrite it.
• Use Claude (me!) to review your drafts and suggest improvements

EXAMPLE PROMPT FOR ME:
"Here is my newsletter draft. Review it for: clarity, is the analysis sharp enough, any logical gaps, and suggest a better headline."

Your goal: 4 published posts on Substack before you tell anyone it exists.`,
      },
      {
        title: "How to Research Like an Analyst (Not a Student)",
        icon: "🔍",
        content: `This is the skill that separates good newsletters from great ones.

THE 3-SOURCE RULE:
Never form an opinion from 1 article. For every analysis, find:
1. A Western/mainstream source (Reuters, FT, Bloomberg free)
2. A non-Western source (Al Jazeera, CGTN, RT — even biased sources reveal intent)
3. A data source (World Bank data.worldbank.org, IMF imf.org, Statista free tier)

HOW TO GO DEEPER FOR FREE:
• Google Scholar (scholar.google.com) — find academic papers on geopolitical topics
• JSTOR free access — 100 free articles/month
• Council on Foreign Relations (cfr.org) — deep background essays
• RAND Corporation (rand.org) — detailed policy research, free
• Brookings Institution (brookings.edu) — free analysis

THE QUESTION FRAMEWORK:
When analyzing any event, ask yourself:
1. WHO benefits from this? (Follow incentives)
2. WHO loses from this? (They will fight back)
3. WHAT does history say about similar situations?
4. WHAT does the data show? (Trade flows, debt levels, military spending)
5. WHAT will the losers do next? (This is your prediction)

BUILDING YOUR OWN DATABASE:
Keep a simple Google Sheet with columns:
Country | Event | Date | Economic Impact | Political Impact | What to Watch
This becomes your memory and your competitive advantage over time.`,
      },
    ],
  },
  {
    id: 3,
    title: "Audience Building",
    subtitle: "Weeks 6–10",
    color: "#6EC87A",
    icon: "◎",
    tagline: "Get your first 200 real subscribers",
    steps: [
      {
        title: "LinkedIn Strategy (Your #1 Free Channel)",
        icon: "💼",
        content: `LinkedIn is the single best free platform for a geopolitical intelligence newsletter. Here's why: your audience (investors, founders, professionals, policy people) LIVES there.

YOUR LINKEDIN PROFILE (set this up first):
• Headline: "Geopolitical Analyst | Writing [Newsletter Name] — Weekly intelligence on [niche]"
• About section: Your newsletter's value proposition
• Featured section: Link to your Substack

THE CONTENT STRATEGY (post 5x per week):

FORMAT 1 — THE INSIGHT POST (3x/week):
Take ONE geopolitical event. Write a 150–200 word LinkedIn post that gives 1 sharp insight. End with: "Full analysis in this week's [Newsletter Name] → link in comments"

FORMAT 2 — THE THREAD (1x/week):
"5 things most people don't understand about [topic]"
Each point is 1–2 sentences. These get shared heavily.

FORMAT 3 — THE QUESTION (1x/week):
Ask your audience a genuine question about a geopolitical issue.
"Do you think India should join BRICS's new payment system? Here's my take..."
Comments = engagement = algorithm boost.

GROWTH HACK (free):
→ Comment thoughtfully on posts by large geopolitics/finance accounts.
→ Not "Great post!" — write a 2–3 sentence insight that adds value.
→ People click your profile when you say something smart.
→ Do this 10 times per day for 30 days. Watch followers grow.`,
      },
      {
        title: "Twitter/X Strategy",
        icon: "🐦",
        content: `Twitter is where geopolitical conversation happens in real time. It's your second channel.

ACCOUNT SETUP:
• Handle: @YourName or @NewsletterName
• Bio: "Geopolitical analyst. Weekly newsletter on [niche]. [Substack link]"

WHAT TO TWEET:

TYPE 1 — LIVE REACTIONS (when news breaks):
"Breaking: [Event]. Here's what this actually means: [your 1-sentence insight]"
These get traction because they're timely.

TYPE 2 — DATA TWEETS:
Share a chart or statistic with your interpretation.
"India's trade with Russia has grown 400% since 2022. [image] Most coverage misses WHY. Thread 🧵"

TYPE 3 — NEWSLETTER PROMOTION:
"New issue of [newsletter] is out. This week: [topic]. [link]"
Post when you publish. Pin your best issue.

ENGAGEMENT RULE:
Spend 30 minutes every day replying to tweets from accounts with 10K–100K followers in your niche. Smart replies get you noticed by their audience.

FREE TOOL: Use TweetDeck (free) to monitor keywords like "BRICS", "India sanctions", "de-dollarization" in real time. Jump into conversations when they're hot.`,
      },
      {
        title: "Your First 200 Subscribers Checklist",
        icon: "🎯",
        content: `Here is exactly how to get your first 200 subscribers with ₹0:

WEEK 1 — YOUR INNER CIRCLE (Target: 20 subscribers)
→ Message 30 people personally (WhatsApp/LinkedIn): friends, classmates, professors
→ Don't mass-spam. Write individual messages:
  "Hey [name], I just started a newsletter analyzing [topic]. I think you'd find it useful given your interest in [X]. Would love your honest feedback as an early reader."
→ Most will subscribe if asked personally. Expect 20–25 from 30 asks.

WEEK 2–3 — REDDIT STRATEGY (Target: +30 subscribers)
→ Find subreddits: r/geopolitics, r/india, r/Economics, r/IndiaSpeaks
→ Post valuable analysis as regular Reddit comments/posts (NOT spam)
→ Add to your profile: "I write [newsletter] if you want deeper analysis"
→ Never directly promote. Just be the smartest person in the thread.

WEEK 4–6 — LINKEDIN COMPOUND GROWTH (Target: +100 subscribers)
→ Your consistent posting starts paying off here
→ Every post ends with a soft CTA: "Subscribe to [newsletter] for weekly analysis"
→ One viral post (5K+ views) can bring 50–100 subscribers overnight

WEEK 7–10 — CROSS-PROMOTION (Target: +50 subscribers)
→ Find 3 other small newsletters in adjacent niches (finance, India business)
→ Propose a "shoutout swap" — you mention them, they mention you
→ Free and very effective for newsletters under 500 subscribers`,
      },
    ],
  },
  {
    id: 4,
    title: "Monetization",
    subtitle: "Month 3 onwards",
    color: "#C86E6E",
    icon: "◆",
    tagline: "Turn readers into revenue",
    steps: [
      {
        title: "When & How to Introduce Paid Subscriptions",
        icon: "💰",
        content: `The rule: Do NOT monetize until you have 200+ engaged subscribers.
Why? Because you need proof that people value your work before asking for money. 

SUBSTACK PAID TIER SETUP:
→ Go to your Substack dashboard → Settings → Payments
→ Connect Stripe (free, available in India with Indian bank account)
→ Set pricing: ₹299/month or ₹2,499/year (or $5/$49 for international)
→ Decide what's free vs paid:

FREE (to keep growing):
• Weekly main analysis post
• Breaking news commentary

PAID (your revenue):
• Deep-dive reports (2,000+ word special issues)
• Monthly "What I'm Watching" — your forward-looking analysis
• Access to your Google Sheet database/tracker
• Q&A session (monthly Zoom call with paid subscribers)

YOUR FIRST PAID LAUNCH EMAIL:
Subject: "Something is changing with [Newsletter Name]"
→ Thank your free subscribers
→ Explain what paid tier offers
→ Offer a launch discount: "First 50 subscribers get 30% off forever"
→ Give a 48-hour deadline (creates urgency)

REALISTIC EXPECTATION:
If you have 300 subscribers and 5% convert to paid at ₹299/mo:
= 15 paid × ₹299 = ₹4,485/month
At 1,000 subscribers and 8% conversion:
= 80 paid × ₹299 = ₹23,920/month`,
      },
      {
        title: "Other Revenue Streams (Beyond Subscriptions)",
        icon: "📈",
        content: `Subscriptions are just the beginning. Here's what opens up:

1. SPONSORED ISSUES (₹5,000–₹25,000 per issue)
Companies that sell to your audience (EdTech, investment platforms, fintech apps) pay to be featured in your newsletter. At 1,000 subscribers, you can start charging.
→ Reach out directly to companies in your niche: "My audience is [X professionals], here's my open rate, here's what a sponsorship looks like."

2. CONSULTING / ADVISORY (₹5,000–₹50,000 per project)
Your newsletter is a proof of expertise. Companies, startups, and NGOs will hire you for:
• Market entry research reports
• Country risk assessments
• Competitor geopolitical analysis
This is high-ticket and comes naturally as you build authority.

3. CUSTOM RESEARCH REPORTS (₹2,000–₹15,000 each)
Write one-off deep research reports for businesses on specific topics.
Example: "India-Middle East trade corridor: Risks & Opportunities 2025"
Sell on Gumroad (free to set up) or directly.

4. SPEAKING / WEBINARS (₹5,000–₹30,000 per session)
Universities, corporate HR teams, and industry associations pay for expert speakers. Your newsletter = your speaking credential.

5. COURSES / WORKSHOPS (₹999–₹4,999)
Teach others how to understand geopolitics. Package your knowledge into a structured course on Teachable or Graphy (both have free tiers).`,
      },
      {
        title: "Your 90-Day Milestone Targets",
        icon: "🏁",
        content: `Here's what success looks like at each milestone:

DAY 1–14 (Foundation):
✓ Substack account created with professional bio
✓ Niche clearly defined and written down
✓ Daily reading routine started
✓ 4 draft issues written
✓ LinkedIn and Twitter profiles optimized

DAY 15–30 (Launch):
✓ First 4 issues published on Substack
✓ Personal outreach done — 20+ subscribers
✓ Posting daily on LinkedIn
✓ First Reddit comments posted
✓ Milestone: 50 subscribers

DAY 31–60 (Growth):
✓ 8 total issues published (consistent weekly)
✓ LinkedIn following growing (aim for +100 followers)
✓ First reader feedback collected and used
✓ Connected with 2–3 other newsletter writers
✓ Milestone: 150–200 subscribers

DAY 61–90 (Monetization Prep):
✓ Quality of analysis noticeably improving
✓ 1–2 pieces have gone "small viral" on LinkedIn/Twitter
✓ First consulting inquiry OR speaking ask received
✓ Paid tier launched on Substack
✓ Milestone: 200–300 subscribers, first ₹ earned

REMEMBER: Most people quit at Day 20–30 because growth feels slow.
The people who reach Day 90 almost always succeed. The gap is just consistency.`,
      },
    ],
  },
];

export default function App() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeStep, setActiveStep] = useState(null);

  const phase = phases[activePhase];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080810",
      color: "#D8D8D0",
      fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
    }}>
      {/* Top bar */}
      <div style={{
        background: "#0C0C18",
        borderBottom: "1px solid #1A1A28",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.3em", color: "#555", fontFamily: "monospace", marginBottom: 4 }}>
            MALAY'S COMPLETE ROADMAP
          </div>
          <div style={{ fontSize: 18, color: "#C8A96E", letterSpacing: "0.05em" }}>
            Geopolitical Intelligence Newsletter
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {phases.map((p, i) => (
            <button key={i} onClick={() => { setActivePhase(i); setActiveStep(null); }} style={{
              padding: "6px 14px",
              borderRadius: 4,
              border: activePhase === i ? `1px solid ${p.color}` : "1px solid #222",
              background: activePhase === i ? `${p.color}15` : "transparent",
              color: activePhase === i ? p.color : "#555",
              cursor: "pointer",
              fontSize: 12,
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              transition: "all 0.2s",
            }}>
              {p.icon} {p.title}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>
        {/* Phase header */}
        <div style={{
          marginBottom: 36,
          padding: "28px 32px",
          background: `linear-gradient(135deg, ${phase.color}12 0%, #0C0C1A 100%)`,
          border: `1px solid ${phase.color}30`,
          borderRadius: 8,
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -20, right: -20,
            fontSize: 120, color: `${phase.color}08`,
            fontFamily: "monospace", lineHeight: 1,
          }}>
            {phase.id}
          </div>
          <div style={{ fontSize: 11, fontFamily: "monospace", color: phase.color, letterSpacing: "0.2em", marginBottom: 8 }}>
            PHASE {phase.id} · {phase.subtitle}
          </div>
          <h2 style={{ margin: "0 0 8px", fontSize: 26, fontWeight: 400, color: "#F0EDE0", letterSpacing: "-0.01em" }}>
            {phase.t
