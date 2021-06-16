<template>
  <div class="flex flex-col items-center text-xl">
    <img class="rounded-full w-30" :src="organization.avatar_url" alt="avatar"/>
    <h3 class="text-2xl font-semibold">{{ details.name ? details.name : organization.login }}</h3>
    <p class="text-gray-400">{{ organization.description }}</p>
    <p>github: {{ details.github }}</p>
    <p>comapny: {{ details.company }}</p>
    <p>website: {{ details.url }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['id'],
  computed: mapGetters(['getOrganizations']),
  created() {
    for(let organization of this.getOrganizations){
      if(organization.id.toString() === this.id){
        this.organization = organization;
      }
    }
  },
  data() {
    return {
      organization: {
        login:'test'
      },
      details: {
        name: "",
        github: "N/A",
        company: "N/A",
        url: "N/A"
      }
    }
  },
  methods: {
    async getDetails(){
      return 
    }
  }
}
</script>