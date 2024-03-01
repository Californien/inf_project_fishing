<template>

    <div id="loginForm">
        <div class="input user">
            <div class="textField">
                <label for="user">Kundennummer</label>
            </div>
            <input v-model="inputValueUser" type="text" id="user" autocomplete="off" maxlength="10" tabindex="1" title="Kundennummer (erforderlich)">
            <img src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/zifferneingabe.png">
        </div>
        <div class="input pin">
            <div class="textField">
                <label for="onlinePin">Online-Pin</label>
            </div>
            <input type="password" id="onlinePin" autocomplete="off" maxlength="6" tabindex="2" title="Online-PIN (erforderlich)">
            <img src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/zifferneingabe.png">
        </div>
    </div>
    <div id="loginBtn">
        <img src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/buttons/buttonFlach_Jetzt_einloggen.png" @click="sendData">
    </div>

</template>

<style lang="scss">

    #loginForm {
        width: 646px;
        height: 53px;
        margin-top: 22px;
        .input {
            &:last-child {
                margin-top: 30px;
            }
            position: absolute;
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

    #loginBtn {
        z-index: 2;
        cursor: pointer;
        position: absolute;
        bottom: 10px;
        right: 20px;
    }

</style>

<script lang="ts" setup>

    import { ref } from 'vue';

    const inputValueUser = ref('');
    const savedValueUser = ref('');

    function saveInput() {
        savedValueUser.value = inputValueUser.value;
    }
    function sendData() {
        console.log(savedValueUser);
    }

</script>