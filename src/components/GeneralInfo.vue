<template>
  <div class="py-20">
    <div class="block mx-auto max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:gap-12 px-4 md:px-0 bg-white">
        <div class="hidden md:block col-span-1">
          <div class="relative group cursor-pointer">
            <a href="/files/EE_Travel_Guide.pdf" target="_blank">
              <img src="@/assets/images/cover.jpg" alt="">
              <div class="absolute text-center inset-x-0 w-1/2 mx-auto top-64">
                <p class="text-2xl cursor-pointer text-white group-hover:text-green-500 londrina">
                  CLICK TO DOWNLOAD
                </p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-span-2">
          <div class="lg:pt-20 lg:pr-12">
            <h2 class="text-4xl londrina">
              HEY HANDSOME! YOU MUST BE NEW AROUND HERE?
            </h2>
            <h2 class="text-2xl londrina pt-4 pb-6">
              Welcome to EE UNIVERSE!
            </h2>
            <p class="roboto">
              A flourishing site for all Creators & Collectors, and just anyone looking for a kick-ass Community.
              We would hate for you to get lost in this world of wonders, so here you go mate,
              check out this official <span class="font-bold">EE UNIVERSE Travel Guide!</span>
              <br><br>
              It contains all the information you need to become familiar with the <span class="font-bold">EE UNIVERSE.</span>
              <br><br>
              We hope you enjoy your stay!
            </p>
          </div>
        </div>
        <div class="block mt-8 lg:mt-0 md:hidden col-span-1">
          <div class="relative w-full group cursor-pointer">
            <a href="/files/EE_Travel_Guide.pdf" target="_blank">
            <img class="w-full" src="@/assets/images/cover.jpg" alt="">
              <div class="absolute text-center inset-x-0 w-full md:w-1/2 mx-auto top-48 md:top-64">
                <p class="text-2xl cursor-pointer text-white group-hover:text-green-500  londrina">
                  CLICK TO DOWNLOAD
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GeneralInfo.vue"
}
</script>

<style scoped>

</style>
