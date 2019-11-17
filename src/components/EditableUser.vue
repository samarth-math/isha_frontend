<template>
  <div>
    Is this you?
    <b-form @submit="onSubmit">
      First Name : <b-form-input v-model="meditator.firstname"></b-form-input>
      Last Name: <b-form-input v-model="meditator.firstname"></b-form-input>
      Phone : <b-form-input v-model="meditator.firstname"></b-form-input>
      Country : <b-form-input v-model="meditator.firstname"></b-form-input>
      ZipCode : <b-form-input v-model="meditator.firstname"></b-form-input>

      {{picked}}
      <b-button
        type="submit"
        variant="primary"
      >Submit</b-button>
    </b-form>
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