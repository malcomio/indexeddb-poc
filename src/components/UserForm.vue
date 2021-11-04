<template>
  <div>
    <h1>User details</h1>
    <label for="username">User name</label>
    <input id="username" name="name" v-model="user.name" />
    <button @click="setUser">Set User</button>

    <button @click="checkState">Check State</button>

    <span>{{storedUser}}</span>
  </div>
</template>

<script>
    export default {
        name: "UserForm",
        data() {
          return {
              user: {}
          }
        },
        created() {
          this.$store.dispatch('getUser');
        },
        computed: {
            storedUser() {
                return this.$store.dispatch('getUser');
            }
        },
        methods: {
            setUser: function () {
                this.$store.commit('setUser', this.user)
            },
            checkState: function () {
                this.$store.dispatch('getUser');
            }
        }
    }
</script>

<style scoped>

</style>
