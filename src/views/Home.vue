<template>
  <v-app class="pa-0 ma-0">
    <span class="bg"></span>

    <navbar />
    <v-container fluid class="mb-14" id="home">
      <v-row class="d-flex justify-center align-center">
        <v-col col="12" class="d-flex justify-center align-center py-auto">
          <div
            class="glass d-flex flex-column justify-center align-center ml-1 ml-sm-8 mt-sm-12"
            :style="{
              width: `${$vuetify.breakpoint.mdAndUp ? '80%' : '90%'}`,
            }"
          >
            <div class="home-info">
              <p
                class="white--text px-3 text-center text-md-h2 text-h4 font-weight-bold"
              >
                Hello, my name is <span class="name">Richard Araromi</span>
              </p>
              <p class="px-8 self text-sm-h3">
                I'm a <span class="post typed">{{ typeValue }}</span>
                <span class="cursor">&nbsp;</span>
              </p>
            </div>
            <div class="mt-10 d-flex justify-center align-center">
              <MyButton :btnName="btnText" />
              <MyButton :btnName="contactme" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- about us section starts  -->
    <v-container fluid style="z-index: 1" id="about-container">
      <v-row>
        <v-col class="mt-13">
          <p class="text-md-h2 text-h4 pt-10 title">About Me..</p>
          <hr />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="10" offset-sm="1">
          <p class="text-center text-md-h4">
            I am a Fullstack software developer based in the beautiful western
            part of Nigeria. A place called Lagos.
          </p>
          <p class="text-center text-md-h4">
            I am fascinated at how algorithm works together in making things
            pretty and easy to use around the tech world. I can't stop learning
            new things; the more, the better. I also love music and football, if
            you dont see me on my computer hitting the keys and coding i will be
            playing my saxophone or watching football.. Oh, I also love eating
            lots of meats so festive periods are my best moments; I have a
            passion to write a digital solution that will impact humanity.
          </p>
        </v-col>
        <v-col cols="12" sm="10" offset-sm="1">
          <p class="text-md-h2 text-h4 pt-md-10 title">So What do I do?</p>
          <hr class="mb-8" />

          <p class="text-center text-md-h4">
            I'm a programmer. For the front-end I usually work with Javascript,
            either standalone or including popular frameworks like VueJS. I also
            make the web pretty by using Sass, CSS and, whenever needed, any of
            their friends: vuetify, bootstrap, etc.
          </p>
          <p class="text-center text-md-h4 pb-md-10">
            For the back-end I also work with Golang, Javascript (NodeJS,
            Express, MongoDB, etc). But, of course, whenever the project
            requires PHP, I do PHP as well (Wordpress, Laravel, etc).
          </p>
        </v-col>
      </v-row>
    </v-container>
    <!-- about us section starts  -->
    <!-- my project section starts here-->
    <v-container class="fluid projects mt-13 pt-10" id="project">
      <v-card
        width="100%"
        height="100%"
        elevation="6"
        color="#fff9eb"
        style="opacity: 0.6"
        ><v-row>
          <v-col class="mt-13 d-flex flex-column justify-center align-center">
            <p class="text-md-h2 text-h4 pt-10 title">Some of My Works</p>
            <hr />
          </v-col>
        </v-row>
        <ProjectCards class="my-8" />
      </v-card>
    </v-container>
    <!-- my projects section ends here -->
    <!-- my contact me section starts here -->
    <div id="contact">
      <v-container>
        <ContactMe />
      </v-container>
    </div>
    <!-- my contact me section ends here -->
    <!-- footer section starts here -->
    <div class="ma-0 pa-0">
      <v-container fluid class="pa-0 ma-0">
        <MyFooter />
      </v-container>
    </div>
    <!-- footer section ends here -->
  </v-app>
</template>

<script>
import MyButton from '../components/button.vue'
import ContactMe from '../components/contactMe.vue'
import MyFooter from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import ProjectCards from '../components/projectCards.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    MyButton,
    ProjectCards,
    ContactMe,
    MyFooter
  },
  data () {
    return {
      btnText: 'Download Cv',
      contactme: 'Contact Me',
      typeValue: '',
      typeStatus: false,
      typeArray: [
        'FrontEnd Developer',
        'BackEnd Developer',
        'FullStack Developer'
      ],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    typeText () {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        )
        this.charIndex += 1
        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText () {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        )
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus = false
        this.typeArrayIndex += 1
        if (this.typeArrayIndex >= this.typeArray.length) {
          this.typeArrayIndex = 0
        }
        setTimeout(this.typeText, this.typeText + 1000)
      }
    }
  },
  created () {
    setTimeout(this.typeText, this.newTextDelay + 200)
  }
}
</script>
<style scoped>
.containerHeight {
  max-width: 100vw;
  max-height: 100vh;
}
.darktheme {
  background-color: rgb(40, 32, 61);
  background-size: cover;
}
.bg {
  width: 100%;
  height: 90%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60")
    no-repeat center center;
  background-size: cover;
  background-color: rgba(179, 172, 192, 0.5);
  transform: scale(1.1);
  background-attachment: fixed;
}
.glass {
  min-height: 80vh;
  background: linear-gradient(
    to right bottom,
    rgba(162, 162, 163, 0.445),
    rgba(107, 104, 104, 0.5)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
}
.imageHolder v-img {
  margin: 1rem 0;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 000 1rem rgba(255, 255, 255, 0.2);
}
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #ffffff;
  animation: cursorBlink 1s infinite;
}
.name {
  color: #3a0320;
  font-family: "Segoe UI", Tahoma, "Geneva", Verdana, sans-serif;
  font-weight: 400;
}
.self {
  color: #ebd7e2;
  font-family: "Segoe UI", Tahoma, "Geneva", Verdana, sans-serif;
  font-weight: 400;
  font-size: 2rem;
}
.post {
  color: #051222;
  font-family: "Segoe UI", Tahoma, "Geneva", Verdana, sans-serif;
  font-weight: 400;
  font-size: 3rem;
}
.project-title {
  z-index: 1;
}
.projects {
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2rem);
}
.project-card {
  backdrop-filter: blur(2rem);
  opacity: 0.6 !important;
}
.v-application .elevation-6 {
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 3%), 0px 6px 10px 0px rgb(0 0 0 / 1%),
    0px 1px 18px 0px rgb(0 0 0 / 2%) !important;
}
#about-container {
  background: #fefcf8;
  height: 100%;
  min-height: 100vh;
  font-size: 1.4rem;
  position: relative;
}
#about-container .title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
hr {
  background: #f300b4;
  width: 5% !important;
  height: 4px;
  margin: 0.2rem auto;
  padding: 0;
}
#contact {
  background: #181d23
    url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/envelope.svg?sanitize=true)
    no-repeat right;
  clip-path: polygon(0 0, 20% 100px, 100% 0, 100% 100%, 0 100%);
  color: #fafafa;
  min-height: 100vh;
  width: 100%;
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
}
#myfooter {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Height of the footer */
  background: #6cf;
}
@media only screen and (max-width: 649px) {
  #contact {
    clip-path: polygon(0 0, 20% 5%, 100% 0, 100% 100%, 0 100%);
    padding: 0;
  }
}
@keyframes cursorBlink {
  49% {
    background-color: #ffffff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
