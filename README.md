# Clue - Case Notes  

This is a small app designed to help players keep track of clues in the popular Hasbro board game: **Clue** (also known as Cluedo). The app provides an intuitive interface for managing your game notes, tracking player clues, and assisting with strategy.  

---

## Clue - Notas del Caso  

Esta es una pequeña aplicación diseñada para ayudar a los jugadores a llevar un registro de las pistas en el popular juego de mesa de Hasbro: **Clue** (también conocido como Cluedo). La aplicación ofrece una interfaz intuitiva para gestionar tus notas del juego, rastrear pistas de los jugadores y asistir en tu estrategia.  

---

## Features / Características  

### 🧑‍🤝‍🧑 Player Configuration / Configuración de Jugadores  
- **Select the number of players / Selecciona el número de jugadores**: Personaliza el juego según tu grupo.  
- **Choose player tokens / Elige la ficha de los jugadores**: Verduzco, Mostaza, Marlene, Moradillo, Blanca o Escarlata.  

### 📋 Clue Management / Gestión de Pistas  
- **Adjust the number of clues per player / Ajusta la cantidad de pistas por jugador**: Configura la cantidad de pistas por defecto o modifícalas según sea necesario (el valor predeterminado es 3 por jugador).  
- **Interactive table for clue tracking / Tabla interactiva para rastrear pistas**:  
  - **Mark with an "X" / Marca con una "X"**: Indica una pista que un jugador no tiene.  
  - **Mark with a "?" / Marca con un "?"**: Indica una sospecha sobre una pista que podría tener un jugador.  
  - **Mark with a "✔️" / Marca con un "✔️"**: Confirma que un jugador tiene la pista.  
  - **Reset the cell / Restablece la celda**: Al pasar por todas las marcas (X → ? → ✔️ → vacío), la celda vuelve a su estado inicial.  

### 🏷️ Player Summary / Resumen de Jugadores  
- **Summary below avatars / Resumen bajo los avatares**: Muestra la cantidad total de pistas asignadas a cada jugador (por defecto, 3).  
- **Tracks confirmed clues / Rastrear pistas confirmadas**: Cada vez que confirmas una pista (✔️) en la tabla, se actualiza automáticamente en el resumen con un check verde para que sea fácil de rastrear.  

### 🔄 State Persistence / Persistencia del Estado  
- **Automatically saves progress / Guarda el progreso automáticamente**: La app utiliza **local storage** para evitar que pierdas tus datos si la página se actualiza accidentalmente.  
- **Reset button / Botón de reinicio**: Permite borrar todos los datos almacenados y empezar desde cero.  

### 🔒 Screen Lock / Bloqueo de Pantalla  
- **Lock interactions on mobile devices / Bloquea interacciones en dispositivos móviles**: Desactiva todas las interacciones táctiles aplicando `touch-action: none`.  

### 🃏 Personal Clue Management / Gestión Personal de Pistas  
- **Add your clues / Agrega tus pistas**: Sube imágenes de tus 3 pistas iniciales (e.g., arma, habitación o sospechoso).  
- **Easily reference clues / Consulta tus pistas fácilmente**: Marca tus pistas iniciales y muéstralas rápidamente a los otros jugadores cuando sea necesario.  

---

## How It Works / Cómo Funciona  

1. **Start the Game / Inicia el Juego**  
   - Selecciona el número de jugadores y asigna sus fichas.  
   - Configura la cantidad de pistas por jugador (si es diferente al valor predeterminado).  

2. **Track Clues / Rastrea las Pistas**  
   - Usa la tabla interactiva para marcar las pistas de cada jugador:  
     - Toque único: Marca la celda con una "X".  
     - Doble toque: Marca la celda con un "?".  
     - Triple toque: Marca la celda con un "✔️".  
     - Cuarto toque: Restablece la celda a vacía.  

3. **Monitor Progress / Monitorea el Progreso**  
   - Consulta el resumen bajo los avatares de los jugadores para ver cuántas pistas has confirmado de cada uno.  

4. **Add and Manage Your Clues / Agrega y Gestiona Tus Pistas**  
   - Sube imágenes de tus 3 pistas iniciales (e.g., revólver, sala de estar, Profesor Ciruela).  
   - Utiliza esta sección para mostrar rápidamente tus pistas cuando sea necesario.  

5. **Lock the Screen / Bloquea la Pantalla**  
   - Activa el botón de bloqueo para desactivar las interacciones táctiles, ideal para dispositivos móviles.  

6. **Reset the Game / Reinicia el Juego**  
   - Usa el botón de reinicio para borrar todos los datos guardados y comenzar una nueva partida.  

---

## Technologies Used / Tecnologías Utilizadas  

- **Frontend**: React.js  
- **Styling / Estilos**: Tailwind CSS  
- **State Management / Gestión de Estado**: Hooks de estado de React y almacenamiento local  
- **Responsive Design / Diseño Responsivo**: Diseño móvil primero para un juego sin problemas en smartphones  

---

## How to Run / Cómo Ejecutar  

1. Clona este repositorio:  
   ```bash  
   git clone https://github.com/IsaaChaquito/case-notes-clue.git  
   cd <repository-directory>  




