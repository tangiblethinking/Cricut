/**
 * Christopher Kenreigh Resume HTML
 * This file contains the HTML resume that opens in a new tab
 */

export const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Christopher Kenreigh – Lead UX Designer</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue: #2563c7;
      --dark: #111111;
      --mid: #444444;
      --light: #666666;
      --rule: #dddddd;
      --bg: #ffffff;
      --sidebar-bg: #f7f8fa;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      font-size: 10.5pt;
      color: var(--dark);
      background: #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 32px 16px;
      min-height: 100vh;
    }

    .page {
      background: var(--bg);
      width: 850px;
      max-width: 100%;
      box-shadow: 0 4px 40px rgba(0,0,0,0.18);
      display: grid;
      grid-template-rows: auto 1fr;
    }

    /* ── HEADER ── */
    header {
      padding: 28px 36px 18px;
      border-bottom: 2px solid var(--rule);
    }
    header h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(20pt, 5vw, 30pt);
      font-weight: 400;
      color: var(--dark);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }
    header .title-line {
      font-size: clamp(9pt, 2.5vw, 11pt);
      font-weight: 700;
      color: var(--blue);
      margin: 3px 0 8px;
      letter-spacing: 0.2px;
    }
    header .contact {
      font-size: 9.5pt;
      color: var(--mid);
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    header .contact a {
      color: var(--blue);
      text-decoration: none;
      font-weight: 500;
    }
    header .contact span { color: var(--rule); }

    /* ── BODY LAYOUT ── */
    .body {
      display: grid;
      grid-template-columns: 1fr 240px;
    }

    /* ── LEFT (Experience) ── */
    .main {
      padding: 24px 36px 32px;
      border-right: 1px solid var(--rule);
    }

    .section-title {
      font-family: 'DM Serif Display', serif;
      font-size: 14pt;
      font-weight: 400;
      color: var(--dark);
      border-bottom: 1.5px solid var(--dark);
      padding-bottom: 4px;
      margin-bottom: 14px;
    }

    .job { margin-bottom: 20px; }

    .job-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .job-company {
      font-size: 10pt;
      font-weight: 500;
      color: var(--blue);
      text-decoration: none;
    }
    .job-company:hover { text-decoration: underline; }

    .job-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin: 2px 0 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .job-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 16px;
      vertical-align: middle;
    }

    .job ul {
      list-style: disc;
      padding-left: 16px;
    }
    .job ul li {
      font-size: 9.5pt;
      color: var(--mid);
      line-height: 1.5;
      margin-bottom: 3px;
    }

    /* ── RIGHT (Sidebar) ── */
    .sidebar {
      background: var(--sidebar-bg);
      padding: 24px 22px 32px;
    }

    .sidebar-section { margin-bottom: 22px; }

    .sidebar .section-title {
      font-size: 12pt;
      border-bottom-color: var(--mid);
    }

    .summary-quote {
      font-size: 9.5pt;
      font-style: italic;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .summary-bullets {
      list-style: disc;
      padding-left: 14px;
    }
    .summary-bullets li {
      font-size: 8.8pt;
      color: var(--mid);
      line-height: 1.55;
      margin-bottom: 3px;
    }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .tag {
      font-size: 8pt;
      font-weight: 500;
      color: var(--blue);
      background: rgba(37,99,199,0.08);
      border-radius: 3px;
      padding: 2px 7px;
    }

    .dot-list {
      list-style: disc;
      padding-left: 14px;
    }
    .dot-list li {
      font-size: 9pt;
      color: var(--mid);
      line-height: 1.6;
    }

    /* Education */
    .edu-degree {
      font-size: 9.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .edu-school {
      font-size: 9pt;
      color: var(--blue);
      font-weight: 500;
    }
    .edu-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
    }
    .edu-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 15px;
      vertical-align: middle;
    }

    .share-link {
      display: block;
      text-align: right;
      font-size: 8.5pt;
      color: var(--blue);
      text-decoration: none;
      font-style: italic;
      margin-top: 16px;
    }
    .share-link:hover { text-decoration: underline; }

    /* ── MOBILE RESPONSIVE ── */
    @media (max-width: 680px) {
      body {
        padding: 0;
        background: var(--bg);
        align-items: stretch;
      }

      .page {
        width: 100%;
        box-shadow: none;
        border-radius: 0;
      }

      header {
        padding: 20px 18px 14px;
      }

      header h1 {
        font-size: 22pt;
      }

      header .title-line {
        font-size: 9pt;
      }

      header .contact {
        font-size: 9pt;
        gap: 6px;
        row-gap: 4px;
      }

      .body {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
      }

      .main {
        padding: 18px 18px 24px;
        border-right: none;
        border-bottom: 1px solid var(--rule);
        order: 2;
      }

      .sidebar {
        padding: 18px 18px 20px;
        order: 1;
        border-bottom: 2px solid var(--rule);
      }

      .section-title {
        font-size: 13pt;
      }

      .sidebar .section-title {
        font-size: 11pt;
      }

      .job ul li {
        font-size: 9pt;
      }

      .job-meta {
        font-size: 8pt;
        gap: 4px;
      }

      .summary-quote {
        font-size: 9pt;
      }

      .tag {
        font-size: 7.5pt;
      }
    }

    @media (min-width: 681px) and (max-width: 900px) {
      body {
        padding: 16px 8px;
      }

      .page {
        width: 100%;
      }

      header {
        padding: 22px 24px 14px;
      }

      .main {
        padding: 20px 24px 28px;
      }

      .sidebar {
        padding: 20px 16px 28px;
      }

      .body {
        grid-template-columns: 1fr 200px;
      }
    }

    @media print {
      body { background: white; padding: 0; }
      .page { box-shadow: none; width: 100%; }
    }
  </style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <header>
    <h1>Christopher Kenreigh</h1>
    <div class="title-line">Lead UX Designer | Consumer-Facing Software | Interaction Design | Design Systems | Cross-Functional Leadership</div>
    <div class="contact">
      <span style="color: #212121; font-weight:700">480-206-2145</span>
      <span>|</span>
      <a href="mailto:c.kenreigh@gmail.com" style="font-weight:800;">c.kenreigh@gmail.com</a>
      <span>|</span>
      <a href="https://www.linkedin.com/in/kenreigh/" target="_blank">LinkedIn</a>
      <span>|</span>
      <a href="https://www.uxapex.com/portfolioa1" target="_blank">Portfolio</a>
    </div>
  </header>

  <!-- BODY -->
  <div class="body">

    <!-- MAIN EXPERIENCE -->
    <main class="main">
      <h2 class="section-title">Experience</h2>

      <div class="job">
        <div class="job-title">Lead UX Designer (Principal)</div>
        <a class="job-company" href="https://www.plexusworldwide.com" target="_blank">Plexus Worldwide</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2024 – Present
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Led 5 UX designers through end-to-end user-centered product design process for consumer-facing desktop and mobile software across 3 international regions</li>
          <li>Applied user research, A/B testing, and iterative high-fidelity prototyping — from whiteboard sketches to interactive prototypes — to redesign onboarding, product discovery, and checkout interaction flows; cut abandonment 43% and drove subscriber growth</li>
          <li>Provided design thought leadership: extended and evolved UX design language; architected scalable design system consolidating 6 tools, achieving 60–90% org reuse across iOS, Android, and web platforms</li>
          <li>Fostered cross-functional collaboration with software product managers, software engineers, hardware engineers, and marketing to drive holistic product experiences to completion</li>
          <li>Led AI-assisted prototyping workflows and LLM-driven tools, increasing sprint delivery velocity 35%; mentored designers on emerging interaction patterns and user-centered best practices</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX Designer</div>
        <a class="job-company" href="https://www.freeportmcmoran.com" target="_blank">Freeport-McMoRan</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          08/2022 – 10/2023
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Led interaction design for combined hardware and software digital tools — responsive web and mobile interfaces improving operational efficiency 30%</li>
          <li>Facilitated 10+ user research workshops — translating user motivations, goals, and needs into actionable product requirements across cross-functional teams</li>
          <li>Presented product roadmaps and design rationale to C-suite executives, securing approval for 5 major product releases</li>
          <li>Built scalable MUI React design system — component documentation and guidelines adopted across web, iOS, and Android</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX Designer</div>
        <a class="job-company" href="https://www.opentechalliance.com" target="_blank">OpenTech Alliance</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2021 – 08/2022
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Advocated for user-centered design to C-suite — securing budget for 3 UX initiatives and elevating interaction design maturity org-wide</li>
          <li>Applied quantitative and qualitative user insights to redesign kiosk software — boosting task completion 75% through conversion-focused interaction design</li>
          <li>Designed compliant user data capture flows adhering to regulatory requirements, reducing legal risk 100%</li>
          <li>Enhanced consumer-facing digital journeys through data-driven UX optimizations and iterative prototyping, improving fulfillment 25%</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">UX Design Lead</div>
        <a class="job-company" href="https://www.siemens.com" target="_blank">Siemens</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          07/2020 – 05/2021
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Remote
        </div>
        <ul>
          <li>Led cross-functional teams to unify interaction design systems across 4 simultaneous product initiatives — combined hardware and software UI for industrial applications</li>
          <li>Produced design documentation and guidelines reducing internal dissemination needs 50%, enabling engineering to build without friction</li>
          <li>Managed multiple projects simultaneously; secured approval for 2 high-impact initiatives through clear design rationale presentations</li>
          <li>Designed 3D and AutoCAD-integrated UI layouts for hardware-integrated software application interfaces</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX Designer</div>
        <a class="job-company" href="https://www.glynlyon.com" target="_blank">Glynlyon Inc</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          02/2014 – 04/2019
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Designed WCAG and ADA-compliant inclusive interaction experiences across multi-platform digital products — expert in iOS and Android platform guidelines</li>
          <li>Applied quantitative data and qualitative user insights to roadmap UI features — increasing ease of use 65% through user-centered design decisions</li>
          <li>Articulated complex interaction design concepts and design rationale clearly to engineering and product stakeholders across multiple platforms</li>
          <li>Led Design Thinking workshops to surface user motivations, goals, and needs — aligning cross-functional teams on user-centered product strategy</li>
        </ul>
      </div>
    </main>

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <div class="sidebar-section">
        <h2 class="section-title">Summary</h2>
        <p class="summary-quote" style="color: #212121; font-weight:700">"Lead UX Designer with 12+ years of end-to-end interaction design for consumer-facing desktop and mobile software — applying user research, A/B testing, and high-fidelity prototyping to build intuitive platform experiences that delight users and drive measurable growth."</p>
        <ul class="summary-bullets">
          <li>User-centered design process across full product journey: onboarding, feature discovery, subscription flows, engagement</li>
          <li>Design thought leadership: evolving design language, scaling design systems, mentoring design teams</li>
          <li>Hardware + software interaction design fluency across iOS, Android, Mac, and Windows</li>
          <li>AI-assisted prototyping; WCAG-compliant inclusive design</li>
          <li>Cross-functional collaboration: product management, software engineering, hardware engineering, marketing</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Key Achievements</h2>
        <ul class="dot-list">
          <li>43% abandonment reduction via interaction design</li>
          <li>Reversed –17% to +2% operating margin</li>
          <li>60–90% design system org reuse</li>
          <li>10+ executive-approved product initiatives</li>
          <li>75% task completion lift — kiosk redesign</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Skills</h2>
        <div class="tag-list">
          <span class="tag">Interaction Design</span>
          <span class="tag">User-Centered Design</span>
          <span class="tag">High-Fidelity Prototyping</span>
          <span class="tag">User Research</span>
          <span class="tag">A/B Testing</span>
          <span class="tag">Usability Testing</span>
          <span class="tag">Design Systems</span>
          <span class="tag">Figma</span>
          <span class="tag">iOS Guidelines</span>
          <span class="tag">Material Design MD3</span>
          <span class="tag">WCAG Compliance</span>
          <span class="tag">MUI React</span>
          <span class="tag">Agile / Scrum</span>
          <span class="tag">Design Tokens</span>
          <span class="tag">Coded Prototypes</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">AI</h2>
        <div class="tag-list">
          <span class="tag">AI-Assisted Prototyping</span>
          <span class="tag">LLM-Based Workflows</span>
          <span class="tag">Agentic AI</span>
          <span class="tag">RAG Systems</span>
          <span class="tag">Multimodal AI</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Education</h2>
        <div class="edu-degree">Bachelor of Art – Information Design &amp; Technology</div>
        <div style="font-size:8.5pt; color:var(--mid); margin-top:1px;">(Human-Computer Interaction)</div>
        <div class="edu-school">The Art Institute of Phoenix</div>
        <div class="edu-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          09/2002 – 09/2005
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ
        </div>
      </div>

    </aside>
  </div><!-- /body -->
</div><!-- /page -->
</body>
</html>`;

/**
 * Opens the resume HTML in a new browser tab using Blob URL
 */
export function openResumeInNewTab(): void {
  // Create a Blob from the HTML string
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  
  // Generate a blob URL
  const blobURL = URL.createObjectURL(blob);
  
  // Open in new tab
  const newWindow = window.open(blobURL, '_blank');
  
  // Clean up the blob URL after a delay to ensure the page loads
  if (newWindow) {
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 1000);
  }
}
