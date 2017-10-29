<template>
  <div id="app" class="container-fluid">
    <HeaderBar></HeaderBar>
    <GameWrapper></GameWrapper>
  </div>
</template>

<script>
import GameWrapper from './components/GameWrapper';
import HeaderBar from './components/HeaderBar';

export default {
  name: 'app',
  components: {
    GameWrapper,
    HeaderBar,
  },
};
</script>
