<script setup lang="ts">
import { ref, reactive, onMounted, watchEffect, PropType } from 'vue'
defineOptions({
  name: 'YButton'
})
const props = defineProps({
  type: {
    type: String as PropType<'primary' | 'success' | 'danger' | 'warning' | 'info'>,
    default: 'primary'
  }
})

</script>

<template>
  <div class="y-button" :class="type">
    <slot />
  </div>
</template>

<style scoped lang='scss'>
@use '../style/index.scss' as *;

.y-button {
  display: inline-block;
  padding: 8px 15px;
  font-family: "PingFang SC", Arial, sans-serif;
  border-radius: $border-radius;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    background-color: #e0e0e0;
  }

  // 通用的样式生成器，根据传入的颜色生成按钮
  @mixin button-variant($bg-color, $hover-color, $active-color, $text-color: #fff) {
    background-color: $bg-color;
    color: $text-color;

    &:hover {
      background-color: $hover-color;
    }

    &:active {
      background-color: $active-color;
    }
  }

  &.primary {
    @include button-variant($primary-color, $primary-color-hover, $primary-color-active);
  }

  &.success {
    @include button-variant($success-color, $success-color-hover, $success-color-active);
  }

  &.danger {
    @include button-variant($danger-color, $danger-color-hover, $danger-color-active);
  }

  &.warning {
    @include button-variant($warning-color, $warning-color-hover, $warning-color-active); // 自定义文字颜色
  }

  &.info {
    border: #e0e0e0 solid 1px;
    @include button-variant($info-color, $info-color-hover, $info-color-active, #606266);
  }
}
</style>