//-----------  Definitions  -----------//

const $logo = document.getElementById('sweep-logo')

//-----------  Animation Functions  -----------//

export default function animateLogo(action, callback){
  const keyframes = {
    opacity   : [0, 1].map(n => n),
    transform : [-50, 0].map(n => `translateY(${n}%)`)
  }

  const options = {
    duration  : 875,
    fill      : 'forwards',
    easing    : 'cubic-bezier(.2, 1, .2, 1)',
    direction : action == 'hide' ? 'reverse' : 'normal'
  }

  const animation = $logo.animate(keyframes, options)
  animation.addEventListener('finish', callback, { once: true })
}
