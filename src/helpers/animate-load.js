//-----------  Animation Functions  -----------//

export default function animateLoad(action, callback){
  const $load1 = document.getElementById('sweep-load1')
  const $load2 = document.getElementById('sweep-load2')

  const keyframes1 = {
    opacity   : [0, 1].map(n => n),
    transform : [50, 100].map(n => `scale(${n/100}) transform3d(-50%, -50%, 0)`)
  }

  const keyframes2 = {
    opacity   : [0, 1].map(n => n),
    transform : [33, 67].map(n => `scale(${n/100}) transform3d(-50%, -50%, 0)`)
  }

  const options = {
    duration  : 875,
    fill      : 'forwards',
    easing    : 'cubic-bezier(.2, 1, .2, 1)',
    direction : action == 'hide' ? 'reverse' : 'normal'
  }

  const animation1 = $load1.animate(keyframes1, options)
  const animation2 = $load2.animate(keyframes2, options)
  animation1.addEventListener('finish', callback, { once: true })
}
