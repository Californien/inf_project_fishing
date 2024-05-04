<template>

    <div id="scamWarn">
        <img src="https://banking.sparda-west.de/portalcontent/banking_portal/bilder/west/sparda-west/198_108_login3.jpg">
        <p><b>Wichtige Info: Betrugsversuche durch Anrufe</b></p>
        <p class="describtion">Geben Sie keine Aufträge in der SecureApp frei, die Sie nicht selbst im Online-Banking eingestellt haben. Nennen Sie NIE Ihre Zugangsdaten. Legen Sie direkt auf.</p>
        <img class="moreInfoBtn" @click="moreInformation" src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/buttons/button_Mehr_Informationen.png">
    </div>

</template>

<script setup>

    async function moreInformation() {
        await navigateTo('https://www.sparda-west.de/banking-news-alle-informationen-sicherheitshinweise', {
            external: true,
            open: {
                target: '_blank'
            }
        });
    }

</script>

<style lang="scss">

    #scamWarn {
        background: url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/bg-werbung.png') no-repeat;
        width: 663px;
        height: 110px;
        position: relative;
        top: 13px;
        left: 15px;
        p {
            position: absolute;
            left: 220px;
            top: 10px;
            font-size: 12px;
        }
        .describtion {
                margin-top: 20px;
                line-height: 15px;
        }
        .moreInfoBtn {
            cursor: pointer;
            position: absolute;
            right: 15px;
            bottom: 15px;
        }
    }

</style>