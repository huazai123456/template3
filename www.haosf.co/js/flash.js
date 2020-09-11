var flash_i=1;
var leftfl=0;

$(function()
{
	$("div[class='top1_left f_l']").eq(0).find("img").eq(0).attr("src","/images/applogo.jpg");
    var cl=setInterval('goIndexFlash()',4000);
    $('#big_eye a').mouseover(function()
    {
        clearInterval(cl);
        var j=$('#big_eye a').index($(this)[0]);
        setIndexFlash(j);
        flash_i=j+1;
    });

    $('#big_eye a').mouseout(function()
    {
        cl=setInterval('goIndexFlash()',4000);
    });
});

function goIndexFlash()
{
    if(flash_i==4)
    {
        jCarouselLite();
    }
    if(flash_i>7)
    {
        flash_i=0;
	jCarouselLiter();
    }	
    setIndexFlash(flash_i);
    flash_i++;
}

function jCarouselLite()
{	
	$('#big_eye ul').animate({ left: '-268'},500); 	
}
function jCarouselLiter()
{
	$('#big_eye ul').animate({ left: '0'},500); 
}
function setIndexFlash(j)
{
    $('#big_eye a').eq(j).addClass('ahover').parent().siblings().find("a").removeClass('ahover');
    $('.tit_eye a').eq(j).show().siblings().hide();
    $('.eye a').eq(j).show().siblings().hide();
}

var hdkk=0;
var znkk=0;
var zncl;
var hdcl;

$(function()
{
	foo('zn');
	foo('hd');
	stophotnews('zn');
	stophotnews('hd');
})

function foo(obj)
{   
	if(obj=="zn")
	{
    		zncl=window.setInterval(function()
 		   {	
       			    setindexhotnews(obj);
			}, 4000);
	}
	else
	{
		hdcl=window.setInterval(function()
 		   {	
       			    setindexhotnews(obj);
			}, 4000);
	}
}


function setindexhotnews(obj)
{
	kk=28;
	if(eval(obj+"kk==-252"))
	{
		eval(obj+"kk=0");
	}
	else
	{
		eval(obj+"kk="+obj+"kk-kk");	
	}	
	$('.'+obj+' ul').animate({top:eval(obj+'kk')},500);
}

function stophotnews(obj)
{
	 $('.'+obj+' li').mouseover(function()
    {	
        
	if(obj=='zn')
	{
		clearInterval(zncl);
	}
      	else
	{		
		clearInterval(hdcl);
	}
    });

    $('.'+obj+' li').mouseout(function()
    {	
	if(obj=='zn')
	{
		zncl=setInterval("setindexhotnews('zn')",4000);
	}
      	else
	{
		hdcl=setInterval("setindexhotnews('hd')",4000);
	}
    }); 

}