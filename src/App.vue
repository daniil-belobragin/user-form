<template>
  <div id="app">
    <form @submit.prevent="handleSubmit" class="user-form">

      <alpha-validator :obj="$v.surname" :submitted="submitted" />
      <custom-input class="inputs" input-label="Фамилия" :changed="surnameChanged" :is-required="true" />

      <alpha-validator :obj="$v.name" :submitted="submitted" />
      <custom-input input-label="Имя" :changed="nameChanged" :is-required="true" />

      <alpha-validator :obj="$v.patronymic" :submitted="submitted" />
      <custom-input input-label="Отчество" :changed="patronymicChanged" />

      <date-picker input-label="Дата рождения" :changed="birthDayChanged" :is-required="true" />

      <phone-validator :obj="$v.phone" :submitted="submitted"/>
      <custom-input input-label="Номер телефона" :changed="phoneChanged" :is-required="true" />

      <selector-input input-label="Пол" :changed="sexChanged"
                      :options="[{value: 'не указывать'}, {value: 'мужской'}, {value: 'женский'}]" />

      <div class="error" v-show="clientGroup.length === 0 && submitted">
        <span>Поле должно содержать хотя бы один элемент</span>
      </div>
      <multiple-selector-input input-label="Группа клиентов" :changed="clientGroupChanged"
                               :options="[{value: 'VIP'}, {value: 'Проблемные'}, {value: 'ОМС'}]" :is-required="true" />

      <selector-input input-label="Лечащий врач" :changed="doctorChanged"
                      :options="[{value: 'Иванов'}, {value: 'Захаров'}, {value: 'Чернышева'}]" />

      <custom-check-box input-label="Не отправлять СМС" :changed="dontSendSMSChanged" />

      <numeric-validator :obj="$v.postcode" :submitted="submitted"/>
      <custom-input input-label="Индекс" :changed="postcodeChanged" />

      <alpha-validator :obj="$v.country" :submitted="submitted" />
      <custom-input input-label="Страна" :changed="countryChanged" />

      <alpha-validator :obj="$v.region" :submitted="submitted" />
      <custom-input input-label="Область" :changed="regionChanged" />

      <alpha-validator :obj="$v.city" :submitted="submitted"/>
      <custom-input input-label="Город" :changed="cityChanged" :is-required="true"/>

      <alpha-validator :obj="$v.street" :submitted="submitted"/>
      <custom-input input-label="Улица" :changed="streetChanged" />

      <div class="error" v-show="!$v.house.house && submitted && house.length !== 0">
        <span>Поле должно содержать только цифры, а также может включать латинские символы</span>
      </div>
      <custom-input input-label="Дом" :changed="houseChanged" />

      <div class="error" v-show="documentType.length === 0 && submitted">
        <span>Поле обязательно к заполнению</span>
      </div>
      <selector-input input-label="Тип документа" :changed="documentTypeChanged" :is-required="true"
                      :options="[{value: 'Паспорт'}, {value: 'Свидетельство о рождении'}, {value: 'Водительское удостоверение'}]" />

      <numeric-validator :obj="$v.documentSeries" :submitted="submitted"/>
      <custom-input input-label="Серия" :changed="documentSeriesChanged" />

      <numeric-validator :obj="$v.documentNumber" :submitted="submitted" />
      <custom-input input-label="Номер" :changed="documentNumberChanged" />

      <alpha-validator :obj="$v.issuedBy" :submitted="submitted" />
      <custom-input input-label="Кем выдан" :changed="issuedByChanged" />

      <date-picker input-label="Дата выдачи" :changed="whenIssuedChanged" :is-required="true" />

      <button class="submit-button" v-bind:class="{submitButtonError: $v.$invalid && submitted}"
              :disabled="$v.$invalid && submitted">
        Отправить форму
      </button>
    </form>
  </div>
</template>

<script>
import {validationMixin} from "vuelidate"
import { required, minLength, maxLength, numeric, helpers } from "vuelidate/lib/validators"

const alpha = helpers.regex('alpha', /^[а-яё]*$/i)
const sixNumber = helpers.regex("sixNumber", /^\d{6}$/)
const phone = helpers.regex('phone', /^7\d{10}/)
const fourNumber = helpers.regex('fourNumber', /^\d{4}$/)
const house = helpers.regex("home", /^\d+[а-я]*$/i)

