import storage from '@/utils/storage'

export default function getPageTitle(pageTitle) {
  const app_info = storage.get('app_info')
  const title = app_info ? app_info.name : 'vue-element-template'
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
