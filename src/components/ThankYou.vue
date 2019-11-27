<template>
  <div>
    <div class="hero-unit" v-if="success">
      <h1>Thank you for checking in.</h1>
      <p>Please proceed to the volunteer desk for the next steps!</p>
    </div>
    <div class="hero-unit" v-else>
      <h1>Oh no! Looks like there was a problem with your checkin</h1>
      <p>Please proceed to the volunteer desk to get help!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThankYou",
  components: {},
  data() {
    return {};
  },
  methods: {},
  props: {
    success: {
      type: Boolean,
      required: true
    }
  }
};
</script>
