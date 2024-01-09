import store from '@/store';
import contractJson from '../assets/build/EternalEntities.json';

export default {
    install(Vue, opts) {
        opts = {
            url: window.location.href,
        };
        this.setErc();
    },
    setErc: function() {
        store.state.chainId = process.env.VUE_APP_NETWORK;
        const contractAbi = contractJson.abi;
        store.state.contractAddress = process.env.VUE_APP_CONTRACT_ADDRESS;
        store.state.contractAbi = contractAbi;
    },
}

