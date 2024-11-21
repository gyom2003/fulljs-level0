<script setup>
import { RouterView } from "vue-router"; 
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/add">Ajouter une donnée</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  background-color: #42b983;
  padding: 1rem;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 1rem;
}

nav ul li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

main {
  margin: 2rem;
  font-family: Arial, sans-serif;
}

@media (min-width: 1024px) {
  header {
    text-align: left;
    padding: 1rem 2rem;
  }
}
</style>
