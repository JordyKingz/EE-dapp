<template>
  <div class="pt-20">
    <div class="text-white block bg-black-100 h-auto relative py-12 lg:py-0">
      <div class="relative md:w-2/3 lg:w-1/2 mx-auto text-center">
        <div class="block lg:hidden text-center">
          <img class="mx-auto h-52" src="@/assets/images/titles/minting_mine.svg" alt="">
        </div>
        <img class="w-full hidden lg:block lg:w-full mx-auto" src="@/assets/images/minting_mine.png" alt="">
        <div id="minting-mine" class="block lg:absolute lg:inset-x-0 px-4  lg:w-1/2 mx-auto">
          <div class="lg:mt-24" v-if="!stopTimer">
            <h3 v-if="mintType === 1" class="text-2xl text-center text-white londrina">
              Presale start time
            </h3>
            <h3 v-if="mintType === 2" class="text-2xl text-center text-white londrina">
              Public start time
            </h3>
            <div v-if="mintType !== 4">
              <div class="grid grid-cols-4 gap-4 justify-items-center pt-12">
                <div>
                  <div class="flex">
                    <div>
                      <div class="block text-center">
                        <h2 id="days" class="text-2xl londrina"></h2>
                        <h3 class="text-1xl londrina">
                          DAYS
                        </h3>
                      </div>
                    </div>
                    <div>
                      <h2 class="text-4xl font-bold pl-2 md:pl-6 londrina">:</h2>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex">
                    <div>
                      <div class="block text-center">
                        <h2 id="hours" class="text-2xl londrina"></h2>
                        <h3  class="text-1xl londrina">
                          HOURS
                        </h3>
                      </div>
                    </div>
                    <div>
                      <h2 class="text-4xl font-bold pl-2 md:pl-6 londrina">:</h2>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex">
                    <div>
                      <div class="block text-center">
                        <h2 id="minutes" class="text-2xl londrina"></h2>
                        <h3  class="text-1xl londrina">
                          MINUTES
                        </h3>
                      </div>
                    </div>
                    <div>
                      <h2 class="text-4xl font-bold pl-2 md:pl-6 londrina">:</h2>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex">
                    <div class="flex">
                      <div class="block text-center">
                        <h2 id="seconds" class="text-2xl londrina"></h2>
                        <h3  class="text-1xl londrina">
                          SECONDS
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="stopTimer" class="block mx-auto max-w-3xl mt-20 px-4 lg:px-0">
            <div v-if="isConnected && isWhitelisted">
              <div class="lg:w-3/4 lg:mx-auto text-center">
                <input type="number" max="5" min="1" v-model="mintAmount"
                       placeholder="Enter Amount"
                       class="bg-white w-full outline-none border border-white px-5 py-3 rounded rounded-md text-black-100 font-bold uppercase focus:ring-pink-500 focus:border-pink-500">
              </div>
              <div class="block text-center mt-6">
                <p v-if="mintAmount > 5 && mintType === 1" class="text-red-500">
                  Fucker, the max amount is 5 and you know this!
                </p>
                <p v-else-if="mintAmount > 5 && mintType === 2" class="text-red-500">
                  Fucker, the max amount is 5 and you know this!
                </p>
                <button v-if="mintAmount > 0 && mintAmount <= 5 && !isBusy" v-on:click="mintNFT()" class="rounded mt-6 rounded-full w-full text-xs block font-bold border border-white bg-pink-500 text-black-100 px-5 py-4 lg:text-lg">
                  MINT ETERNAL ENTITIES {{ (mintPrice * mintAmount).toFixed(2) }} ETH
                </button>
                <button v-else-if="mintAmount > 5 && !isBusy" class="cursor-not-allowed rounded mt-6 rounded-full w-full text-xs block font-bold border border-white bg-pink-500 text-black-100 px-5 py-4 lg:text-lg">
                  MINT ETERNAL ENTITIES {{ (mintPrice * mintAmount).toFixed(2) }} ETH
                </button>
                <button v-else-if="isBusy && Number(mintAmount) === 1" class="rounded mt-6 cursor-not-allowed rounded-full w-full block font-bold border border-white text-xs bg-pink-500 text-black-100 px-5 py-4 lg:text-lg">
                  BUSY MINTING THE ETERNAL ENTITY...
                </button>
                <button v-else-if="isBusy && Number(mintAmount) > 1" class="rounded mt-6 cursor-not-allowed rounded-full w-full block font-bold border border-white text-xs bg-pink-500 text-black-100 px-5 py-4 lg:text-lg">
                  BUSY MINTING ETERNAL ENTITIES...
                </button>
                <button v-else class="rounded mt-6 cursor-not-allowed rounded-full w-full block font-bold border border-white text-xs bg-pink-500 text-black-100 px-5 py-4 lg:text-lg">
                  MINT ETERNAL ENTITIES
                </button>
              </div>

              <div class="mt-8">
                <div class="h-5 relative max-w-xl rounded-full overflow-hidden">
                  <div class="w-full h-full bg-gray-200 absolute"></div>
                  <div class="h-full bg-green-500 absolute" :style="`width:${percentage}%`"></div>
                </div>
              </div>
              <div v-if="mintType === 1" class="block mt-8 text-center">
                <p class="text-sm">
                  Presale limit per wallet = 5
                </p>
              </div>
              <div v-if="mintType === 2" class="block mt-8 text-center">
                <p class="text-sm">
                  Limit per wallet = 5
                </p>
              </div>
              <div v-if="mintType === 1" class="block mt-8 text-center">
                <p class="text-sm text-green-500">
                  Presale is now live!
                </p>
              </div>
              <div v-else-if="mintType === 2" class="block mt-8 text-center">
                <p class="text-sm text-green-500">
                  Public is now live!
                </p>
              </div>
            </div>
            <div v-else-if="!isConnected">
              <div class="block mt-48 text-center">
                <button v-if="!isConnected" v-on:click="connectMetaMask" class="border text-black-100 bg-green-500 hover:bg-black-100 border-green-500 hover:text-white rounded-full p-4">Connect wallet</button>
              </div>
            </div>
            <div v-else-if="isConnected && !isWhitelisted">
              <div class="block mt-48 text-center">
                <p class="text-sm text-red-500">
                  Your wallet is not whitelisted for minting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";

