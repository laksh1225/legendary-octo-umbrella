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
    bio: "I am an author with my first book “The Last Pearl of the Deccan”, releasing this July, I am also a media and psychology enthusiast, I’m passionate about leadership and storytelling, with over 10+ MUN experiences and previous experience as USG Marketing (REQMUN 2.0), and I’m excited to lead REQMUN into its next chapter!"
  },
  sec_dg: {
    name: "Suzanna Ivy",
    role: "Director General",
    bio: "As the Director General of REQMUN 3.0. I am passionate about biology, the arts, and community service, I believe leadership is rooted in listening, learning, and empowering others. Through collaboration and thoughtful dialogue, I hope to create an enriching conference experience defined by diplomacy, growth, and meaningful discourse."
  },
  sec_ca_sahasra: {
    name: "Nimmala Sahasra Reddy",
    role: "Chargé d'Affaires",
    bio: "I am responsible, organized, and a dedicated individual who values efficiency and excellence. While I maintain high standards, I am also approachable, supportive, and collaborative.  I enjoy organizing MUN conferences, where my planning, coordination, and teamwork skills thrive."
  },
  sec_ca_aryan: {
    name: "Aryan Aditya Reddy",
    role: "Chargé d'Affaires",
    bio: "I am excited to serve as Chargé ’d affairs at this conference. With a passion for diplomacy, and teamwork, I enjoy connecting with people and bringing positive energy to every discussion. Through this conference I expect thoughtful debate, collaboration, and a touch of humour along the way."
  },
  sec_usg_it: {
    name: "Lakshyagna Amuktha Nandiknati",
    role: "USG IT",
    bio: "With five MUN conferences of experience as a delegate, Vice-Chair, and Secretariat member, I bring both diplomatic insight and technical expertise. I am passionate about technology and innovation; I’m committed to ensuring a seamless and efficient conference experience behind the scenes."
  },
  sec_usg_mkt: {
    name: "Dhita Sahasra",
    role: "USG Marketing",
    bio: "With a passion for creativity, design, and visuals. Having worked in design, I enjoy bringing ideas to life through marketing and creative communication. Outside of my role, I love art, exploring new perspectives, and expressing myself through creative projects. I'm always looking for opportunities to learn, grow, and make a meaningful impact through the work I do."
  },
  sec_usg_log_aashish: {
    name: "Aashish Gundumeda",
    role: "USG Logistics",
    bio: "Having served in the previous two conferences as an Organizing Committee member and later as Head of the Organizing Committee, I’ve developed strong leadership and organizational skills. I’m now committed to ensuring smooth operations and a seamless, memorable conference experience for all."
  },
  sec_usg_log_bhavesh: {
    name: "Bhavesh Diddi",
    role: "USG Logistics",
    bio: "I am an active member of REQMUN’s organizing committee with a passion for dialogue, learning, and diverse perspectives. I enjoy engaging with people, sports, and continuous self-improvement."
  },
  sec_usg_cul_sridevi: {
    name: "Sridevi Karri",
    role: "USG Cultural Affairs",
    bio: "I am passionate about music, creativity, and event planning, I strive to make REQMUN memorable through cultural events and social activities. My goal is to create an inclusive, vibrant atmosphere where delegates can connect, celebrate, and build lasting memories."
  },
  sec_usg_cul_vidhaat: {
    name: "Vidhaat Kurapati",
    role: "USG Cultural Affairs",
    bio: "I am a dancer, author, and enthusiast of literature and psychology, I’m passionate about creativity and learning. After earning Best OC in my first MUN, I’m excited to bring energy, culture, and meaningful experiences to every aspect of REQMUN Chapter 3."
  },
  sec_cd_hb: {
    name: "Hyunwook Kim",
    role: "CD Head Boy",
    bio: "I enjoy working with people, learning new things, and fostering a positive environment. I am committed to supporting delegates and staff, ensuring the conference runs smoothly and providing a productive, enjoyable, and memorable experience for everyone."
  },
  sec_cd_hg: {
    name: "Bodigam Akshitha Reddy",
    role: "CD Head Girl",
    bio: "I enjoy teamwork, meeting new people, and staying organized. I am passionate about learning, dancing, and personal growth, I believe MUN is about collaboration and development. My goal is to create a welcoming environment where everyone can have a meaningful and memorable experience."
  },
  sec_oc_design: {
    name: "Aisha Wesley",
    role: "OC Design",
    bio: "I am an editor, designer, writer and professional geek.  I ensure that my drive will help me achieve the best possible result. As a designer for REQMUN 3.0 I can't wait to get to work. Are you ready for chapter 3?"
  },
  sec_oc_admin_asmit: {
    name: "Asmit Tripathi",
    role: "OC Admin",
    bio: "I am a basketball enthusiast, photographer, avid reader, and philosophy lover. each conference I have attendant has taught me many valuable lessons. As part of the Logistics Team for REQMUN 3.0, I’m committed to learning, growing, and helping ensure a successful and memorable Chapter 3."
  },
  sec_oc_admin_natalie: {
    name: "Natalie Rajiv Jaiswal",
    role: "OC Admin",
    bio: "I am a Class XI IG Commerce student with a strong passion for learning, leadership, and creativity. A Merit distinction holder in Class X and a Distinction recipient in Art & Design, I enjoy taking initiative, collaborating with others, and contributing meaningfully to every opportunity."
  }
};

