<template>
  <div class="sphero">
    <button v-on:click="connect">connect</button>
  </div>
</template>

<script>
import sphero from '../utils/shpero.js'

export default {
  name: 'Sphero',
  data: () => ({
    servers: {},
    charactaristics: {}
  }),
  methods: {
    connect: function (event) {
      sphero.connect().then((server) => {
        let servers = this.$data.servers
        servers[server.device.name] = server
        return server  
      }).then((server) => {
        return sphero.initialize(server)
      }).catch((msg) => {
        console.log(msg)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
