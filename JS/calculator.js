function input(newResult){
	newResult.num1 = document.getElementById('input1').value;
	newResult.num2 = document.getElementById('input2').value;
	newResult.calc = document.getElementById('calc').value;
	alert('num1 in input ='+newResult.num1);
	return newResult;
}
	
function calculator(){
	var result = {
		num1:0,
		num2:0,
		calc:null
	};
	result = input(result);
	var sum = result.num1 + result.num2;
	alert('num1='+result.num1);
	alert('sum='+sum);
}