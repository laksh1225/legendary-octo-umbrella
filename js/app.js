/**
 * Reqelford MUN 2026 - Main Application Logic
 * Implements Single Page Routing, Interactive Modals, Active Navigation Sync, and Committee Panels.
 */

// --- 1. DATA MODELS & CONTENT CONFIGURATION ---

// Secretariat Details & Biographies
const secretariatData = {
  sec_sg: {
    name: "Rohan Arun",
    role: "Secretary General",
    image: "images/rohan.jpeg",
    instagram: "rohan_press",
    bio: "I am a media and psychology enthusiast with a passion for leadership and storytelling, with my debut book <strong>The Last Pearl of the Deccan</strong> set to release this July. With over 10+ MUN experiences I bring both creativity and organizational expertise to the team. I am excited to help lead REQMUN into its next chapter!"
  },
  sec_dg: {
    name: "Suzanna Ivy",
    role: "Director General",
    image: "images/suzanna.jpeg",
    instagram: "suzanna_ivy07",
    bio: "Passionate about biology, the arts, and community service, I believe leadership is rooted in listening, learning, and empowering others. Through collaboration and thoughtful dialogue, I strive to foster growth, meaningful discourse, and enriching experiences."
  },
  sec_ca_sahasra: {
    name: "Nimmala Sahasra Reddy",
    role: "Chargé d'Affaires",
    image: "images/sahasra.jpeg",
    instagram: "sahasrareddy_77",
    bio: "I am a responsible, organized, and dedicated individual who values efficiency and excellence. I enjoy organizing MUN conferences, where my planning, coordination, and teamwork skills thrive."
  },
  sec_ca_aryan: {
    name: "Aryan Aditya Reddy",
    role: "Chargé d'Affaires",
    image: "images/Aryan.jpeg",
    instagram: "Adi_plays_guitar",
    bio: "With a passion for diplomacy, and teamwork, I enjoy connecting with people and bringing positive energy to every discussion. Through this conference I expect thoughtful debate, collaboration, and a touch of humor along the way."
  },
  sec_usg_it: {
    name: "Lakshyagna Amuktha Nandiknati",
    role: "USG IT",
    image: "images/lakshyagna.jpeg",
    instagram: "lakshyagna_amuktha",
    bio: "With experience in five MUN conferences as a Delegate, Vice-Chair, and Secretariat member, I bring a strong understanding of both diplomacy and conference operations. Driven by a passion for technology and innovation, I am committed to ensuring an efficient experience."
  },
  sec_usg_mkt: {
    name: "Dhita Sahasra",
    role: "USG Marketing",
    image: "images/dhita.jpeg",
    instagram: "dhita.sahasra",
    bio: "With passion for creativity and design. I enjoy bringing ideas to life through marketing and creative communication. Outside of my role, I love art, exploring new perspectives, and expressing myself through creative projects. I'm always looking for opportunities to learn, grow, and make an impact through the work I do."
  },
  sec_usg_log_aashish: {
    name: "Aashish Gundumeda",
    role: "USG Logistics",
    image: "images/aashish.jpeg",
    instagram: "aashish.awesomesauce",
    bio: "Having served in the previous two conferences as an OC member and later as Head OC, I have developed strong leadership and organizational skills. I am committed to ensuring smooth operations and a seamless conference experience for all."
  },
  sec_usg_log_bhavesh: {
    name: "Bhavesh Diddi",
    role: "USG Logistics",
    image: "images/bhavesh.jpeg",
    instagram: "bhaveshdiddi_",
    bio: "I am an active member of REQMUN’s organizing committee with a passion for dialogue, learning, and diverse perspectives. I enjoy engaging with people, sports, and continuous self-improvement."
  },
  sec_usg_cul_sridevi: {
    name: "Sridevi Karri",
    role: "USG Cultural Affairs",
    image: "images/sridevi.jpeg",
    instagram: "sr1devi.karri",
    bio: "I am passionate about music, creativity, and event planning, I strive to make REQMUN memorable through cultural events and social activities. My goal is to create an inclusive, vibrant atmosphere where delegates can connect, celebrate, and build lasting memories."
  },
  sec_usg_cul_vidhaat: {
    name: "Vidhaat Kurapati",
    role: "USG Cultural Affairs",
    image: "images/Vidhaat.jpeg",
    instagram: "vidhaat_1",
    bio: "I am a dancer, author, and enthusiast of literature and psychology, I’m passionate about creativity and learning. After earning Best OC in my first MUN, I’m excited to bring energy, culture, and meaningful experiences to every aspect of REQMUN Chapter 3."
  },
  sec_cd_hb: {
    name: "Hyunwook Kim",
    role: "CD Head Boy",
    image: "images/kim .jpeg",
    instagram: "hyunwookk639",
    bio: "I enjoy working with people, learning new things, and fostering a positive environment. I am committed to supporting delegates and staff, ensuring the conference runs smoothly and providing a productive, enjoyable, and memorable experience for everyone."
  },
  sec_cd_hg: {
    name: "Bodigam Akshitha Reddy",
    role: "CD Head Girl",
    image: "images/akshitha.jpeg",
    instagram: "akshitha_2k9",
    bio: "I enjoy teamwork, connecting with new people, and taking on new challenges. With a passion for learning and dancing, I aim to contribute to an enjoyable and welcoming experience for all."
  },
  sec_oc_design: {
    name: "Aisha Wesley",
    role: "OC Design",
    image: "images/aisha.jpeg",
    instagram: "mr.n1nefoot",
    bio: "I am an editor, designer, and writer with a passion for creativity and attention to detail. Driven to achieve the highest standards, I am committed to delivering the best possible result. As a designer for REQMUN 3.0, I look forward to contributing to the conference's success."
  },
  sec_oc_admin_asmit: {
    name: "Asmit Tripathi",
    role: "OC Admin",
    image: "images/Asmit.jpeg",
    instagram: "crash.6_",
    bio: "I am a basketball enthusiast, photographer, avid reader, and philosophy lover. each conference I have attended, has taught me many valuable lessons. As part of Logistics Team for REQMUN 3.0, I’m committed to learning, growing, and helping to ensure a successful and memorable Chapter 3."
  },
  sec_oc_admin_natalie: {
    name: "Natalie Rajiv Jaiswal",
    role: "OC Admin",
    image: "images/natalie.jpeg",
    bio: "I am a Class XI IG Commerce student with a strong passion for learning, leadership, and creativity. A Merit distinction holder in Class X and a Distinction recipient in Art & Design, I enjoy taking initiative, collaborating with others, and contributing meaningfully to every opportunity."
  }
};

