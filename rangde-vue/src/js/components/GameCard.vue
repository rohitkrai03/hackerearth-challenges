<template>
  <div class="card text-left border-primary">
    <div class="card-header alert alert-primary">
      <h5> {{ game.title }} </h5>
    </div>
    <div class="card-body">
      <p class="card-text">
        Platform - <span class="badge badge-pill badge-secondary">{{ game.platform }}</span>
      </p>
      <p class="card-text">
        Score - <span class="badge badge-pill badge-secondary">{{ game.score }}</span>
      </p>
      <p class="card-text">
        Genre - <span class="badge badge-pill badge-secondary">{{ game.genre }}</span>
      </p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      <p v-if="game.editors_choice === 'Y'"  class="btn btn-warning">
        <i class="fa fa-star" aria-hidden="true"></i>
        <span>Editor's Choice</span>
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