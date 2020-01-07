// getters are mostly use for filter data state
export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  }
  //,
  //getAllCats
}
