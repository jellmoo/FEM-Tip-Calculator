document.addEventListener("DOMContentLoaded", (event) => {
    const tipButtons = document.querySelectorAll(".tip-option");
    const resetButton = document.getElementById("resetButton");
    const customTipInput = document.getElementById("customTipInput");
    const inputs = document.querySelectorAll(".validate-number");

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

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            const wrapper = input.closest('.input-wrapper');
            const value = input.value.trim();

            if (value === "" || Number(value) !== 0) {
                wrapper.classList.remove('error');
            }  else if (Number(value) === 0) {
                wrapper.classList.add('error');
            }
        });
    });

    function resetCalculator() {
        document.getElementById("billInput").value = "";
        document.getElementById("peopleInput").value = "";
        document.getElementById("tipAmount").textContent = "0.00";
        document.getElementById("totalAmount").textContent = "0.00";
    };
    resetButton.addEventListener("click", resetCalculator);
    resetCalculator();
});