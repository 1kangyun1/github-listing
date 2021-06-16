import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    organizations: [],
    firstItem: 0,
    lastItem: 0
  },
  getters: {
    getOrganizations: (state) => state.organizations
  },
  mutations: {
    setOrganizations: (state, organizations) => {state.organizations = organizations}
  },
  actions: {
    async fetchOrganizations({ commit }, login) {
      let organizations = await axios.get(process.env.VUE_APP_API_URL+'/organizations').then(res => {
        return res.data;
      })
      .catch(err => {
        console.error(err);
      })

      if(login){
        organizations = organizations.filter(organization => organization.login === login);
      }
      commit('setOrganizations', organizations);
    }
  }
})
