<template>
  <div v-if="game" class="card text-left border-primary">
    <div class="card-header alert alert-primary">
      <h5> {{ game.title }} </h5>
    </div>
    <div class="card-body">
      <p class="card-text">
        Platform - 
        <a
          href="#"
          :title="'Filter by ' + game.platform"
          class="badge badge-pill badge-secondary"
          @click.prevent="$emit('filter', game.platform, 'platform')"
        >{{ game.platform }}</a>
      </p>
      <p class="card-text">
        Score - <span class="badge badge-pill badge-secondary">{{ game.score }}</span>
      </p>
      <p class="card-text">
        Genre - 
        <a 
          href="#"
          :title="'Filter by ' + game.genre"
          class="badge badge-pill badge-secondary"
          @click.prevent="$emit('filter', game.genre, 'genre')"
        >{{ game.genre }}</a>
      </p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      <p
        v-if="game.editors_choice === 'Y'"
        class="btn btn-warning"
        @click.prevent="$emit('filter', 'Y', 'Editor\'s Choice')"
        >
        <button
          type="button" class="close" aria-label="Close"
          @click.prevent="handleReset"
          style="float: left">
          <span aria-hidden="true">&#9733;</span>
        </button>
        <span class="ml-1">Editor's Choice</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      game: Object,
    },
  };
</script>

<style>
  .card-text {
    font-weight: 500;
  }
  .badge {
    font-size: 100%;
  }
</style>