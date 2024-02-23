<template>

    <div id="header">
        <img src="/images/spardalogo.jpg" alt="Logo">
        <p>Sparda-Bank West eG <b>GENODEF1S08</b></p>
    </div>

</template>

<style lang="scss">

    #header {
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
            color: #2e3744;
            position: relative;
            font-size: 14px;
            b {
                color: #2e3744;
            }
        }
        img {
            position: relative;
        }
    }

</style>