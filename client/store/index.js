import get_user_query from '~/apollo/queries/fetchusers.gql'

export const state = () => ({
  user: {}
});

export const mutations = {
  set_user: function(state, user) {
    state.user = user;
  }
};

nuxtServerInit({ commit }, { error }) {
   const clientApollo = this.app.apolloProvider.defaultClient;
   return new Promise((resolve, reject) => {
     clientApollo
       .query({
         query: get_user_query,
         variables: {
           id: 3
         }
       })
       .then(resp => {
         commit("set_user", resp.data.user);
         resolve(resp);
       })
       .catch(err => {
         resolve(err);
       });
   });
 }