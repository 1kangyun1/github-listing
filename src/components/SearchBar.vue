<template>
  <div class="flex w-full justify-center bg-black p-2">
    <form @submit.prevent="formSubmit">
      <input type='text' 
              class="h-10"
              placeholder='Search by Login'
              v-model='login' 
              name='login'/>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.login = '';
    this.fetchOrganizations();
  },
  methods: {
    ...mapActions(['fetchOrganizations']),
    formSubmit(event){
      this.fetchOrganizations(this.login);
      event.target.reset();
    }
  }
}
</script>