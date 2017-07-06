//-----------  Definitions  -----------//

const $elem = document.getElementById('sweep-elem')

//-----------  Helper -----------//

function getBgUrl(){
  var bg = ''

  if ($elem.currentStyle) // IE
    bg = $elem.currentStyle.backgroundImage;
  else if (document.defaultView && document.defaultView.getComputedStyle) // Firefox
    bg = document.defaultView.getComputedStyle($elem, '').backgroundImage
  else // try and get inline style
    bg = $elem.style.backgroundImage

  return bg.replace(/url\(['"]?(.*?)['"]?\)/i, '$1')
}

//-----------  Detect Background Image Load  -----------//

export default function detectBgLoad(callback){
  var image = document.createElement('img')

  image.src    = getBgUrl()
  image.onload = callback
}
