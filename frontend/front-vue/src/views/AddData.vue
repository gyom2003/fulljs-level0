<template>
    <div>
      <h1>Ajouter une donnée</h1>
      <form @submit.prevent="submitData">
        <input v-model="name" type="text" placeholder="Nom" required />
        <input v-model="value" type="text" placeholder="Valeur" required />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        value: "",
      };
    },
    methods: {
      async submitData() {
        try {
          const response = await fetch("http://localhost:5000/api/data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: this.name, value: this.value }),
          });
          const result = await response.json();
          console.log("Donnée ajoutée :", result);
        } catch (err) {
          console.error("Erreur lors de l'ajout :", err);
        }
      },
    },
  };
  </script>
  