export default {
  name: "Mint.vue",
  props: {
    contractInstance: Object,
  },
  data: () => ({
    available: 10000,
    totalSupply: 0,
    percentage: 0,
    stopTimer: false, // true Free (3) mint only
    stopCountDown: false,
    isBusy: false,
    mintAmount: null,
    mintPrice: 0.02,
    mintType: 1, // 1 Presale, 2 Public, 3 Free, 4 CLOSED

    isWhitelisted: false, // true Free (3) mint only

    connectedWalletAddress: "",
    chainId: "",
    isConnected: false,
  }),
  mounted: async function() {
    this.isConnected = await this.contractInstance.isConnected();

    await this.initPage();
  },
  methods: {
    initPage: async function() {
      await this.setListeners();

      window.setInterval(() => {
        if (!this.stopCountDown)
          this.countDown();
      }, 1000);

      if (this.isConnected) {
        await this.walletConnected();
      }
    },
    setListeners: async function() {
      window.ethereum.on('accountsChanged', async () => {
        if (await this.contractInstance.isConnected()) {
          await this.connectMetaMask()
        }
        window.location.reload();
      });

      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
    },
    walletConnected: async function() {
      if (!this.isWhitelisted)
        await this.isWalletWhitelisted();

      await this.getTotalSupply();
    },
    connectMetaMask: async function() {
      await this.contractInstance.connectMetaMask()
          .then((response) => {
            this.connectedWalletAddress = response.provider.selectedAddress;
            this.isConnected = true;
            this.chainId = this.contractInstance.getChainId();
            this.walletConnected();
          }).catch((e) => {
            console.log(`Something went wrong connecting MetaMask:`, e);
          });
    },
    isFreeMintAvailable: async function() {
      await this.contractInstance.getFreeMintAvailable()
        .then((response) => {
          if (response._isBigNumber)
            this.nrOfFreeMintAvailable = Number(this.fromBigNumber(response._hex));
          else
            this.nrOfFreeMintAvailable = Number(this.fromWei(response._hex));

          if (this.nrOfFreeMintAvailable > 0) {
            this.freeMintAvailable = true;
          } else {
            this.freeMintAvailable = false;
            this.mintType = 4;
          }
        }).catch((e) => {
            console.log(`Something went wrong getting Free Mint Available:`, e);
        });
    },
    getTotalSupply: async function() {
      await this.contractInstance.getTotalSupply()
          .then((response) => {
            if (response._isBigNumber)
              this.totalSupply = Number(this.fromBigNumber(response._hex));
            else
              this.totalSupply = Number(this.fromWei(response._hex));

            this.percentage = (this.totalSupply / this.available) * 100;
          }).catch((e) => {
            console.log(`Something went wrong getting Total Supply:`, e);
          });
    },
    isWalletWhitelisted: async function() {
      await this.contractInstance.isWalletWhitelisted(this.connectedWalletAddress)
        .then((response) => {
          this.isWhitelisted = response;
        }).catch((e) => {
          console.log(`Something went wrong getting Whitelisted list:`, e);
        });
    },
    mintNFT: async function() {
      const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      if(this.isConnected) {
        this.isBusy = true;
        if (this.mintType === 1) {
          await this.contractInstance.presaleMint(this.connectedWalletAddress, Number(this.mintAmount))
              .then( async (response) => {
                let transactionReceipt = null
                while (transactionReceipt == null) { // Waiting expectedBlockTime until the transaction is mined
                  const web3 = new Web3(window.ethereum);
                  transactionReceipt = await web3.eth.getTransactionReceipt(response.hash);
                  await sleep(1000);
                }

                const mintAmount = this.mintAmount;
                this.mintAmount = 0;
                this.$notifications(
                    `You successfully minted ${mintAmount} Eternal Entities NFTs!`,
                    ``,
                    `https://etherscan.io/tx/${response.hash}`,
                    0,
                    true);
              }).catch((e) => {
                this.$notifications(
                    'Something went wrong Minting NFT:',
                    `${e.message}`,
                    '',
                    1,
                    true);
              }).finally(() => {
                // Refresh page data
                this.isBusy = false;
                this.initPage();
              });
        } else if (this.mintType === 2) {
          await this.contractInstance.publicMint(this.connectedWalletAddress, this.mintAmount)
              .then( async (response) => {
                let transactionReceipt = null
                while (transactionReceipt == null) { // Waiting expectedBlockTime until the transaction is mined
                  const web3 = new Web3(window.ethereum);
                  transactionReceipt = await web3.eth.getTransactionReceipt(response.hash);
                  await sleep(1000);
                }
                const mintAmount = this.mintAmount;
                this.mintAmount = 0;
                this.$notifications(
                    `You successfully minted ${mintAmount} Eternal Entities NFTs!`,
                    ``,
                    `https://etherscan.io/tx/${response.hash}`,
                    0,
                    true);
              }).catch((e) => {
                this.$notifications(
                    'Something went wrong Minting NFT:',
                    `${e.message}`,
                    '',
                    1,
                    true);
              }).finally(() => {
                // Refresh page data
                this.isBusy = false;
                this.initPage();
              });
        } else if (this.mintType === 3) {
          await this.contractInstance.freeMint()
              .then( async (response) => {
                let transactionReceipt = null
                while (transactionReceipt == null) {
                  const web3 = new Web3(window.ethereum);
                  transactionReceipt = await web3.eth.getTransactionReceipt(response.hash);
                  await sleep(1000);
                }
                this.mintAmount = 0;
                this.$notifications(
                    `You successfully minted 1 Eternal Entities NFTs!`,
                    ``,
                    `https://etherscan.io/tx/${response.hash}`,
                    0,
                    true);
              }).catch((e) => {
                this.$notifications(
                    'Something went wrong Minting NFT:',
                    `${e.message}`,
                    '',
                    1,
                    true);
              }).finally(() => {
                // Refresh page data
                this.isBusy = false;
                this.initPage();
              });
        }
      } else {
        this.$notifications(
            'Please connect your wallet.',
            `Before you can start minting, please connect your wallet with MetaMask.`,
            '',
            2,
            true);
      }
    },
    countDown: function() {
      // PRESALE
      if (this.mintType === 1) {
        const countDownDate = new Date("Nov 22, 2021 00:00:00").getTime();
        // Get today's date and time
        const now = new Date().getTime();
        // Find the distance between now and the count down date
        const distance = countDownDate - now;
        if (!this.stopTimer) {
          // Time calculations for days, hours, minutes and seconds
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="demo"
          document.getElementById("days").innerHTML = days;
          document.getElementById("hours").innerHTML = hours;
          document.getElementById("minutes").innerHTML = minutes;
          document.getElementById("seconds").innerHTML = seconds;
        }
        // If the count down is finished, write some text
        if (distance < 0) {
          this.stopTimer = true;
          const countDownDatePublic = new Date("Nov 23, 2021 00:00:00").getTime();
          // Get today's date and time
          const nowPublic = new Date().getTime();
          // Find the distance between now and the count down date
          const distancePublic = countDownDatePublic - nowPublic;
          if (distancePublic < 0) {
            this.mintType = 2;
            this.stopCountDown = true;
          }
        }
      } else if ( this.mintType === 2) {
        this.stopTimer = true;
      }
    },
    toWei: function(amount) {
      const web3 = new Web3(window.ethereum);
      return web3.utils.toWei(amount.toString());
    },
    fromWei: function(amount) {
      const web3 = new Web3(window.ethereum);
      return web3.utils.fromWei(amount.toString());
    },
    fromBigNumber: function(amount) {
      return amount.toString();
    },
    eternalized: function() {
      console.log(process.env.VUE_APP_EASTER);
      return process.env.VUE_APP_EASTER;
    },
  },
}
</script>

<style scoped>
@media screen and (min-width: 900px) {
  #minting-mine {
    top: 150px;
  }
}
@media screen and (min-width: 1080px) {
  #minting-mine {
    top: 175px;
  }
}
@media screen and (min-width: 1280px) {
  #minting-mine {
    top: 225px;
  }
}
@media screen and (min-width: 1480px) {
  #minting-mine {
    top: 300px;
  }
}
</style>
