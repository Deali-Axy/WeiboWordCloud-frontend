let app = new Vue({
    el: '#app',
    data: {
        weiboList: [],
    },
    created: function () {
        this.loadWeiboTop()
    },
    methods: {
        loadWeiboTop() {
            fetch(`${HOST}/hotspot/weibo_top`)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    this.weiboList = res.data
                })
        }
    }
})