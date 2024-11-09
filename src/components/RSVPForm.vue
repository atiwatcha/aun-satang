<template>
    <!-- <section class="rsvp">
      <h2>RSVP</h2>
      <form @submit.prevent="submitRSVP">
        <input v-model="name" type="text" placeholder="Your Name" required />
        <input v-model="email" type="email" placeholder="Your Email" required />
        <button type="submit">Submit</button>
      </form>
    </section> -->
  </template>
  
  <script>
  export default {
    name: 'RSVPForm',
    data() {
      return {
        name: '',
        email: ''
      };
    },
    methods: {
      submitRSVP() {
        alert(`Thank you for your RSVP, ${this.name}!`);
        // Here, you can handle the RSVP data (e.g., send to an API)
        this.name = '';
        this.email = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .rsvp {
    padding: 40px;
    text-align: center;
    background-color: #fff;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    margin: 10px 0;
    padding: 10px;
    width: 200px;
  }
  button {
    padding: 10px 20px;
  }
  </style>
  