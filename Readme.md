# 🐱 Gato que persigue el puntero

Inspirado por un anuncio de LinkedIn que decía:

> "Bonus: si haces una web donde un gato persigue al puntero del ratón, te contratamos."

Así que… aquí está 😹  
Una pequeña web donde un gato sigue el cursor por la pantalla.

---

## 🚀 Demo

👉 [Ver la demo online](demo.gato.arnauquest.es)  
👨‍💻 [Repositorio en GitHub](gato.arnauquest.es)

---

## 🧠 ¿Qué hace el JavaScript?

La magia está en el archivo `script.js`, que hace lo siguiente:

1. **Captura la posición del puntero** (`mousemove`).
2. Usa **interpolación lineal** para que el movimiento del gato sea más suave (efecto de “persecución con inercia”).
3. Aplica la posición al gato con `transform: translate(...)` en CSS.
4. Cambia el eje horizontal con `scaleX(-1)` para que mire hacia el puntero (efecto espejo si va a la izquierda).

---

## 📦 ¿Qué incluye este proyecto?

- `index.html`: estructura básica.
- `style.css`: estilos simples.
- `script.js`: la lógica del gato.
- `gato.png`: imagen del gato (¡búscate una buena, animada o divertida!).

---

## ✨ ¿Ideas para mejorar?

- Animación de caminar si se está moviendo.
- Sonido de maullido al hacer clic.
- Colisión con el puntero.
- Modo oscuro.
- Versión móvil (usando toque en vez de puntero).

---

## 🧙‍♂️ ¿Por qué lo hice?

Porque soy desarrollador, vi un reto con gato y no me pude resistir.  
Y oye, si alguien me quiere contratar por esto… 🐾 bienvenido sea.

---

### © 2025 por Arnau Taberner García
