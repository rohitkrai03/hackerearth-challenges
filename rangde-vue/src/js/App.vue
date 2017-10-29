<template>
  <div id="app" class="container-fluid">
      <header class="border-bottom-0">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            <img src="https://rangde-gen.s3.ap-south-1.amazonaws.com/images/rangde-new/header/rangde-logo.svg" alt="rangde logo" width="56px" height="43px" class="d-inline-block align-top">
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section class="row main-container">
        <GameWrapper></GameWrapper>
      </section>
  </div>
</template>

<script>
import GameWrapper from './components/GameWrapper';

export default {
  name: 'app',
  components: {
    GameWrapper,
  },
};
</script>

<style>
.main-container {
  margin-top: 69px;
  min-height: 820px;
  height: 100%;
}
.card-container {
  margin-left: 16.5%;
  transition: all 1s;
}
.dock {
  background: #fafafa;
  min-height: 820px;
  border-right: 1px solid #e1e1e1;
}
.active {
  border-bottom: 3px solid #007bff;
}
</style>
