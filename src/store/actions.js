export default {
  addPet: ({ commit }, payload) => {
    // action addPet witch call mutation appendPet and pass context State and payload(species and pet) parameter
    commit('appendPet', payload)
  }
}
