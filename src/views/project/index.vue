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
      <el-table-column
        prop="operator"
        align="center"
        label="操作"
      >
        <template v-slot="scope">
          <el-button
            size="mini"
            type="text"
            @click="projectDetail(scope.row)"
          >查看
          </el-button>
          <el-button
            size="mini"
            type="text"
            @click="projectEdit(scope.row)"
          >编辑
          </el-button>
          <el-button
            size="mini"
            type="text"
            @click="projectDelete(scope.row)"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-sizes="[1,20,50]"
      :page-count="projectVo.pageSize"
      :current-page="projectVo.pageNo"
      :total="projectVo.total"
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
import {getListByPage} from '@/api/project'

export default {
  data() {
    return {
      list: [],
      listLoading: true,
      projectColumns: [],
      operation: [],
      projectVo: {
        pageNo: 0,
        pageSize: 1,
        total: 0
      }
    }
  },
  created() {
    this.projectListByPage(this.projectVo)
  },
  methods: {
    sizeChange(val) {
      this.projectVo.pageSize = val
      this.projectListByPage(this.projectVo)
    },
    currentChange(val) {
      this.projectVo.pageNo = val
      this.projectListByPage(this.projectVo)
    },

    projectListByPage(projectVo) {
      this.listLoading = true
      getListByPage(projectVo).then(response => {
        this.list = response.data.records
        this.projectVo.total = response.data.total
        this.listLoading = false
      })
    },
    projectDetail(row) {

    },
    projectEdit(row) {

    },
    projectDelete(row) {

    }
  }
}
</script>
