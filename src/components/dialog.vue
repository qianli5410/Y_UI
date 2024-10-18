<script setup lang="ts">
import { ref, reactive, onMounted, watchEffect } from 'vue'
defineOptions({
  name: 'YDialog'
})
defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'YDialog'
  },
  width: {
    type: String,
    default: '600px'
  },

})
const emit = defineEmits(['update:visible', 'submit'])
const close = () => {
  emit('update:visible', false)
}
const submit = () => {
  emit('submit')
}
</script>

<template>
  <transition name="fade">
    <section class="y-dialog-mask" v-if="visible" @click="close">
      <transition name="dialog">
        <div class="y-dialog" :style="{ width: width }" @click.stop>
          <section class="y-dialog-header">
            <div class="line"></div> {{ title }}
          </section>
          <section class="y-dialog-body">
            <slot></slot>
          </section>
          <section class="y-dialog-footer">
            <YButton type="primary" @click="submit">确认</YButton>
            <YButton type="info" @click="close">取消</YButton>
          </section>
        </div>
      </transition>
    </section>
  </transition>
</template>

<style scoped lang='scss'>
@use '../style/index.scss' as *;

.y-dialog-mask {
  width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  z-index: 1000;

  /* 遮罩层的渐入渐出效果 */
  transition: opacity 0.3s ease;

  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.3s ease;
  }

  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;
  }

  &.fade-enter-to,
  &.fade-leave-from {
    opacity: 1;
  }

  .y-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    /* 初始缩小 */
    // min-width: 600px;
    background: #fff;
    border-radius: 10px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    /* 添加缩放和透明度动画 */

    &.dialog-enter-active,
    &.dialog-leave-active {
      transition: transform 0.3s ease, opacity 0.3s ease;
    }

    &.dialog-enter-from,
    &.dialog-leave-to {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.9);
    }

    &.dialog-enter-to,
    &.dialog-leave-from {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
      /* 最终全尺寸 */
    }

    .y-dialog-header {
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      font-weight: 600;
      color: #606266;
      padding-left: 20px;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      gap: 10px;

      .line {
        border-radius: 4px;
        width: 6px;
        height: 34px;
        background: $primary-color;
      }
    }

    .y-dialog-body {
      min-height: 200px;
    }

    .y-dialog-footer {
      height: 60px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 20px;
      gap: 10px;
    }
  }
}
</style>