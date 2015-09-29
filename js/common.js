$(document).ready(function() {
    $('.top-mnu').slicknav({
        prependTo: '.header .mnu',
    });

	$('.bxslider').bxSlider({
      captions: true
    });
	
    $(function () {
        var tabContainers = $('.wrap-tab'); // получаем массив контейнеров
        tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
        // далее обрабатывается клик по вкладке
        $('.left-mnu a').click(function () {
            tabContainers.hide(); // прячем все табы
            tabContainers.filter(this.hash).show(); // показываем содержимое текущего
            $('.left-mnu a').removeClass('active'); // у всех убираем класс 'selected'
            $(this).addClass('active'); // текушей вкладке добавляем класс 'selected'
            return false;
        }).filter(':first').click();
    });
});