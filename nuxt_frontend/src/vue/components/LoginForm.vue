<template>

    <div id="loginForm">
        <div class="input user">
            <div class="textField">
                <label for="user">Kundennummer</label>
            </div>
            <input type="text" id="user" ref="user" autocomplete="off" maxlength="10" tabindex="1" title="Kundennummer (erforderlich)">
            <img src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/zifferneingabe.png" @click="enterNumPad('user')">
            <NumPadUser v-if="showUserNP" />
        </div>
        <div class="input pin">
            <div class="textField">
                <label for="onlinePin">Online-Pin</label>
            </div>
            <input type="password" id="onlinePin" ref="onlinePin" autocomplete="off" maxlength="6" tabindex="2" title="Online-PIN (erforderlich)">
            <img src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/zifferneingabe.png" @click="enterNumPad('onlinePin')">
            <NumPadOnlinePin v-if="showOnlinePinNP" />
        </div>
    </div>

</template>

<style lang="scss">

    #loginForm {
        width: 646px;
        height: 53px;
        margin-top: 22px;
        .input {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            font-size: 13px;
            font-weight: 600;
            width: inherit;
            height: 21px;
            margin-bottom: 11px;
            .textField {
                width: 233px;
            }
            input {
                border: 1px solid #00173c;
                color: #196AA6;
                width: 106px;
                padding: 1px 2px;
            }
            img {
                cursor: pointer;
                margin-left: 10px
            }
        }
    }

</style>

<script>

    export default {
        data() {
            return {
                showOnlinePinNP: false,
                showUserNP: false
            };
        },
        methods: {
            enterNumPad(input_id) {
                if(input_id === 'user') {
                    this.showUserNP = !this.showUserNP;
                } else {
                    this.showOnlinePinNP = !this.showOnlinePinNP;
                }
            }
        }
    }

</script>