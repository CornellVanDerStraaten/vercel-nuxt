<template>
    <div class="flex flex-col h-full justify-between">
        <div>
            <Menu />
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5">
                <slot/>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
useHead({
  bodyAttrs: {
    class: 'h-full'
  },
  htmlAttrs: {
    class: 'h-full'
  },
})
</script>

<style>
#__nuxt {
  height: 100%;
}
</style>