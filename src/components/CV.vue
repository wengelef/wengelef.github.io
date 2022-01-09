<template>
  <v-app dark>
    <v-content>

      <v-container fluid>
        <v-layout>
          <v-flex text-xs-center>
            <v-btn round :outline="outlineContact" color="green" @click="contactClick">Contact</v-btn>
            <v-btn round :outline="outlineSkills" color="teal" @click="skillsClick">Skills</v-btn>
            <v-btn round :outline="outlineCurrently" color="red" @click="currentlyClick">In Progress</v-btn>
            <v-btn round :outline="outlinePast" color="orange" @click="pastClick">Done</v-btn>
            <v-btn round :outline="outlineBacklog" color="blue" @click="backlogClick">Backlog</v-btn>
          </v-flex>
        </v-layout>
      </v-container>

      <v-flex xs12 sm8 offset-sm2>
          <v-expansion-panel 
            popout 
            v-model="expands" expand>

            <v-expansion-panel-content readonly>
              <v-flex class="pa-4">
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
                      <v-list-tile-title>Bertha-von-Suttner Straße 1</v-list-tile-title>
                      <v-list-tile-sub-title>53840 Troisdorf</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-flex>
            </v-expansion-panel-content>

            <v-expansion-panel-content readonly>
              <v-flex class="pa-4">
                <ul>
                  <li v-for="item in skills" :key="item.text">
                    {{ item.text }}
                  </li>
                </ul>
              </v-flex>
            </v-expansion-panel-content>

            <v-expansion-panel-content readonly>
              <div v-responsive.lg.xl>
                <v-timeline>
                  <v-timeline-item
                    fill-dot
                    right
                    color="#CFD8DC">

                    <font slot="opposite" size="4" color="#CFD8DC">since January 2022</font>
                    <v-flex class="pa-4">
                      <div><font size="5" color="#CFD8DC">appDev GmbH & Co KG</font></div>
                      <div><font size="4" color="#999999">Senior Android Engineer</font></div>
                      <v-divider></v-divider>
                      <v-flex class="pa-4">
                        <ul>
                          <li v-for="item in appDev" :key="item.text">
                            {{ item.text }}
                          </li>
                        </ul>
                      </v-flex>
                    </v-flex>
                  </v-timeline-item>
                </v-timeline>
              </div>
              <div v-responsive.sm.xs.md>
                <v-flex class="pa-4">
                  <div><font size="3" color="#CFD8DC">since January 2022</font></div>
                  <div><font size="5" color="#CFD8DC">appDev GmbH & Co KG</font></div>
                  <div><font size="4" color="#999999">Senior Android Engineer</font></div>
                  <v-divider></v-divider>
                  <v-flex class="pa-4">
                    <ul>
                      <li v-for="item in appDev" :key="item.text">
                        {{ item.text }}
                      </li>
                    </ul>
                  </v-flex>
                </v-flex>
              </div>
            </v-expansion-panel-content>

            <v-expansion-panel-content readonly>
              <div v-responsive.lg.xl>
                <v-timeline>

                  <v-timeline-item fill-dot right color="#1de9b6">
                    <font slot="opposite" size="4" color="#1de9b6">April 2019 - December 2021</font>
                    <v-flex class="pa-4">
                      <div><font size="5" color="#1de9b6">REWE Digital GmbH</font></div>
                      <div><font size="4" color="#999999">Software Engineer</font></div>
                      <v-divider></v-divider>
                      <v-flex class="pa-4">
                        <ul>
                          <li v-for="item in rewe" :key="item.text">
                            {{ item.text }}
                          </li>
                        </ul>
                      </v-flex>
                    </v-flex>
                  </v-timeline-item>

                  <v-timeline-item fill-dot right color="#29B6F6">
                    <font slot="opposite" size="4" color="#29B6F6">January 2017 - April 2019</font>
                    <v-flex class="pa-4">
                      <div><font size="5" color="#29B6F6">nextmarkets GmbH</font></div>
                      <div><font size="4" color="#999999">Software Engineer</font></div>
                      <v-divider></v-divider>
                      <v-flex class="pa-4">
                        <ul>
                          <li v-for="item in nextmarkets" :key="item.text">
                            {{ item.text }}
                          </li>
                        </ul>
                      </v-flex>
                    </v-flex>
                  </v-timeline-item>

                  <v-timeline-item fill-dot right color="#f44336">
                    <font slot="opposite" size="4" color="#f44336">January 2015 - January 2017</font>
                    <v-flex class="pa-4">
                      <div><font size="5" color="#f44336">RockAByte GmbH</font></div>
                      <div><font size="4" color="#999999">Android Developer</font></div>
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
                  </v-timeline-item>

                  <v-timeline-item
                    fill-dot
                    right
                    color="#FFEE58">
                    <font slot="opposite" size="4" color="#FFEE58">September 2014 - December 2014</font>
                    <v-flex class="pa-4">
                      <div><font size="5" color="#FFEE58">Hottgenroth Software GmbH</font></div>
                      <div><font size="4" color="#999999">Unity Development internship</font></div>
                      <v-divider></v-divider>
                      <v-flex class="pa-4">
                        <ul>
                          <li v-for="item in hottgenroth" :key="item.text">
                            {{ item.text }}
                          </li>
                        </ul>
                      </v-flex>
                    </v-flex>
                  </v-timeline-item>

                  <v-timeline-item
                    fill-dot
                    right
                    color="#0097A7">
                    <font slot="opposite" size="4" color="#0097A7">March 2012 - September 2013</font>
                    <v-flex class="pa-4">
                      <div><font size="5" color="#0097A7">Nurogames GmbH</font></div>
                      <div><font size="4" color="#999999">Android Developer</font></div>
                      <v-divider></v-divider>
                      <v-flex class="pa-4">
                        <ul>
                          <li v-for="item in nurogames" :key="item.text">
                            {{ item.text }}
                          </li>
                        </ul>
                      </v-flex>
                    </v-flex>
                  </v-timeline-item>
                </v-timeline>
              </div>

              <!-- Small -->
              <div v-responsive.md.sm.xs>
                <v-flex class="pa-4">
                  <font size="3" color="#1de9b6">April 2019 - December 2021</font>
                  <div><font size="5" color="#1de9b6">REWE Digital GmbH</font></div>
                  <div><font size="4" color="#999999">Software Engineer</font></div>
                  <v-divider></v-divider>
                  <v-flex class="pa-4">
                    <ul>
                      <li v-for="item in rewe" :key="item.text">
                        {{ item.text }}
                      </li>
                    </ul>
                  </v-flex>
                </v-flex>

                <v-flex class="pa-4">
                  <font size="3" color="#29B6F6">January 2017 - April 2019</font>
                  <div><font size="5" color="#29B6F6">nextmarkets GmbH</font></div>
                  <div><font size="4" color="#999999">Software Engineer</font></div>
                  <v-divider></v-divider>
                  <v-flex class="pa-4">
                    <ul>
                      <li v-for="item in nextmarkets" :key="item.text">
                        {{ item.text }}
                      </li>
                    </ul>
                  </v-flex>
                </v-flex>

                <v-flex class="pa-4">
                  <font size="3" color="#f44336">January 2015 - January 2017</font>
                  <div><font size="5" color="#f44336">RockAByte GmbH</font></div>
                  <div><font size="4" color="#999999">Android Developer</font></div>
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
                
                <v-flex class="pa-4">
                  <font size="3" color="#FFEE58">September 2014 - December 2014</font>
                  <div><font size="5" color="#FFEE58">Hottgenroth Software GmbH</font></div>
                  <div><font size="4" color="#999999">Unity Development internship</font></div>
                  <v-divider></v-divider>
                  <v-flex class="pa-4">
                    <ul>
                      <li v-for="item in hottgenroth" :key="item.text">
                        {{ item.text }}
                      </li>
                    </ul>
                  </v-flex>
                </v-flex>
                
                <v-flex class="pa-4">
                  <font size="3" color="#0097A7">March 2012 - September 2013</font>
                  <div><font size="5" color="#0097A7">Nurogames GmbH</font></div>
                  <div><font size="4" color="#999999">Android Developer</font></div>
                  <v-divider></v-divider>
                  <v-flex class="pa-4">
                    <ul>
                      <li v-for="item in nurogames" :key="item.text">
                        {{ item.text }}
                      </li>
                    </ul>
                  </v-flex>
                </v-flex>
              </div>
            </v-expansion-panel-content>

            <v-expansion-panel-content readonly>
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
    outlineContact: true,
    outlineSkills: false,
    outlineCurrently: false,
    outlinePast: false,
    outlineBacklog: true,
    expands: [false, true, true, true, false],
    items: [
      { title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' }
    ],
    right: null,
    skills: [
      { text: 'Seasoned in using IntelliJ IDEA or Android Studio for Android Development, Android SDK’s and commonly used third-party-libraries' },
      { text: 'Git version control system' },
      { text: 'Understanding of the importance of code quality and continuous integration (Unit Testing, static code analysis, Jenkins CI, Fabric/Firebase)' },
      { text: 'Broad development knowledge of Kotlin' },
      { text: 'Enthusiastic about Material Design and Mobile User Experience' },
      { text: 'MVVM and MVP architecture' },
      { text: 'Clean Architecture and Design Patterns' },
      { text: 'Functional Reactive Programming (RxJava)' },
      { text: 'Implementing RESTful Clients is second nature (Retrofit 2, Volley)' },
      { text: 'ORMs and NoSQL (Realm, GreenDAO, ActiveAndroid, SQL Delight)' },
      { text: 'Dependency injection (Dagger 2, Koin)' },
      { text: 'Active StackOverflow community member' },
      { text: 'Working in agile environments (Scrum, Kanban)' },
      { text: 'Up to speed with technical advancements of Android' },
      { text: 'Wannabe functionalist' },
    ],
    appDev: [
      { text: 'IBM' },
    ],
    rewe: [
      { text: 'Development of the native Android Client in Kotlin for the new REWE mobile App experience' },
      { text: 'Maintenance of the legacy REWE Android App' },
      { text: 'Creating mobile service endpoints' },
      { text: 'Unit- and Integration testing' },
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
        title: 'Validate',
        url: 'https://github.com/wengelef/validate',
        texts: [ 'Validation DSL for Kotlin Objects' ]
      },
      { 
        title: 'Functional Android',
        url: 'https://github.com/wengelef/FunctionalAndroid',
        texts: [ 'Android Sample Application using Clean Architecture and FunctionalProgramming Paradigms' ]
      },
      { 
        title: 'Ktor mobile push gateway',
        url: 'https://github.com/wengelef/ktor_pushgw',
        texts: [ 'Push gateway for iOS and Android using Firebase' ]
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
        !this.outlineContact,
        !this.outlineSkills,
        !this.outlineCurrently,
        !this.outlinePast,
        !this.outlineBacklog]
    },
    skillsClick: function (event) {
      this.outlineSkills = !this.outlineSkills
      this.expands = [
        !this.outlineContact,
        !this.outlineSkills,
        !this.outlineCurrently,
        !this.outlinePast,
        !this.outlineBacklog]
    },
    pastClick: function (event) {
      this.outlinePast = !this.outlinePast
      this.expands = [
        !this.outlineContact,
        !this.outlineSkills,
        !this.outlineCurrently,
        !this.outlinePast,
        !this.outlineBacklog]
    },
    backlogClick: function (event) {
      this.outlineBacklog = !this.outlineBacklog
      this.expands = [
        !this.outlineContact,
        !this.outlineSkills,
        !this.outlineCurrently,
        !this.outlinePast,
        !this.outlineBacklog]
    },
    contactClick: function (event) {
      this.outlineContact = !this.outlineContact
      this.expands = [
        !this.outlineContact,
        !this.outlineSkills,
        !this.outlineCurrently,
        !this.outlinePast,
        !this.outlineBacklog]
    }
  }
}
</script>

<style scoped>

  ul li {
    font-size: 20px
  }

</style>