<template>

    <div id="tabs">
        <div class="first" @click="toPDF">
            <img src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/reiter-freischaltung.png">
        </div>
        <div class="second" @click="toDemoAccount">
            <input type="image" src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/reiter-demokonto.png"
                title="Banking im Demomodus öffnen">
        </div>
    </div>

</template>


<script lang="ts" setup>

    async function toPDF() {
        await navigateTo('https://www.sparda-west.de/internetauftritt/downloads/pdf/online-banking/vereinbarung-ueber-das-online-banking.pdf', { external: true, open: { target: '_blank' } });
    }

    async function toDemoAccount() {
        await navigateTo('https://banking.sparda-west.de/spm/login/pages/index.banking', { external: true });
    }

</script>

<style lang="scss">

    #tabs {
        z-index: 0;
        width: 420px;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5px;
        position: absolute;
        top: 1px;
        left: 214px;
        .first {
            cursor: pointer;
            width: 210px;
            height: 40px;
        }
        .second {
            width: 95px;
            height: 40px;
        }
    }

</style>