// Committee Details, Agendas, EB, and Background Guides
const committeesData = {
  ecosoc: {
    id: "ecosoc",
    shortName: "ECOSOC",
    fullName: "Economic and Social Council",
    agenda: "Addressing Global Economic Fluctuations, Inflationary Pressures, and Sustainable Development Goals in Post-Pandemic Economies",
    eb: [
      {
        name: "Kingshuk",
        role: "Chair",
        bio: "Kingshuk is a seasoned diplomat with a deep understanding of economic frameworks and development policies, dedicated to steering the committee towards actionable resolutions."
      },
      {
        name: "Sana Unnisa",
        role: "Vice chair",
        bio: "Sana is an expert in social development and international relations, committed to helping delegates collaborate effectively on socio-economic challenges."
      },
      {
        name: "Khyathi",
        role: "Rapporteur",
        bio: "Khyathi is passionate about developmental policy and economic analysis, tasked with meticulously documenting the committee's proceedings and resolutions."
      }
    ],
    // guideName: "ECOSOC_REQMUN2026_Background_Guide.pdf"
  },
  disec: {
    id: "disec",
    shortName: "DISEC",
    fullName: "Disarmament and International Security Committee",
    agenda: "Combating the Proliferation of Unmanned Aerial Vehicles (UAVs) in Low-Intensity Non-State Conflicts",
    eb: [
      {
        name: "Suhas",
        role: "Chair",
        bio: "Suhas has a strong background in global security affairs and disarmament policy. He has chaired multiple security councils and expects structured and rigorous debate."
      },
      {
        name: "Sai Karthik",
        role: "Vice chair",
        bio: "Sai Karthik has extensive research experience in security frameworks and non-state conflict resolution, assisting delegates in drafting comprehensive safety protocols."
      },
      {
        name: "Yashitha Bhavani Nandiknati",
        role: "Rapporteur",
        bio: "Yashitha is an active geopolitical researcher with an eye for detail. She coordinates the documentation and compilation of the committee's resolutions."
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
        name: "Aashish Sai Krishna",
        role: "Chair",
        bio: "Aashish is a veteran of crisis simulations, specialising in strategic planning and fast-paced geopolitical scenarios, guiding the committee with expertise."
      },
      {
        name: "Sanjitha Moka",
        role: "Vice chair",
        bio: "Sanjitha is skilled in crisis management and diplomatic negotiations, supporting delegates through dynamic updates and complex crisis directives."
      },
      {
        name: "Zhoreh Tejam",
        role: "Rapporteur",
        bio: "Zhoreh is an expert in strategic documentation and analysis, managing committee logs and ensuring the accuracy of all directives and resolutions."
      }
    ],
    // guideName: "JCC_REQMUN2026_Background_Guide.pdf"
  },
  loksabha: {
    id: "loksabha",
    shortName: "Lok Sabha",
    fullName: "Lok Sabha (Indian House of the People)",
    agenda: "Re-evaluating Cybersecurity Frameworks, Critical Infrastructure Policies, and Sovereign Tech Capabilities",
    eb: [
      {
        name: "Pavan Rathod",
        role: "Speaker",
        bio: "Pavan is a veteran of legislative debate with a deep understanding of parliamentary rules and procedures, ensuring orderly and high-level debate."
      },
      {
        name: "T. Navneet Reddy",
        role: "Deputy Speaker",
        bio: "Navneet is experienced in legislative affairs and policy analysis, assisting the Speaker in moderating the house and driving consensus."
      },
      {
        name: "Tapasya Perugu",
        role: "Pro term Speaker",
        bio: "Tapasya specializes in constitutional framework and legislative drafting, helping to facilitate the initiation of proceedings and house operations."
      }
    ],
    // guideName: "Lok_Sabha_REQMUN2026_Background_Guide.pdf"
  },
  uncsw: {
    id: "uncsw",
    shortName: "UNCSW",
    fullName: "United Nations Commission on the Status of Women",
    agenda: "Addressing Gender-Based Violence, Promoting Economic Empowerment, and Ensuring Political Participation of Women in Conflict Zones",
    eb: [
      {
        name: "M. Shiva",
        role: "Chair",
        bio: "Shiva is a dedicated advocate for gender equality and human rights, with extensive experience in leading diplomatic assemblies and policy reform discussions."
      },
      {
        name: "Gunda Rahul",
        role: "Vice chair",
        bio: "Rahul specializes in social development policies and legal protections. He works to support delegates in building actionable solutions for women's empowerment."
      },
      {
        name: "Varshitha",
        role: "Rapporteur",
        bio: "Varshitha is an active researcher in gender economics and political representation. She will oversee the documentation and drafting of committee recommendations."
      }
    ],
    // guideName: "UNCSW_REQMUN2026_Background_Guide.pdf"
  },
  ippc: {
    id: "ippc",
    shortName: "IPPC",
    fullName: "International Press and Photography Council",
    agenda: "Ethics of Photojournalism in Conflict Zones, Combating Media Disinformation, and real-time conference press updates",
    eb: [
      {
        name: "Gur Simran Kaur",
        role: "Director",
        bio: "Gur Simran has a strong background in journalism and media management, directing the press corps to ensure high standards of reporting."
      },
      {
        name: "Rushikesh Reddy",
        role: "Director of Photography",
        bio: "Rushikesh is a talented photographer specializing in capturing high-intensity moments and event aesthetics, guiding delegates in visual storytelling."
      },
      {
        name: "Jessica Tatapudi",
        role: "Editor in Chief",
        bio: "Jessica is an experienced editor with a passion for print media and newsletters, overseeing the editing, compilation, and layout of daily press releases."
      }
    ],
    // guideName: "IPPC_REQMUN2026_Background_Guide.pdf"
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
        const sectionTop = section.offsetTop - 120;
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
  window.switchView = function(viewName, sectionId = null) {
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
            const offset = 80; // height of the navbar
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
  window.openSecretariatModal = function(memberId) {
    const data = secretariatData[memberId];
    if (!data) return;

    // Find the photo from the card dynamically
    let imgHtml = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`;
    const cardImg = Array.from(document.querySelectorAll('.sec-card img')).find(img => img.alt === data.name);
    if (cardImg) {
      imgHtml = `<img src="${cardImg.getAttribute('src')}" alt="${data.name}" style="width: 100%; height: 100%; object-fit: cover;">`;
    }

    modalBody.innerHTML = `
      <div class="sec-img-holder" style="border-radius: 8px; margin-bottom: 2rem; width: 340px; height: 280px; max-width: 100%;">
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
  window.openEBMemberModal = function(committeeId, memberIdx) {
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
      <div class="sec-img-holder" style="border-radius: 8px; margin-bottom: 2rem; width: 380px; height: 220px; max-width: 100%;">
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
  window.closeSecretariatModal = function() {
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
  window.selectCommittee = function(committeeId) {
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
      /*
      let ebCardsHtml = '';
      data.eb.forEach((member, idx) => {
        ebCardsHtml += `
          <div class="sec-card">
            <div class="sec-img-holder">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
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
      */

      // Update Panel Inner HTML
      panel.innerHTML = `
        <div class="comm-title-row">
          <div class="comm-title-badge">${data.shortName}</div>
          <span style="font-size:0.85rem; text-transform:uppercase; color:var(--color-gold); font-weight:600; letter-spacing:1px;">Reqelford MUN 2026</span>
        </div>
        
        <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; font-family: var(--font-sans); font-weight: 700; color: var(--color-cream);">${data.fullName}</h3>
        
        <div class="comm-agenda-box">
          <h4>Agenda Topic</h4>
          <p>${data.agenda}</p>
        </div>
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
});
