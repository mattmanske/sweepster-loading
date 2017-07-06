import detectBgLoad from 'helpers/bg-loaded'

import animateElem  from 'helpers/animate-elem'
import animateLogo  from 'helpers/animate-logo'
import animateLoad  from 'helpers/animate-load'
import animateStat  from 'helpers/animate-stat'

import updateState  from 'helpers/update-state'

//-----------  Load Watcher  -----------//

detectBgLoad('greenBg.jpg', () => {

  //-----------  Definitions  -----------//

  const $elem = document.getElementById('sweep-elem')

  const start = document.createEvent('CustomEvent')
  start.initCustomEvent('startLoad', true, true)

  const ended = document.createEvent('CustomEvent')
  ended.initCustomEvent('endedLoad', true, true)

  //-----------  Setup Event Listeners  -----------//

  $elem.addEventListener('updateState', updateState)

  //-----------  Initial Animations  -----------//

  animateElem('show', () => {
    animateLogo('show', () => console.log('logo'))
    animateLoad('show', () => console.log('load'))
    animateStat('show', () => console.log('stat'))

    document.dispatchEvent(start)

    $elem.addEventListener('loadComplete', () => {
      animateLogo('hide', () => console.log('logo'))
      animateLoad('hide', () => console.log('load'))
      animateStat('hide', () => console.log('stat'))
      animateElem('hide', () => {
        document.dispatchEvent(ended)
        $elem.remove()
      })
    })
  })
})
