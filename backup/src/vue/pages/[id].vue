<template>

    <div>
        <section class="backBtn" @click="$router.push('/')">
            <ion-icon name="arrow-back-outline"></ion-icon>
            <p>Zurück</p>
        </section>

        <section v-if="post[0]" class="postContent">
            <h1>{{ post[0].title }}</h1>
            <h2>{{ post[0].intro }}</h2>
            <Markdown :source="post[0].post_content"/>
        </section>

        <section v-else class="postError">
            <img src="/images/exclamation.png">
            <img src="/images/exclamation.png" class="glow">
            <h4>Post nicht gefunden.</h4>
            <h6>Tut uns leid, aber der Post, nach dem du schaust, scheint nicht (mehr) vorhanden zu sein.</h6>
        </section>
    </div>

</template>

<script lang="ts" setup>

    const slug = useRoute().path.slice(1);
    const { findOne } = useStrapi();
    const { data: post } = await useAsyncData('post', () => findOne('posts', `?filters[slug]=${slug}`),{
        transform: (data: any) => {
            if(data.data) {
                return data.data.map((post: any) => post.attributes);
            } else {
                return null;
            }
        }
    });

</script>

<style lang="scss">

    body {
        overflow-y: scroll;
    }

    .backBtn {
        z-index: 100;
        backdrop-filter: blur(6px);
        background-color: rgba($third, 0.1);
        border-radius: 10px;
        padding: 10px 15px;
        transition: all 200ms ease-in-out;
        position: absolute;
        width: 120px;
        left: 20px;
        top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        
        p {
            transition: all 200ms ease-in-out 0.1s;
            transform: translateX(-25%);
            font-size: 1.1em;
            margin: 0;
        }
        ion-icon {
            transition: all 200ms ease-in-out 0.1s;
            opacity: 0;
            scale: 0;
        }
        &:hover {
            cursor: pointer;
            background-color: rgba($prime, 0.4);
            p {
                transform: translateX(0);
            }
            ion-icon {
                opacity: 1;
                scale: 1.3
            }

        }
    }

    .postContent {
        width: 95%;
        position: relative;
        left: 50%;
        top: 50px;
        transform: translateX(-50%);
        margin-bottom: 70px;
        article {
            position: relative;
            top: 30px;
            margin-bottom: 110px;
        }
        h1 {
            font-size: 3.5em;
        }
        h2 {
            font-size: 1.3em;
        }
    }

    .postError {
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
</style>