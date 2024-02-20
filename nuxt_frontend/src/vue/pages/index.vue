<template>

    <div>
        <header>
            <img src="/images/spardalogo.jpg" alt="Logo">
            <p>Sparda-Bank West eG <b>GENODEF1S08</b></p>
        </header>
        <div class="main-field">
            <div class="loginBgImageTop"></div>
            <div class="loginBgImageMain">
                <div class="loginArea">
                    <h2>Anmeldung zu Ihrem Online-Banking</h2>
                    <div class="otherTabs">
                        <div class="first" @click="toPDF">sdfbdsfbdsfb</div>
                        <div class="second"></div>
                    </div>
                </div>
            </div>
            <div class="loginBgImageBottom"></div>
            <div class="loginBgImageMirror"></div>
        </div>
    </div>

</template>

<script lang="ts" setup>

    async function toPDF() {
        await navigateTo('https://www.sparda-west.de/internetauftritt/downloads/pdf/online-banking/vereinbarung-ueber-das-online-banking.pdf', { external: true, open: { target: '_blank' } });
    }

</script>

<style lang="scss">

    body, html {
        overflow: hidden;
        width: 100%;
        height: 100vh;
        background: #c2cad4 url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/bg-content.png') 0 0 repeat-x;
    }

    * {
        color: #2a3d5c;
        font-family: 'Arial';
        margin: 0;
        padding: 0;
    }

    header {
        color: #2e3744;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 2rem;
        width: 975px;
        position: absolute;
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
        p {
            position: relative;
            bottom: 10px;
            font-size: 14px;
        }
        img {
            position: relative;
        }
    }

    .main-field {
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        width: 975px;
        height: 523px;
        display: flex;
        flex-direction: column;
        gap: 0px;
        .loginBgImageTop {
            width: inherit;
            height: 16px;
            background-image: url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/bg-buehne-login-top.png');
        }
        .loginBgImageMain {
            width: inherit;
            height: 425px;
            background-image: url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/bg-buehne-login-middle.png');
            .loginArea {
                position: relative;
                left: 15px;
                width: 646px;
                height: 263px;
                padding-top: 14px;
                padding-left: 18px;
                background-image: url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/box-login.png');
                h2 {
                    font-size: 13px;
                }
                .otherTabs {
                    .first {

                    }
                    .second {
                        
                    }
                }
            }
        }
        .loginBgImageBottom {
            width: inherit;
            height: 22px;
            background-image: url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/bg-buehne-login-bottom.png');
        }
        .loginBgImageMirror {
            width: inherit;
            height: 60px;
            background-image: url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/bg-spiegelung-login.png');
        }
    }

</style>