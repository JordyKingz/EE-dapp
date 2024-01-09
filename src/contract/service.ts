import Web3 from "web3";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ethers } from 'ethers';
import store from '@/store';

export default class ContractConnection {
    private provider: any;
    private providerConnected: boolean;
    private signer: any;

    constructor() {
        const env = process.env.VUE_APP_ENVIRONMENT;
        if (env === 'dev') {
            const network = {
                name: "Ganache",
                chainId: 1337,
            };

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.provider = new ethers.providers.Web3Provider(window.ethereum, network);
        } else if (env === 'test') {
            const network = {
                name: "Ropsten",
                chainId: 3,
            };

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.provider = new ethers.providers.Web3Provider(window.ethereum, network);
        } else if (env === 'prd') {
            const network = {
                name: "Main network",
                chainId: 1,
            };
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.provider = new ethers.providers.Web3Provider(window.ethereum, network);
        }

        this.signer = this.provider.getSigner();
        this.providerConnected = false;
    }

    // Returns bool of the connection MetaMask or WalletConnect
    async isConnected() {
        if (!this.provider)
            return false;

        if (!this.provider.provider && !this.provider.currentProvider) {
            return false;
        }

        // MetaMask
        this.providerConnected = this.provider.provider.selectedAddress !== null;

        return this.providerConnected;
    }

    // Connect with MetaMask wallet
    async connectMetaMask() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        await this.provider.send('eth_requestAccounts', []);
        this.signer = this.getSigner();
        return this.provider;
    }

    // Check which provider is connected
    async getProvider() {
        if (this.providerConnected) {
            //MetaMask
            const env = process.env.VUE_APP_ENVIRONMENT;
            if (env === 'dev') {
                const network = {
                    name: "Ganache",
                    chainId: 1337,
                };

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.provider = new ethers.providers.Web3Provider(window.ethereum, network);
            } else if (env === 'test') {
                const network = {
                    name: "Ropsten",
                    chainId: 3,
                };

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.provider = new ethers.providers.Web3Provider(window.ethereum, network);
            } else if (env === 'prd') {
                const network = {
                    name: "Main network",
                    chainId: 1,
                };
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.provider = new ethers.providers.Web3Provider(window.ethereum, network);
            }
            return this.provider;
        }

        return null;
    }

    getSigner() {
        return this.provider.getSigner();
    }

    getContractInterface(web3: any, abi: any, address: string, signer: any) {
        if (web3 !== undefined)
            return new ethers.Contract(address, abi, signer)

        return null;
    }

    // Returns the connected accounts
    async getAccounts() {
        const web3 = await this.getProvider();
        if (web3 !== null) {
            // MetaMask
            return this.provider.provider.selectedAddress;
        }
    }

    // Returns the connected chainId
    async getChainId() {
        const web3 = await this.getProvider();
        if (web3 !== null && this.providerConnected) {
            // Metamask
            return web3.network.chainId;
        }
    }

    // Disconnect the connected wallet
    disconnect() {
        if (this.providerConnected) {
            console.log(this.provider);
        }

        return this.isConnected();
    }

    async getFreeMintAvailable() {
        const web3 = this.getProvider();
        if (web3 !== null) {
            const contractInterface = this.getContractInterface(web3, store.getters.contractAbi, store.getters.contractAddress, this.signer);
            if (contractInterface)
                return await contractInterface.freeMintAvailable();
        }
    }

    async isWalletWhitelisted(address: string) {
        const web3 = this.getProvider();
        if (web3 !== null) {
            const contractInterface = this.getContractInterface(web3, store.getters.contractAbi, store.getters.contractAddress, this.signer);
            if (contractInterface)
                return await contractInterface.connect(this.signer).IsOnWhitelist(address);
        }
    }

    async getTotalSupply() {
        const web3 = this.getProvider();
        if (web3 !== null) {
            const contractInterface = this.getContractInterface(web3, store.getters.contractAbi, store.getters.contractAddress, this.signer);
            if (contractInterface)
                return await contractInterface.totalSupply();
        }
    }

    async presaleMint(address: string, amount: number) {
        const web3 = this.getProvider();
        if (web3 !== null) {
            const contractInterface = this.getContractInterface(web3, store.getters.contractAbi, store.getters.contractAddress, this.signer);
            if (contractInterface) {
                const ethValue = (0.1 * amount).toFixed(1).toString();
                const tx = {
                    value: ethers.utils.parseEther(ethValue)
                }
                return await contractInterface.connect(this.signer).PresaleMint(amount, tx);
            }
        }
    }

    async publicMint(address: string, amount: number) {
        const web3 = this.getProvider();
        if (web3 !== null) {
            const contractInterface = this.getContractInterface(web3, store.getters.contractAbi, store.getters.contractAddress, this.signer);
            if (contractInterface) {
                const ethValue = (0.1 * amount).toFixed(1).toString();
                const tx = {
                    value: ethers.utils.parseEther(ethValue)
                }
                return await contractInterface.connect(this.signer).PublicMint(amount, tx);
            }
        }
    }

    async freeMint() {
        const web3 = this.getProvider();
        if (web3 !== null) {
            const contractInterface = this.getContractInterface(web3, store.getters.contractAbi, store.getters.contractAddress, this.signer);
            if (contractInterface) {
                // const ethValue = (0.1 * amount).toFixed(1).toString();
                // const tx = {
                //     value: ethers.utils.parseEther(ethValue)
                // }
                return await contractInterface.connect(this.signer).FreeMint();
            }
        }
    }
}
