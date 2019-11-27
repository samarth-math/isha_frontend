<template>
  <div>
    <b-form @submit="onSubmit">
      First Name : <b-form-input
        disabled="disabled"
        v-model="meditator.firstname"
      ></b-form-input>
      Last Name: <b-form-input
        disabled="disabled"
        v-model="meditator.lastname"
      ></b-form-input>
      Email: <b-form-input
        disabled="disabled"
        v-model="meditator.email"
      ></b-form-input>
      Phone : <b-form-input
        disabled="disabled"
        v-model="meditator.phone"
      ></b-form-input>
      Country : <b-form-input
        disabled="disabled"
        v-model="meditator.mailingcountry"
      ></b-form-input>
      ZipCode : <b-form-input
        disabled="disabled"
        v-model="meditator.cdi_mailingpostalcode__c"
      ></b-form-input>
      Current Visit Checkin Date : <b-form-input
        class="form-control"
        type="datetime-local"
        disabled="disabled"
        v-model="visitInfo.checkin_date"
      ></b-form-input>
      Current Visit Checkout Date : <datepicker v-model="visitInfo.checkout_date"></datepicker>

      <b-button
        type="submit"
        variant="primary"
      >Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { HTTP } from "../common/http"
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'EditableUser',
  components: {
    Datepicker
  },
  data() {
    return {
      visitInfo: {
        checkin_date: new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0],
        checkout_date: '',
        visitor: this.meditator.sfid
      },
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault(),
        HTTP.post('/createNew', { 'visitInfo': this.visitInfo }).then(response => {
          console.log(response.data)
          this.visitInfo.ashramVisitUid = response.data
          this.$router.push({ name: 'SignWaiver', params: { meditator: this.meditator, visitInfo: this.visitInfo } })
        }).catch(error => {
          console.log(error)
        })
    },
  },
  props: {
    meditator: {
      type: Object,
      required: true
    },
  }
}
</script>