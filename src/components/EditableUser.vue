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
      Current Visit Checkout Date : <b-form-input v-model="visitInfo.checkout_date"></b-form-input>

      <b-button
        type="submit"
        variant="primary"
      >Submit</b-button>
    </b-form>
    {{picked}}
  </div>
</template>

<script>
export default {
  name: 'EditableUser',
  data() {
    return {
      picked: '',
      visitInfo: {
        checkin_date: new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0],
        checkout_date: ''
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
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