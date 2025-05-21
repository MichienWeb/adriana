# Formulario de Contacto - Adriana

Este proxecto consiste nun formulario de contacto sinxelo realizado con HTML, CSS, JavaScript, PHP e tamén conta con **verificación automática** empregando **Playwright**. Está deseñado para que os usuarios poidan enviar consultas ou comentarios a través dun formulario na web, e segue o patrón de deseño **Modelo-Vista-Controlador (MVC)** para organizar mellor o código e mellorar a manexabilidade do proxecto.

## Tecnoloxías empregadas

- **HTML**: Estrutura básica da páxina web.
- **CSS**: Estilo visual da páxina e do formulario.
- **Bootstrap**: Framework CSS utilizado para mellorar a apariencia e a usabilidade da páxina.
- **JavaScript**: Validación do formulario para garantir que os campos son completos e correctos antes de enviarlos.
- **PHP**: Usado para xestionar e enviar os datos do formulario (nota: non funciona directamente en GitHub Pages, PHP no es válido).
- **Playwright**: Usado para realizar verificacións automáticas do comportamento do formulario e garantir que a validación e o funcionamento sexan correctos.
- **Modelo-Vista-Controlador (MVC)**: Estratexia de organización do código que separa a lógica de presentación (Vista), a manipulación de datos (Modelo) e o control de fluxo (Controlador), mellorando a manutenibilidade e escalabilidade do proxecto.

## Características do formulario

- Campos obrigatorios para o nome, correo electrónico e mensaxe.
- Validación en tempo real para asegurar que o correo electrónico e os campos de texto se cumpren correctamente.
- Mensaxe de éxito ou erro despois de enviar o formulario.
- Verificación automatizada co framework **Playwright**, que asegura que o formulario funcione correctamente e as validacións se realicen de forma apropiada.

## Instruccións para executar o proxecto

1. **Descarga os ficheiros** do proxecto ou clona o repositorio.

2. **Configura o ambiente local**:
    - Este proxecto emprega PHP para procesar os datos do formulario. Para que o PHP funcione correctamente, debes ter un servidor local configurado, como [XAMPP](https://www.apachefriends.org/index.html) ou [WAMP](http://www.wampserver.com/), que incluya Apache e PHP.
    - **Nota**: O código PHP **non funcionará en GitHub Pages**, xa que GitHub non soporta código do lado do servidor.

3. **Executar o proxecto**:
    - Coloca todos os ficheiros do proxecto na carpeta `htdocs` (en XAMPP) ou na carpeta correspondente de WAMP.
    - Asegúrate de que o servidor Apache está executándose.
    - Accede ao proxecto desde `http://localhost/` no teu navegador.

4. **Verificacións co Playwright**:
    - O proxecto emprega **Playwright** para realizar probas automatizadas e verificar que o comportamento do formulario sexa o esperado.
    - Para realizar as probas co Playwright, debes instalar as dependencias necesarias e executar os scripts de probas automatizadas no ambiente local.
    - Pode usar o comando `npx playwright test --headed` para comprobar o funcionamento do formulario, después de haber instalado `npm install -D playwright`.

5. **Validacións do formulario**:
    - O formulario conta con validacións en JavaScript para garantir que os campos de nome, correo electrónico e mensaxe se completen correctamente.
    - Para probas de validación, é necesario usar un servidor local (como XAMPP ou WAMP), xa que as validacións no front-end (HTML e JavaScript) non son suficientes sen un procesador de servidor (PHP) para almacenar ou procesar os datos.

## Estrutura do proxecto (Modelo-Vista-Controlador)

Este proxecto segue o patrón **Modelo-Vista-Controlador (MVC)**, o que significa que se separan as responsabilidades do código:

- **Modelo**: A parte que xestiona os datos, en particular o procesamento do formulario e a validación no servidor (PHP).
- **Vista**: A interface do usuario, que sería o HTML e o CSS que amosan o formulario.
- **Controlador**: A lóxica que conecta a vista co modelo, no noso caso, a validación do formulario e a xestión dos datos a través de JavaScript e PHP.

## Nota importante

Este proxecto foi creado por **Adriana**, e todas as funcionalidades foron deseñadas para mellorar a experiencia de usuario á hora de enviar consultas a través do formulario.

## Enlaces

- [Clonar GitHub de Adriana](https://github.com/MichienWeb/adriana.git)
- [Repositorio GitHub de Adriana](https://github.com/MichienWeb/adriana)
- [Páxina de demostración](https://michienweb.github.io/adriana/)

## Licenza

Este proxecto está licenciado baixo a Licenza MIT. Consulte o arquivo `LICENSE` para máis detalles.
