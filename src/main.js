import './style.css'
import darkLogo from './assets/logo.png';
import whiteLogo from './assets/white.png';

const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const hLinks = document.querySelectorAll("#menu a")


hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden")
    hamburger.classList.remove("bg-white")
  })
})

// Dark mode setup: toggles the `dark` class on the root element and persists choice to localStorage.
const themeToggle = document.querySelector('#themeToggle')

// SVGs for icons (kept inline so no asset needed)
const moonSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-black dark:text-white"><path d="M21.752 15.002A9 9 0 1112.998 2.248 7 7 0 0021.752 15z" /></svg>'
const sunSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-black dark:text-white"><path d="M6.995 12c0 2.761 2.246 5.005 5.005 5.005s5.005-2.244 5.005-5.005S14.761 6.995 12 6.995 6.995 9.239 6.995 12zM12 1v2m0 18v2m11-11h-2M3 12H1m16.95-7.95-1.414 1.414M6.464 17.536 5.05 18.95m12.9 0-1.414-1.414M6.464 6.464 5.05 5.05" /></svg>'

const logoImage = document.querySelector('#logoImage')
const footerLogoImage = document.querySelector('#footerLogoImage')

function setToggleIcon(isDark) {
  if (!themeToggle) return
  themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false')
  themeToggle.innerHTML = isDark ? sunSVG : moonSVG
}

function updateLogos(isDark) {
  if (logoImage) {
    logoImage.src = isDark ? whiteLogo : darkLogo
  }

  if (footerLogoImage) {
    footerLogoImage.src = isDark ? whiteLogo : darkLogo
  }
}

function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark)
  setToggleIcon(isDark)
  updateLogos(isDark)
}

// Initialize theme from saved preference or system setting
const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
  applyTheme(savedTheme === 'dark')
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  applyTheme(true)
} else {
  // ensure icon matches default (light)
  setToggleIcon(false)
  // make sure the logo images match the light theme by default
  updateLogos(false)
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    setToggleIcon(isDark)
    // update logo images to match the new theme
    updateLogos(isDark)
  })
}

const projectCards = document.querySelectorAll('.project-card')

projectCards.forEach(card => {
  const projectUrl = card.dataset.projectUrl

  const openProject = (event) => {
    if (event) {
      event.preventDefault()
    }

    if (projectUrl) {
      window.open(projectUrl, '_blank', 'noopener,noreferrer')
    }
  }

  card.addEventListener('click', openProject)

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openProject()
    }
  })

  card.setAttribute('tabindex', '0')
  card.setAttribute('role', 'link')
  card.setAttribute('aria-label', 'Open project repository')
})