$(function(){
	var BookData ;
	var BookItem ;
	$.ajax({
		url:"Xml/BookList.xml",
		success:function(data){
			
			BookData = data ;
			BookItem = $(BookData).find("book");
			createPageItem();
			createBookList(1);
			
		},
		error:function(){
			alert("Err")
		}
	});//Ajax
	
	
	function createBookList(pageCurrentNo){
		
		$(".bookShowList").html("")
		
		var maxNoItem = ((pageCurrentNo) * 9 > $(BookItem).length) ? $(BookItem).length : (pageCurrentNo * 9)
		
		
		
		
		
		$(".bookShowList").append("<ul></ul>")
		
		for(BookIndex=(pageCurrentNo - 1) * 9 ;BookIndex < maxNoItem ; BookIndex++){
			
			if(BookIndex %3 == 0){
				$(".bookShowList").append("<div class='card-deck'></div>")
			}
			$(".bookShowList .card-deck").last().append('<div class="card my-2"><img class="card-img-top img-fluid img-thumbnail" src="#" alt="Card image cap"><div class="card-body"><h5 class="card-title">Card title</h5></div><div class="card-footer text-center">قیمت : <span class="price"></span> تومان </div><div class="card-footer"><i class="fa fa-shopping-cart float-left"></i><i class="fa fa-info float-right"></i></div></div>');
			
			$(".bookShowList .card-deck .card img").last().attr("src","bookImage/small/"+$(BookItem).eq(BookIndex).attr("id")+".jpg").attr("alt",$(BookItem).eq(BookIndex).find("title").text())
			
			$(".bookShowList .card-deck .card .card-title").last().text($(BookItem).eq(BookIndex).find("title").text())
			$(".bookShowList .card-deck .card .card-footer .price").last().text($(BookItem).eq(BookIndex).find("price").text())
			
    
  
		  }
			
		if(maxNoItem % 3 != 0){
		for(ExtraCard = 0 ; ExtraCard <  3 - (maxNoItem % 3) ; ExtraCard++){
			
			
			  $(".bookShowList .card-deck").last().append("<div class='card my-2 border-0'></div>")
			
			}
		}	
		
	}//fun
	
	function createPageItem(){
		var pageNo = $(BookItem).length / 9
		pageNo = Math.ceil(pageNo)
		for(pageItemNo=1;pageItemNo <= pageNo ; pageItemNo++){
			
		$(".pageBlock ul li").last().before("<li class='page-item'><a class='page-link' href='#'>"+pageItemNo+"</a></li>")
		}
		
		
		$(".pageBlock ul.pagination li.page-item").click(function(){
			createBookList($(this).text())
		});
		
		$(".pageBlock ul li.page-item a").not("[aria-label]").parent().first().addClass("active")
		
		$(".pageBlock ul.pagination li.page-item a").not("[aria-label]").click(function(){
			
			$(".pageBlock ul.pagination li.page-item").removeClass("active")
			$(this).parent().addClass("active")
			
		})
		
		
	}
	
});//Ready