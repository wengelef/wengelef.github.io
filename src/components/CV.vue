<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Florian Wengelewski</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <section>
        <v-parallax :src="require('@/assets/avatar.jpg')" height="500">
          <v-layout
            column
            fill-height
          >
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

      <v-flex xs12 sm10 offset-sm1>
          <v-expansion-panel 
            popout 
            v-model="cv" expand>

            <v-expansion-panel-content readonly>
              <div slot="header">Skills</div>
              <v-flex class="pa-5">
                <ul>
                  <li>
                    Seasoned in using Android Studio IDE for Android Development, Android SDK’s and commonly used third-party-libraries
                  </li>
                  <li>
                    Git version control system
                  </li>
                  <li>
                    Understanding of the importance of code quality and continuous integration (Unit Testing, static code analysis, Jenkins CI, Fabric/Firebase)
                  </li>
                  <li>
                    Broad development knowledge in Java and Kotlin
                  </li>
                  <li>
                    Enthusiastic about Material Design and Mobile User Experience
                  </li>
                  <li>
                    MVVM and MVP architecture
                  </li>
                  <li>
                    Functional Reactive Programming (RxJava)
                  </li>
                  <li>
                    Implementing RESTful Clients has become second nature (Retrofit 2, Volley)
                  </li>
                  <li>
                    ORMs and NoSQL (Realm, GreenDAO, ActiveAndroid, SQL Brite)
                  </li>
                  <li>
                    Dependency injection (Dagger 2, Kodein)
                  </li>
                  <li>
                    Active StackOverflow community member
                  </li>
                  <li>
                    Working in agile environments (Scrum, Kanban)
                  </li>
                  <li>
                    Up to speed with technical advancements of Android
                  </li>
                </ul>
              </v-flex>
            </v-expansion-panel-content>

            <v-expansion-panel-content readonly>
              <div slot="header">nextmarkets GmbH</div>
              <v-flex class="pa-4">
                <div><font size="4" color="#999999">Android Developer</font></div>
                <font size="4" color="#999999">January 2017 - PRESENT</font>
                <v-divider></v-divider>
                <v-flex class="pa-4">
                  <ul>
                    <li>Development of the native Android Client in Kotlin for the CFD Trading Platform nextmarkets</li>
                    <li>Migration of existing Java code to Kotlin</li>
                    <li>Unit- and Integration testing</li>
                    <li>Supporting Design and Usability Concepts</li>
                  </ul>
                </v-flex>
              </v-flex>
            </v-expansion-panel-content>

            <v-expansion-panel-content readonly>
              <div slot="header">RockAByte GmbH</div>
              <v-flex class="pa-4">
                <div><font size="4" color="#999999">Android Developer</font></div>
                <font size="4" color="#999999">January 2015 - January 2017</font>
                <v-divider></v-divider>
                <v-flex class="pa-4">
                  <ul>
                    <li>Hands on development of Android applications</li>
                    <li>Maintaining stability of projects</li>
                    <li>Working on multiple projects independently as well as in agile teams</li>
                    <li>Improving usability and design of existing apps</li>
                    <li>Unit- and Integration testing</li>
                    <li>Minor C++ programming of cross-platform utility tools</li>
                    <li>Help identify and reduce crash rates of legacy applications and improving code quality</li>
                  </ul>
                </v-flex>
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
    cv: [true, true, true],
  })
}
</script>

<style scoped>
  @import 'https://fonts.googleapis.com/icon?family=Material+Icons';

</style>