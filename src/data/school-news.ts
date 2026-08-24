export type SchoolNewsItem = {
  slug: string;
  category: string;
  published: string;
  title: string;
  excerpt: string;
  image: string;
  body: string[];
  details?: { label: string; value: string }[];
};

export const schoolNews: SchoolNewsItem[] = [
  {
    slug: "second-entrance-examination",
    category: "Admissions",
    published: "4 August · 10:00 a.m.",
    title: "Second entrance examination",
    excerpt: "Our second entrance examination will take place on 4 August at the Malex International School venue. The examination begins promptly at 10:00 a.m.",
    image: "/images/news/entrance-examination-2026.png",
    body: [
      "Families seeking admission to Malex International School are invited to attend our second entrance examination at the school venue.",
      "The examination begins promptly at 10:00 a.m. on 4 August. Candidates and their families are encouraged to arrive early so they can settle in before the examination begins.",
      "For directions, admission guidance, or questions about what to bring, please contact the school team before the examination day.",
    ],
    details: [
      { label: "Date", value: "4 August" },
      { label: "Time", value: "10:00 a.m. prompt" },
      { label: "Venue", value: "Malex International School" },
      { label: "Address", value: "2A Niger Close, Uwani, Enugu" },
    ],
  },
  {
    slug: "summer-lessons-2025",
    category: "School Update",
    published: "3–24 August 2025",
    title: "Summer lessons are open",
    excerpt: "Enrollment is open for Malex summer lessons for crèche, kindergarten, basic, junior secondary, and senior secondary learners, with academic and trade subjects available throughout the programme.",
    image: "/images/news/summer-lessons-2025.png",
    body: [
      "Malex summer lessons bring learners back into a focused, encouraging environment where they can strengthen core knowledge and prepare confidently for the term ahead.",
      "The programme welcomes learners across Crèche, Kindergarten, Basic, Junior Secondary, and Senior Secondary stages. Academic and trade subjects are included according to each learner’s level.",
      "Families can visit the school or contact the admissions team for enrolment information and guidance.",
    ],
    details: [
      { label: "Programme dates", value: "3–24 August 2025" },
      { label: "Venue", value: "Malex International School" },
      { label: "Who can attend", value: "Crèche through Senior Secondary" },
    ],
  },
  {
    slug: "house-spirit-in-motion",
    category: "Sport",
    published: "Earlier update",
    title: "House spirit in motion",
    excerpt: "A joyful day of teamwork, determination, and friendly competition across the Malex community.",
    image: "/images/Activities/Interhouse Sports/ChatGPT Image Aug 22, 2026, 07_14_03 PM (1).png",
    body: ["Inter-house Sports gives every learner a place to participate, contribute, and cheer for others.", "Across the day, friendly competition becomes a practical lesson in teamwork, discipline, resilience, and school spirit."],
  },
  {
    slug: "culture-language-belonging",
    category: "Community",
    published: "Earlier update",
    title: "Culture, language, and belonging",
    excerpt: "Our Cultural Day brought learners together through dress, stories, music, food, and shared heritage.",
    image: "/images/Activities/Cultural day pictures/ChatGPT Image Aug 22, 2026, 06_59_23 PM (1).png",
    body: ["Cultural Day is a joyful expression of the many stories that shape our school community.", "Through traditional dress, language, music, food, and performance, learners share their heritage while developing curiosity and respect for the traditions of others."],
  },
  {
    slug: "learning-beyond-the-classroom",
    category: "Excursion",
    published: "Earlier update",
    title: "Learning beyond the classroom",
    excerpt: "The Nike Lake excursion transformed curiosity into discovery, conversation, and lasting memories.",
    image: "/images/Activities/Escortion to Nike Lake/ChatGPT Image Aug 22, 2026, 07_16_34 PM (1).png",
    body: ["Learning takes on new meaning when learners can see, touch, ask, and explore beyond the classroom.", "Our Nike Lake excursion created space for discovery, conversation, friendship, and memorable experiences that learners could carry back into their studies."],
  },
  {
    slug: "young-voices-take-the-stage",
    category: "Achievement",
    published: "Earlier update",
    title: "Young voices take the stage",
    excerpt: "Malex debaters demonstrated courage, clarity, and respect while presenting ideas with confidence.",
    image: "/images/Activities/Interschool Debate/ChatGPT Image Aug 22, 2026, 07_29_48 PM (1).png",
    body: ["Debate challenges learners to think carefully, listen respectfully, and communicate their ideas with clarity.", "Representing Malex on the interschool stage, our young speakers demonstrated preparation, courage, teamwork, and confidence."],
  },
  {
    slug: "celebrating-the-next-chapter",
    category: "Milestone",
    published: "Earlier update",
    title: "Celebrating the next chapter",
    excerpt: "Families, teachers, and learners gathered to honour achievement and welcome a promising new beginning.",
    image: "/images/Activities/Graduation Pictures/ChatGPT Image Aug 22, 2026, 06_52_12 PM (1).png",
    body: ["Graduation is both a celebration of what has been achieved and a confident step toward what comes next.", "Families, teachers, and learners gathered to recognise persistence, growth, friendship, and the many people who helped make each milestone possible."],
  },
  {
    slug: "curiosity-travels",
    category: "Excursion",
    published: "Earlier update",
    title: "Curiosity travels",
    excerpt: "A day at Oakland gave learners fresh spaces to explore, connect, and see learning from a new perspective.",
    image: "/images/Activities/Escortion to Oakland/ChatGPT Image Aug 22, 2026, 07_18_37 PM (1).png",
    body: ["The Oakland excursion gave learners a fresh environment in which to explore, connect, and learn together.", "Experiences like this build independence and curiosity while turning lessons into moments learners can remember and discuss long after the day ends."],
  },
];
