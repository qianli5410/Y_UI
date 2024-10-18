<script setup>
import { ref, reactive, onMounted, watchEffect } from 'vue'
defineOptions({
  name: 'YInput'
})
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  width: {
    type: String || Number,
    default: 'auto'
  }
})
</script>

<template>
  <input class="y-input" :placeholder="placeholder" :type="type" :style="{ width: width }">
</template>

<style scoped lang='scss'>
@use '../style/index.scss' as *;

.y-input {
  width: auto;
  height: 34px;
  border: $border;
  border-radius: $border-radius;
  padding: 0 10px;
  outline: none;

  &:focus {
    border-color: $primary-color;
  }
}
</style>