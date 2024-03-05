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

    async function openLink(link: any) {
        await navigateTo(link, {
            external: true,
            open: {
                target: '_blank'
            }
        });
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
        bottom: 80px;
        left: 35px;
        gap: 12px;
        p {
            cursor: pointer;
            font-size: 12px;
        }
    }

</style>