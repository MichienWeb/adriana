
// Handle form submission via AJAX
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    form.classList.add('was-validated');

    if (!form.checkValidity()) {
        return;
    }

    const formData = new FormData(form);

    try {
        const response = await fetch("procesar.php", {
            method: "POST",
            body: formData
        });

        const result = await response.text(); // Get the result text (confirmation or error)
        document.getElementById("responseMessage").innerHTML = result;
        form.reset();
        form.classList.remove('was-validated');

    } catch (error) {
        document.getElementById("responseMessage").innerHTML = "<div class='alert alert-danger'>Ocorreu un erro ao enviar o formulario.</div>";
    }
});