// Committee Details, Agendas, EB, and Background Guides
const committeesData = {
  ecosoc: {
    id: "ecosoc",
    shortName: "ECOSOC",
    fullName: "Economic and Social Council",
    agenda: "Assessing the Economic and Social Implications of Peacebuilding and Reconciliation Efforts in Cyprus for Regional Development and Cooperation",
    eb: [
      {
        name: "Kingshuk",
        role: "Chair",
        image: "images/kingshuk.jpeg",
        bio: "Kingshuk, an Honours student of Food Science and Technology at GITAM (Deemed to be University), Hyderabad, brings experience chairing 15+ MUN committees. Founder and Former President of GMUN Hyderabad, he fosters inclusive, creative, and collaborative forums, guided by the belief that “with great power comes great responsibility,” 🕷️ ensuring every delegate is heard and engaged."
      },
      {
        name: "Sana Unnisa",
        role: "Vice chair",
        image: "images/sana.jpeg",
        bio: "Sana Unnisa is a grade 12 IBDP student at The Gaudium School, studying Global Politics (studying only that). She’s almost late to every committee session, hopefully she won’t be late this time. With her interest in international relations, she’s been in the circuit for about 3 years now, and she’s very excited to be back for another edition of REQMUN."
      },
      {
        name: "Khyathi",
        role: "Rapporteur",
        image: "images/khyathi.jpeg",
        bio: "I'm Khyathi Geethika, currently pursuing Master's in Applied Psychology striving to expand my skills in research and counselling. I will be serving as the rapporteur for ECOSOC at REQMUN 3.0. Over the months, I have been actively involved in MUNs primarily within the International Press Committee where I have served as the Director of Photography. This helped me strengthen my skills observing and documenting different committee proceedings, all of which I look forward to bringing to this committee and learn and teach at a new capacity."
      }
    ],
    // guideName: "ECOSOC_REQMUN2026_Background_Guide.pdf"
  },
  disec: {
    id: "disec",
    shortName: "DISEC",
    fullName: "Disarmament and International Security Committee",
    agenda: "Promoting Peace and Stability in the Arctic Amid Emerging Security Challenges",
    eb: [
      {
        name: "Suhas Itha",
        role: "Chair",
        image: "images/suhas.jpeg",
        bio: "Suhas Itha lives by one motto: “Be humble or get humbled.\"\nSuhas Itha is a student from Symbiosis Hyderabad and is on track to become a lawyer. He has been doing MUNs since 2020 and fell in love with it ever since. Besides re-watching Suits for the 100th time, he also enjoys reading very long UN documents, which he claims he does for fun. He is very excited to serve as your executive board member for this MUN."
      },
      {
        name: "Sai Karthik",
        role: "Vice chair",
        image: "images/karthik.jpeg",
        bio: "Meet Sai Karthik, the EIC for agnira mun and a B-Tech Computer Science student with a surprising soft spot for everything *but* science. Active in the Hyderabad MUN circuit for over a year, he thrives in unconventional committees like the World Economic Forum and rare ones like UNHCR, with UNHRC being his favourite playground. Passionate about geopolitics, creative writing, and nature photography, he loves the chaos and camaraderie of drafting resolutions and meeting new people. Armed with a wacky sense of humour, he lightens even the tensest debates. Weirdly punctual by his “earlier the better” rule, he also proudly lives by *How I Met Your Mother* quotes."
      },
      {
        name: "Yashitha Bhavani Nandiknati",
        role: "Rapporteur",
        image: "images/yashitha.jpeg",
        bio: "Yashitha is a motivated and versatile individual with strong academic interests in Computer Science, Mathematics, and Hindi. Her journey in Model United Nations began with a desire to become a confident speaker and develop meaningful diplomatic skills, and over time, she has grown into a thoughtful and articulate participant. Demonstrating her leadership in the circuit, she also served as the Director General of an MUN last year. She has earned an Honourable Mention in UNODC and has also taken on the role of an EMCEE at several school events, showcasing her confidence and communication abilities. \nBeyond academics, Yashitha is deeply engaged in creative pursuits such as writing, reading, dancing, and singing, reflecting a well-rounded personality. She brings valuable skills in team management, coordination, crisis handling, and time management, allowing her to contribute effectively in collaborative environments. Known for her responsible approach and clarity of thought, she is quick to resolve challenges and provide constructive feedback, often supported by innovative ideas. Guided by her belief that “all our dreams can come true, if we have the courage to pursue them,” Yashitha continues to strive for growth while contributing positively to every initiative she is a part of."
      }
    ],
    // guideName: "DISEC_REQMUN2026_Background_Guide.pdf"
  },
  jcc: {
    id: "jcc",
    shortName: "JCC",
    fullName: "Joint Crisis Committee",
    agenda: "Indo-Pak Geopolitical Crisis: Navigating Border Security, Cyber Escalations, and Real-Time Strategic Diplomatic Maneuvers",
    eb: [
      {
        name: "Sanjitha Moka",
        role: "Chair",
        image: "images/sanjitha.jpeg",
        bio: "\"In a world where silence is often mistaken for peace, true change requires voices to speak up and actions to follow.\"\nSanjitha Moka has dedicated herself to being that voice of change at her college. With a background in debates that traces back to her school days, she's honed her ability to articulate complex issues and rally others to action. As an integral member of Stentorian and VJ MUNSoc, she orchestrated numerous events and sometimes even winning them. \nWhen she isn’t breaking down business ideas on a whiteboard, over-analysing life decisions, you’ll usually find her with her headphones on, hopping away and when she’s stuck indoors, she’s probably binging Brooklyn 99 because, 𝘴𝘩𝘩𝘩, she’s 𝘯𝘰𝘵 𝘢 𝘥𝘰𝘤𝘵𝘰𝘳.\nShe's excited to be back at REQMUN 3.0."
      },
      {
        name: "Aashish Sai Krishna",
        role: "Vice chair",
        image: "images/aashish sai.jpeg",
        bio: "Meet Aashish Sai Krishna, a current graduate from Badruka College of Commerce and an Alumni of Avinash College of Commerce. He has been a prominent figure in the Hyderabad MUN circuit, having attended over wide range of conferences. He is renowned for his expertise primarily in the UN committees, having held roles both as a Delegate and an Executive Board member. \nIn his free time, you can find him vibing to his favourite Evergreen Telugu and Hindi songs, else spending extra hour lifting weights in the Gym. He is also a fan of movies such as Kalki 2898 AD, Sita Ramam and Arjun. Finally, he is enthusiastic about serving as part of the Executive Board for the conference and eagerly anticipates being a part of it."
      },
      {
        name: "Zhoreh Tejam",
        role: "Rapporteur",
        image: "images/zohrah.jpeg",
        bio: "Zohreh Tejam is a student at Woxsen university pursuing BCA, with a deep passion for technology and artificial intelligence. Exploring the limitless possibilities of Al inspires her to think critically, solve problems creatively, and imagine innovations that can shape the future. Alongside her interest in technology, Zohreh has built a strong presence in the world of Model United Nations. She began as a delegate, learning the art of debate and diplomacy, before moving into organisational roles as an Assistant Director and Director at both offline and online MUNs. A defining highlight of her journey was participating in Harvard MUN, which not only challenged her but also gave her passion for international relations a global platform. With every role she takes up, whether in debate halls or in exploring the future of Al, Zohreh grows as a thinker, leader, and problem-solver. For her, both technology and MUNs embody the same spirit: using ideas \ndialogue, and innovation to make an impact."
      },
      {
        name: "Chakresh",
        role: "Moderator",
        image: "images/chakresh.jpeg",
        bio: "Between reading webtoons, getting lost in films, and writing short stories at odd hours, Chakresh tends to live half in reality and half in fiction and he’s perfectly fine with that balance. Stories, in all their forms, are his favourite way to make sense of the world or at least pretend to."
      }
    ],
    // guideName: "JCC_REQMUN2026_Background_Guide.pdf"
  },
  loksabha: {
    id: "loksabha",
    shortName: "Lok Sabha",
    fullName: "Lok Sabha (Indian House of the People)",
    agenda: "The Constitution (One Hundred and Thirty-First Amendment) Bill, 2026 with Special Emphasis on Delimitation and Women’s Reservation <br><strong style='color: var(--color-gold); font-size: 0.95rem; display: inline-block; margin-top: 0.5rem;'>Freeze Date: April 16th, 2026</strong>",
    eb: [
      {
        name: "Nenavath Pavan Rathod",
        role: "Speaker",
        image: "images/pavan.jpeg",
        bio: "From the tribal roots of Telangana to global diplomatic corridors, Nenavath Pavan Rathod has emerged as a well-known and respected name across the MUN circuits of Southern India. An aspiring Indian diplomat (UPSC Civil Servant), he is driven by purpose, with a clear vision and mission to serve the nation. With over 60 MUN conferences across 6 cities and experience chairing 10+ diverse committees, he has not merely debated policies and issues, but has shaped discussions with conviction, strategy, and utmost professionalism.\nAt the World Summit Awards Global Congress 2025, he was among 150+ delegates from 50+ nations, representing India while exploring digital governance and innovation. He has also been a part of 4 NGOs Which are actively contributing to UN SDGs through ground-level initiatives impacting over 5+ lakh lives through several projects.\nReturning to REQMUN 3.0 as the Speaker of the Lok Sabha, he looks forward to upholding the spirit of parliamentary democracy and guiding Parliamentarians through an engaging and enriching legislative experience."
      },
      {
        name: "T. Navneet Reddy",
        role: "Deputy Speaker",
        image: "images/navneet.jpeg",
        bio: "Navneet Reddy, a business student, is a passionate debater with a strong interest in diplomacy, legal frameworks, and constitutional matters. Known for a composed demeanour and confident presence, Navneet has built a reputation for simplifying complex issues and demonstrating a clear understanding of parliamentary procedure. His experience spans high-intensity crisis simulations, Indian committees, and disarmament agendas, where he has consistently displayed adaptability, strategic thinking, and effective leadership.\nBeyond committee sessions, Navneet is recognized for his balanced approach to discussion and his ability to foster constructive debate. As Deputy speaker, he aims to ensure a disciplined, engaging, and intellectually enriching committee environment, encouraging delegates to participate meaningfully while upholding the spirit of parliamentary deliberation."
      },
      {
        name: "Tapasya Perugu",
        role: "Pro term Speaker",
        image: "images/tapasya.jpeg",
        bio: "Hey! I’m Tapasya Perugu, a Grade 12 student and the Pro Speaker of the Lok Sabha committee for REQMUN Chapter 3.0. I’m known for being talkative, easy-going, and empathetic, and I love meeting new people and hearing different perspectives. I strive to create a welcoming and engaging environment where everyone feels comfortable participating. Whether it’s a serious committee discussion or a casual conversation during UNMODS, I’m always happy to connect with others and if you’re up for it, I might even join you for a game of Roblox!"
      }
    ],
    // guideName: "Lok_Sabha_REQMUN2026_Background_Guide.pdf"
  },
  uncsw: {
    id: "uncsw",
    shortName: "UNCSW",
    fullName: "United Nations Commission on the Status of Women",
    agenda: "Balancing Cultural Sovereignty and Universal Commitments to Women's Rights, with Special Emphasis on Reservations to Article 16 of CEDAW",
    eb: [
      {
        name: "M. Shiva",
        role: "Chair",
        image: "images/shiva.jpeg",
        bio: "\"Debate is what keeps humans, human. We listen, question, and fix problems together, and that is how we build the world we live in\"\nShiva, is a driven student currently pursuing a Bachelor of Commerce alongside Chartered Accountancy, trying to keep academics and debating in balance. For the past four years, he has brought an energetic presence to the MUN circuit, steadily growing through roles as a delegate, Executive Board member, and key positions in various secretariats.\nFor Shiva, the first step to solving any issue is educating oneself and asking the hard questions that others avoid. He believes people should be politically aware, willing to question power, and ready to use words instead of anger to keep authority in check. And he sees MUNs as one of the few spaces that actually simulate this process and train people to do it in the real world."
      },
      {
        name: "Gunda Rahul",
        role: "Vice chair",
        image: "images/rahul.jpeg",
        bio: "Gunda Rahul is a BA Political Science Honours student with an interest in politics and international relations. In his free time, he enjoys watching MMA, exploring Indian political history, reading manga, and playing video games. He looks forward to facilitating a productive and engaging session for all delegates."
      },
      {
        name: "Varshitha Sadeneni",
        role: "Rapporteur",
        image: "images/varshitha.jpeg",
        bio: "Yo guys!\nI’m Varshitha Sadeneni, a second-year undergraduate student pursuing BSc Biotechnology at GITAM Hyderabad. I’ve been doing MUNs since 2023, and honestly, I love exploring unique committees just for the fun but UNHRC will always be my comfort zone after all.\nMUNs have always been a safe space for me, where I get to learn even the most basic things while meeting some amazing people along the way.\nApart from MUNs, I love watching movies especially flop movies for some reason 😭. And a fun fact about me: I can literally survive on egg fried rice forever."
      }
    ],
    // guideName: "UNCSW_REQMUN2026_Background_Guide.pdf"
  },
  ip: {
    id: "ip",
    shortName: "IP",
    fullName: "International Press and Photography Council",
    agenda: "",
    eb: [
      {
        name: "Gur Simran Kaur",
        role: "Director",
        image: "images/simran.jpeg",
        bio: "Gur Simran Kaur is delighted to take on the role of the Head of International Press. Currently pursuing her degree in BBA Finance, she has been an active part of the Hyderabad MUN circuit for the past three years, earning recognition for her work and receiving accolades at every single conference along the way. For her, MUNs are more than just conferences; they’re a space where writing meets diplomacy and deadlines. She envisions International Press as an engaging and worthwhile experience, and she hopes every journalist leaves with a newfound appreciation for writing, just like she did."
      },
      {
        name: "Rushikesh Reddy",
        role: "Director of Photography",
        image: "images/rushikesh.jpeg",
        bio: "I am glad to be the Director of Photography at REQMUN 2026! Whether you're a beginner or not, I am certain we can discover and hone your interest and skills in photography at REQMUN. And with that said, I encourage all to come! All the very best to you, dear participants. :)"
      },
      {
        name: "Jessica Tatapudi",
        role: "Editor in Chief",
        image: "images/jessica.jpeg",
        bio: "I am a student at Reqelford and an active member of the REQMUN community. I have participated in Model United Nations conferences as a delegate and previously served on the Hospitality Team for REQMUN Chapter 2, which has given me valuable insight into both the delegate experience and the behind-the-scenes efforts that contribute to a successful conference. Through these roles, I have developed strong communication, organizational, and collaborative skills.\nOutside academics and MUNs, I enjoy spending my free time reading books and watching my favourite shows. I am known for my curiosity and eagerness to learn, and I am always keen to explore new ideas, gain fresh perspectives, and develop my skills through every opportunity that comes my way.\nI am excited to serve as the Rapporteur for the International Press (IP) Committee. I look forward to contributing to the committee's success while learning, growing, and collaborating with delegates and members of the Executive Board throughout this enriching experience."
      }
    ],
    // guideName: "IP_REQMUN2026_Background_Guide.pdf"
  }
};

