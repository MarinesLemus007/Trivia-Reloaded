function pantalla2(){
  let userName = document.getElementById('nombre').value.toUpperCase();
  document.getElementById('pantalla1').style.display = 'none';
  document.getElementById('pantalla2').style.display = 'block';
  document.getElementById('saludo').innerHTML = 'Hola ' + userName;
}

function seccionA() {
  document.getElementById('pantalla2').style.display = 'none';
  document.getElementById('questionsA').style.display = 'block';
}

function seccionB() {
  document.getElementById('pantalla2').style.display = 'none';
  document.getElementById('questionsB').style.display = 'block';
}

function clickSendAnswersA() {
	let questionOneA = ''; //  para definir el valor de la primera pregunta
	if (document.getElementById('optionOne').checked) {
		questionOneA = document.getElementById('optionOne').value;
	}
	if (document.getElementById('optionTwo').checked) {
		questionOneA = document.getElementById('optionTwo').value;
	}
	if (document.getElementById('optionThree').checked) {
		questionOneA = document.getElementById('optionThree').value;
	}
	let questionTwoA = ''; // para definir el valor de la segunda pregunta
	if (document.getElementById('optionFour').checked) {
		questionTwoA = document.getElementById('optionFour').value;
	}
	if (document.getElementById('optionFive').checked) {
		questionTwoA = document.getElementById('optionFive').value;
	}
	if (document.getElementById('optionSix').checked) {
		questionTwoA = document.getElementById('optionSix').value;
	}
	let questionThreeA = ''; // para definir el valor de la tercera pregunta
	if (document.getElementById('optionSeven').checked) {
		questionThreeA = document.getElementById('optionSeven').value;
	}
	if (document.getElementById('optionEight').checked) {
		questionThreeA = document.getElementById('optionEight').value;
	}
	if (document.getElementById('optionNine').checked) {
		questionThreeA = document.getElementById('optionNine').value;
	}
  let questionFourA = ''; // para definir el valor de la tercera pregunta
  if (document.getElementById('optionOneNewA').checked) {
    questionFourA = document.getElementById('optionOneNewA').value;
  }
  if (document.getElementById('optionTwoNewA').checked) {
    questionFourA = document.getElementById('optionTwoNewA').value;
  }
  if (document.getElementById('optionThreeNewA').checked) {
    questionFourA = document.getElementById('optionThreeNewA').value;
  }
	let questionOnePointsA = ''; // checkea respuestas correctas
	if (questionOneA === '1') {
		questionOnePointsA = 1;
	}
	else {
		questionOnePointsA = 0;
	}

	let questionTwoPointsA = '';
	if (questionTwoA === '1') {
		questionTwoPointsA = 1;
	}
	else {
		questionTwoPointsA = 0;
	}

	let questionThreePointsA = '';
	if (questionThreeA === '1') {
		questionThreePointsA = 1;
	}
	else {
		questionThreePointsA = 0;
	}

  let questionFourPointsA = '';
	if (questionFourA === '1') {
		questionFourPointsA = 1;
	}
	else {
		questionFourPointsA = 0;
	}

	let correctAnswersA = questionOnePointsA + questionTwoPointsA + questionThreePointsA + questionFourPointsA; // suma puntos

document.getElementById('questionsA').style.display ='none';
document.getElementById('questionsB').style.display ='none';
document.getElementById('points').innerHTML = 'Tu puntaje es de ' + correctAnswersA + ' puntos.'; // entrega el resultado
document.getElementById('ultimaPantalla').style.display = 'block';
}

function clickSendAnswersB() {
	let questionOneB = ''; //  para definir el valor de la primera pregunta
	if (document.getElementById('optionOneB').checked) {
		questionOneB = document.getElementById('optionOneB').value;
	}
	if (document.getElementById('optionTwoB').checked) {
		questionOneB = document.getElementById('optionTwoB').value;
	}
	if (document.getElementById('optionThreeB').checked) {
		questionOneB = document.getElementById('optionThreeB').value;
	}
	let questionTwoB = ''; // para definir el valor de la segunda pregunta
	if (document.getElementById('optionFourB').checked) {
		questionTwoB = document.getElementById('optionFourB').value;
	}
	if (document.getElementById('optionFiveB').checked) {
		questionTwoB = document.getElementById('optionFiveB').value;
	}
	if (document.getElementById('optionSixB').checked) {
		questionTwoB = document.getElementById('optionSixB').value;
	}
	let questionThreeB = ''; // para definir el valor de la tercera pregunta
	if (document.getElementById('optionSevenB').checked) {
		questionThreeB = document.getElementById('optionSevenB').value;
	}
	if (document.getElementById('optionEightB').checked) {
		questionThreeB = document.getElementById('optionEightB').value;
	}
	if (document.getElementById('optionNineB').checked) {
		questionThreeB = document.getElementById('optionNineB').value;
	}
  let questionFourB = ''; // para definir el valor de la tercera pregunta
  if (document.getElementById('optionOneBNew').checked) {
    questionFourB = document.getElementById('optionOneBNew').value;
  }
  if (document.getElementById('optionTwoBNew').checked) {
    questionFourB = document.getElementById('optionTwoBNew').value;
  }
  if (document.getElementById('optionThreeBNew').checked) {
    questionFourB = document.getElementById('optionThreeBNew').value;
  }

	let questionOnePointsB = ''; // checkea respuestas correctas
	if (questionOneB === '1') {
		questionOnePointsB = 1;
	}
	else {
		questionOnePointsB = 0;
	}

  let questionTwoPointsB = '';
	if (questionTwoB === '1') {
		questionTwoPointsB = 1;
	}
	else {
		questionTwoPointsB = 0;
	}

	let questionThreePointsB = '';
	if (questionThreeB === '1') {
		questionThreePointsB = 1;
	}
	else {
		questionThreePointsB = 0;
	}

  let questionFourPointsB = '';
  if (questionFourB === '1') {
    questionFourPointsB = 1;
  }
  else {
    questionFourPointsB = 0;
  }
let correctAnswersB = (questionOnePointsB + questionTwoPointsB + questionThreePointsB + questionFourPointsB); // suma puntos

document.getElementById('questionsA').style.display ='none';
document.getElementById('questionsB').style.display ='none';
document.getElementById('points').innerHTML = 'Tu puntaje es de ' + correctAnswersB + ' puntos.'; // entrega el resultado
document.getElementById('ultimaPantalla').style.display = 'block';
}

function pantalla2_2() {
  document.getElementById('ultimaPantalla').style.display = 'none';
  document.getElementById('pantalla2').style.display = 'block';
}

function pantallaFinal() {
  document.getElementById('ultimaPantalla').style.display = 'none';
  document.getElementById('pantallaFinal').style.display = 'block';
}
