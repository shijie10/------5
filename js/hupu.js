// JavaScript Document
$(function(){
	"use strict";
	//alert("abc");
	//$("#abc").addClass("aa");
	$("tbody>tr:odd").addClass("odd");
	$("tbody>tr:even").addClass("even");
	$("li").click(function(){
		  $(".1_"+this.id).css("display","block").siblings("div").css("display","none");
		});
});

