$("docoment").ready(function(){let e=new XMLHttpRequest;e.open("GET","data-customers.json"),e.onload=function(){dataMe=JSON.parse(e.responseText),function(e){var t=e.title;$(".productName small").text(t);var a=e.id;$(".imageProduct img").attr("src","image/"+a+".jpg").attr("alt",t),t=e.category,$(".category").text(t);let n=$(e.months),o=[],u=[],s=[];$.each(n,function(e,t){$.each(t,function(e,t){o.push(t.upper80),u.push(t.bet40and80),s.push(t.below40)})});let i=[],r;for(let e=0;e<o.length;e++)r=o[e]+u[e]+s[e],i.push(r);let c=[],d=[],h=[];for(let e=0;e<o.length;e++)c.push(o[e]/i[e]),d.push(u[e]/i[e]),h.push(s[e]/i[e]);for(let e=0;e<o.length;e++)$(".good").eq(e).animate({width:100*c[e]+"%"},700,"easeInOutQuart"),$(".medium").eq(e).animate({width:100*d[e]+"%"},700,"easeInBack"),$(".weak").eq(e).animate({width:100*h[e]+"%"},700,"easeOutCubic")}(dataMe)},e.send()});