<template>

    <div>
        <Header />
        <div class="main-field">
            <div class="loginBgImageTop"></div>
            <div class="loginBgImageMain">
                <div class="loginArea">
                    <h2>Anmeldung zu Ihrem Online-Banking</h2>
                    <Tabs />
                    <p>Bitte melden Sie sich mit der Eingabe Ihrer Kundennummer und der Online-PIN an. Andere Angaben sind nicht notwendig.</p>
                    <LoginForm />
                </div>
                <LoginButton />
            </div>
            <div class="loginBgImageBottom"></div>
            <div class="loginBgImageMirror"></div>
        </div>
    </div>

</template>

<style lang="scss">

    body, html {
        overflow: hidden;
        width: 100%;
        height: 100vh;
        background: #c2cad4 url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/bg-content.png') 0 0 repeat-x;
    }

    * {
        color: #2a3d5c;
        font-family: 'Arial', 'Helvetica', 'sans-serif';
        margin: 0;
        padding: 0;
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
                z-index: 1;
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
                p {
                    font-size: 12px;
                    margin-top: 25px;
                    line-height: 18px;
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