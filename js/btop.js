window.onload = function() {     /* 导航栏--- 延伸栏 */
    var oBlk = document.getElementById('blk');    /* li */
    var oBla = document.getElementById('bla');      /* li a */
    var oBlaul = document.getElementById('blaul');      /* li a ul */
    var oBlaulo = document.getElementById('blaulo');       /* li a ul li */
    var oBlault = document.getElementById('blault');         /* li a ul li */

    var oBlt = document.getElementById('blkt');
    var oBlb = document.getElementById('blb');
    var oBlbul = document.getElementById('blbul');

    var oBls = document.getElementById('blks');
    var oBlc = document.getElementById('blc');
    var oBlcul = document.getElementById('blcul');

    var oBlf = document.getElementById('blkf');
    var oBld = document.getElementById('bld');
    var oBldul = document.getElementById('bldul');

    var oRsjb = document.getElementById('rig-sjb');   /* nav手机版二维码 li */
    var oTapp = document.getElementById('tmapp');    /* nav手机版二维码 li div */

    oBlk.onmousemove = function() {   /* 1 */
        oBlk.style.background = '#fff';
        oBla.style.color = '#fe1747';
        oBlaul.style.display = 'block';
        oBla.onmouseover = function() {
            oBla.style.textDecoration = "underline";
        }
    }
    oBlk.onmouseout = function() {
        oBlk.style.background = '';
        oBla.style.color = '';
        oBla.style.textDecoration = "none";
        oBlaul.style.display = 'none';
    }
    oBlaul.onmousemove = function() {
        oBlaulo.onmousemove =function() {
            oBlaulo.style.color = '#fe1747';
            oBlaulo.style.textDecoration = 'underline';
        }
        oBlault.onmousemove =function() {
            oBlault.style.color = '#fe1747';
            oBlault.style.textDecoration = 'underline';
        }
    }
    oBlaul.onmouseout = function() {
        oBlaulo.style.color = '#666666';
        oBlaulo.style.textDecoration = '';
        oBlault.style.color = '#666666';
        oBlault.style.textDecoration = '';
    }

    oBlt.onmousemove = function() {   /* 2 */
        oBlt.style.background = '#fff';
        oBlb.style.color = '#fe1747';
        oBlbul.style.display = 'block';
        oBlb.onmousemove = function() {
             oBlb.style.textDecoration = "underline";
        }
    }
    oBlt.onmouseout = function() {
        oBlt.style.background = '';
        oBlb.style.color = '';
        oBlb.style.textDecoration = "none";
        oBlbul.style.display = 'none';
    }

    oBls.onmousemove = function() {   /* 3 */
        oBls.style.background = '#fff';
        oBlc.style.color = '#fe1747';
        oBlcul.style.display = 'block';
        oBlc.onmousemove = function() {
            oBlc.style.textDecoration = "underline";
       }
    }
    oBls.onmouseout = function() {
        oBls.style.background = '';
        oBlc.style.color = '';
        oBlc.style.textDecoration = "none";
        oBlcul.style.display = 'none';
    }

    oBlf.onmousemove = function() {    /* 4 */
        oBlf.style.background = '#fff';
        oBldul.style.display = 'block';
    }
    oBlf.onmouseout = function() {
        oBlf.style.background = '';
        oBldul.style.display = 'none';
    }

    oRsjb.onmousemove = function() {    /* nav手机版二维码 */
        oTapp.style.display = 'block';
    }
    oRsjb.onmouseout = function() {
        oTapp.style.display = 'none';
    }


    /* mr-cont ul 列表效果 */
    var oSpfl = document.getElementById('hea-nav-spfl');
    var oSbg = document.getElementById('lunbo-bg');
    var aSli = oSpfl.getElementsByTagName('li');
    var aSa = oSpfl.getElementsByTagName('a');
    var oSyd = document.getElementById('ydhw-rig');
    var oSsp = document.getElementById('spfl-rig');
    /*
    for(var i=0; i<aSli.length; i++){
        aSli[i].onmousemove = function() {
            aSli[i].style.background = '#fff';
        }
    } 
    */

    for(var i=0;i<aSli.length;i++){
        (function(i){
            aSli[i].onmousemove = function() {
                if(i%2==0){
                    oSsp.style.display = "block";
                }else{
                    oSyd.style.display = "block";
                }
                aSli[i].style.background = "#fff";
                aSa[i].style.color = "#000";
                aSpan[i].style.color = "#000";
            }
            aSli[i].onmouseout = function() {
                oSsp.style.display = "none";
                oSyd.style.display = "none";
                aSli[i].style.background = "";
                aSa[i].style.color = "#fff";
                aSpan[i].style.color = "#fff";
            }
        })(i);
    }


    /* fixed-rig */
    var oRfix = document.getElementById('rig-fixed');
    var oRhy = document.getElementById('fixed-hyqy');
    var aRli = oRfix.getElementsByTagName('li');
    
    aRli[0].onmouseover = function() {
        oRhy.style.opacity = '1';
        oRhy.style.left = '-95px'
    }
    aRli[0].onmouseout = function() {
        oRhy.style.opacity = '0';
        oRhy.style.left = '-140px';
    }
    

    /* 轮播js */
    var oMgbox = document.getElementById('lunbo-img');
    var aMbimg = oMgbox.getElementsByTagName('img');
    var oMlist = document.getElementById('lunbo-list');
    var aLi = oMlist.getElementsByTagName('li');

    var cont = 0;
    var isgo = false;
    var timer;

    aLi[0].style.backgroundColor = "#fff"; 
    showimg();
    function showimg() {
        timer = setInterval(function() {
            if (isgo == false) {
                cont++;
                oMgbox.style.transform = "translate(" + -1140 * cont + "px)";
                    if (cont >= aMbimg.length - 1) {
                        cont = aMbimg.length - 1;
                        isgo = true;
                    }
            }else {
                cont--;
                oMgbox.style.transform = "translate(" + -1140 * cont + "px)";
                    if (cont <= 0) {
                        cont = 0;
                        isgo = false;
                    }
            }
        }, 3700);
    }

    for(var j = 0;j<aLi.length; j++){
        aLi[j].index = j;
        aLi[j].onmouseover = function() {
            clearInterval(timer);

            for(var a =0; a<aLi.length; a++){
                aLi[a].style.backgroundColor = "rgba(0,0,0,0.2)";
            }
                aLi[this.index].style.backgroundColor = "#fff";

            if(this.index == aLi.length - 1) {
                isgo = true;
            }
            if(this.index == 0) {
                isgo = false;
            }

            cont = this.index;
            oMgbox.style.transform = "translate(" + -1140 * this.index + "px)";
        }
        aLi[j].onmouseout = function() {
            showimg();
        }
    }

    /* 回到顶部 */
    var oBtn = document.getElementById("hddb");

    function scrollCheck() {
        if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            oBtn.style.display = "block";
        } else {
            oBtn.style.display = "none";
        }
    }
    function goToTop() {
        /*延时上升*/
        var loop = setInterval(function(){
            /*浏览器兼容*/
            var body = document.body || document.documentElement;
            body.scrollTop -= 20;
            if(body.scrollTop == 0) {
                clearInterval(loop);
            }
        }, 1);
    }

    /*滚动时执行*/
    window.onscroll = function() {
        scrollCheck();
    }

    oBtn.onclick = function() {
        goToTop();
    }
}