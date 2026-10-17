export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    slug: 'zero-trust-imperative-2026',
    category: 'Cybersecurity',
    title: 'The Zero Trust Imperative in 2026',
    excerpt: 'Why traditional perimeter defenses are obsolete in an era of distributed enterprise.',
    date: 'Oct 12, 2025',
    readTime: '5 min read',
    image: '/images/insights/zero-trust.png',
    featured: true,
    content: `
      <p>The traditional "castle and moat" security model is dead. In an era where data lives in the cloud, employees work from anywhere, and IoT devices proliferate, the concept of a "perimeter" has dissolved. Welcome to the age of Zero Trust.</p>
      
      <h3>The Paradigm Shift</h3>
      <p>Zero Trust is not a product; it's a strategy. It operates on a simple, yet radical premise: trust nothing, verify everything. Every user, device, and application attempting to access resources must be authenticated and authorized, regardless of whether they are inside or outside the corporate network.</p>

      <h3>Core Pillars of Zero Trust in 2026</h3>
      <ul>
        <li><strong>Identity Governance:</strong> Moving beyond passwords to adaptive, biometric, and behavior-based authentication.</li>
        <li><strong>Micro-segmentation:</strong> Breaking down networks into granular zones to contain breaches and prevent lateral movement.</li>
        <li><strong>Continuous Monitoring:</strong> Real-time analysis of user behavior and device health to detect anomalies before they become threats.</li>
      </ul>

      <h3>The Business Case</h3>
      <p>Implementing Zero Trust is not just about security; it's about business agility. By decoupling access from physical location, organizations can securely empower a global workforce, accelerate cloud adoption, and safely integrate third-party partners. It turns security from a blocker into an enabler of innovation.</p>

      <h3>Implementation Challenges</h3>
      <p>Transitioning to Zero Trust is a journey, not a flip of a switch. It requires a cultural shift, legacy system modernization, and comprehensive data classification. However, the cost of inaction is far greater. In 2026, Zero Trust is not just best practice—it is the baseline for survival.</p>
    `
  },
  // Research papers co-authored by the MindsSparc team (source: Google Scholar)
  {
    slug: 'trusted-reference-architecture-trustworthy-ai-education',
    category: 'Research',
    title: 'TRUSTED: A Unified Reference Architecture for Trustworthy AI in Education',
    excerpt: 'Responsible AI in education is fragmented. TRUSTED turns principles into an architecture institutions can actually deploy.',
    date: 'Apr 18, 2026',
    readTime: '4 min read',
    image: '/images/insights/trusted.png',
    content: `
      <p>Artificial intelligence is now used across education to personalise learning, detect academic risk, analyse engagement and support institutional decisions. Yet responsible AI in education remains fragmented: governance, privacy, consent, fairness, explainability and accountability are usually treated as separate concerns rather than as requirements of a single deployment.</p>

      <h3>The Gap</h3>
      <p>Existing frameworks offer principles, but they rarely give institutions an actionable, unified architecture they can apply in real environments. Schools and universities are left to translate high-level guidance into controls on their own.</p>

      <h3>Seven Operational Pillars</h3>
      <p>The paper proposes TRUSTED, a unified reference architecture for trustworthy AI deployment in education, built around seven operational pillars:</p>
      <ul>
        <li><strong>T</strong>ransparency</li>
        <li><strong>R</strong>esponsibility and Accountability</li>
        <li><strong>U</strong>ser Consent and Privacy</li>
        <li><strong>S</strong>afety and Fairness</li>
        <li><strong>T</strong>raceability and Auditability</li>
        <li><strong>E</strong>xplainability</li>
        <li><strong>D</strong>ata Governance</li>
      </ul>
      <p>These pillars are implemented across five functional layers, each with defined controls and clear human decision rights, so that trust is designed into the system rather than reviewed after the fact.</p>

      <h3>Why It Matters</h3>
      <p>For institutions adopting AI, TRUSTED offers a way to move from policy statements to operational practice, with accountability that holds up to scrutiny from students, parents and regulators.</p>

      <h3>Publication</h3>
      <p>Sadia Riaz and Sutharsan Chiranjeevi Partha Saarathy. Published in the 2026 International Conference on Integrated Intelligence and Cognitive Engineering (ICIICE), IEEE.</p>
      <p><a href="https://ieeexplore.ieee.org/abstract/document/11565282/" target="_blank" rel="noopener noreferrer">Read the full paper on IEEE Xplore →</a></p>
    `
  },
  {
    slug: 'petai-consent-first-personalized-education',
    category: 'Research',
    title: 'PETAI: Human–AI Teaming for Consent-First Personalised Education',
    excerpt: 'A reference architecture for personalised learning that keeps learners in control and educators in the loop.',
    date: 'Apr 18, 2026',
    readTime: '4 min read',
    image: '/images/insights/petai.png',
    content: `
      <p>Personalisation is increasingly expected in education and workforce upskilling. Yet many AI-driven learning systems remain opaque optimisers: they issue recommendations without meaningful learner agency, educator oversight or privacy-preserving governance.</p>

      <h3>A Different Approach</h3>
      <p>The paper proposes PETAI (Personalized Education through Adaptive Intelligence), a human–AI teaming reference architecture for consent-first personalisation, aligned with competence development for Industry 4.0.</p>

      <h3>Tiered, Low-Intrusion Sensing</h3>
      <p>PETAI starts from what institutions can deploy today and treats anything more sensitive as the exception:</p>
      <ul>
        <li><strong>Default signals:</strong> low-intrusion data such as learning management system (LMS) traces, assessments, attendance and structured self-reports.</li>
        <li><strong>Optional signals:</strong> higher-sensitivity sensing such as wearables and classroom sensors, used only with explicit opt-in, clear evidence of value and risk controls in place.</li>
      </ul>

      <h3>Interpretable by Design</h3>
      <p>PETAI pairs this sensing model with interpretable modelling, so educators can understand and act on recommendations instead of deferring to a black box. The result is personalisation that learners can consent to and educators can stand behind.</p>

      <h3>Publication</h3>
      <p>Sutharsan CP Saarathy and Sadia Riaz. Published in the 2026 International Conference on Integrated Intelligence and Cognitive Engineering (ICIICE), IEEE.</p>
      <p><a href="https://ieeexplore.ieee.org/abstract/document/11565233/" target="_blank" rel="noopener noreferrer">Read the full paper on IEEE Xplore →</a></p>
    `
  },
  {
    slug: 'proactive-student-wellbeing-monitoring-k12',
    category: 'Research',
    title: 'Proactive Student Wellbeing Monitoring in K-12 Schools Using Machine Learning',
    excerpt: 'WellScan uses machine learning to spot students at risk of wellbeing challenges early, so schools can step in sooner.',
    date: 'Jun 20, 2025',
    readTime: '4 min read',
    image: '/images/insights/wellbeing.png',
    content: `
      <p>Student wellbeing concerns are often noticed only once they have already affected attendance, behaviour or grades. This study presents WellScan, a machine learning-driven framework for identifying and addressing wellbeing concerns in K-12 schools before they escalate.</p>

      <h3>Grounded in Established Models</h3>
      <p>WellScan integrates psychological and educational models, including Maslow's Hierarchy of Needs and Seligman's PERMA framework, to evaluate wellbeing through a multi-dimensional analysis of physical, emotional and environmental factors.</p>

      <h3>Predicting Risk Early</h3>
      <p>Using Random Forest and Gradient Boosting algorithms, the model predicts which students are at risk of wellbeing challenges, giving schools the chance to intervene in time.</p>

      <h3>What the Pilot Showed</h3>
      <p>A pilot study with 400 students demonstrated a strong correlation between higher wellbeing scores and improved academic performance.</p>

      <h3>Ethics First</h3>
      <p>Beyond the value of predictive analytics in education, the research highlights the critical ethical considerations involved in implementing AI-driven student support systems, a theme carried forward in our later work on trustworthy and consent-first AI in education.</p>

      <h3>Publication</h3>
      <p>Sadia Riaz, Arindam Banerjee and Sutharsan Chiranjeevi Parthasaarathy. Published in the 2025 10th International Conference on Cloud Computing and Big Data Analytics (ICCCBDA), IEEE.</p>
      <p><a href="https://ieeexplore.ieee.org/abstract/document/11030513/" target="_blank" rel="noopener noreferrer">Read the full paper on IEEE Xplore →</a></p>
    `
  },
  {
    slug: 'self-healing-test-automation-ai-ml',
    category: 'Research',
    title: 'Self-Healing Test Automation Framework Using AI and ML',
    excerpt: 'Applying AI and machine learning to test automation, so test suites can adapt to application change instead of breaking.',
    date: 'Aug 01, 2024',
    readTime: '3 min read',
    image: '/images/insights/self-healing-testing.png',
    content: `
      <p>Automated test suites are essential to shipping software quickly, but they are notoriously brittle. Small changes to an application, such as a renamed element or a reworked screen, can break scripts that were working the day before, and teams spend significant effort repairing tests rather than finding defects.</p>

      <h3>The Idea of Self-Healing</h3>
      <p>This paper presents a self-healing test automation framework that applies artificial intelligence and machine learning to the problem, so that test automation can recognise and adapt to change rather than fail on it.</p>

      <h3>Why It Matters for Modernisation</h3>
      <p>As enterprises modernise legacy applications and release more often, the cost of maintaining test automation grows. Self-healing approaches help keep quality assurance in step with the pace of change, which is central to how we think about AI-led application modernisation.</p>

      <h3>Publication</h3>
      <p>Sutharsan Saarathy, Suresh Bathrachalam and Bharath Kumar Rajendran. Published in the International Journal of Strategic Management, Vol. 3, Issue 3, pp. 45–77, August 2024.</p>
      <p><a href="https://scholar.google.com/scholar?cluster=10185254485797552283&hl=en" target="_blank" rel="noopener noreferrer">View the paper on Google Scholar →</a></p>
    `
  },
  {
    slug: 'generative-ai-beyond-hype',
    category: 'AI Strategy',
    title: 'Generative AI: Moving Beyond the Hype',
    excerpt: 'Implementing practical use cases that drive real ROI.',
    date: 'Sep 28, 2025',
    readTime: '5 min read',
    image: '/images/insights/gen-ai-beyond-hype.png',
    content: `
      <p>Generative AI has captured the world's imagination, but for enterprises, the question has shifted from "what can it do?" to "what value does it create?" As the initial hype cycle subsides, we are entering the phase of practical, high-impact implementation.</p>

      <h3>From Experimentation to Integration</h3>
      <p>Successful organizations are moving beyond isolated pilots to integrating GenAI into core business workflows. This isn't just about drafting emails; it's about:
      <br/>
      1. <strong>Code Modernization:</strong> Accelerating legacy system refactoring.
      <br/>
      2. <strong>Knowledge Management:</strong> turning unstructured documentation into queryable institutional wisdom.
      <br/>
      3. <strong>Customer Hyper-personalization:</strong> creating bespoke experiences at scale.</p>

      <h3>The Data Quality Bottleneck</h3>
      <p>Your AI is only as good as your data. The biggest hurdle to enterprise GenAI isn't compute power—it's data governance. Unstructured, siloed, or biased data leads to hallucinations and unreliable outputs. Preparing your "data hygiene" is the critical first step before model deployment.</p>

      <h3>Governance and Ethics</h3>
      <p>With great power comes great liability. Establishing "AI Guardrails" is essential. This includes mechanisms for copyright compliance, bias detection, and output verification. The winners in 2026 will not be those who move fastest, but those who move most responsibly.</p>
    `
  },
  {
    slug: 'emerging-markets-outlook-q4',
    category: 'Market Intelligence',
    title: 'Emerging Markets Outlook Q4 2025',
    excerpt: 'Key growth indicators in APAC and LATAM regions.',
    date: 'Sep 15, 2025',
    readTime: '5 min read',
    image: '/images/insights/emerging-markets.png',
    content: `
      <p>As developed economies face saturation and slow growth, the global center of economic gravity continues to shift towards emerging markets. Our analysis for Q4 2025 highlights critical opportunities in the APAC and LATAM regions that smart investors cannot afford to ignore.</p>

      <h3>APAC: The Digital Consumer Explosion</h3>
      <p>Southeast Asia is experiencing a "leapfrog" effect. Populations that never owned a PC are now mobile-first digital natives. This is driving explosive growth in fintech, e-commerce, and digital health. Key markets to watch include Vietnam and Indonesia, where a young demographic dividend is fueling rapid consumption.</p>

      <h3>LATAM: The Nearshoring Renaissance</h3>
      <p>Geopolitical tensions are reshaping global supply chains. Mexico and Brazil are emerging as primary beneficiaries of the nearshoring trend. Beyond manufacturing, we see a booming agritech sector leveraging satellite data and IoT to modernize food production for the world.</p>

      <h3>Navigating Risk</h3>
      <p>Opportunity comes with volatility. Currency fluctuations, regulatory pivots, and infrastructure gaps remain challenges. A nuanced, hyper-local strategy is required. It is not enough to have a "LATAM strategy"; you need a Brazil strategy, a Chile strategy, and a Colombia strategy.</p>
    `
  },
  {
    slug: 'digital-transformation-pitfalls',
    category: 'Digital Transformation',
    title: 'Digital Transformation Pitfalls',
    excerpt: 'Why 70% of initiatives fail and how to be the 30%.',
    date: 'Sep 02, 2025',
    readTime: '5 min read',
    image: '/images/insights/digital-transformation-pitfalls.png',
    content: `
      <p>Digital transformation has become a buzzword so overused it risks losing meaning. Yet, the imperative to modernize is real. The tragic reality is that nearly 70% of digital transformation initiatives fail to achieve their stated goals. Why?</p>

      <h3>The "Tech-First" Trap</h3>
      <p>The most common failure mode is leading with technology rather than strategy. Buying a new CRM or migrating to the cloud is not transformation; it's digitization. True transformation requires a fundamental rethinking of business models and customer value propositions, enabled by technology.</p>

      <h3>Culture Eats Strategy for Breakfast</h3>
      <p>You can upgrade your servers overnight, but you cannot upgrade your culture. Resistance to change, siloed decision-making, and a lack of digital literacy in middle management are the silent killers of innovation. Successful transformation places people change management at the center, not the periphery.</p>

      <h3>The KPI Disconnect</h3>
      <p>Are you measuring activity or impact? Tracking "number of apps migrated" is vanity. Tracking "reduction in time-to-market" or "customer retention increase" is sanity. Aligning digital initiatives with hard business outcomes is the only way to sustain executive sponsorship over the long haul.</p>
    `
  }
];
