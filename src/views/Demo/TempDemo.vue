<template>
  <div class="container">
    <div class="item">
      <span>公司:</span>
      <span v-compare:company>{{ dataFormSupplierInput.company }}</span>
    </div>
    <div class="item">
      <span>公司简称:</span>
      <span v-compare:companySimple>{{ dataFormSupplierInput.companySimple }}</span>
    </div>
    <div class="item">
      <span>经营时间:</span>
      <span>
        {{ dataFormSupplierInput?.stockDataStart }}-{{
          dataFormSupplierInput?.stockData
        }}
      </span>
    </div>
  </div>
</template>

<script>

</script>
