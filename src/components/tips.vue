<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineOptions({
  name: 'YTips'
})

// Props
const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'success'
  },
  duration: {
    type: Number,
    default: 2000 // 默认3秒后自动关闭
  }
})

// 显示状态
const isVisible = ref(true)

// 动态关闭消息
const closeMessage = () => {
  isVisible.value = false
}

// 自动关闭
onMounted(() => {
  setTimeout(() => {
    closeMessage()
  }, props.duration)
})
</script>

<template>
  <transition name="fade">
    <div v-if="isVisible" :class="`y-message y-message-${type}`">
      {{ message }}
    </div>
  </transition>
</template>

<style scoped lang='scss'>
@use '../style/index.scss' as *;

.y-message {
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1100;
  color: #fff;
  font-size: 14px;
  transition: opacity 0.3s, transform 0.3s;

  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }

  &.fade-enter-to,
  &.fade-leave-from {
    opacity: 1;
    transform: translateY(0);
  }

  &.y-message-success {
    background-color: #67c23a;
  }

  &.y-message-error {
    background-color: #f56c6c;
  }

  &.y-message-warning {
    background-color: #e6a23c;
  }

  &.y-message-info {
    background-color: #909399;
  }
}
</style>
