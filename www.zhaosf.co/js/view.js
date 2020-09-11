function CheckLogin(){
	  var taget_obj = document.getElementById('_ajax_feedback');
	  myajax = new DedeAjax(taget_obj,false,false,'','','');
	  myajax.SendGet2("/member/ajax_feedback.php");
	  DedeXHTTP = null;
}
function mood(){
  var mood_obj = document.getElementById('_mood');
  myajax = new DedeAjax(mood_obj,false,false,"","","");
  myajax.SendGet2("/plus/mood/pj.php?aid="+id+"&up="+10*Math.random());
  DedeXHTTP = null;
}
function moodGet(mood)
{
  var mood_obj = document.getElementById('_mood');
  myajax = new DedeAjax(mood_obj,false,false,"","","");
  myajax.SendGet2("/plus/mood/pj.php?aid="+id+"&action=mood&mood="+mood+"&up="+10*Math.random());
  myajax = null;
}
function postDigg(ftype,aid)
{
	var taget_obj = document.getElementById('newdigg');
	var saveid = GetCookie('diggid');
	if(saveid != null)
	{
		var saveids = saveid.split(',');
		var hasid = false;
		saveid = '';
		j = 1;
		for(i=saveids.length-1;i>=0;i--)
		{
			if(saveids[i]==aid && hasid) continue;
			else {
				if(saveids[i]==aid && !hasid) hasid = true;
				saveid += (saveid=='' ? saveids[i] : ','+saveids[i]);
				j++;
				if(j==20 && hasid) break;
				if(j==19 && !hasid) break;
			}
		}
		if(hasid) { alert("您刚才已经评价过了，本次评价无效，请勿重复评价！"); return; }
		else saveid += ','+aid;
		SetCookie('diggid',saveid,1);
	}
	else
	{
		SetCookie('diggid',aid,1);
	}
	myajax = new DedeAjax(taget_obj,false,false,'','','');
	var url = "/plus/digg_ajax.php?action="+ftype+"&id="+aid;
	myajax.SendGet2(url);
}
function getDigg(aid)
{
	var taget_obj = document.getElementById('newdigg');
	myajax = new DedeAjax(taget_obj,false,false,'','','');
	myajax.SendGet2("/plus/digg_ajax.php?id="+aid);
	DedeXHTTP = null;
}
$(function()
{
    $('#erwm span').hover(function()
    {
        $(this).find('.layers').show();
    },
    function()
    {
        $(this).find('.layers').hide();
    });
})

function setMagic(obj,r,l)
{
    $('#'+obj).jCarouselLite(
    {
        btnNext: r,
        btnPrev: l,
        speed:500,
        visible: 4
    });
}