// --- 2. CORE SPA NAVIGATION & ROUTING ---

document.addEventListener("DOMContentLoaded", () => {
  // Navigation elements
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinksContainer = document.querySelector(".nav-links");
  const views = document.querySelectorAll(".page-view");

  // Modal elements
  const modalOverlay = document.getElementById("bioModal");
  const modalClose = document.querySelector(".modal-close");
  const modalBody = document.querySelector(".modal-body");

  // Sticky Navbar Scroll Listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Auto-highlight active scroll section only if we are in the home view
    const homeView = document.getElementById("homeView");
    if (homeView.classList.contains("active-view")) {
      const sections = document.querySelectorAll(".home-section");
      let currentSectionId = "hero";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute("id");
        }
      });

      // Update links matching home sections
      navLinks.forEach(link => {
        const targetView = link.getAttribute("data-target-view");
        const targetSection = link.getAttribute("data-target-section");

        if (targetView === "home" && targetSection === currentSectionId) {
          link.classList.add("active");
        } else if (targetView === "home") {
          link.classList.remove("active");
        }
      });
    }
  });

  // Mobile Hamburger Toggle
  if (burgerMenu) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("open");
      navLinksContainer.classList.toggle("mobile-active");
    });
  }

  // SPA View Switcher Routing Function
  window.switchView = function (viewName, sectionId = null) {
    // Hide mobile menu drawer
    if (navLinksContainer.classList.contains("mobile-active")) {
      burgerMenu.classList.remove("open");
      navLinksContainer.classList.remove("mobile-active");
    }

    // Toggle active view elements
    views.forEach(view => {
      if (view.id === `${viewName}View`) {
        view.classList.add("active-view");
      } else {
        view.classList.remove("active-view");
      }
    });

    // Update active nav link header highlights
    navLinks.forEach(link => {
      const linkView = link.getAttribute("data-target-view");
      const linkSection = link.getAttribute("data-target-section");

      if (linkView === viewName) {
        if (viewName !== "home" || (sectionId && linkSection === sectionId)) {
          link.classList.add("active");
        } else if (!sectionId && linkView === "home" && linkSection === "hero") {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      } else {
        link.classList.remove("active");
      }
    });

    // Handle scroll offsets for home sections
    if (viewName === "home") {
      if (sectionId) {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          setTimeout(() => {
            const offset = 75; // height of the navbar
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - offset,
              behavior: "smooth"
            });
          }, 50);
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    // Update URL hash state quietly without browser reload jump
    let newHash = `#/${viewName}`;
    if (sectionId) newHash += `/${sectionId}`;
    history.pushState(null, null, newHash);
  };

  // Nav link click events
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetView = link.getAttribute("data-target-view");
      const targetSection = link.getAttribute("data-target-section");
      switchView(targetView, targetSection);
    });
  });

  // Parse URL hash on initial page load to preserve deep linking
  function handleInitialRoute() {
    const hash = window.location.hash;
    if (hash) {
      const parts = hash.split("/");
      const viewName = parts[1];
      const sectionId = parts[2] || null;
      if (viewName === "home" || viewName === "secretariat" || viewName === "committees") {
        switchView(viewName, sectionId);
      } else {
        switchView("home");
      }
    } else {
      switchView("home");
    }
  }

  // Listen for back/forward browser navigation actions
  window.addEventListener("popstate", handleInitialRoute);

  // Call initial routing setup
  handleInitialRoute();

  // --- 3. SECRETARIAT MODAL CONTROLLERS ---

  // Opens detailed popup view with customized contents
  window.openSecretariatModal = function (memberId) {
    const data = secretariatData[memberId];
    if (!data) return;

    // Find the photo from data.image or dynamically from the card
    let imgHtml = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`;
    if (data.image) {
      imgHtml = `<img src="${data.image}" alt="${data.name}" style="width: 100%; height: 100%; object-fit: cover;">`;
    } else {
      const cardImg = Array.from(document.querySelectorAll('.sec-card img')).find(img => img.alt === data.name);
      if (cardImg) {
        imgHtml = `<img src="${cardImg.getAttribute('src')}" alt="${data.name}" style="width: 100%; height: 100%; object-fit: cover;">`;
      }
    }

    modalBody.innerHTML = `
      <div class="sec-img-holder modal-sec-img">
        ${imgHtml}
      </div>
      <span class="modal-role">${data.role}</span>
      <h3>${data.name}</h3>
      <p class="modal-bio">${data.bio}</p>
    `;

    modalOverlay.classList.add("active-modal");
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  // Opens detailed popup view for EB members
  window.openEBMemberModal = function (committeeId, memberIdx) {
    const committee = committeesData[committeeId];
    if (!committee || !committee.eb || !committee.eb[memberIdx]) return;
    const data = committee.eb[memberIdx];

    // Find the photo from the card dynamically
    let imgHtml = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`;
    const cardImg = Array.from(document.querySelectorAll('.sec-card img')).find(img => img.alt === data.name);
    if (cardImg) {
      imgHtml = `<img src="${cardImg.getAttribute('src')}" alt="${data.name}" style="width: 100%; height: 100%; object-fit: cover;">`;
    }

    modalBody.innerHTML = `
      <div class="sec-img-holder modal-sec-img">
        ${imgHtml}
      </div>
      <span class="modal-role">${data.role}</span>
      <h3>${data.name}</h3>
      <p class="modal-bio">${data.bio}</p>
    `;

    modalOverlay.classList.add("active-modal");
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  // Closes active popup view
  window.closeSecretariatModal = function () {
    modalOverlay.classList.remove("active-modal");
    document.body.style.overflow = "auto"; // Re-enable background scrolling
  };

  if (modalClose) {
    modalClose.addEventListener("click", closeSecretariatModal);
  }

  // Dismiss modal if clicking directly on overlay background
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeSecretariatModal();
      }
    });
  }

  // --- 4. COMMITTEES DASHBOARD ACTIONS ---

  // Swaps content panels in Committees directory
  window.selectCommittee = function (committeeId) {
    const data = committeesData[committeeId];
    if (!data) return;

    // Toggle active classes on tab selector buttons
    const tabButtons = document.querySelectorAll(".comm-tab-button");
    tabButtons.forEach(btn => {
      const btnId = btn.getAttribute("data-committee-id");
      if (btnId === committeeId) {
        btn.classList.add("active-tab");
      } else {
        btn.classList.remove("active-tab");
      }
    });

    // Populate the details panel
    const panel = document.getElementById("committeeDetailsPanel");

    // Add quick fade out/in effect
    panel.style.opacity = 0;
    panel.style.transform = "translateY(5px)";

    setTimeout(() => {
      // Build Executive Board Cards
      let ebCardsHtml = '';
      if (data.eb && data.eb.length > 0) {
        ebCardsHtml += `
          <div class="comm-details-section" style="margin-top: 2.5rem;">
            <h4 style="font-family: var(--font-sans); color: var(--color-gold); font-size: 1.25rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(242, 232, 220, 0.1); padding-bottom: 0.5rem;">Executive Board</h4>
            <div class="eb-grid">
        `;
        data.eb.forEach((member, idx) => {
          let imgHtml = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`;
          if (member.image) {
            imgHtml = `<img src="${member.image}" alt="${member.name}">`;
          }
          ebCardsHtml += `
            <div class="sec-card">
              <div class="sec-img-holder">
                ${imgHtml}
              </div>
              <div class="sec-details">
                <div>
                  <span class="sec-role">${member.role}</span>
                  <h3>${member.name}</h3>
                </div>
                <button class="btn btn-secondary" onclick="openEBMemberModal('${committeeId}', ${idx})">View Bio</button>
              </div>
            </div>
          `;
        });
        ebCardsHtml += `
            </div>
          </div>
        `;
      }

      let agendaBoxHtml = '';
      if (data.agenda) {
        agendaBoxHtml = `
          <div class="comm-agenda-box">
            <h4>Agenda Topic</h4>
            <p>${data.agenda}</p>
          </div>
        `;
      }

      // Update Panel Inner HTML
      panel.innerHTML = `
        <div class="comm-title-row">
          <div class="comm-title-badge">${data.shortName}</div>
          <span style="font-size:0.85rem; text-transform:uppercase; color:var(--color-gold); font-weight:600; letter-spacing:1px;">Reqelford MUN 2026</span>
        </div>
        
        <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; font-family: var(--font-sans); font-weight: 700; color: var(--color-cream);">${data.fullName}</h3>
        
        ${agendaBoxHtml}
        
        ${ebCardsHtml}
      `;
      /*
      +
      `
      <div class="comm-details-section">
        <h4>Study Resources</h4>
        <div class="guide-box">
          <div class="guide-info">
            <h5>Official Background Guide</h5>
            <p>Download the curated background briefing document to study committees guidelines, procedural steps, and specific policies.</p>
          </div>
          <button class="btn btn-accent" onclick="downloadSimulatedGuide('${data.guideName}')">
            <svg style="fill:currentColor; width:18px; height:18px;" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
            Download PDF
          </button>
        </div>
      </div>
    `;
    */

      panel.style.opacity = 1;
      panel.style.transform = "translateY(0)";
    }, 200);
  };

  /*
  // Helper simulated downloader
  window.downloadSimulatedGuide = function(fileName) {
    alert(`Initiating secure study download: ${fileName}\n\nNote: In the final production deployment, this will retrieve the official PDF background guide file.`);
  };
  */

  // Initialize first committee tab automatically inside view
  selectCommittee("ecosoc");

  // --- 5. PREMIUM SCROLL FLY-IN ANIMATIONS ---
  const scrollSections = document.querySelectorAll(".home-section");
  const scrollObserverOptions = {
    root: null,
    threshold: 0.05,
    rootMargin: "0px 0px -60px 0px"
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fly-in-visible");
        observer.unobserve(entry.target);
      }
    });
  }, scrollObserverOptions);

  scrollSections.forEach(section => {
    scrollObserver.observe(section);
  });

  // --- 6. MINI SECRETARIAT ROTATING PREVIEW ---
  const secretariatPairs = [
    ["sec_sg", "sec_dg"],
    ["sec_ca_sahasra", "sec_ca_aryan"],
    ["sec_usg_it", "sec_usg_mkt"],
    ["sec_usg_cul_sridevi", "sec_usg_cul_vidhaat"],
    ["sec_usg_log_aashish", "sec_usg_log_bhavesh"],
    ["sec_cd_hb", "sec_cd_hg"]
  ];
  let currentPairIdx = 0;

  function rotateMiniSecretariat() {
    const container = document.getElementById("miniSecretariatCards");
    if (!container) return;

    const pair = secretariatPairs[currentPairIdx];
    const key1 = pair[0];
    const key2 = pair[1];
    const m1 = secretariatData[key1];
    const m2 = secretariatData[key2];

    const cards = container.querySelectorAll(".sec-preview-card");
    if (cards.length > 0) {
      // Fade out
      cards.forEach(card => card.classList.add("rotate-fade"));

      setTimeout(() => {
        renderMiniCards(container, key1, m1, key2, m2);
        // Force reflow and fade back in
        const newCards = container.querySelectorAll(".sec-preview-card");
        newCards.forEach(card => {
          card.classList.add("rotate-fade");
          card.offsetHeight; // trigger reflow
          card.classList.remove("rotate-fade");
        });
      }, 400);
    } else {
      // Direct render on load without fade
      renderMiniCards(container, key1, m1, key2, m2);
      const newCards = container.querySelectorAll(".sec-preview-card");
      newCards.forEach(card => card.classList.remove("rotate-fade"));
    }

    currentPairIdx = (currentPairIdx + 1) % secretariatPairs.length;
  }

  function renderMiniCards(container, key1, m1, key2, m2) {
    const instaHtml1 = m1.instagram ? `
      <div class="card-instagram-wrapper" style="margin-top: 1rem; margin-bottom: 0.5rem;">
        <a href="https://instagram.com/${m1.instagram}" target="_blank" rel="noopener noreferrer" class="modal-instagram" style="font-size: 0.8rem; padding: 0.35rem 1rem;">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="display:inline-block; vertical-align:middle; margin-right: 0.25rem;">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          @${m1.instagram}
        </a>
      </div>
    ` : '';

    const instaHtml2 = m2.instagram ? `
      <div class="card-instagram-wrapper" style="margin-top: 1rem; margin-bottom: 0.5rem;">
        <a href="https://instagram.com/${m2.instagram}" target="_blank" rel="noopener noreferrer" class="modal-instagram" style="font-size: 0.8rem; padding: 0.35rem 1rem;">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="display:inline-block; vertical-align:middle; margin-right: 0.25rem;">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          @${m2.instagram}
        </a>
      </div>
    ` : '';

    container.innerHTML = `
      <div class="sec-card sec-preview-card rotate-fade">
        <div class="sec-img-holder">
          <img src="${m1.image}" alt="${m1.name}">
        </div>
        <div class="sec-details">
          <div>
            <span class="sec-role">${m1.role}</span>
            <h3>${m1.name}</h3>
          </div>
          ${instaHtml1}
          <button class="btn btn-secondary" onclick="openSecretariatModal('${key1}')">View Bio</button>
        </div>
      </div>
      <div class="sec-card sec-preview-card rotate-fade">
        <div class="sec-img-holder">
          <img src="${m2.image}" alt="${m2.name}">
        </div>
        <div class="sec-details">
          <div>
            <span class="sec-role">${m2.role}</span>
            <h3>${m2.name}</h3>
          </div>
          ${instaHtml2}
          <button class="btn btn-secondary" onclick="openSecretariatModal('${key2}')">View Bio</button>
        </div>
      </div>
    `;
  }

  // Inject Instagram buttons on secretariat cards dynamically
  const secretariatButtons = document.querySelectorAll("button[onclick^='openSecretariatModal']");
  secretariatButtons.forEach(btn => {
    const match = btn.getAttribute("onclick").match(/'([^']+)'/);
    if (match && match[1]) {
      const memberKey = match[1];
      const member = secretariatData[memberKey];
      if (member && member.instagram) {
        const wrapper = document.createElement("div");
        wrapper.className = "card-instagram-wrapper";
        wrapper.style.marginTop = "1rem";
        wrapper.style.marginBottom = "0.5rem";
        wrapper.innerHTML = `
          <a href="https://instagram.com/${member.instagram}" target="_blank" rel="noopener noreferrer" class="modal-instagram" style="font-size: 0.8rem; padding: 0.35rem 1rem;">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="display:inline-block; vertical-align:middle; margin-right: 0.25rem;">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @${member.instagram}
          </a>
        `;
        btn.parentNode.insertBefore(wrapper, btn);
      }
    }
  });

  // Initialize and start interval
  rotateMiniSecretariat();
  setInterval(rotateMiniSecretariat, 5000);
});
