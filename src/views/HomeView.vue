<template>
  <div class="home">
    <navbar />

    <div id="main-section">
      <sidebar />
      <movie-list />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue';
import MovieList from '@/components/MovieList.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Sidebar,
    MovieList,
  }
}
</script>

<style lang="scss" scoped>
	.home {
		display: flex;
		flex-direction: column;

		#main-section {
			display: flex;
			margin-top: 50px;
		}
	}
</style>
