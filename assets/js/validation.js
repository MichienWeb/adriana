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

        if (response.status === 405) {
            // If the status is 405, show the custom message
            document.getElementById("responseMessage").innerHTML = "<div class='alert alert-warning'>Para ver la validación del formulario abrir con localhost por favor, gracias.</div>";
        } else if (response.ok) {
            // If the response is successful, show the result from the server
            const result = await response.text(); // Get the result text (confirmation or error)
            document.getElementById("responseMessage").innerHTML = result;
            form.reset();
            form.classList.remove('was-validated');
        } else {
            // Handle other errors if necessary
            document.getElementById("responseMessage").innerHTML = "<div class='alert alert-danger'>Ocorreu un erro ao enviar o formulario.</div>";
        }

    } catch (error) {
        // Catch network errors or other exceptions
        document.getElementById("responseMessage").innerHTML = "<div class='alert alert-danger'>Ocorreu un erro ao enviar o formulario.</div>";
    }
});

