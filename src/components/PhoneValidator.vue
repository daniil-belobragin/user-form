<template>
  <div class="error" v-show="obj.$invalid && submitted">
    <span v-if="!obj.phone">Поле должно начинаться с цифры 7 и содержать 11 цифр</span>
    <span v-else-if="obj.required === false && submitted">Поле обязательно к заполнению</span>
  </div>
</template>

<script>
export default {
  name: "phoneValidator",

  props: {
    obj: {
      required: true
    },
    isRequired: {
      default: false
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