<template>
  <div>
    <div class="block mx-auto max-w-7xl px-4 md:px-12 md:mt-20">
    <div class="bg-white py-8 grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
      <div class="col-span-2 pt-12 sm:px-6">
        <div v-if="tabs.showFirst" class="text-center">
          <h3 class="text-4xl londrina">
            Who are the Entities
          </h3>
          <div class="block md:hidden">
            <div class="flex">
              <div>
                <svg v-on:click="toggleTab(false, false, true, false)" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mt-12 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div>
                <p class="roboto h-auto block mt-6 leading-7">
                  The Entities are 10.000 combinable popculture NFTs. <br> Time has warped their appearances and snuffed out their legacy. <br>Will <strong>you</strong> be the one to breathe new life into them?
                </p>
              </div>
              <div>
                <svg v-on:click="toggleTab(false, true, false, false)" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mt-12 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          <p class="roboto h-32 hidden md:block mt-6 leading-7">
            The Entities are 10.000 combinable popculture NFTs. <br> Time has warped their appearances and snuffed out their legacy. <br> Will <strong>you</strong> be the one to breathe new life into them?
          </p>
          <div class="text-center mt-6">
            <span v-on:click="toggleHowTo"
                    class="border cursor-pointer text-black-100 bg-white border-black-100 transition duration-500 ease-in-out rounded-2xl px-8 py-3 hover:bg-black-100 hover:text-white">
              How to
            </span>
          </div>
        </div>
        <div v-if="tabs.showSecond" class="text-center">
          <h3 class="text-4xl londrina">
            Eternalize your Entity
          </h3>
          <div class="block md:hidden">
            <div class="flex">
              <div>
                <svg v-on:click="toggleTab(true, false, false, false)" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mt-12 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div>
                <p class="roboto h-auto block mt-6 leading-7">
                  Without you, the Entities will remain puzzled forever. <br>
                  They call upon you to Collect three Entities with matching Traits. <br>
                  Combine them in PHASE II to Eternalize them!
                </p>
              </div>
              <div>
                <svg v-on:click="toggleTab(false, false, true, false)" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mt-12 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          <p class="roboto h-32 hidden md:block mt-6 leading-7">
            Without you, the Entities will remain puzzled forever. <br>
            They call upon you to Collect three Entities with matching Traits. <br>
            Combine them in PHASE II to Eternalize them!
          </p>
          <div class="text-center mt-6">
            <span v-on:click="toggleHowTo"
                  class="border cursor-pointer text-black-100 bg-white border-black-100 transition duration-500 ease-in-out rounded-2xl px-8 py-3 hover:bg-black-100 hover:text-white">
              How to
            </span>
          </div>
        </div>
        <div v-if="tabs.showThird" class="text-center">
          <h3 class="text-4xl londrina">
            Collect your Eternal Equity
          </h3>
          <div class="block md:hidden">
            <div class="flex">
              <div>
                <svg v-on:click="toggleTab(false, true, false, false)" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mt-12 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div>
                <p class="roboto h-auto block mt-6 leading-7">
                  Eternal Equity is a certificate of gratitude. <br>
                  It’s your proof of co-ownership of your Eternalized Entity. <br>
                  Earn ETH for trades over Entities you Eternalized.
                </p>
              </div>
              <div>
                <svg v-on:click="toggleTab(false, false, false, true)" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mt-12 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          <p class="roboto h-32 hidden md:block mt-6 leading-7">
            Eternal Equity is a certificate of gratitude. <br>
            It’s your proof of co-ownership of your Eternalized Entity. <br>
            Earn ETH for trades over Entities you Eternalized.
          </p>
          <div class="text-center mt-6">
            <span v-on:click="toggleHowTo"
                  class="border cursor-pointer text-black-100 bg-white border-black-100 transition duration-500 ease-in-out rounded-2xl px-8 py-3 hover:bg-black-100 hover:text-white">
              How to
            </span>
          </div>
        </div>
        <div v-if="tabs.showFourth" class="text-center">
          <h3 class="text-4xl londrina">
            Fair use? Fair enough!
          </h3>
          <div class="block md:hidden">
            <div class="flex">
              <div>
                <svg v-on:click="toggleTab(false, false, true, false)" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mt-12 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div>
                <p class="roboto h-auto block mt-6 leading-7">
                  The Entities are partially built on our interpretation of pop culture. <br>
                  We honor the symbiosis between pop culture and the consumer by the means of parody. <br>
                  We respect our muses through the freedom of expression.
                </p>
              </div>
              <div>
                <svg v-on:click="toggleTab(true, false, false, false)" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mt-12 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          <p class="roboto h-32 hidden md:block mt-6 leading-7">
            The Entities are partially built on our interpretation of pop culture. <br>
            We honor the symbiosis between pop culture and the consumer by the means of parody. <br>
            We respect our muses through the freedom of expression.
          </p>
          <div class="text-center mt-6">
            <span v-on:click="toggleHowTo"
                  class="border cursor-pointer text-black-100 bg-white border-black-100 transition duration-500 ease-in-out rounded-2xl px-8 py-3 hover:bg-black-100 hover:text-white">
              How to
            </span>
          </div>
        </div>
        <nav class="flex mt-12 items-center justify-center" aria-label="Progress">
          <ol v-if="tabs.showFirst" role="list" class="flex items-center space-x-5">
            <li>
              <a v-on:click="toggleTab(true, false, false, false)" class="relative flex items-center justify-center" aria-current="step">
                  <span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
                    <span class="w-full h-full rounded-full bg-black-200"></span>
                  </span>
                <span class="relative block w-5 h-5 bg-black-100 rounded-full" aria-hidden="true"></span>
              </a>
            </li>
            <li>
              <a v-on:click="toggleTab(false, true, false, false)" class="block cursor-pointer w-5 h-5 bg-white border-gray-200 border rounded-full hover:bg-gray-200">
              </a>
            </li>
            <li>
              <a v-on:click="toggleTab(false, false, true, false)" class="block cursor-pointer w-5 h-5 bg-white border-gray-200 border rounded-full hover:bg-gray-200">
              </a>
            </li>
            <li>
              <a v-on:click="toggleTab(false, false, false, true)" class="block cursor-pointer w-5 h-5 bg-white border-gray-200 border rounded-full hover:bg-gray-200">
              </a>
            </li>
          </ol>

          <ol v-if="tabs.showSecond" role="list" class="flex items-center space-x-5">
            <li>
              <a v-on:click="toggleTab(true, false, false, false)" class="block cursor-pointer w-5 h-5 bg-white border-gray-200 border rounded-full hover:bg-gray-200">
              </a>
            </li>
            <li>
              <a v-on:click="toggleTab(false, true, false, false)" class="relative flex items-center justify-center" aria-current="step">
                  <span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
                    <span class="w-full h-full rounded-full bg-black-200"></span>
                  </span>
                <span class="relative block w-5 h-5 bg-black-100 rounded-full" aria-hidden="true"></span>
              </a>
            </li>
            <li>
              <a v-on:click="toggleTab(false, false, true, false)" class="block cursor-pointer w-5 h-5 bg-white border-gray-200 border rounded-full hover:bg-gray-200">
              </a>
            </li>
            <li>
              <a v-on:click="toggleTab(false, false, false, true)" class="block cursor-pointer w-5 h-5 bg-white border-gray-200 border rounded-full hover:bg-gray-200">
              </a>
            </li>
          </ol>

          <ol v-if="tabs.showThird" role="list" class="flex items-center space-x-5">
            <li>
              <a v-on:click="toggleTab(true, false, false, false)" class="block cursor-pointer w-5 h-5 bg-white border-gray-200 border rounded-full hover:bg-gray-200">
              </a>
            </li>
            <li>
              <a v-on:click="toggleTab(false, true, false, false)" class="block cursor-pointer w-5 h-5 bg-white border-gray-200 border rounded-full hover:bg-gray-200">
              </a>
            </li>
            <li>
              <a v-on:click="toggleTab(false, false, true, false)" class="relative flex items-center justify-center" aria-current="step">
                  <span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
                    <span class="w-full h-full rounded-full bg-black-200"></span>
                  </span>
                <span class="relative block w-5 h-5 bg-black-100 rounded-full" aria-hidden="true"></span>
              </a>
            </li>
            <li>
              <a v-on:click="toggleTab(false, false, false, true)" class="block cursor-pointer w-5 h-5 bg-white border-gray-200 border rounded-full hover:bg-gray-200">
              </a>
            </li>
          </ol>

          <ol v-if="tabs.showFourth" role="list" class="flex items-center space-x-5">
            <li>
              <a v-on:click="toggleTab(true, false, false, false)" class="block cursor-pointer w-5 h-5 bg-white border-gray-200 border rounded-full hover:bg-gray-200">
              </a>
            </li>
            <li>
              <a v-on:click="toggleTab(false, true, false, false)" class="block cursor-pointer w-5 h-5 bg-white border-gray-200 border rounded-full hover:bg-gray-200">
              </a>
            </li>
            <li>
              <a v-on:click="toggleTab(false, false, true, false)" class="block cursor-pointer w-5 h-5 bg-white border-gray-200 border rounded-full hover:bg-gray-200">
              </a>
            </li>
            <li>
              <a v-on:click="toggleTab(false, false, false, true)" class="relative flex items-center justify-center" aria-current="step">
                  <span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
                    <span class="w-full h-full rounded-full bg-black-200"></span>
                  </span>
                <span class="relative block w-5 h-5 bg-black-100 rounded-full" aria-hidden="true"></span>
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div class="mt-8 lg:mt-0">
        <video class="w-auto" poster="@/assets/images/collector.png" autoplay muted controls loop>
          <source class="w-full" src="@/assets/videos/Red_Carpet_Event.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <HowTo v-if="showHowTo" @toggleHowTo="toggleHowTo" />
  </div>
  </div>
