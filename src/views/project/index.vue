<template>
  <div class="app-container">
    <el-table
      :data="list"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        prop="id"
        row-key="id"
        align="center"
        label="ID"
      >
        <template v-slot="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="名称"
      >
        <template v-slot="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        align="center"
        label="状态"
      >
        <template v-slot="scope">
          {{ scope.row.status }}
        </template>
      </el-table-column>
      <el-table-column
        prop="createTime"
        align="center"
        label="创建时间"
      >
        <template v-slot="scope">
          {{ scope.row.createTime }}
        </template>
      </el-table-column>
      <el-table-column
        prop="updateTime"
        align="center"
        label="更新时间"
      >
        <template v-slot="scope">
          {{ scope.row.updateTime }}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-sizes="[10,20,50]"
      :page-count="page.pageSize"
      :current-page="page.currentPage"
      :total="page.total"
      layout="total, sizes, prev, pager, next"
      prev-text="上一页"
      next-text="下一页"
      total-text="总数"
      @size-change="sizeChange"
      @current-change="currentChange"
    />
  </div>
</template>

<script>
import {getList} from '@/api/project'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      projectColumns: [],
      operation: [],
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    sizeChange(val) {

    },
    currentChange(val) {

    },

    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
