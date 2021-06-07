<template>
    <div>
        <h1>{{ pet().name }} ({{ $route.params.species }})</h1>
        <p>Age: {{ pet().age }} years old</p>
        <p>Breed: {{ pet().breed }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs',
      'cats'
    ])
  },
  methods: {
    pet () {
      const animal = this[this.$route.params.species][this.$route.params.id]
      return animal
    }
  }
}
</script>
