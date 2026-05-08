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
    this.ctaButton = document.querySelector('.cta-button')
    this.isScrollUnlocked = false

    this.preventScrollInput = (event) => {
      if (this.isScrollUnlocked) return
      event.preventDefault()
    }

    this.preventScrollKeys = (event) => {
      if (this.isScrollUnlocked) return

      const blockedKeys = [
        'ArrowUp',
        'ArrowDown',
        'PageUp',
        'PageDown',
        'Home',
        'End',
        ' ',
      ]

      if (blockedKeys.includes(event.key)) {
        event.preventDefault()
      }
    }

    this.enforceScrollLock = () => {
      if (this.isScrollUnlocked) return
      if (window.scrollY !== 0) {
        window.scrollTo(0, 0)
      }
    }

    this.init()
  }

  init() {
    this.lockScrolling()

    if (this.ctaButton && this.sections.gallery) {
      this.ctaButton.addEventListener('click', (e) => {
        e.preventDefault()
        this.unlockScrolling()
        this.smoothScroll(this.sections.gallery)
      })
    }

    // Smooth scroll for navigation links
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (!this.isScrollUnlocked) {
          e.preventDefault()
          return
        }

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
      this.scrollIndicator.addEventListener('click', (e) => {
        if (!this.isScrollUnlocked) {
          e.preventDefault()
          return
        }

        this.smoothScroll(this.sections.home)
      })
    }

    // Smooth scroll on scroll wheel
    document.addEventListener('scroll', () => {
      this.updateNavigation()
    })

    // Anchor link handling
    window.addEventListener('hashchange', () => {
      if (!this.isScrollUnlocked) return

      const target = document.querySelector(window.location.hash)
      if (target) {
        this.smoothScroll(target)
      }
    })

    // Initialize
    this.updateNavigation()
  }

  lockScrolling() {
    this.isScrollUnlocked = false
    document.body.classList.add('scroll-locked')
    window.scrollTo(0, 0)

    window.addEventListener('wheel', this.preventScrollInput, { passive: false })
    window.addEventListener('touchmove', this.preventScrollInput, { passive: false })
    window.addEventListener('keydown', this.preventScrollKeys, { passive: false })
    window.addEventListener('scroll', this.enforceScrollLock)
  }

  unlockScrolling() {
    this.isScrollUnlocked = true
    document.body.classList.remove('scroll-locked')

    window.removeEventListener('wheel', this.preventScrollInput)
    window.removeEventListener('touchmove', this.preventScrollInput)
    window.removeEventListener('keydown', this.preventScrollKeys)
    window.removeEventListener('scroll', this.enforceScrollLock)
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

export { PageNavigationManager }
