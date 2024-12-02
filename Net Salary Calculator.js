function calculateNetSalary(basicSalary, benefits) {
    // Define constants for NHIF and NSSF deductions
    const NHIF_RATE = 0.0275; 
    const NSSF_RATE = 0.06; 
    
    // Define tax bands for Payee (Kenya)
    const taxBands = [
        { upperLimit: 24000, rate: 0.1 },     // 10% for the first Ksh 24,000
        { upperLimit: 32333, rate: 0.25 },    // 25% for the next Ksh 8,333
        { upperLimit: Infinity, rate: 0.3 },  // 30% for anything above Ksh 32,333
    ];
    
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate NHIF deductions
    const nhifDeductions = grossSalary * NHIF_RATE;

    // Calculate NSSF deductions
    const nssfDeductions = grossSalary * NSSF_RATE;

    // Calculate PAYEE (Tax)
    let taxableIncome = grossSalary - nssfDeductions; // NSSF is tax-deductible
    let payeeTax = 0;

    for (const band of taxBands) {
        if (taxableIncome > band.upperLimit) {
            payeeTax += band.upperLimit * band.rate;
            taxableIncome -= band.upperLimit;
        } else {
            payeeTax += taxableIncome * band.rate;
            break;
        }
    }

    // Calculate net salary
    const netSalary = grossSalary - (nhifDeductions + nssfDeductions + payeeTax);

    // Return results
    return {
        grossSalary,
        nhifDeductions,
        nssfDeductions,
        payeeTax,
        netSalary
    };
}

console.log(calculateNetSalary(100000, 0)) // The values can change this is just an example of the basic salary and benefits