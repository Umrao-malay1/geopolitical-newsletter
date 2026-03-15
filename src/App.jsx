
import { useState } from "react";

const phases = [
  {
    id: 1,
    title: "Foundation",
    subtitle: "Weeks 1-2",
    color: "#C8A96E",
    icon: "◈",
    tagline: "Build your brain and your base",
    steps: [
      {
        title: "Understand What You Are Actually Selling",
        icon: "🎯",
        content: `A Geopolitical Intelligence Newsletter is NOT a news channel. You are NOT reporting what happened. You are explaining WHY it happened, WHAT it means for money and business, and WHAT will happen next.

Think of yourself as a translator between:
→ Complex global events (wars, sanctions, elections, currency collapses)
→ And people who need to make decisions (investors, startup founders, business owners, students)

Real example: When Russia invaded Ukraine in 2022, everyone reported the news. Intelligence newsletters explained what happens to wheat prices, which Indian companies are exposed to Russian oil, and what this means for the dollar.

THAT is the product you are building. Insight, not information.`,
      },
      {
        title: "Pick Your Specific Niche (Critical Step)",
        icon: "🔬",
        content: `The biggest mistake beginners make: writing about everything geopolitical. That is too broad. Nobody subscribes to vague.

You need to narrow down to ONE intersection. Here are combinations that work:

• India and Global Trade Routes (great for Indian exporters/importers)
• South Asia Political Risk (for investors in India/Pakistan/Bangladesh)
• BRICS and De-dollarization (huge topic, growing audience)
• China-India Relations and Business Impact (very timely)
• Energy Geopolitics (oil, gas, green energy - always relevant)
• Africa Emerging Markets (massively underserved, growing fast)

HOW TO CHOOSE YOUR NICHE:
1. What do you already know deeply? Start there.
2. What can you read about for 3 hours and feel energized, not tired?
3. Is there an existing audience for it?

For you, given your BCA background and finance interest: BRICS, De-dollarization and What It Means for Indian Business could be a powerful niche.`,
      },
      {
        title: "Set Up Your Free Publishing Platform",
        icon: "🛠️",
        content: `You need zero money for this. Here is exactly what to use:

PLATFORM: Substack (substack.com)
→ Go to substack.com and click Start writing
→ Sign up free and create your publication name
→ Write a one-line description of what you cover
→ Set up your profile photo and bio

WHY SUBSTACK?
• Free to publish, free to collect subscribers
• Built-in email delivery to subscribers
• You can later add paid subscriptions (Substack takes 10% only)
• Readers can discover you inside Substack ecosystem

YOUR PROFILE BIO should say:
I analyze [your niche] and explain what it means for [your audience]. Published every [day].

Example: I track BRICS economic moves and explain what they mean for Indian investors and entrepreneurs. Published every Wednesday.`,
      },
      {
        title: "Build Your Daily Reading System (Free)",
        icon: "📡",
        content: `To write good intelligence analysis, you need good inputs. Here is your free daily reading list:

NEWS SOURCES (Free):
• Reuters (reuters.com) - most factual, least bias
• Al Jazeera (aljazeera.com) - good for Global South coverage
• The Wire (thewire.in) - India geopolitics
• Mint and Business Standard - India business impact

YOUR DAILY ROUTINE (6+ hours):
• 7-9 AM: Read news (Reuters, Al Jazeera, The Wire)
• 9-11 AM: Go deeper on 1 story - find 3-5 sources on same topic
• 11 AM-1 PM: Write your analysis draft
• 2-4 PM: Edit, research gaps, add data
• 4-6 PM: LinkedIn and Twitter engagement and audience building
• Evening: Read 1 long-form article or chapter for depth`,
      },
    ],
  },
  {
    id: 2,
    title: "Content Creation",
    subtitle: "Weeks 3-5",
    color: "#6E9EC8",
    icon: "◉",
    tagline: "Learn to write intelligence analysis",
    steps: [
      {
        title: "The Exact Format of an Intelligence Newsletter",
        icon: "📝",
        content: `Every great intelligence newsletter follows a structure. Here is the formula:

HEADLINE: Make a bold claim or ask a provocative question
Example: Why Saudi Arabia yuan deal is India hidden opportunity

HOOK (2-3 sentences): The one thing that happened this week that matters
Example: Saudi Aramco just signed a deal settling oil payments in Chinese yuan. Most people missed what that means.

CONTEXT (1 paragraph): Why this has been building for years

THE ANALYSIS (2-3 paragraphs): YOUR original insight
• What is really happening beneath the surface?
• What does history tell us about similar moments?
• What are the 2nd and 3rd order consequences?

THE IMPLICATION (1 paragraph): So what does this mean?
• For investors? For Indian exporters? For policy?
• Be specific. Vague is useless.

THE CALL (1 sentence): What to watch next
Example: Watch whether India next trade deal with UAE is denominated in rupees.

LENGTH: 400-700 words. Not more. People read on phones.
FREQUENCY: Start with once per week. Consistency beats quantity.`,
      },
      {
        title: "Write Your First 4 Issues Before You Launch",
        icon: "✍️",
        content: `Do NOT launch with zero content. Write 4 issues first.

If someone discovers you and sees only 1 post, they leave. If they see 4 thoughtful posts, they subscribe.

HOW TO WRITE YOUR FIRST 4 ISSUES:

ISSUE 1: Your Why This Newsletter Exists post
→ What gap does your newsletter fill?
→ Who are you, and why should they trust your analysis?
→ What will readers gain each week?

ISSUE 2-4: Pick 3 recent events in your niche and analyze them.

WRITING TIPS FOR BEGINNERS:
• Write like you are explaining to a smart friend, not writing an essay
• Avoid academic phrases
• Use short paragraphs - 2-3 sentences max per paragraph
• Every paragraph should earn its place
• Read your draft out loud - if you stumble, rewrite it
• Use Claude to review your drafts and suggest improvements

Your goal: 4 published posts on Substack before you tell anyone it exists.`,
      },
      {
        title: "How to Research Like an Analyst",
        icon: "🔍",
        content: `This is the skill that separates good newsletters from great ones.

THE 3-SOURCE RULE:
Never form an opinion from 1 article. For every analysis, find:
1. A Western source (Reuters, FT, Bloomberg free)
2. A non-Western source (Al Jazeera, CGTN)
3. A data source (World Bank data.worldbank.org, IMF imf.org)

HOW TO GO DEEPER FOR FREE:
• Google Scholar (scholar.google.com) - find academic papers
• Council on Foreign Relations (cfr.org) - deep background essays
• RAND Corporation (rand.org) - detailed policy research, free
• Brookings Institution (brookings.edu) - free analysis

THE QUESTION FRAMEWORK:
When analyzing any event, ask yourself:
1. WHO benefits from this? (Follow incentives)
2. WHO loses from this? (They will fight back)
3. WHAT does history say about similar situations?
4. WHAT does the data show?
5. WHAT will the losers do next? (This is your prediction)`,
      },
    ],
  },
  {
    id: 3,
    title: "Audience Building",
    subtitle: "Weeks 6-10",
    color: "#6EC87A",
    icon: "◎",
    tagline: "Get your first 200 real subscribers",
    steps: [
      {
        title: "LinkedIn Strategy - Your Number 1 Free Channel",
        icon: "💼",
        content: `LinkedIn is the single best free platform for a geopolitical intelligence newsletter. Your audience (investors, founders, professionals, policy people) lives there.

YOUR LINKEDIN PROFILE:
• Headline: Geopolitical Analyst | Writing [Newsletter Name] - Weekly intelligence on [niche]
• About section: Your newsletter value proposition
• Featured section: Link to your Substack

THE CONTENT STRATEGY (post 5x per week):

FORMAT 1 - THE INSIGHT POST (3x/week):
Take ONE geopolitical event. Write a 150-200 word LinkedIn post that gives 1 sharp insight. End with: Full analysis in this week newsletter - link in comments

FORMAT 2 - THE THREAD (1x/week):
5 things most people do not understand about [topic]
Each point is 1-2 sentences. These get shared heavily.

FORMAT 3 - THE QUESTION (1x/week):
Ask your audience a genuine question about a geopolitical issue.

GROWTH HACK (free):
→ Comment thoughtfully on posts by large geopolitics accounts
→ Not Great post - write a 2-3 sentence insight that adds value
→ People click your profile when you say something smart
→ Do this 10 times per day for 30 days`,
      },
      {
        title: "Your First 200 Subscribers Checklist",
        icon: "🎯",
        content: `Here is exactly how to get your first 200 subscribers with zero budget:

WEEK 1 - YOUR INNER CIRCLE (Target: 20 subscribers)
→ Message 30 people personally via WhatsApp or LinkedIn
→ Write individual messages:
Hey [name], I just started a newsletter analyzing [topic]. I think you would find it useful given your interest in [X]. Would love your honest feedback as an early reader.
→ Expect 20-25 from 30 personal asks.

WEEK 2-3 - REDDIT STRATEGY (Target: +30 subscribers)
→ Find subreddits: r/geopolitics, r/india, r/Economics, r/IndiaSpeaks
→ Post valuable analysis as regular Reddit comments
→ Add to your profile: I write [newsletter] if you want deeper analysis
→ Never directly promote. Just be the smartest person in the thread.

WEEK 4-6 - LINKEDIN COMPOUND GROWTH (Target: +100 subscribers)
→ Your consistent posting starts paying off here
→ Every post ends with a soft CTA: Subscribe to [newsletter] for weekly analysis

WEEK 7-10 - CROSS-PROMOTION (Target: +50 subscribers)
→ Find 3 other small newsletters in adjacent niches
→ Propose a shoutout swap - you mention them, they mention you`,
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
        title: "When and How to Introduce Paid Subscriptions",
        icon: "💰",
        content: `The rule: Do NOT monetize until you have 200+ engaged subscribers.

SUBSTACK PAID TIER SETUP:
→ Go to your Substack dashboard and Settings and Payments
→ Connect Stripe (free, available in India with Indian bank account)
→ Set pricing: Rs 299/month or Rs 2499/year
→ Decide what is free vs paid:

FREE (to keep growing):
• Weekly main analysis post
• Breaking news commentary

PAID (your revenue):
• Deep-dive reports (2000+ word special issues)
• Monthly What I am Watching - your forward-looking analysis
• Access to your research tracker
• Monthly Q&A session with paid subscribers

REALISTIC EXPECTATION:
If you have 300 subscribers and 5% convert to paid at Rs 299/mo:
= 15 paid x Rs 299 = Rs 4,485/month

At 1,000 subscribers and 8% conversion:
= 80 paid x Rs 299 = Rs 23,920/month`,
      },
      {
        title: "Your 90-Day Milestone Targets",
        icon: "🏁",
        content: `Here is what success looks like at each milestone:

DAY 1-14 (Foundation):
✓ Substack account created with professional bio
✓ Niche clearly defined and written down
✓ Daily reading routine started
✓ 4 draft issues written
✓ LinkedIn and Twitter profiles optimized

DAY 15-30 (Launch):
✓ First 4 issues published on Substack
✓ Personal outreach done - 20+ subscribers
✓ Posting daily on LinkedIn
✓ First Reddit comments posted
✓ Milestone: 50 subscribers

DAY 31-60 (Growth):
✓ 8 total issues published (consistent weekly)
✓ LinkedIn following growing (aim for +100 followers)
✓ First reader feedback collected and used
✓ Milestone: 150-200 subscribers

DAY 61-90 (Monetization Prep):
✓ Quality of analysis noticeably improving
✓ 1-2 pieces have gone small viral on LinkedIn or Twitter
✓ Paid tier launched on Substack
✓ Milestone: 200-300 subscribers, first money earned

REMEMBER: Most people quit at Day 20-30 because growth feels slow. The people who reach Day 90 almost always succeed.`,
      },
    ],
  },
];

