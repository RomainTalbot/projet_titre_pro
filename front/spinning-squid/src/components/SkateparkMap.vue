<template>
  <GmapMap :center="startLocation" :zoom="zoom" style="width: 100%; height: 100%">
    <GmapMarker
      v-for="skateparkItem in skateparks"
      :key="skateparkItem.id"
      :position="getPosition(skateparkItem)"
    />
  </GmapMap>
</template>

<script>
export default {
  name: "SkateparkMap",

  async created() {

    this.skateparks = await this.$store.state.services.skatepark.loadSkateParks();
  },

  data() {
    return {
      startLocation: { lat: 46, lng: 2 },
      zoom: 6,
      skateparks: [],
    };
  },

  methods: {
    getPosition: function(marker) {
      return {
        lat: parseFloat(marker.meta.latitude),
        lng: parseFloat(marker.meta.longitude)
      }
    },

    moveLocationOnMap: function(latitude, longitude) {
      this.location = {
        lat: latitude,
        lng: longitude
      },
      this.zoom = 15
    }
  }
};
</script>

<style lang="scss">
</style>