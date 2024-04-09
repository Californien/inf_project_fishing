<template>

    <div id="numpad">
        <p>Zifferneingabe</p>
        <button class="closeBtn" title="schließen"></button>
    </div>

</template>

<style lang="scss">

    #numpad {
        position: relative;
        left: 800px;
        bottom: 100px;
        width: 277px;
        height: 245px;
        background: url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/bg-keypad.png');
        .closeBtn {
            background-position: -42px -59px;
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