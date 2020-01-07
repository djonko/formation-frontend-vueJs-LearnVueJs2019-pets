<template>
  <div>
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <p>{{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState(['cats', 'dogs'])
  },
  methods: {
    pet() {
      const animal = this[this.$route.params.species][this.$route.params.id]
      // equivalent a this['cats'][id]
      return animal
    }
  },
  // life cycle method
  mounted() {
    this.animal = this.pet()
  }
}
</script>
