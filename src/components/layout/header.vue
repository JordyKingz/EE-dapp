<template>
<div id="header" class="block text-white w-full">
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-black-150 py-4 md:py-0 fixed top-0 z-40 w-full">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between mt-2">
        <div class="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
          <div v-on:click="backToTop" class="flex-shrink-0 py-4 flex items-center">
            <img class="block h-4 lg:h-8 w-auto cursor-pointer" src="@/assets/ee_logo.svg" alt="Eternal Entities">
          </div>
        </div>
        <div class="hidden md:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="flex space-x-4">
            <a href="#" class="border-green-500 hover:text-green-500 text-white text-lg leading-loose font-light londrina inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              PHASE I
            </a>

            <a href="#" class="text-gray-300 text-lg cursor-not-allowed leading-loose font-light londrina inline-flex items-center px-1 pt-1 text-sm font-medium">
              PHASE II
            </a>

            <a href="https://opensea.io/collection/eternalentities" target="_blank" class="text-gray-300 border border-green-500 hover:bg-green-500 hover:text-black-100 transition duration-500 ease-in-out text-lg leading-loose font-light londrina inline-flex items-center px-4 py-2 text-sm font-medium">
              OPENSEA
            </a>

            <a v-on:click="showDropdown = !showDropdown" class="text-white cursor-pointer hover:text-green-500 text-lg leading-loose font-light londrina inline-flex items-center px-1 pt-1 text-sm font-medium">
              SOCIALS
            </a>
            <div v-if="showDropdown" v-on:mouseleave="showDropdown = !showDropdown" class="origin-top-right absolute right-0 mt-12 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">
                <a href="https://discord.gg/QKcSD7FM46" target="_blank" class="text-gray-700 hover:text-green-500 block px-4 py-2 text-sm londrina" role="menuitem" tabindex="-1" id="menu-item-0">Discord District</a>
                <a href="https://instagram.com/eternalentitiesnft?utm_medium=copy_link" target="_blank" class="text-gray-700 hover:text-green-500 block px-4 py-2 text-sm londrina" role="menuitem" tabindex="-1" id="menu-item-1">Instagram Int.</a>
                <a href="https://twitter.com/EternalNFTs" target="_blank" class="text-gray-700 hover:text-green-500 block px-4 py-2 text-sm londrina" role="menuitem" tabindex="-1" id="menu-item-2">Twitter Tower</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="md:hidden sm:py-2 text-center">
          <button v-if="!showMenu" v-on:click="showMenu = !showMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            Open navigation
          </button>
          <button v-else v-on:click="showMenu = !showMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            Close navigation
          </button>
        </div>
        <div class="hidden md:block">
          <div class="">
            <nav class="-mb-px flex" aria-label="Tabs">
              <a
                  href="#mint"
                  class="londrina text-lg leading-loose font-light text-white hover:text-green-500 w-1/4 py-4 px-1 text-center font-medium text-sm"
                  v-bind:class="{'border-green-500 border-b-4': tabs.mint}">
                Mint
              </a>

              <a
                  href="#travelguide"
                  class="londrina text-lg leading-loose font-light text-white hover:border-green-500 hover:border-b-2 hover:text-green-500 w-1/4 py-4 px-1 text-center font-medium text-sm"
                  v-bind:class="{'border-green-500 border-b-4': tabs.travel}">
                EE Travel Guide
              </a>

              <a
                  href="#roadmap"
                  class="londrina text-lg leading-loose font-light text-white hover:border-green-500 hover:border-b-2 hover:text-green-500 w-1/4 py-4 px-1 text-center font-medium text-sm"
                  v-bind:class="{'border-green-500 border-b-4': tabs.roadmap}">
                Roadmap
              </a>

              <a
                  href="#team"
                  class="londrina text-lg leading-loose font-light text-white hover:border-green-500 hover:border-b-2 hover:text-green-500 w-1/4 py-4 px-1 text-center font-medium text-sm"
                  v-bind:class="{'border-green-500 border-b-4': tabs.team}">
                About Us
              </a>

              <a
                  href="#support"
                  class="londrina text-lg leading-loose font-light text-white hover:border-green-500 hover:border-b-2 hover:text-green-500 w-1/4 py-4 px-1 text-center font-medium text-sm"
                  v-bind:class="{'border-green-500 border-b-4': tabs.support}">
                Support
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="showMenu" class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#mint" v-on:click="showMenu = !showMenu" class="text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Mint</a>

        <a href="#travelguide" v-on:click="showMenu = !showMenu" class="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">EE Travel Guide</a>

        <a href="#roadmap" v-on:click="showMenu = !showMenu" class="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">Roadmap</a>

        <a href="#team" v-on:click="showMenu = !showMenu" class="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

        <a href="#support" v-on:click="showMenu = !showMenu" class="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium">Support</a>

        <hr>

        <a href="https://opensea.io/collection/eternalentities" target="_blank" class="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium" role="menuitem" tabindex="-1">Open Sea</a>
        <a href="https://discord.gg/aVM7ZEtceR" target="_blank" class="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium" role="menuitem" tabindex="-1">Discord District</a>
        <a href="https://instagram.com/eternalentitiesnft?utm_medium=copy_link" target="_blank" class="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium" role="menuitem" tabindex="-1">Instagram Int.</a>
        <a href="https://twitter.com/EternalNFTs" target="_blank" class="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium" role="menuitem" tabindex="-1">Twitter Tower</a>

      </div>
    </div>
  </nav>

</div>
</template>

<script>
export default {
  name: "header.vue",
  data: () => ({
    showMenu: false,
    showDropdown: false,
    tabs: {
      mint: false,
      travel: false,
      factions: false,
      roadmap: false,
      team: false,
      support: false,
    },
  }),
  created: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      const top = document.body.getBoundingClientRect().top;
      this.getScrollY(top);
    },
    getScrollY: function(scrollY) {
      console.log(scrollY)
      if (Number(scrollY) >= 0 || Number(scrollY) > -1435) {
        this.tabs = {
          mint: false,
          travel: false,
          factions: false,
          roadmap: false,
          team: false,
          support: false,
        }
      } else if (Number(scrollY) <= -1435 && Number(scrollY) > -2620) {
        this.tabs = {
          mint: true,
          travel: false,
          factions: false,
          roadmap: false,
          team: false,
          support: false,
        }
      } else if (Number(scrollY) <= -2620 && Number(scrollY) > -3345) {
        this.tabs = {
          mint: false,
          travel: true,
          factions: false,
          roadmap: false,
          team: false,
          support: false,
        }
      } else if (Number(scrollY) <= -3345 && Number(scrollY) > -4880) {
        this.tabs = {
          mint: false,
          travel: false,
          factions: false,
          roadmap: true,
          team: false,
          support: false,
        }
      } else if (Number(scrollY) <= -4880 && Number(scrollY) > -5653) {
        this.tabs = {
          mint: false,
          travel: false,
          factions: false,
          roadmap: false,
          team: true,
          support: false,
        }
      } else if (Number(scrollY) <= -5653 && Number(scrollY) > -6740) {
        this.tabs = {
          mint: false,
          travel: false,
          factions: false,
          roadmap: false,
          team: true,
          support: false,
        }
      } else if (Number(scrollY) <= -6740) {
        this.tabs = {
          mint: false,
          travel: false,
          factions: false,
          roadmap: false,
          team: false,
          support: true,
        }
      }
    },
    backToTop: function() {
      window.scroll({ top:0, left:0, behavior: 'smooth'});
    }
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>

</style>
