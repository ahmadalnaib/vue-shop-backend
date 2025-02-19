<template>
  <guest-layout title="Sign in to your account">
    <h1>This is an about page</h1>
  </guest-layout>
</template>

<script setup>
import GuestLayout from '@/components/GuestLayout.vue';
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
