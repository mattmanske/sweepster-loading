//-----------  Animation Functions  -----------//

export default function animateElem(action, callback){
  const $elem = document.getElementById('sweep-elem')

  const keyframes = {
    opacity: [0, 1].map(n => n),
  }

  const options = {
    delay     : action == 'hide' ? 500 : 0,
    duration  : 350,
    fill      : 'forwards',
    easing    : 'ease-in',
    direction : action == 'hide' ? 'reverse' : 'normal'
  }

  const animation = $elem.animate(keyframes, options)
  animation.addEventListener('finish', callback, { once: true })
}
