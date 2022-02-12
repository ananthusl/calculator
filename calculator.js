function add()
{
  let addition, num1, num2 ;
  num1=parseInt(document.getElementById('i1').value);
  num2=parseInt(document.getElementById('i2').value);
  addition=num1+num2;
  document.getElementById('out').value=addition;
}
function sub()
{
  let subtraction, num1, num2 ;
  num1=parseInt(document.getElementById('i1').value);
  num2=parseInt(document.getElementById('i2').value);
  subtraction=num1-num2;
  document.getElementById('out').value=subtraction;
}
function mul()
{
  let multiplication, num1, num2 ;
  num1=parseInt(document.getElementById('i1').value);
  num2=parseInt(document.getElementById('i2').value);
  multiplication=num1*num2;
  document.getElementById('out').value=multiplication;
}
function div()
{
  let division, num1, num2 ;
  num1=parseInt(document.getElementById('i1').value);
  num2=parseInt(document.getElementById('i2').value);
  division=num1/num2;
  document.getElementById('out').value=division;
}
function sqr()
{
  let square, num1 ;
  num1=parseInt(document.getElementById('i1').value);
  num2=parseInt(document.getElementById('i2').value);
  square=num1*num1;
  document.getElementById('out').value=square;
}
function cub()
{
  let cube, num1, num2 ;
  num1=parseInt(document.getElementById('i1').value);
  num2=parseInt(document.getElementById('i2').value);
  cube=num1*num1*num1;
  document.getElementById('out').value=cube;
}
function per()
{
  let percent, num1, num2 ;
  num1=parseInt(document.getElementById('i1').value);
  num2=parseInt(document.getElementById('i2').value);
  percent=num1/100;
  document.getElementById('out').value=percent;
}
function sin()
{
  let sine, num1, num2 ;
  num1=parseInt(document.getElementById('i1').value);
  num2=parseInt(document.getElementById('i2').value);
  sine=Math.sin(num1);
  document.getElementById('out').value=sine;
}
