<script lang="ts">
    import {PrivateKey} from '@bsv/sdk'

    let WIF:string
    let address:string 
    function createKeys (){
        const privKey = PrivateKey.fromRandom()
        WIF = privKey.toWif()
        console.log("Private Key WIF format is", WIF)
        address = privKey.toAddress()
        console.log("Your bitcoin address is ", address)

    }
</script>
<section>
    <button class="bg-black hover:bg-red-500 text-white p-2 rounded mx-auto flex flex-wrap " on:click={createKeys}> Generate New Wallet Keys </button>
    <p class="p-2 rounded mx-auto flex flex-wrap justify-center ">Private Key WIF format is  <strong>{WIF}</strong> </p>
    <p class="p-2 rounded mx-auto flex flex-wrap justify-center ">Your Bitcoin Address is  <strong>{address}</strong> </p>
</section>