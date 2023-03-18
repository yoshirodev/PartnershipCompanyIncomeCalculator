


function MainFunction(){
    // Each Contributors
    let contributionNum1 = document.getElementById('contribution1').value;
    let contributionNum2 = document.getElementById('contribution2').value;
    let contributionNum3= document.getElementById('contribution3').value;
    let contributionNum4 = document.getElementById('contribution4').value;

    // Converted to Integer
    let Cint1 = parseInt(contributionNum1);
    let Cint2 = parseInt(contributionNum2);
    let Cint3 = parseInt(contributionNum3);
    let Cint4 = parseInt(contributionNum4);

    // Overall Contribution
    let overallContributionNum = Cint1 + Cint2 + Cint3 + Cint4;

    document.getElementById('overallContri').innerHTML = overallContributionNum;

    // Overall Comapany Income
    let incomeNum = document.getElementById('income').value;

    let Iint = parseInt(incomeNum);

    // Output of Each
    document.getElementById('output1').innerHTML = "P" + Cint1 / overallContributionNum * Iint;
    document.getElementById('output2').innerHTML = "P" + Cint2 / overallContributionNum * Iint;
    document.getElementById('output3').innerHTML = "P" + Cint3 / overallContributionNum * Iint;
    document.getElementById('output4').innerHTML = "P" + Cint4 / overallContributionNum * Iint;
}