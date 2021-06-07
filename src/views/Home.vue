<template>
  <div class="home">
    <h1>Adoption Site</h1>
    {{ getAllCats.length }}
    {{ animalsCount }}
    <button class="btn btn-primary" @click="togglePetForm">Add new Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">

      <b-form-group id="input-2" label="Pet's Name:" label-for="input2">
        <b-form-input
          id="input2"
          type="text"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-3" label="Species:" label-for="input3">
        <b-form-select
          id="input3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-4" label="Pet's Age:" label-for="input4">
        <b-form-input
          id="input4"
          type="number"
          v-model="formData.age"
          placeholder="Enter age"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)

      //  reset form
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
