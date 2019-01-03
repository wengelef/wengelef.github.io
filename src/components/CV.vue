<template>
  <v-app dark>
    <!--<v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Florian Wengelewski</v-toolbar-title>
    </v-toolbar>-->

    <v-content>
      <section>
        <v-parallax :src="require('@/assets/avatar.jpg')" height="600">
          <v-layout
            column
            fill-height>

            <v-spacer></v-spacer>
            
            <v-footer height="auto" class="pa-1" color="rgba(0, 0, 0, 0.8)">
              <div>
                <div class="display-2 pl-5 pt-5">Florian Wengelewski</div>
                <div class="display-1 pl-5 pt-2 pb-2">Android Developer</div>
              </div>
              <v-spacer></v-spacer>
              
              <v-list 
                two-line>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="white">phone</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>+49 176 648 50 30 2</v-list-tile-title>
                    <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset></v-divider>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="white">mail</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>wengelef@gmail.com</v-list-tile-title>
                    <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-divider inset></v-divider>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="white">location_on</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>Aachenerstr. 325</v-list-tile-title>
                    <v-list-tile-sub-title>50931 Koeln</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-footer>
          </v-layout>
        </v-parallax>
      </section>

      <v-container fluid>
        <v-layout justify-center row wrap>
          <v-flex text-xs-center>
            <v-btn round :outline="outlineSkills" color="success" @click="skillsClick">Skills</v-btn>
            <v-btn round :outline="outlineCurrently" color="error" @click="currentlyClick">Currently</v-btn>
            <v-btn round :outline="outlinePast" color="warning" @click="pastClick">Past</v-btn>
            <v-btn round :outline="outlineBacklog" color="info" @click="backlogClick">Backlog</v-btn>
          </v-flex>
        </v-layout>
      </v-container>

      <v-flex xs12 sm10 offset-sm1>
          <v-expansion-panel 
            popout 
            v-model="expands" expand>

            <v-expansion-panel-content readonly>
              <v-icon slot="actions" color="transparent"/>
              <div slot="header">Skills</div>
              <v-flex class="pa-4">
                <ul>
                    <li v-for="item in skills" :key="item.text">
                      {{ item.text }}
                    </li>
                  </ul>
              </v-flex>
            </v-expansion-panel-content>

            <v-expansion-panel-content readonly>
              <v-icon slot="actions" color="transparent"/>
              <div slot="header">nextmarkets GmbH</div>
              <v-flex class="pa-4">
                <div><font size="4" color="#999999">Android Developer</font></div>
                <font size="4" color="#999999">January 2017 - PRESENT</font>
                <v-divider></v-divider>
                <v-flex class="pa-4">
                  <ul>
                    <li v-for="item in nextmarkets" :key="item.text">
                      {{ item.text }}
                    </li>
                  </ul>
                </v-flex>
              </v-flex>
            </v-expansion-panel-content>

            <v-expansion-panel-content readonly>
              <v-icon slot="actions" color="transparent"/>
              <div slot="header">RockAByte GmbH</div>
              <v-flex class="pa-4">
                <div><font size="4" color="#999999">Android Developer</font></div>
                <font size="4" color="#999999">January 2015 - January 2017</font>
                <v-divider></v-divider>
                <v-flex class="pa-4">
                  <ul>
                    <li v-for="item in rab" :key="item.text">
                      {{ item.text }}
                    </li>
                  </ul>
                  <div>Projects:</div>
                  <ul>
                    <li v-for="item in rabProjects" :key="item.text">
                      {{ item.text }}
                    </li>
                  </ul>
                </v-flex>
              </v-flex>
            </v-expansion-panel-content>

            <v-expansion-panel-content readonly>
              <v-icon slot="actions" color="transparent"/>
              <div slot="header">Hottgenroth Software GmbH</div>
              <v-flex class="pa-4">
                <div><font size="4" color="#999999">Unity Development internship</font></div>
                <font size="4" color="#999999">September 2014 - December 2014</font>
                <v-divider></v-divider>
                <v-flex class="pa-4">
                  <ul>
                    <li v-for="item in hottgenroth" :key="item.text">
                      {{ item.text }}
                    </li>
                  </ul>
                </v-flex>
              </v-flex>
            </v-expansion-panel-content>

            <v-expansion-panel-content readonly>
              <v-icon slot="actions" color="transparent"/>
              <div slot="header">Nurogames GmbH</div>
              <v-flex class="pa-4">
                <div><font size="4" color="#999999">Android Developer</font></div>
                <font size="4" color="#999999">March 2012 - September 2013</font>
                <v-divider></v-divider>
                <v-flex class="pa-4">
                  <ul>
                    <li v-for="item in nurogames" :key="item.text">
                      {{ item.text }}
                    </li>
                  </ul>
                </v-flex>
              </v-flex>
            </v-expansion-panel-content>

            <v-expansion-panel-content readonly>
              <v-icon slot="actions" color="transparent"/>
              <div slot="header">Backlog</div>
              <v-flex class="pa-4">
                <ul v-for="item in backlog" :key="item.title">
                  <a :href="item.url">{{ item.title }}</a>
                  <v-flex class="pl-4 pb-4 pt-2">
                    <li v-for="text in item.texts" :key="text">
                      {{ text }}
                    </li>
                  </v-flex>
                </ul>
              </v-flex>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'CV',
  data: () => ({
    outlineSkills: false,
    outlineCurrently: true,
    outlinePast: true,
    outlineBacklog: true,
    expands: [true, false, false, false, false],
    skills: [
      { text: 'Seasoned in using Android Studio IDE for Android Development, Android SDK’s and commonly used third-party-libraries' },
      { text: 'Git version control system' },
      { text: 'Understanding of the importance of code quality and continuous integration (Unit Testing, static code analysis, Jenkins CI, Fabric/Firebase)' },
      { text: 'Broad development knowledge in Java and Kotlin' },
      { text: 'Enthusiastic about Material Design and Mobile User Experience' },
      { text: 'MVVM and MVP architecture' },
      { text: 'Functional Reactive Programming (RxJava)' },
      { text: 'Implementing RESTful Clients has become second nature (Retrofit 2, Volley)' },
      { text: 'ORMs and NoSQL (Realm, GreenDAO, ActiveAndroid, SQL Brite)' },
      { text: 'Dependency injection (Dagger 2, Kodein)' },
      { text: 'Active StackOverflow community member' },
      { text: 'Working in agile environments (Scrum, Kanban)' },
      { text: 'Up to speed with technical advancements of Android' },
    ],
    nextmarkets: [
      { text: 'Development of the native Android Client in Kotlin for the CFD Trading Platform nextmarkets' },
      { text: 'Migration of existing Java code to Kotlin' },
      { text: 'Unit- and Integration testing' },
      { text: 'Supporting Design and Usability Concepts' },
    ],
    rab: [
      { text: 'Hands on development of Android applications' },
      { text: 'Working on multiple projects independently as well as in agile teams' },
      { text: 'Maintaining stability of projects' },
      { text: 'Improving usability and design of existing apps' },
      { text: 'Unit- and Integration testing' },
      { text: 'Minor C++ programming of cross-platform utility tools' },
      { text: 'Help identify and reduce crash rates of legacy applications and improving code quality' },
    ],
    rabProjects: [
      { text: 'WaipuTV' },
      { text: 'Grenoble MNA (event-based mobile usage statistics application, scientific purpose, closed beta only)' },
      { text: 'RheinEnergie Heimvorteil and its BELKAW derivate' },
      { text: 'RheinEnergie OnlineService and its BELKAW and Stadtwerke Leichlingen derivatives' },
      { text: 'Travian: Kingdoms' },
      { text: 'INFOnline (Library)' },
      { text: 'SportScheck (Legacy)' },
    ],
    hottgenroth: [
      { text: 'Unity programming support for a mobile app to acquire building data on a smartphone or tablet' },
      { text: 'Creating 3D-Models with Blender' }
    ],
    nurogames: [
      { text: 'Cross-platform mobile game development in C++ with Cocos2D-X for iOS and Android' },
      { text: 'Expanding the internal game engine' }
    ],
    backlog: [
      { 
        title: 'Lunch Memory',
        url: 'https://github.com/wengelef/lunchmemory',
        texts: [ 'Google Flutter SDK Test Project' ]
      },
      { 
        title: 'KleanMVP',
        url: 'https://github.com/wengelef/KleanMVP',
        texts: [ 'Functional Reactive MVP Architecture Sample in Kotlin' ]
      },
      { 
        title: 'RxFileUtils',
        url: 'https://github.com/wengelef/RxFileUtils',
        texts: [ 'Reactive File Utilities for the Android File System' ]
      },
      { 
        title: 'Builder',
        url: 'https://github.com/wengelef/Builder',
        texts: [ 'Java Annotation (@Builder) and AnnotationProcessor', 'Generates Builder classes for POJO’s' ]
      }
    ],
  }),
  methods: {
    currentlyClick: function (event) {
      this.outlineCurrently = !this.outlineCurrently
      this.expands = [
        !this.outlineSkills, 
        !this.outlineCurrently, 
        !this.outlinePast, 
        !this.outlinePast, 
        !this.outlinePast, 
        !this.outlineBacklog]
    },
    skillsClick: function (event) {
      this.outlineSkills = !this.outlineSkills
      this.expands = [
        !this.outlineSkills, 
        !this.outlineCurrently, 
        !this.outlinePast, 
        !this.outlinePast, 
        !this.outlinePast, 
        !this.outlineBacklog]
    },
    pastClick: function (event) {
      this.outlinePast = !this.outlinePast
      this.expands = [
        !this.outlineSkills, 
        !this.outlineCurrently, 
        !this.outlinePast, 
        !this.outlinePast, 
        !this.outlinePast, 
        !this.outlineBacklog]
    },
    backlogClick: function (event) {
      this.outlineBacklog = !this.outlineBacklog
      this.expands = [
        !this.outlineSkills, 
        !this.outlineCurrently, 
        !this.outlinePast, 
        !this.outlinePast, 
        !this.outlinePast, 
        !this.outlineBacklog]
    },
  }
}
</script>

<style scoped>
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';

</style>