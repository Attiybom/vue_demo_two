<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="doctorType" label="医生类型"> </el-table-column>
    <el-table-column label="分配">
      <template slot-scope="scope">
        <el-switch
        class="main-el-switch "
          @change="change"
          v-model="scope.row.distribute"
          :disabled="!(scope.row.doctorType === '居家医生')"
          active-value=1
          inactive-value=0
          active-text="是"
          inactive-text="否"
        >
        </el-switch>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          doctorType: "居家医生",
          distribute: 0,
        },
        {
          doctorType: "西医",
          distribute: 0,
        },
        {
          doctorType: "中医",
          distribute: 0,
        },
        {
          doctorType: "非医生",
          distribute: 0,
        },
      ],
    };
  },
  methods: {
    change(row) {
      console.log(row, 44);
    },
  },
  created() {},
};
</script>

<!-- <style lang="scss" scoped>
    ::v-deep .clearPadding .vxe-cell {
      padding: 0;
    }
    ::v-deep .clearPaddingLeft .vxe-cell {
      padding-left: 0px;
    }
    ::v-deep {
      .main-el-switch {
        position: relative;
        .el-switch__core {
          height: 24px;
          border-radius: 12px;
          &:after {
            left: 4px;
            top: 3px;
          }
        }
        &.el-switch {
          &.is-checked {
            .el-switch__core {
              &:after {
                margin-left: -20px;
                left: 100%;
              }
            }
          }
        }
        &.is-checked {
          .el-switch__label--left {
            opacity: 0;
          }
          .el-switch__label--right {
            opacity: 1;
          }
        }
        .el-switch__label {
          position: absolute;
          top: 0;
        }
        .el-switch__label--left {
          right: 0;
          color: #999;
          z-index: 1;
          margin-right: 8px;
        }
        .el-switch__label--right {
          left: 0;
          color: #fff;
          opacity: 0;
          margin-left: 8px;
        }
      }
    }
    </style> -->
