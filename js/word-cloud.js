$(function () {
    loadWordCloud()

    function randomColor() {
        return 'rgb(' + [
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255)
        ].join(',') + ')'
    }
    function loadWordCloud() {
        let chart = echarts.init(document.querySelector('#chartWordCloud'))

        fetch('http://onecat.sblt.deali.cn:9800/hotspot/weibo_top_keyword')
            .then(res => res.json())
            .then(res => {
                let originData = res.data.map(item => ({
                    name: item.name,
                    value: item.heat
                }))

                const data = originData.map(val => ({
                    ...val,
                    textStyle: {
                        normal: {
                            color: randomColor()
                        }
                    }
                }))

                chart.setOption({
                    series: [{
                        type: 'wordCloud',
                        shape: 'diamond',
                        left: 'center',
                        top: 'center',
                        right: null,
                        bottom: null,
                        width: '100%',
                        height: '100%',
                        sizeRange: [10, 80],
                        rotationRange: [-90, 90],
                        rotationStep: 45,
                        gridSize: 8,
                        drawOutOfBound: false,
                        textStyle: {
                            normal: {
                                fontFamily: 'sans-serif',
                                fontWeight: 'normal'
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        data
                    }]
                })
            })
    }
})