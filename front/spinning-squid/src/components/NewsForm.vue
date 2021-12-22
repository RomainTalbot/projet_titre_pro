<template>
  <div id="addpost" class="main-container">
      <h2 class="title">Ajoute un évènement</h2>
      <form>
        
        <div class="addpost-block">
          <div class="addpost-charateristics">
            <label>Titre
              <input
                class="addpost-input"
                type="text"
                id="addPostTitle"
                name="title"
              />
            </label>

            <label>Date
              <input
                class="addpost-input"
                type="date"
                id="addPostDate"
                name="date"
              />
            </label>

            <label>Lieu
              <input
                class="addpost-input"
                type="text"
                id="addPostPlace"
                name="place"
              />
            </label>
            <div class="spotadd-container-image">
              <h2 class="spotadd-title">Image</h2>
              <input
                class="add-image"
                type="file"
                id="addPostImage"
                name="image"
                accept="image/png, image/jpeg, image/jpg"
                multiple
                hidden
              />
            </div>
          </div>
          <div class="addpost-description">
            <textarea
              id="addpost-description"
              name="story"
              rows="5"
              cols="33"
            >
              Entre ta description ici
            </textarea>
          </div>
        </div>
        
        <div class="addpost-button">
          <button type="submit" id="addpost-button" class-="button">
            Poster l'évènement
          </button>
        </div>
      </form>
    </div>
</template>