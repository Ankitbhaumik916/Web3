/**
 * Page Navigation and Scroll Management
 */

class PageNavigationManager {
  constructor() {
    this.sections = {
      landing: document.querySelector('#landing'),
      home: document.querySelector('#home'),
      gallery: document.querySelector('#gallery'),
      contact: document.querySelector('#contact'),
    }

    this.nav = document.querySelector('.navigation')
    this.navLinks = document.querySelectorAll('.nav-link')
    this.scrollIndicator = document.querySelector('.scroll-indicator')

    this.init()
  }

  init() {
    // Smooth scroll for navigation links
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href')
        const targetSection = document.querySelector(targetId)
        if (targetSection) {
          this.smoothScroll(targetSection)
        }
      })
    })

    // Scroll indicator click
    if (this.scrollIndicator) {
      this.scrollIndicator.addEventListener('click', () => {
        this.smoothScroll(this.sections.home)
      })
    }

    // Smooth scroll on scroll wheel
    document.addEventListener('scroll', () => {
      this.updateNavigation()
    })

    // Anchor link handling
    window.addEventListener('hashchange', () => {
      const target = document.querySelector(window.location.hash)
      if (target) {
        this.smoothScroll(target)
      }
    })

    // Initialize
    this.updateNavigation()
  }

  smoothScroll(target) {
    const headerOffset = 70
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  updateNavigation() {
    const scrollPosition = window.scrollY + 100

    // Show/hide navigation based on scroll position
    if (scrollPosition > window.innerHeight * 0.3) {
      this.nav?.classList.add('visible')
    } else {
      this.nav?.classList.remove('visible')
    }

    // Update active nav link based on current section
    let currentSection = 'landing'

    if (scrollPosition > this.sections.gallery.offsetTop - 200) {
      currentSection = 'gallery'
    } else if (scrollPosition > this.sections.home.offsetTop - 200) {
      currentSection = 'home'
    }

    this.navLinks.forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active')
      }
    })
  }
}

// Initialize navigation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new PageNavigationManager()
  })
} else {
  new PageNavigationManager()
}

export { PageNavigationManager }
