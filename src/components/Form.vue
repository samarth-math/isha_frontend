<template>
  <div>
    <div>
      Response:
      {{response}}
    </div>
    <b-form
      @submit="onSubmit"
      @reset="onReset"
      v-if="show"
    >
      <b-form-group
        label="Your First Name:"
        label-for="fname"
      >
        <b-form-input
          id="fname"
          v-model="form.fname"
          required
          placeholder="Enter first name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Your Last Name:"
        label-for="lname"
      >
        <b-form-input
          id="lname"
          v-model="form.lname"
          required
          placeholder="Enter last name"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Email address:"
        label-for="email"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
      >Submit</b-button>
      <b-button
        type="reset"
        variant="danger"
      >Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { HTTP } from "../common/http"
//import axios from "axios"

export default {
  data() {
    return {
      response: {},
      form: {
        email: 'abc@def.com',
        fname: 'Sam',
        lname: 'Math'
      },
      show: true
    }
  },
  created() {
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      HTTP.post('/pguser', this.form).then(response => {
        this.response = response.data
        this.$router.push({ name: 'FetchedUsers', params: { meditators: this.response } })
      }).catch(error => {
        console.log(error)
      })
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.fname = ''
      this.form.lname = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>