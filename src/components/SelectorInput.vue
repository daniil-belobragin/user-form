<template>
  <div class="input-wrapper">
    <div class="label-wrapper">
      <span class="input-label"> {{ inputLabel }} </span>
      <span class="required" v-show="isRequired">*</span>
    </div>
    <select class="input" v-model="model">
      <option disabled value="">Выбирите вариант</option>
      <option v-for="option in options" :key="option.id" :value="option.value"> {{ option.value }} </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectorInput",

  data () {
    return {
      model: ""
    }
  },

  props: {
    inputLabel: {
      type: String
    },
    isRequired: {
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    changed: {
      type: Function,
      required: true
    }
  },

  watch: {
    model (newValue) {
      this.changed(newValue)
    }
  }
}
</script>

<style scoped>
  .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    margin-top: 10px;
  }

  .label-wrapper {
    font-size: 16px;
    font-weight: 700;
  }

  .required {
    color: red;
  }

  .input {
    outline: none;
    width: 250px;
    font-size: 13px;
    margin-top: 4px;
    padding: 5px 10px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 2px solid #e6e6e6;
    background: #e6e6e6;
  }

  .input:focus {
    border: 2px solid #48d294;
  }
</style>