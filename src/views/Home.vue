<template>
  <div class="home">
    <user-form></user-form>
  </div>
</template>

<script>
// @ is an alias to /src
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'Home',
  components: {
    UserForm
  }
}
</script>
