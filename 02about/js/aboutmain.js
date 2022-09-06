
$(function () {
  const stalker = document.getElementById('stalker');
let hovFlag = false;

document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

const linkElem = document.querySelectorAll('a:not(.no_stick_)');
for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;
        stalker.classList.add('is_active');

    });
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('is_active');
    });

};

var $nav=$('#wrapper>nav');
var $navButton=$nav.find('button')
.on('click', function () {
    $nav.toggleClass('open');
    if ($nav.hasClass('open')) {
$nav.stop(true).animate({
   'right':'20%'
},1500/*,'easeOutBack'*/
);
		$navButton.find('img')
		.attr('src','../images/arrow-left-s-line.png');
		
    } else {
        $nav.stop(true).animate({
            'right':'-24%'
        },1500/*,'easeInBack'*/);
        $navButton.find('img')
		.attr('src','../images/arrow-left-l-line.png');
    }
});
	
$(function() {
	$('body').fadeIn(1500); //1秒かけてフェードイン！
});	


	

});