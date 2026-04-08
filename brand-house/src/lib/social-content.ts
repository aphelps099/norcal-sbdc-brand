export type CardBg = "navy" | "cobalt" | "berry" | "white";

export interface SocialCard {
  bg: CardBg;
  label: string;
  stat?: string;
  headline: string;
  body?: string;
  quote?: boolean;
  attribution?: string;
  cta?: string;
}

export type RowLayout =
  | { type: "grid4"; cards: SocialCard[] }
  | { type: "feature"; hero: SocialCard; cards: SocialCard[] }
  | { type: "billboard"; card: SocialCard };

export interface MonthContent {
  name: string;
  shortName: string;
  theme: string;
  rows: RowLayout[];
}

export const BG_STYLES: Record<CardBg, { bg: string; text: string; muted: string; cta: string }> = {
  navy:   { bg: "#0f1c2e", text: "rgba(255,255,255,0.92)", muted: "rgba(255,255,255,0.4)", cta: "#8FC5D9" },
  cobalt: { bg: "#004290", text: "rgba(255,255,255,0.92)", muted: "rgba(255,255,255,0.45)", cta: "#8FC5D9" },
  berry:  { bg: "#A73B44", text: "rgba(255,255,255,0.92)", muted: "rgba(255,255,255,0.5)",  cta: "rgba(255,255,255,0.7)" },
  white:  { bg: "#ffffff", text: "#0f1c2e",                muted: "rgba(15,28,46,0.45)",     cta: "#004290" },
};

