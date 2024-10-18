import { createVNode, render } from 'vue'
import { YTips } from '../index'

const instances: any[] = []

const yTips = (options: { message: string; type?: string; duration?: number }) => {
  const container = document.createElement('div')

  const instance = createVNode(YTips, { ...options })
  render(instance, container)

  document.body.appendChild(container.firstElementChild!)

  instances.push(instance)

  // 定时移除消息
  setTimeout(() => {
    render(null, container)
    document.body.removeChild(container.firstElementChild!)
  }, options.duration || 3000)
}

export default yTips
