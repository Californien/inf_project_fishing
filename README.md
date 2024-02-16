nebenbei infos:

bsp: order(s)

const { find, findOne, create, update, delete: remove } = useStrapi();

const { data: orders } = await useAsyncData('orders', () => find('orders'),{
  transform: (data: any) => {
    if(data.data) {
      return data.data.map((post: any) => post.attributes);
    } else {
      return null;
    }
  }
})

CHECK THIS TO USE .ENV FILES IN NUXT.JS

https://nuxt.com/docs/guide/going-further/runtime-config

irgendwie mit env und so auch. wenn möglich .env datei ohne runtimeConfig?

development: sqlite
production: mysql (in plesk)

dran denken, dass `strapi_backend` vor entgültigem publish geleert (nur .gitkeep) werden muss. (wegen `npm run setup`)

scss custom srollbar!

daran erinnern das Enträge in strapi erst zum schluss (production mode plesk) durchgeführt werden sollten