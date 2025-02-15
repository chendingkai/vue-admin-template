<template>
  <div>
    <el-dialog :visible="visible" :title="title" @close="handleClose">
      <textarea v-if="editValue!=null&&editValue!==''" v-model="editValue" style="width: 100%" rows="30"/>
      <el-button type="primary" @click="submitEdit">编辑</el-button>
      <el-button type="primary" @click="handleClose">关闭</el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'YamlEditor',
  props: {
    'ymlData': {type: String},
    'visible': {type: Boolean},
    'title': {type: String}
  },
  data() {
    return {
      editValue: ''
    }
  },
  watch: {
    ymlData() {
      this.initEditValue()
    }
  },
  created() {
  },
  methods: {
    handleClose() {
      this.initEditValue()
      this.$emit('closeEditor')
    },
    submitEdit() {
      this.$emit('submitProjectEdit', this.editValue)
    },
    initEditValue() {
      this.editValue = this.ymlData
    }
  }
}
</script>

<style scoped>

</style>
