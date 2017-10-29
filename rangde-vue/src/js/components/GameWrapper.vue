<template>
  <div class="container">
    <section class="card-container">
      <div class="row mt-2 mb-2">
        <div class="col-lg-6">
          <div class="input-group">
            <input type="text" class="form-control search-box" placeholder="Search by name or platform..." aria-label="Search by name or platform or genre..." @input.prevent="handleSearch">
            <span class="input-group-btn">
              <button class="btn btn-danger" type="button" @click.prevent="handleReset">Reset</button>
            </span>
          </div>
        </div>
        <div class="col-lg-6">
          <ul class="nav justify-content-end sort">
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Sort By</a>
            </li>
            <li class="nav-item" @click.prevent="sortGames(-1, $event)">
              <a class="nav-link" href="#">Score - Low to High</a>
            </li>
            <li class="nav-item" @click.prevent="sortGames(1, $event)">
              <a class="nav-link" href="#">Score - High to Low</a>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <div v-if="filter" class="col-4 alert alert-warning" role="alert">
        {{ filter }}
        <button type="button" class="close" aria-label="Close" @click.prevent="handleReset">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="card-columns mt-3">
        <template v-for="game in games">
          <GameCard :game="game" @filter="filterGames"></GameCard>
        </template>
      </div>
    </section>
    
  </div>
</template>

<script>
import _ from 'lodash';
import $ from 'jquery';
import { win, doc } from '../utils';
import GameCard from './GameCard';


export default {
  data() {
    return {
      games: [],
      loadedGames: [],
      url: 'http://starlord.hackerearth.com/gamesarena',
      loader: false,
      divider: 1.5,
      currentPointer: 0,
      filter: '',
    };
  },
  components: {
    GameCard,
  },
  mounted() {
    this.throttledScroll = _.throttle(this.onScroll, 200, {
      leading: false,
      trailing: true,
    });
    this.attachScrollListener();
    this.loadData();
  },
  destroyed() {
    this.removeScrollListener();
  },
  methods: {
    onScroll() {
      const currentScroll = win.scrollTop();
      const docHeight = doc.height();
      const winHeight = win.height();
      let diff = currentScroll - (docHeight - winHeight);

      if (diff < 0) {
        diff *= -1;
      }
      if (diff <= (docHeight / this.divider)) {
        this.renderData();
      }
    },
    attachScrollListener() {
      window.addEventListener('scroll', this.throttledScroll);
    },
    removeScrollListener() {
      window.removeEventListener('scroll', this.throttledScroll);
    },
    loadData() {
      if (this.loader) {
        return;
      }
      this.loader = true;
      $.ajax({
        url: this.url,
        type: 'GET',
        dataType: 'json',
        headers: {
          'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'access-control-allow-methods': 'GET, POST, PUT',
          'access-control-allow-origin': '*',
          server: 'cloudflare-nginx',
        },
        success: (data) => {
          this.loader = false;
          if (data.length < 1) {
            this.removeScrollListener();
            return;
          }
          this.maxApiLimit = data.shift();
          Array.prototype.push.apply(this.loadedGames, data);

          if (this.divider < 100) {
            this.divider *= 1.5;
          }
          this.appendNextArticle();
        },
        error: () => {
          this.removeScrollListener();
        },
      });
    },

    appendNextArticle() {
      for (let i = 0; i < 20; i += 1) {
        this.currentPointer += 1;
        const nextGame = this.loadedGames[this.currentPointer];
        this.games.push(nextGame);
      }
    },

    /*
    Load next set of articles via ajax but add only one article in
    renderable array at a time. This way, the dom will be more fluid.
    */
    renderData() {
      if (this.currentPointer >= this.loadedGames.length) {
        this.removeScrollListener();
      } else {
        this.appendNextArticle();
      }
    },
    sortGames(sortOrder, e) {
      $('.sort .nav-link').removeClass('active');
      e.target.classList.add('active');
      if (sortOrder === -1) {
        this.games = _.orderBy(this.games, 'score', 'asc');
        this.loadedGames = _.orderBy(this.loadedGames, 'score', 'asc');
      } else if (sortOrder === 1) {
        this.games = _.orderBy(this.games, 'score', 'desc');
        this.loadedGames = _.orderBy(this.loadedGames, 'score', 'desc');
      }
    },
    findMatches(wordToMatch, games) {
      return games.filter((game) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return game.title.match(regex) || game.platform.match(regex) || game.genre.match(regex);
      });
    },
    handleSearch(e) {
      const matches = this.findMatches(e.target.value, this.loadedGames);
      this.games = matches;
      this.removeScrollListener();
    },
    handleReset() {
      $('.search-box').val('');
      this.filter = '';
      this.attachScrollListener();
      this.games = [];
      this.currentPointer = 0;
      this.renderData();
    },
    filterGames(filterBy, filterType) {
      this.filter = `Filtered by ${filterType} - ${filterBy}`;
      let matches;
      if (filterType === 'Editor\'s Choice') {
        matches = this.loadedGames.filter(game => game.editors_choice === 'Y');
      } else {
        matches = this.findMatches(filterBy, this.loadedGames);
      }
      this.games = matches;
      this.removeScrollListener();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