export const MONTHS: MonthContent[] = [
  // ── JANUARY ──
  {
    name: "January",
    shortName: "Jan",
    theme: "Goal Setting & Technology",
    rows: [
      {
        type: "billboard",
        card: { bg: "navy", label: "New Year", headline: "New year. New goals. Same free advising.", body: "Start the business you\u2019ve been thinking about. We\u2019ll show you how.", cta: "Connect with SBDC \u2192" },
      },
      {
        type: "grid4",
        cards: [
          { bg: "white", label: "Mentoring Month", headline: "Mentored businesses grow 5x faster.", body: "Get matched with an experienced business advisor.", cta: "Find a mentor \u2192" },
          { bg: "cobalt", label: "Online Presence", stat: "97%", headline: "Of consumers search online before buying.", body: "Is your business showing up?", cta: "Get found \u2192" },
          { bg: "berry", label: "Technology", headline: "Automate the busywork.", body: "Free yourself to focus on what matters most. Our advisors can help.", cta: "Learn how \u2192" },
          { bg: "navy", label: "Always Free", stat: "$0", headline: "What expert advising costs you.", cta: "norcalsbdc.org \u2192" },
        ],
      },
      {
        type: "feature",
        hero: { bg: "cobalt", label: "Advising", headline: "Slice through the fluff. Get a business advisor.", body: "Navigating business is overwhelming. Cut through the noise and get straight to answers.", cta: "Connect with us \u2192" },
        cards: [
          { bg: "white", label: "Goals", headline: "Set goals that stick.", body: "Strategic planning workshops available.", cta: "Register \u2192" },
          { bg: "navy", label: "Capital Summit", headline: "Don\u2019t go unprepared.", body: "Get in front of the right lender.", cta: "Register now \u2192" },
          { bg: "berry", label: "Digital", headline: "Your Google presence matters.", body: "Social, website, search \u2014 we help with all of it." },
          { bg: "white", label: "Success Story", headline: "Client spotlight coming soon.", body: "Feature your center\u2019s success story here." },
        ],
      },
    ],
  },
  // ── FEBRUARY ──
  {
    name: "February",
    shortName: "Feb",
    theme: "Branding & Business Identity",
    rows: [
      {
        type: "feature",
        hero: { bg: "berry", label: "Branding", headline: "Your brand is more than a logo.", body: "It\u2019s the promise you make \u2014 and keep \u2014 to every customer. Consistency builds trust.", cta: "Build your brand \u2192" },
        cards: [
          { bg: "navy", label: "Consistency", headline: "Brand consistency increases revenue up to 23%.", body: "Let us help you get it right.", cta: "Connect \u2192" },
          { bg: "white", label: "Identity", headline: "What does your business stand for?", body: "Define your value proposition with an SBDC advisor." },
          { bg: "cobalt", label: "SBDC Day Prep", headline: "March 20 is SBDC Day.", body: "Get ready to celebrate small business impact.", cta: "Save the date \u2192" },
          { bg: "berry", label: "Pizza Day", headline: "It\u2019s National Pizza Day.", body: "Support your local pizza shop \u2014 and every small business." },
        ],
      },
      {
        type: "grid4",
        cards: [
          { bg: "cobalt", label: "Brand Strategy", headline: "First impressions are everything.", body: "Your website, your storefront, your handshake \u2014 make them count." },
          { bg: "white", label: "Workshop", headline: "Branding on a budget.", body: "Free workshop on building a memorable brand without breaking the bank.", cta: "Sign up \u2192" },
          { bg: "navy", label: "Digital", headline: "Your online reputation is your brand.", body: "Reviews, social presence, search results \u2014 manage them all.", cta: "Get help \u2192" },
          { bg: "berry", label: "Inventors Day", headline: "Got an idea? We can help you protect it.", body: "IP strategy, patents, trademarks \u2014 our advisors know the path.", cta: "Learn more \u2192" },
        ],
      },
      {
        type: "billboard",
        card: { bg: "white", label: "Business, Better", headline: "Looking for a better way to grow your business?", body: "From finance to marketing, branding to international trade \u2014 we\u2019ve got you covered. Discover a better way to do business today.", cta: "Get started \u2192" },
      },
    ],
  },
  // ── MARCH ──
  {
    name: "March",
    shortName: "Mar",
    theme: "Tax Prep & SBDC Day",
    rows: [
      {
        type: "billboard",
        card: { bg: "cobalt", label: "Tax Season", headline: "April 15 is coming. Are you ready?", body: "60% of small businesses spend 80+ hours on taxes each year. Our free workshops help you prepare smarter, not harder.", cta: "Find a workshop \u2192" },
      },
      {
        type: "feature",
        hero: { bg: "navy", label: "SBDC Day \u2022 March 20", stat: "40+", headline: "Years of helping small businesses succeed.", body: "On March 20, we celebrate the advisors, centers, and entrepreneurs who make it happen.", cta: "Join the celebration \u2192" },
        cards: [
          { bg: "white", label: "Tax Prep", headline: "Don\u2019t leave money on the table.", body: "Tax deductions most small businesses miss.", cta: "Workshop \u2192" },
          { bg: "berry", label: "Growth", headline: "Outgrown your garage?", body: "Strategic planning for the next phase of your business.", cta: "Get advice \u2192" },
          { bg: "cobalt", label: "Pi Day", headline: "3.14 reasons to love small business.", body: "Celebrate Pi Day by supporting your local bakery." },
          { bg: "white", label: "Mom & Pop", headline: "Mom & Pop Business Owners Day.", body: "The backbone of every community. That\u2019s who we serve." },
        ],
      },
      {
        type: "grid4",
        cards: [
          { bg: "berry", label: "Impact", stat: "9/10", headline: "SBDC clients see measurable results.", body: "Across thousands of businesses nationwide.", cta: "Get started \u2192" },
          { bg: "navy", label: "Storytelling", headline: "Every business has a story.", body: "Tell yours. Our advisors help you craft the narrative.", cta: "Share yours \u2192" },
          { bg: "white", label: "Workshop", headline: "Tax preparation bootcamp.", body: "Hands-on help with deductions, filings, and financial review.", cta: "Register \u2192" },
          { bg: "cobalt", label: "Free", headline: "Expert tax guidance. Zero cost.", body: "Because small businesses shouldn\u2019t pay extra to get help." },
        ],
      },
    ],
  },
  // ── APRIL ──
  {
    name: "April",
    shortName: "Apr",
    theme: "Tax Day, Sustainability & E-Commerce",
    rows: [
      {
        type: "grid4",
        cards: [
          { bg: "navy", label: "Tax Day", headline: "Today\u2019s the day. April 15.", body: "Need last-minute help? Our advisors are standing by.", cta: "Get help now \u2192" },
          { bg: "white", label: "Sustainability", headline: "Small steps, big impact.", body: "Eco-friendly practices that boost profits and customer loyalty." },
          { bg: "berry", label: "E-Commerce", headline: "Go from brick-and-mortar to click-and-order.", body: "Our CA Shop Small program helps you sell online.", cta: "Learn more \u2192" },
          { bg: "cobalt", label: "SBW Countdown", headline: "Small Business Week is coming.", body: "Late April through early May. Get ready.", cta: "Save the date \u2192" },
        ],
      },
      {
        type: "billboard",
        card: { bg: "berry", label: "Green Growth", headline: "Sustainable business is smart business.", body: "Companies with environmentally friendly practices see increased profits and customer loyalty. Let SBDC help you make a positive impact.", cta: "Connect with SBDC \u2192" },
      },
      {
        type: "feature",
        hero: { bg: "white", label: "Financial Literacy", headline: "Know your numbers. Grow your business.", body: "Financial literacy isn\u2019t optional \u2014 it\u2019s the foundation. Free training on budgets, cash flow, and forecasting.", cta: "Sign up \u2192" },
        cards: [
          { bg: "cobalt", label: "Agriculture", headline: "Farm to table. Seed to sale.", body: "SBDC supports ag businesses with marketing and planning." },
          { bg: "navy", label: "Shop Small", stat: "$4.9T", headline: "E-commerce sales and growing.", body: "Don\u2019t miss the wave.", cta: "Get online \u2192" },
          { bg: "berry", label: "Workshops", headline: "Farmers market marketing.", body: "Stand out at the market with better branding and displays." },
          { bg: "white", label: "Planning", headline: "Q2 is here. Are your goals on track?", body: "Free mid-quarter business check-in with an advisor." },
        ],
      },
    ],
  },
  // ── MAY ──
  {
    name: "May",
    shortName: "May",
    theme: "Small Business Week & Capital",
    rows: [
      {
        type: "billboard",
        card: { bg: "navy", label: "Small Business Week", stat: "99.9%", headline: "Of U.S. businesses are small businesses. This week, we celebrate all of them.", body: "Join us for free workshops, networking, and advisor meetups.", cta: "See events \u2192" },
      },
      {
        type: "grid4",
        cards: [
          { bg: "white", label: "SBW", headline: "Celebrate small business.", body: "This week and every week. Find events near you.", cta: "norcalsbdc.org/events \u2192" },
          { bg: "cobalt", label: "Capital", stat: "$547M", headline: "Accessed by our clients last year.", body: "Need funding? Start here.", cta: "Get started \u2192" },
          { bg: "berry", label: "Cash Flow", headline: "Cash is king. Manage it.", body: "82% of businesses fail due to cash flow problems. Don\u2019t be one of them.", cta: "Get help \u2192" },
          { bg: "navy", label: "Marketing", headline: "Your story sells.", body: "Build a brand customers remember. Free marketing workshops.", cta: "Register \u2192" },
        ],
      },
      {
        type: "feature",
        hero: { bg: "cobalt", label: "Capital Summit", headline: "Need funding? We\u2019ll get you in front of the right lender.", body: "SBDC\u2019s Capital Summit connects you with lenders who want to hear your story. Don\u2019t go unprepared.", cta: "Register now \u2192" },
        cards: [
          { bg: "white", label: "Funding", headline: "SBA loans demystified.", body: "What they are, how to qualify, and how we help." },
          { bg: "berry", label: "Growth", headline: "Ready to hire?", body: "Expand with confidence. We help with financial planning.", cta: "Connect \u2192" },
          { bg: "navy", label: "Free", stat: "$0", headline: "Expert loan packaging at no cost.", body: "We guide the entire process." },
          { bg: "white", label: "Memorial Day", headline: "Honoring those who served.", body: "And supporting the businesses they built." },
        ],
      },
    ],
  },
  // ── JUNE ──
  {
    name: "June",
    shortName: "Jun",
    theme: "Business Planning & Social Media",
    rows: [
      {
        type: "feature",
        hero: { bg: "white", label: "Business Plans", headline: "Businesses that review their plan regularly are 16% more likely to grow.", body: "When was the last time you looked at yours? Our advisors help you build one that actually works.", cta: "Book a session \u2192" },
        cards: [
          { bg: "navy", label: "E-Commerce", headline: "Online sales are booming.", body: "CA Shop Small helps you get your products online.", cta: "Learn more \u2192" },
          { bg: "cobalt", label: "Social Media", stat: "70%", headline: "Of owners say social is their top tool.", body: "Are you using it right?" },
          { bg: "berry", label: "CX", headline: "86% of consumers say service drives loyalty.", body: "Build it. SBDC can show you how.", cta: "Connect \u2192" },
          { bg: "white", label: "Marketing", headline: "Maximize your marketing ROI.", body: "60% of owners feel their campaigns don\u2019t work. We fix that." },
        ],
      },
      {
        type: "billboard",
        card: { bg: "cobalt", label: "Social Media Day \u2022 June 30", headline: "Your customers are scrolling. Are you showing up?", body: "Social media marketing isn\u2019t optional anymore. Let SBDC help you build a strategy that actually drives results.", cta: "Get started \u2192" },
      },
      {
        type: "grid4",
        cards: [
          { bg: "berry", label: "Planning", headline: "Summer\u2019s coming. Is your business ready?", body: "Seasonal prep sessions available now.", cta: "Plan ahead \u2192" },
          { bg: "navy", label: "Newsletter", headline: "Stay in the know.", body: "Expert tips delivered to your inbox.", cta: "Subscribe \u2192" },
          { bg: "white", label: "Budget", headline: "Marketing on a shoestring.", body: "Big impact doesn\u2019t require big budgets. Free workshop.", cta: "Sign up \u2192" },
          { bg: "cobalt", label: "Success", stat: "9/10", headline: "SBDC clients see results.", body: "Join thousands of businesses who trusted us.", cta: "Start today \u2192" },
        ],
      },
    ],
  },
  // ── JULY ──
  {
    name: "July",
    shortName: "Jul",
    theme: "Leadership, HR & Productivity",
    rows: [
      {
        type: "grid4",
        cards: [
          { bg: "navy", label: "Leadership", headline: "Leaders are made, not born.", body: "Develop the skills that drive business success.", cta: "Workshop \u2192" },
          { bg: "white", label: "4th of July", headline: "Celebrating American small business.", body: "The engine of our economy. The heart of our communities." },
          { bg: "cobalt", label: "HR", stat: "42", headline: "Days: average time-to-hire for small businesses.", body: "We help you streamline.", cta: "Get advice \u2192" },
          { bg: "berry", label: "Hiring", headline: "Ready to grow your team?", body: "Attract top talent with the right strategy.", cta: "Connect \u2192" },
        ],
      },
      {
        type: "feature",
        hero: { bg: "berry", label: "Mid-Year Check", headline: "Halfway through the year. How\u2019s your business doing?", body: "Review your goals. Course-correct. Set up a strong second half. Free mid-year strategy sessions with SBDC advisors.", cta: "Book a check-in \u2192" },
        cards: [
          { bg: "white", label: "Productivity", headline: "Work smarter, not harder.", body: "Automation tools that save you 10+ hours a week." },
          { bg: "navy", label: "Remote Work", headline: "Remote team? Stay connected.", body: "Best practices for managing distributed teams.", cta: "Learn more \u2192" },
          { bg: "cobalt", label: "Wellness", headline: "Burnout is real.", body: "Employee wellness programs boost retention 31%.", cta: "Get help \u2192" },
          { bg: "white", label: "Engagement", headline: "Engaged employees perform 21% better.", body: "Build a culture that keeps your team invested." },
        ],
      },
      {
        type: "billboard",
        card: { bg: "navy", label: "Leadership", headline: "The numbers don\u2019t lie: leadership impacts business success.", body: "Businesses with effective leaders outperform their peers consistently. Learn how to enhance your leadership skills with free SBDC workshops.", cta: "Develop your skills \u2192" },
      },
    ],
  },
  // ── AUGUST ──
  {
    name: "August",
    shortName: "Aug",
    theme: "Financial Management & QuickBooks",
    rows: [
      {
        type: "billboard",
        card: { bg: "cobalt", label: "Financial Management", headline: "Know your numbers. Control your future.", body: "Financial awareness isn\u2019t just for accountants. Our bootcamp series covers everything from bookkeeping basics to financial forecasting.", cta: "Join the bootcamp \u2192" },
      },
      {
        type: "grid4",
        cards: [
          { bg: "navy", label: "QuickBooks", headline: "Master your books.", body: "Free QuickBooks training \u2014 from setup to advanced reporting.", cta: "Enroll now \u2192" },
          { bg: "white", label: "World Entrepreneurs Day", headline: "August 21: World Entrepreneurs\u2019 Day.", body: "Celebrating the risk-takers who build from nothing." },
          { bg: "berry", label: "Management", headline: "Strong management is the foundation of growth.", body: "Tools to manage your team and drive results.", cta: "Connect \u2192" },
          { bg: "cobalt", label: "Finances", stat: "68%", headline: "Higher success rate for businesses with effective management.", body: "Learn the principles.", cta: "Get started \u2192" },
        ],
      },
      {
        type: "feature",
        hero: { bg: "white", label: "Financial Bootcamp", headline: "Five-week financial management series.", body: "Budgeting, cash flow, QuickBooks, tax planning, and forecasting. Everything you need to take control of your business finances.", cta: "Register free \u2192" },
        cards: [
          { bg: "navy", label: "Accounting", headline: "Bookkeeping doesn\u2019t have to be painful.", body: "Step-by-step QuickBooks setup with an expert." },
          { bg: "berry", label: "Staffing", headline: "Your team is your greatest asset.", body: "Performance, feedback, and resource allocation.", cta: "Workshop \u2192" },
          { bg: "cobalt", label: "Back to Biz", headline: "Fall is coming. Plan now.", body: "Set your business up for a strong Q4.", cta: "Plan ahead \u2192" },
          { bg: "white", label: "Culture", headline: "Positive culture = 30% higher satisfaction.", body: "Create a workplace people want to be part of." },
        ],
      },
    ],
  },
  // ── SEPTEMBER ──
  {
    name: "September",
    shortName: "Sep",
    theme: "Growth Hacking & Legal",
    rows: [
      {
        type: "feature",
        hero: { bg: "navy", label: "Growth Hacks", headline: "Discover SBDC\u2019s growth secrets for small business.", body: "From leveraging social media to optimizing your sales process, our advisors identify the best strategies for your business.", cta: "Visit norcalsbdc.org \u2192" },
        cards: [
          { bg: "white", label: "Legal", headline: "Contracts protect your business.", body: "Don\u2019t shake on it \u2014 sign on it. Free legal guidance.", cta: "Get advice \u2192" },
          { bg: "cobalt", label: "LinkedIn", headline: "Your LinkedIn is your handshake.", body: "CEOs and decision-makers are there. Are you?", cta: "Optimize \u2192" },
          { bg: "berry", label: "Insurance", headline: "Are you covered?", body: "Risk management for small businesses. Know your gaps." },
          { bg: "navy", label: "Labor Day", headline: "Celebrating the workforce that powers small business.", body: "Enjoy the weekend \u2014 you\u2019ve earned it." },
        ],
      },
      {
        type: "grid4",
        cards: [
          { bg: "cobalt", label: "Supply Chain", headline: "Streamline your supply chain.", body: "Better inventory, better deals, better margins.", cta: "Get help \u2192" },
          { bg: "berry", label: "Revenue", headline: "Maximize reach. Maximize revenue.", body: "Marketing and sales strategies that actually move the needle.", cta: "Connect \u2192" },
          { bg: "white", label: "Resilience", headline: "Building resilience in your small business.", body: "A solid foundation for long-term success.", cta: "Learn more \u2192" },
          { bg: "navy", label: "Mindset", headline: "Entrepreneurship is a marathon.", body: "Develop the resilience to go the distance." },
        ],
      },
      {
        type: "billboard",
        card: { bg: "berry", label: "Online Learning Day", headline: "Learn anywhere. Grow everywhere.", body: "SBDC\u2019s virtual training events are led by seasoned industry experts. The latest insights, trends, and strategies \u2014 all from your laptop.", cta: "See upcoming trainings \u2192" },
      },
    ],
  },
  // ── OCTOBER ──
  {
    name: "October",
    shortName: "Oct",
    theme: "Cybersecurity & International Trade",
    rows: [
      {
        type: "grid4",
        cards: [
          { bg: "navy", label: "Cybersecurity", stat: "43%", headline: "Of small businesses have experienced a cyber attack.", body: "Don\u2019t be next.", cta: "Get protected \u2192" },
          { bg: "white", label: "Cyber Tips", headline: "Protect your business in 5 steps.", body: "Passwords, backups, training, updates, and insurance.", cta: "Workshop \u2192" },
          { bg: "cobalt", label: "International", headline: "Think global. Sell global.", body: "SBDC can help you break into international markets.", cta: "Explore \u2192" },
          { bg: "berry", label: "Know Your Customer", headline: "Oct 17: Get to Know Your Customers Day.", body: "When was the last time you asked what they actually need?" },
        ],
      },
      {
        type: "billboard",
        card: { bg: "navy", label: "Cybersecurity Awareness Month", headline: "Your data is your business. Protect it.", body: "October is Cybersecurity Awareness Month. Small businesses are the #1 target for cyber attacks. Free workshops on how to defend your business.", cta: "Register for free \u2192" },
      },
      {
        type: "feature",
        hero: { bg: "cobalt", label: "Holiday Prep", headline: "The holiday rush starts now. Is your inventory ready?", body: "Retail planning, marketing calendars, and e-commerce optimization. Get ahead of the competition.", cta: "Plan your season \u2192" },
        cards: [
          { bg: "white", label: "Export", headline: "Made in NorCal. Sold worldwide.", body: "International trade advising for growing businesses." },
          { bg: "berry", label: "Retail", headline: "Holiday marketing starts in October.", body: "Don\u2019t wait until Black Friday to start planning.", cta: "Get ready \u2192" },
          { bg: "navy", label: "Phishing", headline: "That email might be a trap.", body: "Train your team to spot phishing attempts.", cta: "Free training \u2192" },
          { bg: "white", label: "Back to Future", headline: "Oct 21: Back to the Future Day.", body: "What does the future of your business look like?" },
        ],
      },
    ],
  },
  // ── NOVEMBER ──
  {
    name: "November",
    shortName: "Nov",
    theme: "Small Biz Saturday & Financial Planning",
    rows: [
      {
        type: "billboard",
        card: { bg: "navy", label: "Global Entrepreneurship Week", headline: "November 14\u201320: Ideas become businesses. Businesses become movements.", body: "Join entrepreneurs worldwide in celebrating the spirit of building something from nothing. Free events all week.", cta: "See events \u2192" },
      },
      {
        type: "feature",
        hero: { bg: "berry", label: "Small Business Saturday", headline: "November 30: Shop small. Shop local. Shop with purpose.", body: "Every dollar spent at a small business strengthens a community. Celebrate the businesses that make our neighborhoods what they are.", cta: "Support local \u2192" },
        cards: [
          { bg: "white", label: "Financial Planning", headline: "Year-end financial review.", body: "Don\u2019t wait until December. Start planning now.", cta: "Book a session \u2192" },
          { bg: "navy", label: "Entrepreneurs Day", headline: "Nov 19: National Entrepreneurs\u2019 Day.", body: "Celebrating the builders, the dreamers, the doers." },
          { bg: "cobalt", label: "Holiday Retail", headline: "Holiday marketing is a sprint.", body: "Email, social, in-store \u2014 coordinate your channels.", cta: "Get the playbook \u2192" },
          { bg: "white", label: "Thanksgiving", headline: "Grateful for small business.", body: "This Thanksgiving, we\u2019re thankful for the entrepreneurs we serve." },
        ],
      },
      {
        type: "grid4",
        cards: [
          { bg: "cobalt", label: "E-Commerce", headline: "Cyber Monday is your moment.", body: "Is your online store ready for the traffic surge?", cta: "Prep now \u2192" },
          { bg: "berry", label: "Budgeting", headline: "2027 starts with a plan.", body: "Financial planning workshops to close the year strong.", cta: "Register \u2192" },
          { bg: "navy", label: "Impact", stat: "$547M", headline: "Capital accessed by SBDC clients.", body: "Be part of next year\u2019s story.", cta: "Connect \u2192" },
          { bg: "white", label: "Giving Tuesday", headline: "Dec 3: Give back to your community.", body: "Support the organizations that support small business." },
        ],
      },
    ],
  },
  // ── DECEMBER ──
  {
    name: "December",
    shortName: "Dec",
    theme: "Business Planning & Customer Service",
    rows: [
      {
        type: "feature",
        hero: { bg: "cobalt", label: "Write a Business Plan Month", headline: "December is National Write a Business Plan Month.", body: "No business plan? No problem. Our advisors walk you through every section \u2014 from executive summary to financial projections. All free.", cta: "Start your plan \u2192" },
        cards: [
          { bg: "white", label: "Customer Service", headline: "The holiday rush tests your service.", body: "Stand out with exceptional customer experience." },
          { bg: "navy", label: "Personalization", headline: "Personalized service drives repeat business.", body: "Small touches. Big impact. We\u2019ll show you how.", cta: "Learn more \u2192" },
          { bg: "berry", label: "App Day", headline: "Dec 11: National App Day.", body: "Does your business need an app? Maybe. Let\u2019s talk." },
          { bg: "cobalt", label: "Holiday", headline: "Holiday marketing checklist.", body: "Email campaigns, social posts, gift guides \u2014 don\u2019t miss a beat." },
        ],
      },
      {
        type: "grid4",
        cards: [
          { bg: "navy", label: "Year in Review", headline: "What a year.", body: "Reflect on your wins. Learn from the misses. Plan the next chapter.", cta: "Book a review \u2192" },
          { bg: "white", label: "International", headline: "New markets in the new year.", body: "Start planning your international expansion now.", cta: "Explore \u2192" },
          { bg: "berry", label: "2027 Goals", headline: "New year. Bigger goals.", body: "Strategic planning workshops for the year ahead.", cta: "Register \u2192" },
          { bg: "cobalt", label: "Gratitude", headline: "Thank your customers.", body: "A simple thank-you goes further than any discount." },
        ],
      },
      {
        type: "billboard",
        card: { bg: "navy", label: "Happy New Year", headline: "Here\u2019s to the builders, the dreamers, and the doers.", body: "From all of us at NorCal SBDC \u2014 thank you for a great year. We\u2019ll see you in 2027 with the same free, expert advising that\u2019s helped thousands of businesses succeed.", cta: "norcalsbdc.org \u2192" },
      },
    ],
  },
];
