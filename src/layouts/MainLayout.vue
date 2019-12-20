<template>
  <div class="app-main-layout">
    <Navbar @click="isOpen = !isOpen" />
    <Sidebar v-model="isOpen" />

    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <div>
          <vue-page-transition name="fade-in-down">
            <router-view />
          </vue-page-transition>
        </div>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" href="#" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default {
  name: "main-layout",
  components: {
    Navbar,
    Sidebar
  },
  data: () => ({
    isOpen: true
  })
};
</script>
<style lang="scss"></style>
