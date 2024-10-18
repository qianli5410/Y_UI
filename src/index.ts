import type { App } from 'vue'
import './style/index.scss'

// 自动导入 components 文件夹下的所有 .vue 组件
const components = import.meta.glob('./components/*.vue', { eager: true }) // eager: true，确保组件立即加载

// 创建导出对象，用于按需导入
const exportedComponents: Record<string, any> = {};

// 遍历所有组件并填充导出对象
for (const path in components) {
  const mod: any = components[path];
  const component = mod.default;

  // 确保组件名存在再添加到导出对象中
  if (component?.name || component?.displayName) {
    exportedComponents[component.name || component.displayName] = component;
  } else {
    console.warn(`Component at ${path} is missing a name, skipping export.`);
  }
}

// 定义 install 方法，实现全局注册
export default {
  install(app: App) {
    for (const name in exportedComponents) {
      app.component(name, exportedComponents[name]);
    }
  }
}
console.log(exportedComponents);

// 导出所有组件，供按需导入
export const { YButton, YInput, YTable, YDialog, YTips } = exportedComponents;
