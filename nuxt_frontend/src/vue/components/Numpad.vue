<template>

    <div :id="compClassId" :class="compClass">
        <p>Zifferneingabe</p>
        <button class="closeBtn" title="schließen" @click="close"></button>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td>
                    <button id="b7" title="7 eingeben" @click="enterNumber(7)">7</button>
                </td>
                <td>
                    <button id="b8" title="8 eingeben" @click="enterNumber(8)">8</button>
                </td>
                <td>
                    <button id="b9" title="9 eingeben" @click="enterNumber(9)">9</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button id="b4" title="4 eingeben" @click="enterNumber(4)">4</button>
                </td>
                <td>
                    <button id="b5" title="5 eingeben" @click="enterNumber(5)">5</button>
                </td>
                <td>
                    <button id="b6" title="6 eingeben" @click="enterNumber(6)">6</button>
                </td>   
            </tr>
            <tr>
                <td>
                    <button id="b1" title="1 eingeben" @click="enterNumber(1)">1</button>
                </td>
                <td>
                    <button id="b2" title="2 eingeben" @click="enterNumber(2)">2</button>
                </td>
                <td>
                    <button id="b3" title="3 eingeben" @click="enterNumber(3)">3</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button id="b0" title="0 eingeben" @click="enterNumber(0)">0</button>
                </td>
                <td>
                    <button id="b10" title="letztes Zeichen löschen" @click="entf">Entf</button>
                </td>
                <td>
                    <button id="b11" title="Enter drücken" @click="close">Enter</button>
                </td>
            </tr>
        </table>
    </div>

</template>

<style lang="scss">

    #numpad-0, #numpad-1 {
        &.invisible {
            opacity: 0;
            pointer-events: none;
        }
        pointer-events: all;
        opacity: 1;
        position: relative;
        left: 800px;
        bottom: 100px;
        width: 277px;
        height: 245px;
        background: url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/bg-keypad.png');
        table {
            margin: 34px 19px 19px 19px;
            tr {
                width: 213px;
                height: 43px;
                td {
                    width: 77px;
                    height: inherit;
                    button {
                        color: transparent;
                        outline: none;
                        border: none;
                        cursor: pointer;
                        width: inherit;
                        height: inherit;
                        max-width: 77px;
                        max-height: 43px;
                        background-image: url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/sprite_tanpad.png');
                        @for $i from 0 through 11 {
                            &#b#{$i} {
                                background-position-y: -43px * $i;
                                background-position-x: 77px;
                                &:hover {
                                    background-position-x: 0px;
                                }
                            }
                        }
                    }
                }
            }

        }
        .closeBtn {
            background-position: -52px -69px;
            position: absolute;
            right: 13px;
            top: 8px;
            background-image: url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/sprite-icons.png');
            width: 18px;
            height: 18px;
            aspect-ratio: 1/1;
            border: none;
            outline: none;
            cursor: pointer;
        }
        p {
            position: relative;
            left: 20px;
            top: 7px;
            font-weight: normal;
            font-size: 18px;
        }
    }

</style>

<script lang="ts" setup>

    import { inject } from 'vue';

    const inputUser = inject<any>('inputUser');
    const inputPin = inject<any>('inputPin');

    let compClass = 'visible';
    let compClassId = 'numpad-1';
    let compClassIdInt = parseInt(compClassId.slice(7));

    function enterNumber(num: Number) {
        if(compClassIdInt === 0) {
            inputUser._value.value += num;
        } else {
            inputPin._value.value += num;
        }
    }

    function entf() {
        if(compClassIdInt === 0) {
            inputUser._value.value = inputUser._value.value.slice(0, -1);
        } else {
            inputPin._value.value = inputPin._value.value.slice(0, -1);
        }
    }

    function close() {

    }

    // TEST FÜR MAXIMALE INPUT LÄNGE MACHEN!

</script>