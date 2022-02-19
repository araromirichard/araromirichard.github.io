<template>
  <v-row>
    <v-col cols="12" class="">
      <p class="text-md-h2 text-h4 pt-16 text-center pink--text darken-4">
        Contact Me...
      </p>
      <hr />
    </v-col>
    <v-col cols="12" class="text-center">
      <p class="text-body-1 text-md-h3 white--text">
        Please, use the form below or send an email to
        <span class="pink--text darken-3"> araromirichard@gmail.com </span>

        or give me a call/whatsapp me on
        <span class="pink--text darken-3"> +2347012205938 </span>
      </p>
    </v-col>
    <v-col cols="12" sm="8" offset-sm="2">
      <form id="contact-form" action="#">
        <input placeholder="Name" name="name" type="text" required />
        <input placeholder="Email" name="email" type="email" required />
        <textarea placeholder="Message" type="text" name="message" />
        <input className="button" id="submit" value="Submit" type="submit" />
      </form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'contactMe'
}
</script>

<style scoped>
hr {
  background: #aaa7a9;
  width: 15% !important;
  height: 4px;
  margin: 0.2rem auto;
  padding: 0;
}
#contact-form {
  margin-top: 1rem;
}

input,
textarea {
  border: none;

  padding: 1rem;
  font-family: "Overlock", Arial, Helvetica, sans-serif;
  width: 100%;
  height: 60%;
  transition: 200ms;
}
textarea {
  margin-bottom: 5rem;
}

input[type="text"],
input[type="email"],
input[type="text"]:not(output):not(:focus),
input[type="email"]:not(output):not(:focus),
textarea {
  border-bottom: 1px solid #fafafa;
  background: transparent;
  color: #fafafa;
  font-size: 2rem;
  box-shadow: none;
  outline: none;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="text"]:not(output):focus,
input[type="email"]:not(output):focus,
textarea:focus {
  border-bottom: 1px solid #880e4f;
}

input[type="submit"] {
  background: #880e4f;
  color: #fafafa;
  margin-top: 1rem;
  width: auto;
  float: right;
}

input[type="submit"]:hover,
input[type="submit"]:focus {
  cursor: pointer;
  color: #333;
  background: #fafafa;
}

::placeholder {
  color: #fafafa;
}
</style>
