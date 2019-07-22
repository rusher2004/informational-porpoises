import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Apollo stuff
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

// UI stuff
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/display.css';

Vue.config.productionTip = false

const server = document.location.hostname == 'localhost' ? 'http://localhost:4000' : 'https://api.informationalporpoises.com'

const httpLink = new HttpLink({
  uri: server
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
