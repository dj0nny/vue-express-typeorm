<template>
  <div id="footer">
    <b-container>
      <b-row>
        <b-col md="12">
          Made with ️️❤️ by <a href="https://github.com/dj0nny" target="_blank">dj0nny</a> &copy; {{ year }}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  year: number = new Date().getFullYear();
}
</script>

<style lang="scss" scoped>
div#footer {
  padding: 50px;
  background: #166088;
  color: #fff;

  a {
    color: #fff;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
