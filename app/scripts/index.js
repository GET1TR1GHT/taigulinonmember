$(document).ready(function () {
  var flag = true;
  // 点击事件，当点击index，html文件中56排时，触发touch事件
  $('.icons>.zs').on('touchstart', function () {
    $(this).css('display', 'none');
    $(this).next().css('display', 'block');
  })
  $('.icons>.zs').on('touchend', function () {
    $(this).css('display', 'block');
    $(this).next().css('display', 'none');
  })

  // 点击事件，当点击index，html文件中57排时，触发touch事件
  $('.icons1>.gift').on('touchstart', function () {
    $(this).css('display', 'none');
    $(this).next().css('display', 'block');
  })
  $('.icons1>.gift').on('touchend', function () {
    $(this).css('display', 'block');
    $(this).next().css('display', 'none');
  })
  console.log(flag);

  $('#menuicon').on('touchstart', function () {
    console.log(flag);
    if (flag) {
      $('.ticketdetails').css({
        'transform': 'scale(0.8,0.8)',
        'transition': 'all 0.5s ease-in-out'
      });
      $('.ticketdetails>.geryblock').css('display', 'none');
      $('.left').css({
        'transform': 'translateX(-75%) scale(0.8,0.8)',
        'transition': 'all 0.3s ease-in-out',
        'opacity': '1'
      });
      $('.right').css({
        'transform': 'translateX(75%) scale(0.8,0.8)',
        'transition': 'all 0.3s ease-in-out',
        'opacity': '1'
      });
      var hh=0;
      var $maxindex=$('.ticketdetails').length-1;
      $('.ticketdetails').each(function (gg,ll) {
        var $index=gg;
        console.log($maxindex);
        $maxindex--;
        hh++;
        console.log($maxindex);
        $('.ticketdetails').eq($index)
      });
      flag=false;
    } else {
      $('.ticketdetails').css({
        'transform': 'scale(1,1)',
        'transition': 'all 0.2s ease-in-out'
      });
      $('.ticketdetails>.geryblock').css('display', 'block');
      $('.left').css({
        'transform': 'translateX(0) scale(1,1)',
        'transition': 'all 0.3s ease-in-out',
        'opacity': '1'
      });
      $('.right').css({
        'transform': 'translateX(0) scale(1,1)',
        'transition': 'all 0.3s ease-in-out',
        'opacity': '1'
      });
      flag=true;
    }

  })

})
