import Vue from 'vue'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
// const httpLink = new HttpLink({
//   uri: 'http://localhost:8080/api/'
// })

const baseClient = new ApolloClient({
  uri: './api/graphql'
})

const apolloProvider = new VueApollo({
  clients: {
    base: baseClient,
    base1: null
  },
  defaultClient: baseClient
})

Vue.use(VueApollo)

export default apolloProvider
