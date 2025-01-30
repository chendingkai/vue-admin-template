<template>
  <div class="app-container">
    <el-table
      :data="data"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :align="item.align"
        :sortable="item.sort"
        :prop="item.attrName"
        :label="item.label"
        :width="item.width">
        <template v-slot="scope">
          {{ scope.row }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    operation: {
      type: Array,
      default: () => []
    },
    operationWidth: {
      type: Number,
      default: () => 0
    },
    numWidth: {
      type: Number,
      default: () => 0
    }
  },
  data() {
    return {}
  }
}
</script>
