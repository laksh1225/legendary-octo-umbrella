/**
 * Reqelford MUN 2026 - Main Application Logic
 * Implements Single Page Routing, Interactive Modals, Active Navigation Sync, and Committee Panels.
 */

// --- 1. DATA MODELS & CONTENT CONFIGURATION ---

// Secretariat Details & Biographies
const secretariatData = {
  sec_sg: {
    name: "Alex Carter",
    role: "Secretary-General",
    bio: "Alex is an experienced diplomat and award-winning debater with over six years of experience in model diplomacy. Having chaired conferences across the globe, Alex brings a vision of international unity and standard-setting academic rigor to Reqelford MUN 2026. Under their guidance, this conference aims to foster high-level cooperation and inspire active problem-solving among future global delegates."
  },
  sec_dsg: {
    name: "Elena Rostova",
    role: "Deputy Secretary-General",
    bio: "Elena is a senior policy researcher specializing in conflict resolution and international humanitarian law. Serving as the academic lead, Elena has curated the agendas and background guides for this year's committees to ensure that delegates engage with high-impact, critical global issues. Elena is committed to creating an inclusive environment where novice and veteran delegates alike can thrive."
  },
  sec_dg: {
    name: "Marcus Aurelius",
    role: "Director-General",
    bio: "Marcus is responsible for the overall administrative operations, venue synchronization, and logistical execution of Reqelford MUN 2026. With a background in public relations and event operations, Marcus has designed the physical and digital frameworks of the conference to guarantee a seamless delegate experience from registration to the closing ceremony."
  },
  sec_dr: {
    name: "Siddharth Sharma",
    role: "Under-Secretary-General, Delegate Relations",
    bio: "Siddharth leads the communications team, acting as the primary liaison between participating institutions, independent delegates, and the Secretariat. Siddharth is dedicated to assisting delegations with committee assignments, position papers, and registration processing to ensure a supportive onboarding phase."
  },
  sec_log: {
    name: "Sophie Dubois",
    role: "Under-Secretary-General, Finance & Logistics",
    bio: "Sophie manages the financial operations, sponsorship allocations, and technological setups for the conference. Dedicated to sustainability, Sophie has implemented eco-friendly logistics strategies, minimizing printed footprints while maximizing digital collaboration utilities for all committees."
  },
  sec_pr: {
    name: "Amina Yusuf",
    role: "Under-Secretary-General, Public Relations & Media",
    bio: "Amina oversees the creative direction, digital branding, photography, and live coverage of Reqelford MUN 2026. Amina's team is responsible for compiling the daily press briefs, social media highlights, and producing the official conference documentary to capture every memorable debate."
  }
};

