<template>
  <div class="error" v-show="obj.$invalid && submitted">
    <span v-if="!obj.alpha">Поле должно содержать только латинские буквы</span>
    <span v-else-if="!obj.minLength">Поле должно содержать больше трех букв</span>
    <span v-else-if="!obj.maxLength">Поле должно содержать меньше 15 букв</span>
    <span v-else-if="obj.required === false && submitted">Поле обязательно к заполнению</span>
  </div>
</template>

<script>
export default {
  name: "alphaValidator",

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
  },
}
</script>

<style scoped>
  .error {
    display: inline-flex;
    padding: 5px;
    margin-top: 10px;
    border: 2px solid crimson;
    border-radius: 5px;
    background: #e6e6e6;
  }
</style>