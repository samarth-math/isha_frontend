<template>
  <div>
    <b-form @submit="onSubmit">
      First Name : <b-form-input v-model="meditator.firstname"></b-form-input>
      Last Name: <b-form-input v-model="meditator.lastname"></b-form-input>
      Phone : <b-form-input v-model="meditator.phone"></b-form-input>
      Country : <b-form-input v-model="meditator.mailingcountry"></b-form-input>
      ZipCode : <b-form-input v-model="meditator.cdi_mailingpostalcode__c"></b-form-input>

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
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$router.push({ name: 'EditableUser', params: { meditator: this.picked } })
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