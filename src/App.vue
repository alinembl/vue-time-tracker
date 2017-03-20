<template>
  <div id="app">
    <md-toolbar>
        <h2 class="md-title">Vue Time Tracker</h2>
        <md-button v-if="$route.path !== '/'"><router-link to="/">Home</router-link></md-button>
        <md-button class="md-raised"><router-link to="/time-entries">Time Entries</router-link></md-button>
      </md-toolbar>
      <home></home>
    </div>
</template>

<script>
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'


export default {
  name: 'app',
  components: {
    Home,
    TimeEntries
  }
}
</script>

<style scope>
.md-accent {
  color: #fff;
}
</style>
