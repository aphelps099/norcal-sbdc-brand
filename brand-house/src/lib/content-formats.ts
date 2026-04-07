export interface ContentQuestion {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "textarea" | "select";
  options?: string[];
  required?: boolean;
}

export interface ContentFormat {
  id: string;
  label: string;
  description: string;
  questions: ContentQuestion[];
}

const LINK_FIELD: ContentQuestion = {
  id: "link",
  label: "Link / URL",
  placeholder: "e.g. https://norcalsbdc.org/events/workshop-123",
  type: "text",
};

export const CONTENT_FORMATS: ContentFormat[] = [
  {
    id: "success-story",
    label: "Success Story",
    description: "Client story following the 4-step brand template.",
    questions: [
      { id: "client", label: "Client name & business", placeholder: "e.g. Maria Lopez, Flores Micheladas", type: "text", required: true },
      { id: "outcome", label: "What was the outcome?", placeholder: "e.g. Secured $200K in funding, opened second location, created 8 jobs", type: "textarea", required: true },
      { id: "advisor", label: "Advisor name (if known)", placeholder: "e.g. Sarah Chen", type: "text" },
      { id: "challenge", label: "What challenge brought them to SBDC?", placeholder: "e.g. Needed help with a business plan to secure SBA loan", type: "textarea" },
      LINK_FIELD,
    ],
  },
  {
    id: "social-post",
    label: "Social Media Post",
    description: "Platform-optimized post with brand voice.",
    questions: [
      { id: "platform", label: "Platform", placeholder: "Select platform", type: "select", options: ["LinkedIn", "Facebook", "Instagram", "X / Twitter"], required: true },
      { id: "topic", label: "Topic or stat to highlight", placeholder: "e.g. Upcoming workshop on access to capital", type: "textarea", required: true },
      LINK_FIELD,
    ],
  },
  {
    id: "workshop-flyer",
    label: "Workshop / Event",
    description: "Event promo copy for flyers, emails, or social.",
    questions: [
      { id: "title", label: "Event title", placeholder: "e.g. Access to Capital Workshop", type: "text", required: true },
      { id: "details", label: "Date, time, location", placeholder: "e.g. March 15, 2026, 10am–12pm, Sacramento SBDC", type: "text", required: true },
      { id: "audience", label: "Target audience", placeholder: "e.g. Early-stage entrepreneurs seeking SBA loans", type: "text" },
      { ...LINK_FIELD, placeholder: "e.g. https://norcalsbdc.org/events/register" },
    ],
  },
  {
    id: "email-snippet",
    label: "Email Snippet",
    description: "Email copy with required SBA/ADA disclaimer.",
    questions: [
      { id: "purpose", label: "Purpose of the email", placeholder: "e.g. Invite clients to free tax planning workshop", type: "textarea", required: true },
      { id: "audience", label: "Target audience", placeholder: "e.g. Existing clients who haven't visited in 6+ months", type: "text" },
      LINK_FIELD,
    ],
  },
  {
    id: "lender-outreach",
    label: "Lender Outreach",
    description: "Professional outreach to lenders and partners.",
    questions: [
      { id: "lender", label: "Lender or institution", placeholder: "e.g. Valley Republic Bank", type: "text", required: true },
      { id: "ask", label: "Specific ask or program", placeholder: "e.g. Referring a client for SBA 7(a) loan, $150K", type: "textarea", required: true },
      LINK_FIELD,
    ],
  },
  {
    id: "newsletter-intro",
    label: "Newsletter Intro",
    description: "Opening section for The Business Advisor newsletter.",
    questions: [
      { id: "theme", label: "Newsletter theme or topic", placeholder: "e.g. Spring funding roundup", type: "text", required: true },
      { id: "highlight", label: "Key stat or story to reference", placeholder: "e.g. 3 new SBA loan programs launched this quarter", type: "textarea" },
      LINK_FIELD,
    ],
  },
  {
    id: "client-spotlight",
    label: "Client Spotlight",
    description: "Short-form spotlight for social or newsletter.",
    questions: [
      { id: "client", label: "Client name & business", placeholder: "e.g. James Walker, Walker & Sons Construction", type: "text", required: true },
      { id: "achievement", label: "Key achievement or milestone", placeholder: "e.g. Tripled revenue in 18 months after SBDC advising", type: "textarea", required: true },
      LINK_FIELD,
    ],
  },
];
