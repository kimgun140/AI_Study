var num1, num2, min, max, i, j;

num1 = parseInt(prompt("첫번째 숫자 입력"));
num2 = parseInt(prompt("두번째 숫자 입력"));

if (num1 < num2)
{
	min = num1;
	max = num2;
}
else
{
	min = num2;
	max = num1;
}

document.write("<table border='1' align='center'>");
document.write("<tr align='center'>");
for (i=min; i<=max; i++)
{
	document.write("<th>" + i + "단" + "</th>");
}
document.write("</tr>");

for (j=1; j<=9; j++)
{
	document.write("<tr align='center'>");
	for (i=min; i<=max; i++)
	{
		document.write("<td>" + i + "*" + j + "=" + (i*j) + "</td>");	
	}
	document.write("</tr>")	;
}
	
document.write("</table>");