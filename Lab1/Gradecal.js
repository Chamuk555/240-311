let score = 87;

if((score>=80)&&(score<=100))
{
    console.log("grade is 'A' ");
}
else if((score>=75)&&(score<=79))
{
    console.log("grade is 'B+' ");
}
else if((score>=70)&&(score<=74))
{
    console.log("grade is 'B' ");
}
else if((score>=65)&&(score<=69))
{
    console.log("grade is 'C+' ");
}
else if((score>=60)&&(score<=64))
{
    console.log("grade is 'C' ");
}
else if((score>=55)&&(score<=59))
{
    console.log("grade is 'D+' ");
}
else if((score>=50)&&(score<=54))
{
    console.log("grade is 'D' ");
}
else if((score>=0)&&(score<50))
{
    console.log("grade is 'E' ");
}
else
{
    console.log("Score is wrong, Please input again.");
}