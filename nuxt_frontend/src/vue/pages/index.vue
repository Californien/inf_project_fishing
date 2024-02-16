<template>

    <div>
        <header>
            <img src="https://banking.sparda-west.de/portalstatic/spm/gfx/style/logo/spardalogo.gif">
            <p>Sparda-Bank West eG <b>GENODEF1S08</b></p>
        </header>
        <div class="main-field">

        </div>
    </div>

</template>

<script lang="ts" setup>



</script>

<style lang="scss">

    body, html {
        overflow: hidden;
        width: 100%;
        height: 100vh;
        background: #c2cad4 url('https://banking.sparda-west.de/portalstatic/spm/gfx/style/bg-content.png') 0 0 repeat-x;
    }

    * {
        font-family: 'Arial';
    }

    header {
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
        width: 975px;
        height: 490px;
    }

</style>