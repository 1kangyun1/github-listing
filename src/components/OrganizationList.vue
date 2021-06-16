<template>
  <div class="flex flex-col w-1/2">
    <OrganizationItem v-for="organization in getOrganizations" :key="organization.id" :organization="organization" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import OrganizationItem from './OrganizationItem.vue';

export default {
  computed: mapGetters(['getOrganizations']),
  components: {
    OrganizationItem
  }
}
</script>
