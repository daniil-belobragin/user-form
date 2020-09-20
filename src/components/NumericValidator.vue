<template>
  <div class="error" v-show="obj.$invalid && submitted">
    <span v-if="!obj.numeric">Поле должно содержать только цифры</span>
    <span v-else-if="obj.sixNumber === false">Поле должно содержать 6 цифр</span>
    <span v-else-if="obj.fourNumber === false">Поле должно содержать 4 цифры</span>
  </div>
</template>

<script>
export default {
  name: "NumericValidator",

  props: {
    obj: {
      required: true
    },
    submitted: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
  .error {
    display: inline-flex;
    padding: 5px;
    margin-top: 10px;
    overflow: auto;
    border: 2px solid crimson;
    border-radius: 5px;
    background: #e6e6e6;
  }
</style>