
function calculatePAYE(income) {
    let tax = 0;
    if (income <= 24000) {
        tax = income * 0.10;
    } else if (income <= 32333) {
        tax = (24000 * 0.10) + ((income - 24000) * 0.25);
    } else if (income <= 500000) {
        tax = (24000 * 0.10) + (8333 * 0.25) + ((income - 32333) * 0.30);
    } else if (income <= 800000) {
        tax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((income - 500000) * 0.325);
    } else {
        tax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((income - 800000) * 0.35);
    }
    return tax;
}


function calculateSHIF(grossSalary) {
    return grossSalary * 0.0275;
}

function calculateNSSF(grossSalary) {
    let tier1 = Math.min(grossSalary, 7000) * 0.06;
    let tier2 = Math.max(0, Math.min(grossSalary - 7000, 36000 - 7000)) * 0.06;
    return tier1 + tier2;
}

function calculateHousingLevy(grossSalary) {
    return grossSalary * 0.015;
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;


    const paye = calculatePAYE(grossSalary);
    const shif = calculateSHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const housingLevy = calculateHousingLevy(grossSalary);


    const netSalary = grossSalary - (paye + shif + nssf + housingLevy);

}
    
