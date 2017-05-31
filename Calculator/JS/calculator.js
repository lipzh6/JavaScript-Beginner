function input(newResult){
	newResult.num1 = parseInt(document.getElementById('input1').value);
	newResult.num2 = parseInt(document.getElementById('input2').value);
	newResult.calc = document.getElementById('calc').value;
	return newResult;
}
	
function calculator(){
	var result = {
		num1:0,
		num2:0,
		calc:null
	};
	result = input(result);
	var sum;
	switch(result.calc){
		case "+":
			sum = result.num1 + result.num2;
			break;
		case "-":
			sum = result.num1 - result.num2;
			break;
		case "*":
			sum = result.num1 * result.num2;
			break;
		case "/":
			if(result.num2 == 0){
				alert('分母数字不能为0');
				break;
			}
			else{
				sum = result.num1 / result.num2;
				break;
			}
			
		}
	if(typeof(sum)=="undefined"){
		alert('请重新输入数字');
	}
	else{
		alert('计算结果='+sum);		
	}
}