<template>
  <div class="col-lg-6">
    <ul class="nav justify-content-end sort">
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Sort By</a>
      </li>
      <li class="nav-item" @click.prevent="$emit('sortGames', -1, $event)">
        <a class="nav-link" href="#">Score - Low to High</a>
      </li>
      <li class="nav-item" @click.prevent="$emit('sortGames', 1, $event)">
        <a class="nav-link" href="#">Score - High to Low</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

  };
</script>