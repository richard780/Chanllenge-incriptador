# Proyecto de Encriptador/Desencriptador de Texto

Este proyecto es una herramienta web para encriptar y desencriptar texto. Utiliza un conjunto de reglas de reemplazo para transformar el texto ingresado en una forma codificada y viceversa.

## Funcionalidades Principales

### Encriptar Texto
- **Entrada**: El usuario ingresa un texto en un área de texto (`textarea`).
- **Proceso**: Al hacer clic en el botón "Encriptar", el texto se convierte en una forma codificada utilizando un conjunto de reglas (por ejemplo, reemplazando letras específicas con secuencias de caracteres como "e" por "enter").
- **Resultado**: El texto encriptado reemplaza el texto original en el área de entrada. La sección de la derecha se actualiza para mostrar el texto encriptado y se muestra un botón para copiar el texto al portapapeles.

### Desencriptar Texto
- **Entrada**: El usuario puede ingresar un texto encriptado en el área de texto.
- **Proceso**: Al hacer clic en el botón "Desencriptar", el texto encriptado se convierte de vuelta a su forma original utilizando el conjunto inverso de reglas (por ejemplo, "enter" por "e").
- **Resultado**: El texto desencriptado reemplaza el texto encriptado en el área de entrada. La sección de la derecha se actualiza para mostrar el texto desencriptado, y también se muestra el botón de copiar.

### Visualización y Copiado
- **Sección de la Derecha**: Esta sección muestra el resultado del texto encriptado o desencriptado. Inicialmente, muestra una imagen y un mensaje informativo.
- **Actualización de Contenido**: Cuando se encripta o desencripta texto, la imagen y el mensaje informativo se ocultan, y el texto resultante se muestra en su lugar.
- **Botón de Copiado**: Aparece cuando hay texto en la sección de la derecha que puede ser copiado. Al hacer clic en el botón, el texto se copia al portapapeles.

## Interactividad
- **Eventos**: Los botones de encriptar y desencriptar activan las funciones correspondientes para procesar el texto.
- **Mensajes de Estado**: Muestra mensajes informativos en la interfaz para que el usuario sepa si el proceso fue exitoso o si no se ingresó texto.

## Código JavaScript

- **`encriptar`**: Reemplaza caracteres en el texto ingresado según reglas definidas y actualiza la interfaz para mostrar el texto encriptado.
- **`desencriptar`**: Reemplaza secuencias de caracteres en el texto según reglas inversas y actualiza la interfaz para mostrar el texto desencriptado.
- **`updateSalida`**: Modifica el contenido de la sección de la derecha para mostrar el texto encriptado o desencriptado.
- **`clearSalida`**: Restaura la sección de la derecha a su estado inicial con imagen y mensaje informativo si el área de texto está vacía.
- **`copyToClipboard`**: Copia el texto visible en la sección de la derecha al portapapeles del usuario.

## Objetivo

El objetivo de este proyecto es proporcionar una herramienta interactiva para encriptar y desencriptar texto, haciendo que la manipulación del texto sea visualmente clara y fácil de usar para los usuarios.

