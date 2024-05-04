<template>

    <div id="inworkinfo">
        <div class="top"></div>
        <div class="main">
            <p>
                <strong>Wartungsarbeiten:</strong>
                <br>
                Eventuell sind momentan einige Dienste, aufgrund von Wartungsarbeiten auf der Website, nicht verfügbar.
                <br>
                Wir bitten um Ihr Verständnis.
                <br>
                Trotz dieser Wartungsarbeiten werden Sie nicht eingeschränkt sich einzuloggen.
            </p>
        </div>
        <div class="bottom"></div>
    </div>

</template>

<style lang="scss">

    #inworkinfo {
        position: relative;
        left: 660px;
        bottom: 125px;
        width: 261px;
        height: 190px;
        .top {
            width: inherit;
            height: 16px;
            background-image: url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/login-warnung-top.png');
        }
        .main {
            width: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 144px;
            background: url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/login-warnung-middle.png');
            background-repeat: repeat-y;
            p {
                color: white;
                margin: 0;
                font-size: 12px;
                padding: 0;
                width: calc(100% - 29px);
                strong {
                    color: white;
                }
            }
        }
        .bottom {
            width: inherit;
            height: 16px;
            background-image: url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/login-warnung-bottom.png');
        }
    }

</style>

<script></script>