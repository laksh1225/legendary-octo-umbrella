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
    bio: "Rohan is a seasoned debater and diplomat, passionate about international relations and public policy. As Secretary General of REQMUN 3.0, he oversees the academic standard and operations of the conference, ensuring a challenging yet rewarding experience for all delegates."
  },
  sec_dg: {
    name: "Suzanna Ivy",
    role: "Director General",
    bio: "Suzanna leads the logistical operations, venue management, and administrative services of REQMUN 3.0. With extensive experience in hospitality and event planning, she ensures a seamless execution and top-notch facilities for the entire conference."
  },
  sec_ca_sahasra: {
    name: "Sahasra",
    role: "Chargé d'Affaires",
    bio: "Sahasra is the Chargé d'Affaires, managing delegate affairs, external relations, and school partnerships. She acts as the primary contact for school delegations, ensuring clear communication and smooth registrations."
  },
  sec_ca_aryan: {
    name: "Aryan Aditya",
    role: "Chargé d'Affaires",
    bio: "Aryan Aditya serves as the Chargé d'Affaires, driving corporate relations, public sponsorships, and outreach campaigns. He is dedicated to raising the conference profile and building long-lasting institutional partnerships."
  },
  sec_usg_it: {
    name: "Lakshyagna Amuktha Nandiknati",
    role: "USG IT",
    bio: "Lakshyagna is the USG IT, supervising the conference's digital architecture, website maintenance, and security protocols. He ensures robust software integrations for all committee systems and smooth tech support."
  },
  sec_usg_mkt: {
    name: "Dhita Sahasra",
    role: "USG Marketing",
    bio: "Dhita is the USG Marketing, leading the brand's visual identity, social media promotion, and public messaging campaigns. Her creative storytelling ensures REQMUN 3.0's vision resonates widely across student groups."
  },
  sec_usg_log_aashish: {
    name: "Aashish",
    role: "USG Logistics",
    bio: "Aashish is the USG Logistics, coordinating inventory, room allocations, and technical equipment placement. He manages the physical infrastructure needed for a high-intensity debate environment."
  },
  sec_usg_log_bhavesh: {
    name: "Bhavesh",
    role: "USG Logistics",
    bio: "Bhavesh is the USG Logistics, directing transportation, food services, and hospitality accommodations. His focus is on the welfare, safety, and physical comfort of all delegates throughout the event."
  },
  sec_usg_cul_sridevi: {
    name: "Sridevi",
    role: "USG Cultural Affairs",
    bio: "Sridevi is the USG Cultural Affairs, orchestrating the opening and closing ceremonies, entertainment segments, and social gatherings. She brings cultural vibrancy and creative flair to REQMUN 3.0."
  },
  sec_usg_cul_vidhaat: {
    name: "Vidhaat",
    role: "USG Cultural Affairs",
    bio: "Vidhaat is the USG Cultural Affairs, coordinating cultural ceremonies, artistic events, and entertainment segments to make REQMUN 3.0 a vibrant and engaging experience."
  },
  sec_cd_hb: {
    name: "Hyunwook Kim",
    role: "CD Head Boy",
    bio: "Hyunwook is the CD Head Boy, leading creative direction, multimedia presentations, and coordinating student council initiatives. He bridges design concepts with student engagement plans."
  },
  sec_cd_hg: {
    name: "Akshitha",
    role: "CD Head Girl",
    bio: "Akshitha is the CD Head Girl, leading creative direction, venue decoration, and delegate engagement projects. She manages design layouts and works to create an aesthetically stunning conference environment."
  },
  sec_oc_design: {
    name: "Aisha",
    role: "OC Design",
    bio: "Aisha is the OC Design lead, designing the physical artwork, placards, certificates, and badges for the conference. Her design choices establish the premium, unified aesthetic of REQMUN 3.0."
  },
  sec_oc_admin_asmit: {
    name: "Asmit",
    role: "OC Admin",
    bio: "Asmit is the OC Admin head, managing delegate check-ins, database coordination, and administrative desk operations. He ensures files and records are organized with high accuracy."
  },
  sec_oc_admin_natalie: {
    name: "Natalie",
    role: "OC Admin",
    bio: "Natalie is the OC Admin head, coordinating certificate distribution, help desk queries, and support staff allocation. She maintains high efficiency in day-to-day administrative tasks."
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
    guideName: "ECOSOC_REQMUN2026_Background_Guide.pdf"
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
    guideName: "DISEC_REQMUN2026_Background_Guide.pdf"
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
    guideName: "JCC_REQMUN2026_Background_Guide.pdf"
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
    guideName: "Lok_Sabha_REQMUN2026_Background_Guide.pdf"
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
    guideName: "UNCSW_REQMUN2026_Background_Guide.pdf"
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
    guideName: "IPPC_REQMUN2026_Background_Guide.pdf"
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
        
        <div class="comm-details-section" style="margin-bottom: 2.5rem;">
          <h4>Executive Board</h4>
          <div class="eb-grid">
            ${ebCardsHtml}
          </div>
        </div>
        
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
      
      panel.style.opacity = 1;
      panel.style.transform = "translateY(0)";
    }, 200);
  };

  // Helper simulated downloader
  window.downloadSimulatedGuide = function(fileName) {
    alert(`Initiating secure study download: ${fileName}\n\nNote: In the final production deployment, this will retrieve the official PDF background guide file.`);
  };

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
