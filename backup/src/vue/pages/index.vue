<template>

    <div>
        <section class="title">
            <h1>Posts</h1>
        </section>

        <section class="noPosts" v-if="!posts">
            <img src="/images/folder.png">
            <img class="glow" src="/images/folder.png">
            <h4>Leider sind aktuell keine Posts verfügbar.</h4>
            <h6>Überprüfe deine Internetverbindung und probiere es später erneut.</h6>
        </section>

        <section class="posts">
            <div class="post" v-for="post in posts" @click="$router.push(`/${post.slug}`)">
                <h2 class="title">{{ post.title }}</h2>
                <div class="additionalInfo">
                    <div class="release_date">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <p>{{ convertDate(post.release_date) }}</p>
                    </div>
                    <div class="location">
                        <ion-icon name="location-outline"></ion-icon>
                        <p>{{ post.location }}</p>
                    </div>
                    <div class="likes">
                        <ion-icon name="thumbs-up-outline"></ion-icon>
                        <p v-if="post.likes>1000000">{{ likes_formatNC.format(post.likes) }}</p>
                        <p v-else>{{ likes_format.format(post.likes) }}</p>
                    </div>
                </div>
                <h4 class="intro">{{ post.intro }}</h4>
            </div>
        </section>

        <section class="kiInfo" v-if="posts">
            <p>Warnung: Alle oben zu sehenden Posts wurden von einer K.I. generiert. Für Falsch-Informationen wird keine Haftung übernommen.</p>
        </section>
    </div>

</template>

<script lang="ts" setup>

    const likes_formatNC = Intl.NumberFormat('de-DE', {
        style: 'decimal',
        notation: 'compact'
    });

    const likes_format = Intl.NumberFormat('de-DE', {
        style: 'decimal'
    });

    const { find } = useStrapi();
    const { data: posts } = await useAsyncData('posts', () => find('posts'),{
        transform: (data: any) => {
            if(data.data) {
                return data.data.map((post: any) => post.attributes);
            } else {
                return null;
            }
        }
    });

    function convertDate(dateString: any) {
        const shortWeekdays = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
        const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
        const date = new Date(dateString);
        const WEEKDAY = shortWeekdays[date.getDay()];
        const DAY = dateString.slice(8, 10);
        const MONTH = months[parseInt(dateString.slice(5, 7)) - 1];
        const YEAR = dateString.slice(0, 4);
        const TIME = dateString.split('T')[1].slice(0, 5);
        return `${WEEKDAY}, ${DAY}. ${MONTH} ${YEAR}, ${TIME} Uhr`;
    }

</script>

<style lang="scss">

    body {
        overflow-y: scroll;
    }

    .title {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: flex-start;
        h1 {
            position: relative;
            left: 30px;
            top: 20px;
            font-size: 2.5em;
            margin: 0;
        }
    }

    .noPosts {
        width: 60%;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        img {
            &.glow {
                z-index: -1;
                position: absolute;
                filter: blur(40px);
                scale: 0.6;
            }
            z-index: 0;
            position: relative;
            top: 40px;
            margin: 0;
            scale: 50%;
            &::before {
                position: absolute;
                left: 0;
                top: 0;
                content: '';
                scale: 3;
            }
        }
        h4 {
            margin: 0;
            font-size: 2em;
        }
        h6 {
            margin: 0;
            font-size: 1.5em;
            font-weight: 400;
        }
    }

    .posts {
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .post {
            &:last-child {
                margin-bottom: 100px;
            }
            &:first-child {
                margin: 0;
            }
            padding: 0 40px;
            transition: all 0.15s ease-in-out;
            cursor: pointer;
            margin-top: 50px;
            background-color: rgba($third, 0.1);
            border: 2px solid rgba($third, 0.2);
            border-radius: 20px;
            width: 90%;
            &:hover {
                background-color: rgba($prime, 0.5);
                text-decoration: underline;
            }

            .intro {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .additionalInfo {
                opacity: 0.7;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 15%;
                margin: -20px 0;
                div {
                    width: 20%;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    ion-icon {
                        scale: 1.4
                    }
                }
            }
        }
    }

    .kiInfo {
        background-color: rgba($uiRed, 0.4);
        backdrop-filter: blur(5px);
        position: absolute;
        left: 50%;
        bottom: -20px;
        transform: translateX(-50%);
        margin-bottom: 40px;
        width: 75%;
        padding: 0px 20px;
        border-radius: 10px;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        animation: kiInfoBlink 1.5s ease-in-out;
        p {
            font-size: 1.1em;
            color: rgba($third, 0.75);
        }
    }

    @keyframes kiInfoBlink {
        0% {
            background-color: rgba($uiRed, 0.4);
        }
        25% {
            background-color: rgba($uiRed, 0.8);
        }
        50% {
            background-color: rgba($uiRed, 0.4);
        }
        75% {
            background-color: rgba($uiRed, 0.8);
        }
        100% {
            background-color: rgba($uiRed, 0.4);
        }
    }

</style>