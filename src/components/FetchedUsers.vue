<template>
  <div>
    Is this you?
    <b-form @submit="onSubmit">
      <table class="table">
        <thead>
          <tr>
            <th>Select</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Country</th>
            <th>ZipCode</th>
          </tr>
        </thead>
        <tr
          v-for="meditator in meditators"
          :key="meditator.id"
        >
          <td><input
              type="radio"
              :value="meditator"
              v-model="picked"
            ></td>
          <td>{{ meditator.firstname }}</td>
          <td>{{ meditator.lastname }}</td>
          <td>{{ meditator.phone }}</td>
          <td>{{ meditator.cdi_mailingcountry__c }}</td>
          <td>{{ meditator.zipcode }}</td>
        </tr>
      </table>
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
  name: 'FetchedUsers',
  data() {
    return {
      picked: '',
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      console.log(this.picked)
    },
  },
  props: {
    meditators: {
      type: Array,
      required: true
    },
  }
}
</script>