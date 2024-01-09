<template>
<div class="">
  <div class="bg-black-100 pt-40 pb-20">
    <div class="mx-auto max-w-7xl px-4 md:px-0">
      <div>
        <h2 class="text-3xl text-white londrina">
          Support
        </h2>
        <p class="roboto text-white mt-2">
          We offer you our love and support... in many ways. Well just three, but we can always get into the details later.
        </p>
      </div>
      <div class="block mt-28">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl relative">
            <div class="absolute h-14 left-8 -top-8">
              <div class="bg-pink-500 w-16 h-16 rounded-md p-4">
                <img class="text-white w-8 h-8" src="@/assets/images/icons/FAQ.svg" alt="">
              </div>
            </div>
            <div class="p-4 mt-8">
              <h2 class="text-2xl text-black-100 londrina">
                FAQ
              </h2>
              <p class="roboto mt-2 h-32">
                We understand that some of the terminology we use in the wonderful EE UNIVERSE might lead to some confusion.
                To clear it up we have highlighted most of those in our FAQ section.
              </p>
            </div>
            <div class="bg-gray-100 p-4 rounded-b-2xl">
              <span v-if="!showFaq" v-on:click="showFaq = !showFaq" class="text-pink-500 roboto cursor-pointer">
                See FAQ! <span v-if="showFaq" class="text-sm">(below)</span>
              </span>
              <span v-if="showFaq" v-on:click="showFaq = !showFaq" class="text-pink-500 roboto cursor-pointer">
                <a href="#faq">See FAQ! <span v-if="showFaq" class="text-sm">(below)</span></a>
              </span>
            </div>
          </div>

          <div class="bg-white rounded-2xl relative mt-8 lg:mt-0">
            <div class="absolute h-14 left-8 -top-8">
              <div class="bg-pink-500 w-16 h-16 rounded-md p-4">
                <img class="text-white w-8 h-8" src="@/assets/images/icons/disclaimer.svg" alt="">
              </div>
            </div>
            <div class="p-4 mt-8">
              <h2 class="text-2xl text-black-100 londrina">
                DISCLAIMER
              </h2>
              <p class="roboto mt-2 h-32">
                As a team we value acknowledgment, team spirit and ethics.
                We put a lot of time, effort and thought into this Community centered project.
                We truly appreciate all contributions — through payment and/or credits — and the concept of Fair Use.
              </p>
            </div>
            <div class="bg-gray-100 p-4 rounded-b-2xl">
              <a href="/files/Disclaimer.pdf" target="_blank" class="text-pink-500 roboto">
                See Disclaimer!
              </a>
            </div>
          </div>

          <div class="bg-white rounded-2xl relative mt-8 lg:mt-0">
            <div class="absolute h-14 left-8 -top-8">
              <div class="bg-pink-500 w-16 h-16 rounded-md p-4">
                <img class="text-white w-8 h-8" src="@/assets/images/icons/terms.svg" alt="">
              </div>
            </div>
            <div class="p-4 mt-8">
              <h2 class="text-2xl text-black-100 londrina">
                TERMS &amp; CONDITIONS
              </h2>
              <p class="roboto mt-2 h-32">
                We believe that sharing is caring!
                Creating is like a relay race: we utilized the inspiration we were gifted by others and we want to pass our
                throbbing baton on to you! For legal and formal reasons we provide you with our Terms & Conditions.
              </p>
            </div>
            <div class="bg-gray-100 p-4 rounded-b-2xl">
              <a href="/files/Terms_and_Conditions.pdf" target="_blank" class="text-pink-500 roboto">
                See Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showFaq" id="faq" class="py-20">
    <div class="mx-auto max-w-3xl px-4 lg:px-0">
      <div class="text-center">
        <h2 class="text-3xl londrina">
          Frequently Asked Questions
        </h2>
        <p class="roboto mt-2">
          Can't find the answer you're looking for? Reach out to one of the Admins in the
          <a href="https://discord.gg/QKcSD7FM46" target="_blank" class="underline">Discord District</a>
        </p>
      </div>
      <div class="block">
        <dl class="mt-6 space-y-6 divide-y divide-gray-200 border-b pb-8">
          <div class="pt-6">
            <dt v-on:click="showFirst = !showFirst" class="text-lg cursor-pointer">
              <!-- Expand/collapse question button -->
              <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
              <span class="font-medium text-gray-900">
                What is the total supply?
              </span>
                <span class="ml-6 h-7 flex items-center">
                <svg v-if="!showFirst" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </span>
              </button>
            </dt>
            <dd v-if="showFirst" class="mt-2 pr-12" id="faq-0">
              <p class="text-base text-gray-500">
                The EE Universe will start off by creating a total of 10.000 unique NFTs.
              </p>
            </dd>
          </div>
        </dl>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200 border-b pb-8">
          <div class="pt-6">
            <dt v-on:click="showSecond = !showSecond" class="text-lg cursor-pointer">
              <!-- Expand/collapse question button -->
              <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-2" aria-expanded="false">
              <span class="font-medium text-gray-900">
                What is EE?
              </span>
                <span class="ml-6 h-7 flex items-center">
                <svg v-if="!showSecond" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </span>
              </button>
            </dt>
            <dd v-if="showSecond" class="mt-2 pr-12" id="faq-2">
              <p class="text-base text-gray-500">
                Eternal Entities is an ode to nostalgia and childhood heroes. Eternal Entities is Creativity. Eternal Entities is Community. Most of all, Eternal Entities is the symbol of symbiosis between Creators and Collectors, pop culture and the beholder.
              </p>
            </dd>
          </div>
        </dl>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200 border-b pb-8">
          <div class="pt-6">
            <dt v-on:click="showThird = !showThird" class="text-lg cursor-pointer">
              <!-- Expand/collapse question button -->
              <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-2" aria-expanded="false">
              <span class="font-medium text-gray-900">
                How do I get an Entity NFT?
              </span>
                <span class="ml-6 h-7 flex items-center">
                <svg v-if="!showThird" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </span>
              </button>
            </dt>
            <dd v-if="showThird" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                You will be able to get an Entity by minting it during our presale while @Eternalized or during our public sale which is open to everyone! You will be able to do so by visiting eternalentities.io and visiting the Minting Mine once it is open.
                <br><br>
                Various Contests and Giveaways will be hosted as well, give participating a shot and you might end up with an amazing reward!
              </p>
            </dd>
          </div>
        </dl>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200 border-b pb-8">
          <div class="pt-6">
            <dt v-on:click="showFourth = !showFourth" class="text-lg cursor-pointer">
              <!-- Expand/collapse question button -->
              <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-2" aria-expanded="false">
              <span class="font-medium text-gray-900">
                How much does it cost to mint an NFT?
              </span>
                <span class="ml-6 h-7 flex items-center">
                <svg v-if="!showFourth" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </span>
              </button>
            </dt>
            <dd v-if="showFourth" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                The price of an Entity NFT will be 0.02 ETH + gas.
              </p>
            </dd>
          </div>
        </dl>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200 border-b pb-8">
          <div class="pt-6">
            <dt v-on:click="showFifth = !showFifth" class="text-lg cursor-pointer">
              <!-- Expand/collapse question button -->
              <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-2" aria-expanded="false">
              <span class="font-medium text-gray-900">
               How many EE NFTs can I mint?
              </span>
                <span class="ml-6 h-7 flex items-center">
                <svg v-if="!showFifth" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </span>
              </button>
            </dt>
            <dd v-if="showFifth" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                The amount of Entities you can mint is limited to 5.
              </p>
            </dd>
          </div>
        </dl>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200 border-b pb-8">
          <div class="pt-6">
            <dt v-on:click="showSixth = !showSixth" class="text-lg cursor-pointer">
              <!-- Expand/collapse question button -->
              <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-2" aria-expanded="false">
              <span class="font-medium text-gray-900">
               Will there be a presale?
              </span>
                <span class="ml-6 h-7 flex items-center">
                <svg v-if="!showSixth" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </span>
              </button>
            </dt>
            <dd v-if="showSixth" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                There will be a presale! Community members will be able to get themselves @Eternalized through a variety of ways. Check out the Discord District to get acquainted as to how!
              </p>
            </dd>
          </div>
        </dl>
