<template>
  <div class="flex min-h-full items-center justify-center px-6 py-12 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">{{ title }}</h2>
      </div>
      <slot></slot>
    </div>

</div>

</template>

<script setup>
const { title } = defineProps({
  title: String,
})
</script>