<template>

    <div id="footer">
        <p @click="openLink('https://www.sparda-west.de/impressum.html')">Impressum</p>
        <p @click="openLink('https://www.sparda-west.de/internetauftritt/globale-inhaltsseiten/nutzungsbedingungen.html')">Nutzungsbedingungen</p>
        <p @click="openLink('https://www.sparda-west.de/datenschutz.html')">Datenschutz</p>
        <p @click="openLink('https://www.sparda-west.de/formulare-und-downloads-preisaushang/')">Preise</p>
        <p @click="openLink('https://www.sparda-west.de/online-banking-sicherheitsplus-garantie/')">Sicheres Banking</p>
    </div>

</template>

<script lang="ts" setup>

    function openLink(link: any) {
        navigateTo(link, { external: true, open: { target: '_blank' } })
    }

</script>

<style lang="scss">

    #footer {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: inherit;
        position: absolute;
        bottom: 84px;
        left: 35px;
        gap: 10px;
        p {
            cursor: pointer;
            font-size: 12px;
        }
    }

</style>