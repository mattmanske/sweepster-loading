//-----------  Animation Functions  -----------//

export default function animateStat(action, callback){
  const $stat = document.getElementById('sweep-stat')

  const keyframes = {
    opacity   : [0, 1].map(n => n),
    transform : [50, 0].map(n => `translateY(${n}%)`)
  }

  const options = {
    duration  : 875,
    fill      : 'forwards',
    easing    : 'cubic-bezier(.2, 1, .2, 1)',
    direction : action == 'hide' ? 'reverse' : 'normal'
  }

  const animation = $stat.animate(keyframes, options)
  animation.addEventListener('finish', callback, { once: true })
}
