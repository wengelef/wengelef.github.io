<template>
  <div class="page-container">    
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row md-toolbar-offset">
          <span class="md-display-1">Florian Wengelewski</span>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <md-card>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="16:9">
              <img src="../assets/avatar.jpg">
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <span class="md-title">Solid background</span>
                <span class="md-subhead">4/3 image</span>
              </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
        
        <div class="content-item">
            <md-card>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="16:9">
                <img src="../assets/avatar.jpg">
            </md-card-media>

            <md-card-area>
                <md-card-header>
                    <span class="md-title">Solid background</span>
                    <span class="md-subhead">4/3 image</span>
                </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
        </div>

        <md-card>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="16:9">
                <img src="../assets/avatar.jpg">
            </md-card-media>

            <md-card-area>
                <md-card-header>
                    <span class="md-title">Solid background</span>
                    <span class="md-subhead">4/3 image</span>
                </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'CV',
  data: () => ({
    menuVisible: false
  })
}
</script>

<style scoped>
  @import '//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic';
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';

  .md-app {
    height: auto;
    border: 1px solid rgba(#000, .12);
  }
  
  .md-app-content {
    max-width: 800px;
  }

  #content-item {
      max-height: 100px;
  }

  .md-app-toolbar {
    height: 128px;
  }

</style>