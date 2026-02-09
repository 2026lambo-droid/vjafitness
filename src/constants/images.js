// All images use fitness Unsplash URLs - no local tree/landscape assets
// Format: w=1920 for hero/wide, w=800 for cards, w=400 for thumbnails
const U = (id, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}`;

export const fitnessImages = {
  // Hero (16:9 landscape) - female fitness, gym, professional
  hero1: U("1534438327276-14e5300c3a48"),
  hero2: U("1549060279-7e168fcee0c2"),
  hero3: U("1571019613454-1cb2f99b2d8b"),
  hero4: U("1581009146145-b5ef050c149c"),
  // Feature / about (4:3) - VJAFitness fuerte Valeria photo
  feature: "/assets/img/fitness/feature-fuerte.png",
  // Services (cards - glute/leg, strength, coaching)
  service1: U("1517963879433-6ad2b056d712", 800),
  service2: U("1434682881908-b43d0467b798", 800),
  service3: U("1571902943202-507ec2618e8f", 800),
  service4: U("1588286840104-8957b019727f", 800),
  // Projects / transformations
  project1: U("1517963879433-6ad2b056d712", 800),
  project2: U("1581009146145-b5ef050c149c", 800),
  project3: U("1434682881908-b43d0467b798", 800),
  project4: U("1571019613454-1cb2f99b2d8b", 800),
  project5: U("1534438327276-14e5300c3a48", 800),
  // CTA backgrounds
  cta: U("1534438327276-14e5300c3a48"),
  ctaServices: U("1434682881908-b43d0467b798"),
  ctaAbout: U("1594381898411-846e7e1937b3"),
  // Video block
  video: U("1571902943202-507ec2618e8f", 800),
  // FAQ
  faq: U("1588286840104-8957b019727f", 800),
  faq2: U("1517963879433-6ad2b056d712", 800),
  // Blog posts
  post1: U("1594381898411-846e7e1937b3", 600),
  post2: U("1581009146145-b5ef050c149c", 600),
  post3: U("1571019613454-1cb2f99b2d8b", 600),
  // Avatar (square)
  avatar: U("1571019613454-1cb2f99b2d8b", 400),
  // Gallery
  gallery1: U("1517963879433-6ad2b056d712", 800),
  gallery2: U("1434682881908-b43d0467b798", 800),
  gallery3: U("1571902943202-507ec2618e8f", 800),
  gallery4: U("1588286840104-8957b019727f", 800),
  gallery5: U("1534438327276-14e5300c3a48", 800),
  gallery6: U("1549060279-7e168fcee0c2", 800),
  gallery7: U("1581009146145-b5ef050c149c", 800),
  gallery8: U("1594381898411-846e7e1937b3", 800),
  // Page headings
  headingBg: U("1534438327276-14e5300c3a48"),
  loginBg: U("1549060279-7e168fcee0c2"),
};

export const IMAGE_FALLBACK = fitnessImages.service1;
