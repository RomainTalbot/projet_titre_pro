<template>
      <div class="main-container spotadd-container">
      <h2 class="title">Ajoute ton Spot</h2>

      <form class="spotadd-form">
        <div class="spotadd-form-container">
          <div class="spotadd-container-title-type">
            <div class="_title">
              <h2 class="spotadd-title">Titre</h2>
              <input
                id="titleSkatepark"
                class="spotadd-input-title"
                type="text"
                name="skatepark"
                placeholder="SkatePark de Grenoble Centre"
              />
            </div>
            <div class="spotadd-container-category">
              <div>
                <label
                  class="spotadd-label-category"
                >
                  SkatePark
                  <input
                    id="categorySkatepark"
                    class="spotadd-check-category cursor-pointer"
                    type="checkbox"
                    name="skatepark"
                  />
                </label>
              </div>

              <div>
                <label
                  class="spotadd-label-category"
                >
                  PumpTrack
                  <input
                    id="categoryPumptrack"
                    class="spotadd-check-category cursor-pointer"
                    type="checkbox"
                    name="pumptrack"
                  />
                </label>
              </div>

              <div>
                <label
                  class="spotadd-label-category"
                >
                  Street
                  <input
                    id="categoryStreet"
                    class="spotadd-check-category cursor-pointer"
                    type="checkbox"
                    name="streetspot"
                  />
                </label>
              </div>
            </div>
          </div>
          <div class="spotadd-container-informations">
            <div class="spotadd-container-information-adress-image">
              <div class="spotadd-container-adress">
                <h2 class="spotadd-title">Adresse</h2>
                <input
                  id="addSpotStreet"
                  class="spotadd-input"
                  type="text"
                  name="street"
                  placeholder="Rue"
                  required
                />
                <input
                  id="addSpotPostal"
                  class="spotadd-input"
                  type="text"
                  name="postal"
                  placeholder="Code Postal"
                  required
                />
                <input
                  id="addSpotTown"
                  class="spotadd-input"
                  type="text"
                  name="town"
                  placeholder="Ville"
                  required
                />
                <input
                  id="addSpotlongitude"
                  class="spotadd-input"
                  type="number"
                  step="0.00001"
                  name="longitude"
                  placeholder="longitude"
                  required
                />
                <input
                  id="addSpotlatitude"
                  class="spotadd-input"
                  type="number"
                  step="0.00001"
                  name="latitude"
                  placeholder="latitude"
                  required
                />
              </div>
              <div class="spotadd-container-image">
                <h2 class="spotadd-title">Image</h2>
                 <label
                  class="add-image cursor-pointer"
                >
                  Parcourir
                </label>
                <input
                  id="uploadImage"
                  class="add-image"
                  type="file"
                  name="image"
                  accept="image/png, image/jpeg, image/jpg"
                  multiple
                  required
                  hidden
                />
                <span id="file-chosen">No file chosen</span>
              </div>
            </div>
            <div class="spotadd-container-equipment-state">
              <div class="spotadd-container-equipment">
                <h2 class="spotadd-title">Equipement</h2>
                <label class="spotadd-label-equipment">
                  Parking
                  <input
                    id="parking"
                    class="spotadd-check-equipment cursor-pointer"
                    type="checkbox"
                    name="parking"
                  />
                </label>

                <label class="spotadd-label-equipment">
                  Eau potable
                  <input
                    id="water"
                    class="spotadd-check-equipment cursor-pointer"
                    type="checkbox"
                    name="water"
                  />
                </label>

                <label class="spotadd-label-equipment">
                  Poubelle
                  <input
                    id="trashcan"
                    class="spotadd-check-equipment cursor-pointer"
                    type="checkbox"
                    name="trashcan"
                  />
                </label>

                <label class="spotadd-label-equipment">
                  Eclairage
                  <input
                    id="lighting"
                    class="spotadd-check-equipment cursor-pointer"
                    type="checkbox"
                    name="lighting"
                  />
                </label>

                <label class="spotadd-label-equipment">
                  Table
                  <input
                    id="table"
                    class="spotadd-check-equipment cursor-pointer"
                    type="checkbox"
                    name="table"
                  />
                </label>

                <label class="spotadd-label-equipment">
                  Banc
                  <input
                    id="benche"
                    class="spotadd-check-equipment cursor-pointer"
                    type="checkbox"
                    name="benche"
                  />
                </label>
              </div>

              <div class="spotadd-container-state">
                <h2 class="spotadd-title">Etat</h2>
                <div>
                  <label class="spotadd-label-state">
                    Neuf
                    <input
                      id="addSpotNew"
                      class="spotadd-radio cursor-pointer"
                      type="radio"
                      name="state"

                    />
                  </label>
                </div>
                <div>
                  <label class="spotadd-label-state">
                    Bien
                    <input
                      id="addSpotGood"
                      class="spotadd-radio cursor-pointer"
                      type="radio"
                      name="state"
                    />
                  </label>
                </div>
                <div>
                  <label class="spotadd-label-state">
                    Moyen
                    <input
                      id="addSpotWay"
                      class="spotadd-radio cursor-pointer"
                      type="radio"
                      name="state"
                    />
                  </label>
                </div>
                <div>
                  <label class="spotadd-label-state">
                    En fin de vie
                    <input
                      id="addSpotEndoflife"
                      class="spotadd-radio cursor-pointer"
                      type="radio"
                      name="state"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" class="button spotadd-button">
          Ajouter un Spot
        </button>
      </form>
    </div>
</template>