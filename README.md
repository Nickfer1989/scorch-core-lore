# 🔥 Scorch Core | Crónicas del Núcleo Ardiente

**Scorch Core** es una experiencia web inmersiva de alto rendimiento diseñada para narrar la evolución de los activos dentro del protocolo. El sitio guía al usuario a través de una narrativa visual donde los Axies en Eco-Estasis son transmutados mediante la *Elemental Forge* para despertar como poderosos **CoreMiners**.

---

## 🌋 Características Principales

* **Narrativa Visual (Storytelling):** Un sistema de scroll dinámico dividido en actos que revela la historia de forma progresiva.
* **Hero Imponente:** El Huevo Fénix ha sido jerarquizado con un tamaño de **380px** y un efecto de "respiración" (glow dinámico), custodiado por protectores elementales con filtros de resplandor.
* **Motor de Partículas Lateral:** Sistema desarrollado en JavaScript que genera chispas de fuego e hielo en los márgenes de la pantalla, enmarcando las tarjetas de lectura sin obstruir el texto.
* **Diseño de Tarjetas Blindado:** Se implementó una estructura de **900px de ancho fijo** con alturas simétricas para garantizar una experiencia visual ordenada y profesional.
* **Atmósfera Inmersiva:** Uso de tipografías épicas (*Cinzel* y *Lora*) combinadas con una paleta de colores basada en lava, oro y energía elemental.

---

## 🛠️ Especificaciones Técnicas

* **HTML5 Semántico:** Estructura optimizada para SEO y accesibilidad narrativa.
* **CSS3 Avanzado:**
    * Uso de **Variables Nativas** para gestión de colores elementales.
    * Animaciones por `@keyframes` para efectos de flotación y rotación de moneda.
    * Efectos de **Glassmorphism** y difuminado de fondo en tarjetas de lore.
* **JavaScript (Vanilla):**
    * Controlador de opacidad en el Hero basado en la posición del scroll.
    * Lógica de partículas aleatorias con gestión de ciclo de vida (auto-remove) para optimizar la memoria.
* **AOS (Animate On Scroll):** Implementación de animaciones de entrada con retardos (delays) calculados para mejorar la retención visual.

---

## 🚀 Optimización de Rendimiento

Para asegurar una carga instantánea y una calidad visual premium, se aplicó el siguiente flujo de trabajo:
1.  **AI Upscaling:** Todas las imágenes originales fueron escaladas a **200% y 400%** mediante modelos de inteligencia artificial para asegurar nitidez en pantallas 4K.
2.  **Compresión Inteligente:** Uso de algoritmos de pérdida mínima (**TinyPNG/WebP**) para reducir el peso de los archivos de imagen sin sacrificar la calidad.
3.  **Eficiencia de Script:** El motor de partículas funciona de forma asíncrona, evitando bloqueos en el hilo principal del navegador.

---

## 📁 Estructura del Proyecto

```text
/
├── index.html      # Estructura principal y narrativa por actos
├── style.css       # Estilos, animaciones y diseño de tarjetas (900px)
├── script.js       # Lógica de partículas y control de scroll
└── img/            # Activos optimizados (Huevo 380px, Moneda $CORE, Laboratorio)