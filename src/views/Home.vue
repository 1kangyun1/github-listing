<template>
  <div class="flex flex-col items-center">
    <SearchBar />
    <OrganizationList />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue';
import OrganizationList from '@/components/OrganizationList';

export default {
  components: {
    SearchBar,
    OrganizationList
  }
}
</script>
