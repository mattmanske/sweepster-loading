//-----------  Load Watcher  -----------//

var src = '/greenBg.jpg'

const image  = document.createElement('img')
image.src    = src
image.onload = () => {

  //-----------  Definitions  -----------//

  const $elem = document.getElementById('sweep-elem')
  const $logo = document.getElementById('sweep-logo')
  const $load = document.getElementById('sweep-load')
  const $stat = document.getElementById('sweep-stat')
  const $line = document.getElementById('sweep-line')

  //-----------  Event Dispatchers  -----------//

  function updateState({ detail }){
    if (detail) $line.innerHTML = detail
  }

  function dispatchStart(){
    $stat.removeEventListener('animationend', dispatchStart, false)

    const start = document.createEvent('CustomEvent')
    start.initCustomEvent('startLoad', true, true)
    document.dispatchEvent(start)
  }

  function dispatchEnded(){
    $elem.removeEventListener('animationend', dispatchEnded, false)

    const ended = document.createEvent('CustomEvent')
    ended.initCustomEvent('endedLoad', true, true)
    document.dispatchEvent(ended)

    $elem.remove()
    $load.remove()
  }

  function loadIn(){
    $elem.removeEventListener('animationend', loadIn, false)

    $logo.classList.add('in')
    $stat.classList.add('in')
  }

  function loadOut(){
    $elem.addEventListener('animationend', dispatchEnded, false)

    $logo.classList.add('out')
    $stat.classList.add('out')
    $elem.classList.add('out')
    $load.classList.add('out')
  }

  //-----------  Animation Event Listeners  -----------//

  $elem.addEventListener('animationend', loadIn, false)
  $stat.addEventListener('animationend', dispatchStart, false)

  $elem.addEventListener('loadComplete', loadOut, false)
  $elem.addEventListener('updateState', updateState, false)

  //-----------  In Animations  -----------//

  $elem.classList.add('in')
  $load.classList.add('in')
}
