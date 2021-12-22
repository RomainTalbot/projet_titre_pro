<template>
  <div class="contact main-container">
    <h1 class="title">Que puis-je pour toi jeune skateur ?</h1>
    <div class="contact-container">
      <img class="contact-image" alt="" src=""/>
      <form class="contact-form">
        <label class="contact-label">Sujet</label>
        <input
          id="subject"
          class="contact-input"
          type="text"
          required
        />
        <label class="contact-label">Email</label>
        <input
          id="email"
          class="contact-input"
          type="email"
          required
        />
        <label class="contact-label"> Message</label>
        <textarea
          id="message"
          class="contact-input-message"
          required
        />

        <button class="button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>