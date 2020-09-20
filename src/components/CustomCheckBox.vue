<template>
  <div class="input-wrapper">
    <div class="label-wrapper">
      <span class="input-label"> {{ inputLabel }} </span>
      <span class="required" v-show="isRequired">*</span>
    </div>
    <input class="checkbox" v-model="model" type="checkbox">
  </div>
</template>

<script>
export default {
  name: "CustomCheckBox",

  data () {
    return {
      model: ""
    }
  },

  props: {
    inputLabel: {
      required: true
    },
    isRequired: {
      default: false
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
    flex-direction: row;
    align-items: center;
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

</style>