
// Partner data structure
export interface Partner {
  name: string;
  logo: string;
  url: string;
  category_tag: string[];
  display_priority: number;
  description: string;
  subpage_content: string;
}

// Placeholder logo image (replace with real assets as needed)
const defaultLogo = "https://placehold.co/120x120/FFD700/010c43?text=LOGO";
const zeroTo3img = "/lovable-uploads/partners/l5.png"
const hashlegalimg = "/lovable-uploads/partners/l1.png"
const tslimg = "/lovable-uploads/partners/l3.png"
const kulaimg = "/lovable-uploads/partners/l7.png"
const cfjimg = "/lovable-uploads/partners/l8.png"
const ceylonimg = "/lovable-uploads/partners/l6.png"


// Partner data
export const partners: Partner[] = [
  {
    name: "ZeroTo3",
    logo: zeroTo3img,
    url: "https://zeroto3.com",
    category_tag: ["Web3 & Infrastructure"],
    display_priority: 1,
    description: "Legal & Startup Advisory Studio",
    subpage_content: "ZeroTo3 provides foundational support for legal structuring and IP development, making it an integral partner for startups navigating early-stage complexities in Web3 and entertainment.",
  },
  {
    name: "HashLegal",
    logo: hashlegalimg,
    url: "https://hashlegal.in",
    category_tag: ["Web3 & Infrastructure"],
    display_priority: 2,
    description: "Web3-Native Legal Counsel",
    subpage_content: "HashLegal delivers cutting-edge legal strategies and compliance solutions for tokenized ecosystems and decentralized platforms.",
  },
  {
    name: "IXSwap",
    logo: defaultLogo,
    url: "https://ixswap.io",
    category_tag: ["Venture & Finance"],
    display_priority: 3,
    description: "Decentralized Exchange & Token Liquidity",
    subpage_content: "IXSwap enables liquidity for tokenized assets through a hybrid liquidity pool and regulatory-first AMM framework.",
  },
  {
    name: "Story Protocol",
    logo: defaultLogo,
    url: "https://storyprotocol.xyz",
    category_tag: ["Media & Entertainment", "Web3 & Infrastructure"],
    display_priority: 4,
    description: "IP Registry & Licensing Layer",
    subpage_content: "Story Protocol empowers creators by decentralizing IP rights management using a programmable, transparent IP layer.",
  },
  {
    name: "PEAQ",
    logo: defaultLogo,
    url: "https://www.peaq.network",
    category_tag: ["Web3 & Infrastructure"],
    display_priority: 5,
    description: "DePIN Infrastructure & Protocol Partner",
    subpage_content: "PEAQ supports the infrastructure backbone for decentralized physical networks, driving real-world asset connectivity at scale.",
  },
  {
    name: "India Blockchain Alliance",
    logo: defaultLogo,
    url: "https://www.indiablockchainalliance.org",
    category_tag: ["Community & DAOs"],
    display_priority: 6,
    description: "Policy Advocacy & Ecosystem Network",
    subpage_content: "IBA connects policymakers, enterprises, and innovators to foster blockchain education, awareness, and adoption in India and beyond.",
  },
  {
    name: "ICP",
    logo: defaultLogo,
    url: "https://internetcomputer.org",
    category_tag: ["Web3 & Infrastructure"],
    display_priority: 7,
    description: "Internet Computer Protocol Ecosystem",
    subpage_content: "ICP enables scalable, secure, and open internet services through its blockchain-native compute model for smart contracts and dApps.",
  },
  {
    name: "4+ Ventures",
    logo: defaultLogo,
    url: "https://www.4plusventures.com",
    category_tag: ["Venture & Finance"],
    display_priority: 8,
    description: "Technology and Web3 Venture Builder",
    subpage_content: "4+ Ventures supports the development of Web3-native startups, from ideation to scaling with protocol-native infrastructure and funding.",
  },
  {
    name: "TSL Studios",
    logo: tslimg,
    url: "https://tslstudiostoken.com",
    category_tag: ["Media & Entertainment"],
    display_priority: 9,
    description: "Cross-border Film Production Studio",
    subpage_content: "TSL Studios specializes in cross-border film production and tokenization, bridging traditional media with Web3 innovations.",
  },
  {
    name: "Light House Productions",
    logo: defaultLogo,
    url: "https://worldlighthouse.com",
    category_tag: ["Media & Entertainment"],
    display_priority: 10,
    description: "Film Co-production Partner",
    subpage_content: "Co-production partner for Demon Hunters, bringing expertise in film production and digital asset integration.",
  },
  {
    name: "CW3",
    logo: defaultLogo,
    url: "https://cw3.global",
    category_tag: ["Community & DAOs"],
    display_priority: 11,
    description: "Creative DAO & Decentralized Studio",
    subpage_content: "Christians in Web3 (CW3) operates as a creative DAO and decentralized studio, fostering faith-based content in the Web3 space.",
  },
  {
    name: "Kleos Entertainment",
    logo: defaultLogo,
    url: "https://kleosent.com",
    category_tag: ["Media & Entertainment"],
    display_priority: 12,
    description: "Film IP Development Studio",
    subpage_content: "Kleos Entertainment focuses on film IP development and studio collaborations, creating innovative entertainment experiences.",
  },
  {
    name: "Red Carpet Universe",
    logo: defaultLogo,
    url: "https://redcarpetuniverse.com",
    category_tag: ["Media & Entertainment"],
    display_priority: 13,
    description: "Entertainment Metaverse Platform",
    subpage_content: "Entertainment metaverse and IP distribution platform, creating immersive digital experiences for content creators and consumers.",
  },
  {
    name: "Ceylon Cash",
    logo: ceylonimg,
    url: "https://ceyloncash.com",
    category_tag: ["Venture & Finance"],
    display_priority: 14,
    description: "Crypto-Diaspora Solutions",
    subpage_content: "Crypto-diaspora marketing and remittance partner, connecting communities through blockchain-based financial solutions.",
  },
  {
    name: "River Venture Studio",
    logo: defaultLogo,
    url: "https://riverventurestudio.com",
    category_tag: ["Venture & Finance"],
    display_priority: 15,
    description: "Industry 5.0 Token Incubator",
    subpage_content: "Incubator specializing in Industry 5.0 token startups, fostering innovation in the next generation of industrial technology.",
  },
  {
    name: "Amigoo Ventures",
    logo: defaultLogo,
    url: "https://amigoo.xyz",
    category_tag: ["Venture & Finance"],
    display_priority: 16,
    description: "Early-stage Venture Partner",
    subpage_content: "Early-stage capital and venture partner, supporting promising blockchain and Web3 startups.",
  },
  {
    name: "Kula DAO",
    logo: kulaimg,
    url: "https://kuladao.io",
    category_tag: ["Community & DAOs"],
    display_priority: 17,
    description: "Cultural Commons DAO",
    subpage_content: "Cultural commons and creator governance platform, empowering communities through decentralized decision-making.",
  },
  {
    name: "CrowdFundJunction",
    logo: cfjimg,
    url: "https://crowdfundjunction.com",
    category_tag: ["Community & DAOs", "Venture & Finance"],
    display_priority: 18,
    description: "Web3 Fundraising Hub",
    subpage_content: "Community-backed Web3 fundraising hub, connecting projects with supporters through innovative funding mechanisms.",
  },
  {
    name: "SP Jain School",
    logo: defaultLogo,
    url: "https://spjain.sg",
    category_tag: ["Education & Events"],
    display_priority: 19,
    description: "Global Management Institution",
    subpage_content: "SP Jain School of Global Management - Thought leadership and academic alliance partner for blockchain education.",
  },
  {
    name: "Singapore FinTech Festival",
    logo: defaultLogo,
    url: "https://fintechfestival.sg",
    category_tag: ["Education & Events"],
    display_priority: 20,
    description: "Innovation Showcase Platform",
    subpage_content: "Premier fintech and innovation showcase platform in Asia, connecting global leaders in technology and finance.",
  },
  {
    name: "GITEX Asia",
    logo: defaultLogo,
    url: "https://gitexasia.com",
    category_tag: ["Education & Events"],
    display_priority: 21,
    description: "Tech & Startup Showcase",
    subpage_content: "Asia's largest technology and startup showcase, featuring cutting-edge innovations and industry leaders.",
  },
  {
    name: "FinTech Frontiers",
    logo: defaultLogo,
    url: "https://fintechfrontiers.live",
    category_tag: ["Education & Events"],
    display_priority: 22,
    description: "Innovation Event Series",
    subpage_content: "Fintech innovation and event series, showcasing the latest developments in financial technology.",
  },
  {
    name: "Showlite Systems",
    logo: defaultLogo,
    url: "https://showlitesystems.com",
    category_tag: ["Education & Events"],
    display_priority: 23,
    description: "Smart Exhibition Solutions",
    subpage_content: "Immersive MICE & smart exhibition solutions provider, creating engaging digital-physical event spaces.",
  },
];
