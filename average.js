// line 1, 2 and 3 use prompt as input to take in results inform of integers 

var num1 = parseInt(prompt('Enter your Responsive Web Design Results'));
var num2 = parseInt(prompt('Enter your Git results'));
var num3 = parseInt(prompt('Enter your JavaScript results'));

// if statements in line 8 & 9 avoid input of results that do not range between 0 <= x <= 100

if (num1<0 || num1>100 || num2<0 || num2>100 || num3<0 || num3>100){
    alert('Input is wrong');
}

/* else statement below executes the average after confirmation that the inputs are values which are
less or equal to 100 and greater than or equal to 0. The Average is acquired by first getting the summation
of the three inputs and storing them. Then, by taking the summation and dividing it by 3 we get the average results */

else{
    var num4 = num1 + num2 + num3;
    var result = num4 / 3;

    /* in the nested conditional statements, i combined the grading exercise and this of the average.
    achieving this by taking the stored average result and putting conditions to the ranges where 80-100 
    is distinction, 60 to 79 credit, 50 to 59 pass and below 49 a fail. Thus the output after the three prompted
    inputs is an alert of your grading followed by a second alert of your average score */

        if(result<50){
            alert ('Fail!');
            alert ('Your average result is:'+result);
        }
        else if(result>=50 && result <60){
            alert ('Pass!');
            alert ('Your average result is:'+result);
        }
        else if (result>=60 && result<80){
            alert ('Credit!');
            alert ('Your average result is:'+result);
        }
        else{
            alert('Distiction!');
            alert ('Your average result is:'+result);
        }
}