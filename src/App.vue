<template>
  <div id="app">
    <v-app dark>
      <!--<v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Florian Wengelewski</v-toolbar-title>
      </v-toolbar>-->
      

      <v-parallax :src="require('@/assets/avatar.jpg')" height="600">
        <v-container fluid>
          <v-layout 
            row
            fill-height
            align-end>
            <v-card color="rgba(0, 0, 0, 0.7)" class="rounded-card pa-4">
              <div>
                <div class="display-2">Florian Wengelewski</div>
                <div class="display-1 pt-2">Android Developer</div>
              </div>
            </v-card>
          </v-layout>
        </v-container>
      </v-parallax>

      <router-view/>
      
      <v-bottom-nav
        :active.sync="bottomNav"
        :value="true"
        :color="color"
        mandatory
        fixed
        shift>
        <v-btn dark to="/">
          <span>Career</span>
          <v-icon>donut_large</v-icon>
        </v-btn>

        <v-btn dark to="/private">
          <span>Private</span>
          <v-icon>extension</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      bottomNav: 0
    }
  },

  computed: {
    color () {
      switch (this.bottomNav) {
        case 0: return 'teal'
        case 1: return 'indigo'
      }
    }
  }
}
</script>

<style>
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';

  .rounded-card {
    border-radius: 16px
  }
</style>

