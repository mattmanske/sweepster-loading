//-----------  Definitions  -----------//

const $elem = document.getElementById('sweep-elem')

//-----------  Animation Functions  -----------//

export default function animateLogo(action, callback){
  const keyframes = {
    opacity: [0, 1].map(n => n),
  }

  const options = {
    duration  : 350,
    fill      : 'forwards',
    easing    : 'ease-in',
    direction : action == 'hide' ? 'reverse' : 'normal'
  }

  const animation = $elem.animate(keyframes, options)
  animation.addEventListener('finish', callback, { once: true })
}
