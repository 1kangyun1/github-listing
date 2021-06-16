<template>
  <router-link :to="{ path: '/org/'+organization.id+'/details' }">
    <div class="flex items-center outline-black	rounded-lg pt-2 pb-2">
      <img class="h-12 w-12 rounded-full" :src="organization.avatar_url" alt="avatar"/>
      <div class="pl-3">
        <h1 class="text-sm font-semibold">{{ organization.login }}</h1>
        <p class="text-sm">{{ organization.description }}</p>
      </div>
    </div>  
  </router-link>
</template>

<script>
export default {
  props: [
    'organization'
  ]
}
</script>
