//-----------  Animation Functions  -----------//

export default function updateState({ detail }){
  const $line = document.getElementById('sweep-stat-line')
  if (detail) $line.innerHTML = detail
}
