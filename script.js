document.addEventListener("DOMContentLoaded", (event) => {
    const tipButtons = document.querySelectorAll(".tip-option");
    const resetButton = document.getElementById("resetButton");
    const customAmount = document.getElementById("customAmount");
    const customTipInput = document.getElementById("customTipInput");

    function calculateTip(tipPercent) {
        const billAmount = parseFloat(document.getElementById("billInput").value) || 0;
        const numberOfPeople = parseFloat(document.getElementById("peopleInput").value) || 1;

        if (numberOfPeople <= 0) return;

        const tipAmount = (billAmount * tipPercent) / numberOfPeople;
        const total = (billAmount + billAmount * tipPercent) / numberOfPeople;

        document.getElementById("tipAmount").textContent = tipAmount.toFixed(2);
        document.getElementById("totalAmount").textContent = total.toFixed(2);
    }

    tipButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tipPercent = parseFloat(button.value) / 100 || 0;
            calculateTip(tipPercent);
        });
    });

    customTipInput.addEventListener("input", () => {
        const customTipPercent = parseFloat(customTipInput.value) / 100 || 0;
        calculateTip(customTipPercent);
    });

    function resetCalculator() {
        document.getElementById("billInput").value = "";
        document.getElementById("peopleInput").value = "";
        document.getElementById("tipAmount").textContent = "0.00";
        document.getElementById("totalAmount").textContent = "0.00";
    };
    resetButton.addEventListener("click", resetCalculator);
});