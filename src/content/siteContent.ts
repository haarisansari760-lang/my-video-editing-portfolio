// =============================================================
// SKYRIS - SITE CONTENT CONFIG
// -------------------------------------------------------------
// Every editable piece of copy, link and media path lives here.
// Update this file to change the site. Components only render
// what is defined below, they should not need to change.
// =============================================================

export interface WorkItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  // REPLACE PROJECT VIDEO FILES HERE (public/videos/project-0X.mp4)
  videoSrc: string;
}

export interface ServiceItem {
  number: string;
  tag: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const brand = {
  name: "SKYRIS",
  instagramHandle: "@ed.skyris",
  instagramUrl: "https://instagram.com/ed.skyris",
  email: "darkmorven@gmail.com",
  emailLink: "mailto:darkmorven@gmail.com",
  
  experience: "2 years",
  focus: "short form content only",
  tagline: "VISUAL STORYTELLER",
};

export const nav = {
  logo: brand.name,
  links: [
    { label: "Work", href: "#work" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ],
};

// -------------------------------------------------------------
// AVATAR
// REPLACE AVATAR IMAGE FILE AT: public/assets/avatar.png
// -------------------------------------------------------------
export const avatarConfig = {
  src: "/assets/avatar.png",
  alt: "SKYRIS avatar",
  // How aggressively green pixels are keyed out. Lower = more removed.
  greenThreshold: 42,
  // Edge softness for the chroma key, higher = softer transition.
  softness: 46,
  // Subtle color grading applied after keying, 0-1 strength.
  gradeStrength: 0.16,
};

export const hero = {
  eyebrow: "VISUAL STORYTELLER",
  headlineLines: ["I MAKE", "VIDEOS", "WORTH WATCHING."],
  subtext:
    "I edit short form content for creators, brands and podcasts, with a focus on story, pacing, sound and attention.",
  primaryButton: { label: "View work", href: "#work" },
  secondaryButton: { label: "Let's work", href: "#contact" },
  stats: [
    { label: "Experience", value: brand.experience },
    { label: "Focus", value: brand.focus },
  ],
};

// -------------------------------------------------------------
// INTRO VIDEO
// REPLACE INTRO VIDEO FILE AT: public/videos/intro.mp4
// -------------------------------------------------------------
export const introSection = {
  eyebrow: "BEFORE THE WORK",
  line: "A quick hello, then the work.",
  videoSrc: "/videos/intro.mp4",
};

// -------------------------------------------------------------
// SELECTED WORK
// REPLACE TITLES, DESCRIPTIONS AND VIDEO FILES BELOW
// Video files live in public/videos/project-01.mp4 ... project-06.mp4
// -------------------------------------------------------------
export const workItems: WorkItem[] = [
  {
    id: "talking-head",
    number: "01",
    category: "Talking Head",
    title: "Direct to camera",
    description: "Clean pacing and framing that keeps a single voice easy to watch.",
    videoSrc: "/videos/project-01.mp4",
  },
  {
    id: "podcast-clip",
    number: "02",
    category: "Podcast Clip",
    title: "The best five minutes",
    description: "A long conversation cut down to the moment worth sharing.",
    videoSrc: "/videos/project-02.mp4",
  },
  {
    id: "faceless-content",
    number: "03",
    category: "Faceless Content",
    title: "Told without a face",
    description: "B roll, captions and sound carrying the story on their own.",
    videoSrc: "/videos/project-03.mp4",
  },
  {
    id: "creator-content",
    number: "04",
    category: "Creator Content",
    title: "Built for a feed",
    description: "Personality driven editing shaped around how people actually scroll.",
    videoSrc: "/videos/project-04.mp4",
  },
  {
    id: "brand-social",
    number: "05",
    category: "Brand and Social",
    title: "A message, made watchable",
    description: "Brand tone kept intact while the edit does the heavy lifting.",
    videoSrc: "/videos/project-05.mp4",
  },
  {
    id: "real-estate",
    number: "06",
    category: "Real Estate",
    title: "A space worth visiting",
    description: "Movement and rhythm that make a property feel real.",
    videoSrc: "/videos/project-06.mp4",
  },
];

export const approach = {
  eyebrow: "MINDSET",
  headlineLines: ["THE EDIT", "SHOULDN'T", "BE THE STAR."],
  paragraphs: [
    "I do not cut to make a video look complicated. I cut to make the story easier to watch.",
    "Every cut, pause, sound and movement should have a reason. It should keep attention, build emotion and make the message land.",
  ],
};

export const services: ServiceItem[] = [
  {
    number: "01",
    tag: "Short Form",
    title: "Reels and Shorts",
    description: "Talking head and creator edits built around pacing, clarity and retention.",
  },
  {
    number: "02",
    tag: "Podcast",
    title: "Podcast Clips",
    description: "Strong moments turned into clean, engaging social clips.",
  },
  {
    number: "03",
    tag: "Faceless",
    title: "Faceless Content",
    description: "B roll, captions, sound design and visual structure without needing a face on screen.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "I learn the story, the audience and what the video needs to do.",
  },
  {
    number: "02",
    title: "Build",
    description: "I structure the footage into a clear, watchable sequence.",
  },
  {
    number: "03",
    title: "Refine",
    description: "Pacing, sound and detail are tightened until it feels right.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "You get a finished file, ready to post, in the format you need.",
  },
];

export const contact = {
  eyebrow: "HAVE FOOTAGE?",
  headlineLines: ["LET'S MAKE", "SOMETHING", "WORTH WATCHING."],
  supportingLine: "Tell me what you're creating and what you want the viewer to feel.",
  buttons: [
    { label: "Instagram", href: brand.instagramUrl, external: true },
    { label: "Email", href: brand.emailLink, external: false },
  ],
};

export const footer = {
  name: brand.name,
  tagline: brand.tagline,
  copyright: `© 2026 ${brand.name}`,
};
