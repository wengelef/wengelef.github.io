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
            <v-flex xs12 sm6 class="pl-5">
              <v-card color="rgba(0, 0, 0, 0.7)">
                <div>
                  <div class="display-2 pl-5 pt-5">Florian Wengelewski</div>
                  <div class="display-1 pl-5 pt-2 pb-2">Android Developer</div>
                </div>
              </v-card>
            </v-flex>
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
</style>

