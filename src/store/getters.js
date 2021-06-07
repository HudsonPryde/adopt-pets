export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: (state) => (list) => {
    return state.pets.filter((pet) => {
      return pet.species === list
    })
  },
}