</template>

<script>
import HowTo from '@/components/modals/Story.vue';

export default {
  name: "EternalEntities.vue",
  data: () => ({
    showHowTo: false,
    timer: 15000,
    tabs: {
      showFirst: true,
      showSecond: false,
      showThird: false,
      showFourth: false
    }
  }),
  components: {
    HowTo,
  },
  mounted: function() {
    // every 15 seconds change tabs
    window.setInterval(() => {
      if (this.tabs.showFirst) {
        this.tabs = {
          showFirst: false,
          showSecond: true,
          showThird: false,
          showFourth: false,
        }
      } else if (this.tabs.showSecond) {
        this.tabs = {
          showFirst: false,
          showSecond: false,
          showThird: true,
          showFourth: false,
        }
      } else if (this.tabs.showThird) {
        this.tabs = {
          showFirst: true,
          showSecond: false,
          showThird: false,
          showFourth: false,
        }
      } else if (this.tabs.showFourth) {
        this.tabs = {
          showFirst: false,
          showSecond: false,
          showThird: false,
          showFourth: true,
        }
      }
    }, this.timer);
  },
  methods: {
    toggleHowTo: function() {
      this.showHowTo = !this.showHowTo;
    },
    toggleTab: function(first, second, third, fourth) {
      this.timer = 15000;
      this.tabs = {
        showFirst: first,
        showSecond: second,
        showThird: third,
        showFourth: fourth
      }
    }
  }
}
</script>

<style scoped>

</style>