// Committee Details, Agendas, EB, and Background Guides
const committeesData = {
  unsc: {
    id: "unsc",
    shortName: "UNSC",
    fullName: "United Nations Security Council",
    agenda: "Addressing Territorial Integrity and Sovereign Claims in the Era of State-Sponsored Cyber Warfare",
    eb: [
      {
        name: "Diana Prince",
        role: "Chairperson",
        bio: "Diana has over five years of experience in model diplomacy, specializing in security frameworks and state sovereignty. She is committed to guiding UNSC toward actionable policies."
      },
      {
        name: "Arthur Curry",
        role: "Vice-Chairperson",
        bio: "Arthur has a background in maritime law and regional security affairs. He aims to help delegates navigate sovereign claiming disputes and complex security dynamics."
      },
      {
        name: "Victor Stone",
        role: "Rapporteur",
        bio: "Victor is a cyber-security analyst and avid researcher. He focuses on sovereign tech alignments and will oversee the accurate documentation of council proceedings."
      }
    ],
    guideName: "UNSC_REQMUN2026_Background_Guide.pdf"
  },
  disec: {
    id: "disec",
    shortName: "DISEC",
    fullName: "Disarmament and International Security Committee",
    agenda: "Combating the Proliferation of Unmanned Aerial Vehicles (UAVs) in Low-Intensity Non-State Conflicts",
    eb: [
      {
        name: "Bruce Wayne",
        role: "Chairperson",
        bio: "Bruce has extensive research experience in advanced drone systems and defense logistics. He has chaired multiple security councils and expects rigorous policy debate."
      },
      {
        name: "Clark Kent",
        role: "Vice-Chairperson",
        bio: "Clark is an investigative journalist and policy writer with deep expertise in non-state conflicts. He will support delegates in formulating balanced disarming protocols."
      },
      {
        name: "Lois Lane",
        role: "Rapporteur",
        bio: "Lois is a seasoned geopolitical reporter focusing on military operations. She will document and compile the committee's policy recommendations with high academic precision."
      }
    ],
    guideName: "DISEC_REQMUN2026_Background_Guide.pdf"
  },
  unhrc: {
    id: "unhrc",
    shortName: "UNHRC",
    fullName: "United Nations Human Rights Council",
    agenda: "Establishing Global Legal Safeguards and Shelter Allocations for Climate-Induced Transnational Refugees",
    eb: [
      {
        name: "Selina Kyle",
        role: "Chairperson",
        bio: "Selina focuses on refugee rights and immigration policies under the UN framework. She will lead the council in establishing protection guidelines for climate displacement."
      },
      {
        name: "Barry Allen",
        role: "Vice-Chairperson",
        bio: "Barry is an advocate for humanitarian aid distributions and international asylum laws. He will assist delegates in coordinating legal statuses and shelter provisions."
      },
      {
        name: "Hal Jordan",
        role: "Rapporteur",
        bio: "Hal has a background in international relations and environmental justice. He will manage the draft resolutions and ensure consistent human-rights focus throughout council sessions."
      }
    ],
    guideName: "UNHRC_REQMUN2026_Background_Guide.pdf"
  },
  unep: {
    id: "unep",
    shortName: "UNEP",
    fullName: "United Nations Environment Programme",
    agenda: "Regulating Transnational Industrial Accountability regarding Microplastic and Chemical Leakage in International Oceans",
    eb: [
      {
        name: "Pamela Isley",
        role: "Chairperson",
        bio: "Pamela is a botanical researcher and environmental lobbyist specializing in ocean ecosystems. She aims to enforce strict transnational standards for corporate accountability."
      },
      {
        name: "Harvey Dent",
        role: "Vice-Chairperson",
        bio: "Harvey is a legal expert in corporate dumping regulations and maritime jurisdictions. He will guide delegates in drafting comprehensive, legally sound environment codes."
      },
      {
        name: "Barbara Gordon",
        role: "Rapporteur",
        bio: "Barbara is a data scientist focusing on ocean microplastics mapping. She will compile committee findings and synthesize research inputs into clean, data-driven summaries."
      }
    ],
    guideName: "UNEP_REQMUN2026_Background_Guide.pdf"
  },
  who: {
    id: "who",
    shortName: "WHO",
    fullName: "World Health Organization",
    agenda: "Standardization of International Healthcare Protocols for Rapid Pandemic Response and Medical Intellectual Property Sharing",
    eb: [
      {
        name: "Harleen Quinzel",
        role: "Chairperson",
        bio: "Harleen is a clinical researcher specializing in global healthcare accessibility. She will guide the committee toward standardizing rapid, equitable emergency responses."
      },
      {
        name: "John Constantine",
        role: "Vice-Chairperson",
        bio: "John works in medical property distributions and patent access policies. He will help the committee balance commercial IP interests with international humanitarian needs."
      },
      {
        name: "Zatanna Zatara",
        role: "Rapporteur",
        bio: "Zatanna is a public health communication officer with expertise in disease response coordination. She will document guidelines and manage the publication of health agendas."
      }
    ],
    guideName: "WHO_REQMUN2026_Background_Guide.pdf"
  },
  loksabha: {
    id: "loksabha",
    shortName: "Lok Sabha",
    fullName: "Lok Sabha (Indian House of the People)",
    agenda: "Re-evaluating Cybersecurity Frameworks, Critical Infrastructure Policies, and Sovereign Tech Capabilities",
    eb: [
      {
        name: "Pranab Mukherjee",
        role: "Speaker",
        bio: "Pranab is a veteran parliamentarian and legislative scholar. He will enforce parliamentary discipline and rules of procedure to ensure highly constructive debates."
      },
      {
        name: "Sonia Gandhi",
        role: "Deputy Speaker",
        bio: "Sonia has extensive experience in legislative affairs and national policy coordination. She will assist the Speaker in managing house operations and infrastructure bills."
      },
      {
        name: "Manmohan Singh",
        role: "Rapporteur",
        bio: "Manmohan is a renowned economist and public policy advisor specializing in technology policy. He will document legislative proceedings and compile draft cyber-infrastructure bills."
      }
    ],
    guideName: "Lok_Sabha_REQMUN2026_Background_Guide.pdf"
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

    modalBody.innerHTML = `
      <div class="modal-avatar">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
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

    modalBody.innerHTML = `
      <div class="modal-avatar">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
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
          <div class="eb-card" onclick="openEBMemberModal('${committeeId}', ${idx})">
            <div class="eb-avatar-placeholder">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            </div>
            <div class="eb-info">
              <h5>${member.name}</h5>
              <p>${member.role}</p>
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
  selectCommittee("unsc");

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
