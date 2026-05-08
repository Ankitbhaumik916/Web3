import '@/css/base.css'
import '@/css/canvas.css'
import '@/css/landing.css'
import '@/css/homepage.css'
import '@/css/pages.css'

import { Engine } from '@/Experience/Engine'
import { PageNavigationManager } from '@/page-navigation'

const canvas = document.querySelector('.webgl')

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error('Missing .webgl canvas element in index.html')
}

const engine = new Engine(canvas)

// Initialize page navigation
new PageNavigationManager()

engine.init().catch((error) => {
  console.error('Engine initialization failed', error)
})
