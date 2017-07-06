import './styles.css'

import detectBgLoad from 'helpers/bg-loaded'

import animateElem  from 'helpers/animate-elem'
import animateLogo  from 'helpers/animate-logo'
// import animateLoad  from 'helpers/animate-load'
import animateStat  from 'helpers/animate-stat'

//-----------  Load Watcher  -----------//

console.time('bg-load')

window.addEventListener('DOMContentLoaded', function(){
  detectBgLoad(() => {
    console.timeEnd('bg-load')
    animateElem('show', () => {
      animateLogo('show', () => console.log('logo'))
      // animateLoad('show', () => console.log('load'))
      animateStat('show', () => console.log('stat'))
    })
  })
}, true)