const effortColor = { Low: "#00FFB2", Medium: "#FFD700", High: "#FF6B6B" };

export default function App() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeStep, setActiveStep] = useState(null);

  const phase = phases[activePhase];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080810",
      color: "#D8D8D0",
      fontFamily: "Palatino Linotype, Book Antiqua, Palatino, serif",
    }}>
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
            MALAY UMRAO - COMPLETE ROADMAP
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
              border: activePhase === i ? "1px solid " + p.color : "1px solid #222",
              background: activePhase === i ? p.color + "15" : "transparent",
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
        <div style={{
          marginBottom: 36,
          padding: "28px 32px",
          background: "linear-gradient(135deg, " + phase.color + "12 0%, #0C0C1A 100%)",
          border: "1px solid " + phase.color + "30",
          borderRadius: 8,
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -20, right: -20,
            fontSize: 120, color: phase.color + "08",
            fontFamily: "monospace", lineHeight: 1,
          }}>
            {phase.id}
          </div>
          <div style={{ fontSize: 11, fontFamily: "monospace", color: phase.color, letterSpacing: "0.2em", marginBottom: 8 }}>
            PHASE {phase.id} - {phase.subtitle}
          </div>
          <h2 style={{ margin: "0 0 8px", fontSize: 26, fontWeight: 400, color: "#F0EDE0", letterSpacing: "-0.01em" }}>
            {phase.title}
          </h2>
          <p style={{ margin: 0, color: "#888", fontSize: 14, fontStyle: "italic" }}>{phase.tagline}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {phase.steps.map((step, i) => {
            const isOpen = activeStep === i;
            return (
              <div key={i} style={{
                border: isOpen ? "1px solid " + phase.color + "40" : "1px solid #1A1A28",
                borderRadius: 6,
                background: isOpen ? "#0C0C1C" : "#09090F",
                overflow: "hidden",
                transition: "all 0.25s",
              }}>
                <div
                  onClick={() => setActiveStep(isOpen ? null : i)}
                  style={{
                    padding: "18px 24px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: phase.color + "18",
                      border: "1px solid " + phase.color + "30",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18, flexShrink: 0,
                    }}>
                      {step.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 10, fontFamily: "monospace", color: "#555", letterSpacing: "0.15em", marginBottom: 3 }}>
                        STEP {i + 1}
                      </div>
                      <div style={{ fontSize: 16, color: isOpen ? "#F0EDE0" : "#AAAAAA", fontWeight: 400 }}>
                        {step.title}
                      </div>
                    </div>
                  </div>
                  <div style={{ color: phase.color, fontSize: 18, fontFamily: "monospace", flexShrink: 0 }}>
                    {isOpen ? "-" : "+"}
                  </div>
                </div>

                {isOpen && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <div style={{ width: "100%", height: 1, background: phase.color + "20", marginBottom: 20 }} />
                    {step.content.split("\n").map((line, li) => {
                      if (line === "") return <div key={li} style={{ height: 8 }} />;
                      if (line.startsWith("•") || line.startsWith("→") || line.startsWith("✓")) return (
                        <div key={li} style={{ display: "flex", gap: 10, marginBottom: 6, paddingLeft: 4 }}>
                          <span style={{ color: phase.color, flexShrink: 0, fontFamily: "monospace" }}>{line[0]}</span>
                          <span style={{ color: "#BBBBAA", fontSize: 14, lineHeight: 1.7 }}>{line.slice(1).trim()}</span>
                        </div>
                      );
                      const isHeader = line === line.toUpperCase() && line.length > 3 && !line.startsWith("→");
                      if (isHeader) return (
                        <div key={li} style={{ fontSize: 11, fontFamily: "monospace", color: phase.color, letterSpacing: "0.1em", marginTop: 14, marginBottom: 6 }}>
                          {line}
                        </div>
                      );
                      return (
                        <p key={li} style={{ margin: "0 0 8px", fontSize: 14, lineHeight: 1.8, color: "#BBBBAA" }}>
                          {line}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }
