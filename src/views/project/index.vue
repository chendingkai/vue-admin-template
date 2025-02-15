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
      style="margin-top: 10px;text-align: right"
      :page-sizes="[10,20,50]"
      :page-count="projectVo.pageSize"
      :current-page="projectVo.pageNo"
      :total="projectVo.total"
      layout="total, sizes, prev, pager, next"
      @size-change="sizeChange"
      @current-change="currentChange"
    />
    <yml-editor
      ref="init"
      :visible="visible"
      :ymlData="ymlData"
      @closeEditor="closeEditor"
      @submitProjectEdit="submitProjectEdit"
    />
  </div>
</template>

<script>
import {getListByPage, ymlDetailById, ymlEdit} from '@/api/project'
import ymlEditor from '@/components/YmlEditor/index.vue'

export default {
  components: {ymlEditor},
  data() {
    return {
      ymlData: '',
      visible: false,
      title: '',
      list: [],
      listLoading: true,
      projectColumns: [],
      operation: [],
      projectVo: {
        pageNo: 0,
        pageSize: 10,
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
      ymlDetailById(row).then(response => {
        console.log(response.data)
        this.ymlData = response.data
        this.visible = true
        this.title = 'project detail'
      })
    },
    projectEdit(row) {
      this.projectDetail(row)
    },
    submitProjectEdit(param) {
      console.log('submitProjectEdit')
      ymlEdit(param).then(response => {
        console.log(response.data)
      })
    },
    projectDelete(row) {

    },
    closeEditor() {
      console.log('closeEditor')
      this.visible = false
    }
  }
}
</script>
