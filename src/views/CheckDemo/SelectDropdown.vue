<template>
  <div>
    <el-form :model="form">
      <el-form-item label="下拉框">
        <el-select v-model="form.select" filterable remote :remote-method="handleRemota"
          v-lazy-load-dropdown="handleScrollDropdown">
          <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
// 举例子 引用接口
import { pageFetchReq } from '../../services/pageFetch'
export default {
  data() {
    return {
      options: [
        { value: '选项1', label: '黄金糕', id: 1 },
        { value: '选项2', label: '双皮奶', id: 2 },
        { value: '选项3', label: '蚵仔煎', id: 3 },
        { value: '选项4', label: '龙须面', id: 4 },
        { value: '选项5', label: '北京烤鸭', id: 5 },
        { value: '选项6', label: '海底捞', id: 6 },
        { value: '选项7', label: '烧鸡', id: 7 },
        { value: '选项8', label: '蟹黄堡', id: 8 },
        { value: '选项9', label: '豆汁焗饭', id: 9 },
        { value: '选项10', label: '豆腐脑', id: 10 },
      ],
      query: {
        pageNum: 1,
        pageSize: 10,
        total: 100
      },
      form: {
        select: ''
      }
    }
  },
  directives: {
    'lazy-load-dropdown': {
      bind(el, binding) {
        const SELECT_DOM = el.querySelector('.el-select-dropdown .el-scrollbar__wrap')
        // SELECT_DOM 获取到的dmo节点 下面需要用到dmo节点的clientHeight
        SELECT_DOM.addEventListener('scroll', () => {
          if (SELECT_DOM.scrollTop + SELECT_DOM.clientHeight >= SELECT_DOM.scrollHeight) {
            binding.value()
          }
        })
      }
    }
  },
  methods: {
    // 获取list数据
    getData() {
      console.log('获取列表数据')
      pageFetchReq().then(res => {
        console.log('请求成功', res)
        this.options = this.options.concat(res.data.data.list)
        this.query.total = res.data.data.total
      })
    },
    // 给自定义指令用的方法
    handleScrollDropdown() {
      this.query.pageNum++
      console.log('下拉加载更多')
      // 这一步是做了一个容错判断 在pageNum>total 时 return出去
      if (this.query.pageNum > this.query.total) {
        console.log('没有更多数据了')
        return
      }
      // 获取列表接口
      this.getData()
    },
    // 远程搜索
    handleRemota(val) {
      if (val !== '') {
        this.query.keyWords = val
        this.getData()
      }
    }
  }

}
</script>
