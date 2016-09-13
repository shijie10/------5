// JavaScript Document
$(function(){
	 "use strict";
	var page=1;
	 var i=3;
	  var len=$("li").length;
		
		 var page_count=Math.ceil(len/i);
	$(".next").click(function(){
        var jqwidth=$(".a3").width();
		
		
		 if(page===page_count-1){
		 
		 $(".a4").animate({left:'0px'},"slow");
		 page=1;
		 
		 }else{
			
		 $(".a4").animate({left:'-='+jqwidth},"slow");
		 page++;
		 }
		
		});
		$(".pre").click(function(){
       var jqwidth=$(".a3").width();
		 //var len=$("li").length;
		 //var page_count=Math.ceil(len/i);
		 if(page===1){
			  $(".a4").animate({left:'-1870px'},"slow");
			  page=5;
			 }else{
		 $(".a4").animate({left:'+='+jqwidth},"slow");		
			page--;
			
			 }
			 
		});
		var auto=function(){
			var jqwidth=$(".a3").width();
			 if(page===page_count-1){
		 
		 $(".a4").animate({left:'0px'},"slow");
		 page=1;
		 
		 }else{
			
		 $(".a4").animate({left:'-='+jqwidth},"slow");
		 page++;
		 }
			};
		setInterval(auto,4000);
		
	
	
});