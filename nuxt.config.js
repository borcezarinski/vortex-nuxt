export default {

    ssr: true,
    target:'static',

    /*
    ** Headers of the page
    */
    pwa:{
        icon:{
            fileName: 'favicon.ico'
        }
    },
    head: {
        title: "Вортекс Компјутери",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Вортекс Компјутери во Скопје ( ТЦ Бисер II KAT Н.Аеродром) Бул.Јане Сандански бр.82 лок.16, продажба и сервис на компјутери, лаптопи и компјутерска опрема'},
            { hid: 'keywords', name: 'keywords', content: 'компјутер,лаптоп,хард-диск,Бисер, Аеродром, Скопје, продажба, i-5, i-3, Intel, AMD, CPU, RAM, Gb, USB, SSD'}
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
/*            {rel: 'stylesheet', href:"/css/plugins.css"},*/
/*            {
                rel: "preload",
                href: "/assets/fonts/roboto/KFOmCnqEu92Fr1Mu7WxKOzY.woff2",
                type:"font/woff2",
                as:'font',
                crossorigin:""
            },*/
            {
                rel: "stylesheet",
                href:"https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            },
            {
                rel: "preload",
                href: "/css/bootstrap.css",
                as:"style"
            },
            {
                rel: "stylesheet",
                href: "/css/bootstrap.css",
            },
            {
                rel: "preload",
                href: "/css/dark.min.css",
                as:"style"
            },
            {
                rel: "stylesheet",
                href: "/css/dark.min.css?id=maincss",
            }
        ]/*,
        script:[
            {
            src: "/js/plugins.js", body:true
        },
            {src: "/js/theme.js", body: true}
        ]*/
    },



    /*
    ** Global CSS
    */
    css: [
    ],
/*    vuetify: {
        customVariables: [],
        treeShake: true,
        defaultAssets: {
            font: false,
            icons: 'md',// this just fetches it from the repo
// icons: {iconfont: 'md'} // this doesn't seem to work for me
        },
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: '#fec655',
                },
            }
        }
    },*/
    /*
    ** Plugins to load before mounting the App
    */
    plugins: ['~plugins/vuetify.js',{src:'~plugins/typer.js', ssr:false} ],
    build: {
        vendor: ['vuetify']
    },
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Simple usage
       // '@nuxtjs/vuetify',

        // With options
        ['@nuxtjs/vuetify', {
        theme: {
                dark: true,
            icons: {
                iconFont: "md",
            },
                themes: {
                    dark: {
                        primary: '#8EC631',
                    }
                }
            }}]
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
    ],
    router: {

    },
    generate: {
        routes: [ '/', '/contact/', '/downloads/', '/cenovnik/' ] // <-- an array with all the routes that you need to be rendered
    },

    env: {
    }
}