import CustomInput from "@/components/CustomInput";
import DatePicker from "@/components/DatePicker";
import SelectorInput from "@/components/SelectorInput";
import MultipleSelectorInput from "@/components/MultipleSelectorInput";
import CustomCheckBox from "@/components/CustomCheckBox";
import AlphaValidator from "@/components/AlphaValidator";
import PhoneValidator from "@/components/PhoneValidator";
import NumericValidator from "@/components/NumericValidator";
export default {
  name: 'App',

  mixins: [validationMixin],

  data () {
    return {
      name: "",
      surname: "",
      patronymic: "",
      birthDay: "",
      phone: "",
      sex: "",
      clientGroup: [],
      doctor: "",
      dontSendSMS: false,
      postcode: "",
      country: "",
      region: "",
      city: "",
      street: "",
      house: "",
      documentType: "",
      documentSeries: "",
      documentNumber: "",
      issuedBy: "",
      whenIssued: "",
      submitted: false
    }
  },

  components: {
    NumericValidator,
    PhoneValidator,
    AlphaValidator,
    CustomCheckBox,
    MultipleSelectorInput,
    SelectorInput,
    DatePicker,
    CustomInput
  },

  methods: {
    nameChanged (value) {
      this.name = value
    },
    surnameChanged (value) {
      this.surname = value
    },
    patronymicChanged (value) {
      this.patronymic = value
    },
    birthDayChanged (value) {
      this.birthDay = value
    },
    phoneChanged (value) {
      this.phone = value
    },
    sexChanged (value) {
      this.sex = value
    },
    clientGroupChanged (value) {
      this.clientGroup = value
    },
    doctorChanged (value) {
      this.doctor = value
    },
    dontSendSMSChanged (value) {
      this.dontSendSMS = value
    },
    postcodeChanged (value) {
      this.postcode = value
    },
    countryChanged (value) {
      this.country = value
    },
    regionChanged (value) {
      this.region = value
    },
    cityChanged (value) {
      this.city = value
    },
    streetChanged (value) {
      this.street = value
    },
    houseChanged (value) {
      this.house = value
    },
    documentTypeChanged (value) {
      this.documentType = value
    },
    documentSeriesChanged (value) {
      this.documentSeries = value
    },
    documentNumberChanged (value) {
      this.documentNumber = value
    },
    issuedByChanged (value) {
      this.issuedBy = value
    },
    whenIssuedChanged (value) {
      this.whenIssued = value
    },
    handleSubmit() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      alert("SUCCESS")
    },
  },

  validations: {
    name: {
      minLength: minLength(3),
      maxLength: maxLength(15),
      alpha,
      required
    },
    surname: {
      minLength: minLength(3),
      maxLength: maxLength(15),
      alpha,
      required
    },
    patronymic: {
      minLength: minLength(3),
      maxLength: maxLength(15),
      alpha
    },
    postcode: {
      sixNumber,
      numeric
    },
    phone: {
      required,
      phone,
    },
    country: {
      minLength: minLength(3),
      maxLength: maxLength(15),
      alpha
    },
    city: {
      minLength: minLength(3),
      maxLength: maxLength(15),
      alpha,
      required
    },
    region: {
      minLength: minLength(3),
      maxLength: maxLength(15),
      alpha
    },
    street: {
      minLength: minLength(3),
      maxLength: maxLength(15),
      alpha
    },
    house: {
      house
    },
    documentSeries: {
      numeric,
      fourNumber
    },
    documentNumber: {
      numeric,
      sixNumber
    },
    issuedBy: {
      minLength: minLength(3),
      maxLength: maxLength(15),
      alpha
    }
  }
}

</script>

<style lang="scss">
  @import "./assets/style/style";

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .user-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 50px;
    width: 250px;
  }

  .error {
    display: inline-flex;
    padding: 5px;
    margin-top: 10px;
    overflow: auto;
    border: 2px solid crimson;
    border-radius: 5px;
    background: #e6e6e6;
  }

  .submit-button {
    outline: none;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 5px;
    border: 2px solid #e6e6e6;
    justify-content: center;
    width: 100%;
    cursor: pointer;
  }

  .submitButtonError {
    border: 2px solid crimson;
  }
</style>
