<template>
  <GmapMap :center="startLocation" :zoom="6" style="width: 100%; height: 100%">
    <GmapMarker
      v-for="skateparkItem in skateparks"
      :key="skateparkItem.id"
      :position="getPosition(skateparkItem)"
      @click="center = skateparkItem"
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
  }
};
</script>

<style lang="scss">
</style>