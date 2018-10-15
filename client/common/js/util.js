export function getAvatar(avatar) {
  return `https://q2.qlogo.cn/headimg_dl?dst_uin=` + avatar + `&spec=100`
}

export function getSuo(content) {
  let m = content.match(/suo(.+?)\)/i)
  return m ? m[1].slice(2) : 'http://wx4.sinaimg.cn/mw690/0060lm7Tly1fvmtrka9p5j30b40b43yo.jpg'
}

export function translate(sortName) {
  if (sortName === 'anime') return '动画'
  if (sortName === 'comic') return '漫画'
  if (sortName === 'game') return '游戏'
  if (sortName === 'music') return '音乐'
  if (sortName === 'imgpack') return '图包'
  if (sortName === 'novel') return '小说'
  if (sortName === 'news') return '号外'
}

export function getPid(pid) {
  return pid.substring(3, pid.length)
}