<!--        <dl class="mt-6 space-y-6 divide-y divide-gray-200 border-b pb-8">-->
<!--          <div class="pt-6">-->
<!--            <dt v-on:click="showSeventh = !showSeventh" class="text-lg cursor-pointer">-->
<!--              &lt;!&ndash; Expand/collapse question button &ndash;&gt;-->
<!--              <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-2" aria-expanded="false">-->
<!--              <span class="font-medium text-gray-900">-->
<!--               What is the EE smart contract address?-->
<!--              </span>-->
<!--                <span class="ml-6 h-7 flex items-center">-->
<!--                <svg v-if="!showSeventh" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />-->
<!--                </svg>-->
<!--                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />-->
<!--                </svg>-->
<!--              </span>-->
<!--              </button>-->
<!--            </dt>-->
<!--            <dd v-if="showSeventh" class="mt-2 pr-12">-->
<!--              <p class="text-base text-gray-500">-->
<!--                The contract can be found <a href="https://etherscan.io/" class="text-green-500 hover:text-green-600">here</a>-->
<!--              </p>-->
<!--            </dd>-->
<!--          </div>-->
<!--        </dl>-->
        <dl class="mt-6 space-y-6 divide-y divide-gray-200 border-b pb-8">
          <div class="pt-6">
            <dt v-on:click="showEight = !showEight" class="text-lg cursor-pointer">
              <!-- Expand/collapse question button -->
              <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-2" aria-expanded="false">
              <span class="font-medium text-gray-900">
               When will I be able to mint?
              </span>
                <span class="ml-6 h-7 flex items-center">
                <svg v-if="!showEight" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </span>
              </button>
            </dt>
            <dd v-if="showEight" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                If you have claimed an @Eternalized position, you will be able to mint on: TBA <br>
                If you couldn’t, you will be able to mint on: TBA
              </p>
            </dd>
          </div>
        </dl>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200 border-b pb-8">
          <div class="pt-6">
            <dt v-on:click="showNinth = !showNinth" class="text-lg cursor-pointer">
              <!-- Expand/collapse question button -->
              <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-2" aria-expanded="false">
              <span class="font-medium text-gray-900">
               How do I get @Eternalized?
              </span>
                <span class="ml-6 h-7 flex items-center">
                <svg v-if="!showNinth" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </span>
              </button>
            </dt>
            <dd v-if="showNinth" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                You can get @Eternalized by participating in the Contest Colosseum, participating in invite challenges, being helpful to other members in the channel, creating memes, gifs etc. and being a nice person in general!
              </p>
            </dd>
          </div>
        </dl>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200 border-b pb-8">
          <div class="pt-6">
            <dt v-on:click="showTen = !showTen" class="text-lg cursor-pointer">
              <!-- Expand/collapse question button -->
              <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-2" aria-expanded="false">
              <span class="font-medium text-gray-900">
               What’s the name of your clothing line?
              </span>
                <span class="ml-6 h-7 flex items-center">
                <svg v-if="!showTen" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
              </span>
              </button>
            </dt>
            <dd v-if="showTen" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                We don’t know! You ain’t got the answers Sway...
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Support",
  data: () => ({
    showFaq: false,
    showFirst: false,
    showSecond: false,
    showThird: false,
    showFourth: false,
    showFifth: false,
    showSixth: false,
    showSeventh: false,
    showEight: false,
    showNinth: false,
    showTen: false,
  })
}
</script>

<style scoped>

</style>
