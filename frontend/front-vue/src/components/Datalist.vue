<template>
    <div>
      <ul v-if="data.length">
        <li v-for="item in data" :key="item._id">
          <strong>{{ item.name }}</strong>: {{ item.value }}
        </li>
      </ul>
      <p v-else>Aucune donnée trouvée.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: [],
      };
    },
    async created() {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        this.data = await response.json();
      } catch (err) {
        console.error("Erreur de récupération des données :", err);
      }
    },
  };
  </script>
  