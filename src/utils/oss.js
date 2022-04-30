import config from '@/money.config'
export const TYPE = {
  LOCAL: 1,
  CLOUD: 2
}
export function loadImage(url, type = TYPE.LOCAL) {
  if (url && !url.includes('http')) {
    if (type === TYPE.LOCAL) {
      url = process.env.VUE_APP_BASE_API + config.localOSSPath + url
    } else if (type === TYPE.CLOUD) {
      url = config.cloudOSSPath + url
    }
  }
  return url
}

export default { TYPE, loadImage }
