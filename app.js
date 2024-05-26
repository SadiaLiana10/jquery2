$(function(){
    let qsn = $(".faq .qsn");
    qsn.on('click', function(){
        if($(this).hasClass('active')){
            qsn.removeClass('active');
        }else{

            qsn.removeClass('active');
            $(this).addClass('active');
        }

    });
});

