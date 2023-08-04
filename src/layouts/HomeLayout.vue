<template>
  <div>
    <app-header/>
    <slot />
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/navigation/AppHeader.vue';
import AppFooter from '@/components/navigation/AppFooter.vue';
export default {
  components: {AppHeader, AppFooter},
  name: "DashboardLayout",
  computed: {},
};
</script>

<style scoped>
</style>
