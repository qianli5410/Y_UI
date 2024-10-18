<script setup lang="ts">
import { ref, reactive, onMounted, watchEffect } from 'vue'
defineOptions({
  name: 'YTable'
})

const props = defineProps({
  columns: {
    type: Array,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  }
})

</script>

<template>
  <!-- 写一个th tr td的结构 -->
  <section style="width: 100%;">
    <table class="y-table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.prop">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in data" :key="item.name">
          <tr>
            <template v-for="column in columns" :key="column.prop">
              <td v-if="column.render">{{ column.render(item, column) }}</td>
              <td v-else-if="column.slot">
                <slot :name="column.slot" :row="item" :column="column">{{ item[column.prop] }}</slot>
              </td>
              <td v-else>{{ item[column.prop] }}</td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="table-footer"></div>
  </section>
</template>

<style scoped lang="scss">
@use '../style/index.scss' as *;

.y-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: #fff;
  border-radius: $border-radius;

  thead {
    tr {
      th {
        color: $primary-color;
        background-color: rgba($primary-color, 0.15);
        padding: 12px 16px;
        text-align: left;
        font-weight: 600;
        font-size: 14px;
        border-bottom: 1px solid rgba($primary-color, 0.2);
        transition: background-color 0.3s ease, color 0.3s ease;

        &:first-child {
          border-top-left-radius: $border-radius;
        }

        &:last-child {
          border-top-right-radius: $border-radius;
        }
      }
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #ebeef5;
      transition: background-color 0.3s ease, transform 0.2s ease;

      td {
        padding: 12px 16px;
        font-size: 14px;
        color: #333;
        border-bottom: 1px solid #f2f2f2;
      }
    }
  }

  /* 奇偶行样式 */
  tbody tr:nth-child(odd) {
    background-color: #fafafa;
  }

  tbody tr:nth-child(even) {
    background-color: #fff;
  }

}

.table-footer {
  height: 44px;
  width: 100%;
  background-color: rgba($primary-color, 0.15);
  border-top: 1px solid rgba($primary-color, 0.2);
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;
}
</style>
