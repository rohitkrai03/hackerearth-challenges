<template>
  <div class="col-lg-6">
    <div class="input-group">
      <input
        type="text" class="form-control search-box"
        placeholder="Search by name or platform or genre..."
        aria-label="Search by name or platform or genre..."
        @input.prevent="$emit('handleSearch', $event)">
      <span class="input-group-btn">
        <button class="btn btn-danger" type="button" @click.prevent="$emit('handleReset', $event)">Reset</button>
      </span>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>