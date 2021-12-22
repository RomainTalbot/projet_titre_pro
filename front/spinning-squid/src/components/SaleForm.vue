<template>
    <div id="postarticle" class="main-container">
      <h2 class="title">Ajoute du matos</h2>
      <form>

        <div class="postarticle-block">
          <div class="postarticle-characteristics">
            <label >Titre
              <input
                class="postarticle-input"
                type="text"
                id="addSaleTitle"
                name="title"
              />
            </label>

            <label>Lieu
              <input
                class="postarticle-input"
                type="text"
                id="addSalePlace"
                name="place"
              />
            </label>

            <label>Tarif
              <input
                class="postarticle-input"
                type="number"
                id="addSalePrice"
                name="price"
              />
            </label>

            <div class="postarticle-container-image">
              <h2 class="postarticle-title">Image</h2>
              <input
                class="add-image"
                type="file"
                id="addSaleImage"
                name="image"
                accept="image/png, image/jpeg, image/jpg"
                multiple
                hidden
              />
            </div>
          </div>
          <div class="postarticle-description">
            <textarea
              id="addSaleDescription"
              name="story"
              rows="5"
              cols="33"
            >
              Entre ta description ici
            </textarea>
          </div>
        </div>
        <div class="postarticle-button">
          <button type="submit" id="postarticle-button" class="button">
            Poster mon matos
          </button>
        </div>
      </form>
    </div>
</template>