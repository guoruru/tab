app.directive('tabDirective', function () {
    return {
        templateUrl: './App/View/temp/_tab.html',
        link: function (scope, ele, attr, ctrl) {
            $('.header').on('click', 'a', function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
            var mySwiper = new Swiper(".swiper-container",{
                autoplay: 1000,
                loop: true,
                observer: true,
                pagination:".swiper-pagination"
            });
            $('.more').on("click", function () {
                var str = '';
                for(var i = 0; i < 10; i++){
                    str += "<dl><dt><img src='Content/img/pics1.gif'></dt><dd><h2>上海大众—全新旅途L</h2><h3>上海大众—全新旅途L</h3><p><span>1元</span><small>1.44万</small></p></dd></dl>"
                }
                document.querySelector('.likes').innerHTML += str;
            })
            if ($("#scroller>dl").length > 2) {
                $('#scroller').width($('#scroller>dl').width() * $('#scroller>dl').length                       + 200);
                var mySwiper = new IScroll('#wrapper',{
                    mouseWheel: true,
                    scrollX:true,
                    click:true
                })
            }
        }
    }
})