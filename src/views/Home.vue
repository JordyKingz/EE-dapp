<template>
  <div class="home">
    <Video />

    <div class="block">
      <EternalEntities />
    </div>

    <div id="mint" class="block pt-12">
      <Mint :contractInstance="contractInstance" />
    </div>

    <div id="travelguide" class="block bg-green-500 pt-20">
      <GeneralInfo />
    </div>

    <div id="roadmap" class="block pt-20">
      <Roadmap />
    </div>

    <div id="team" class="block pt-20">
      <Team />
    </div>

    <div id="support" class="block">
      <Support />
    </div>
  </div>
</template>

<script>
import Video from '@/components/Video.vue';
import EternalEntities from '@/components/EternalEntities.vue';
import Mint from '@/components/Mint.vue';
import GeneralInfo from '@/components/GeneralInfo.vue';
import Roadmap from '@/components/Roadmap.vue';
import Team from '@/components/Team.vue';
import Support from '@/components/Support.vue';
import ContractConnection from "@/contract/service";

export default{
  name: 'Home',
  components: {
    Video,
    EternalEntities,
    Mint,
    GeneralInfo,
    Roadmap,
    Team,
    Support
  },
  data: () => ({
    contractInstance: new ContractConnection(),
  }),
};
</script>
