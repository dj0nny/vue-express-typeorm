<template>
  <div id="header">
    <b-container>
      <b-row>
        <b-col md="4">
          <router-link id="app-name" to="/">Vue Express TypeORM</router-link>
        </b-col>
        <b-col md="8">
          <ul id="menu">
            <li class="menu-item" v-for="(link, index) in links" :key="index">
              <router-link :to="link.href">{{ link.name }}</router-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  links: any = [
    {
      name: 'articles',
      href: '/articles',
    },
    {
      name: 'writers',
      href: '/writers',
    },
  ];
}
</script>

<style lang="scss" scoped>
#header {
  background: #4f6d7a;
  color: #fff;
  padding: 20px;

  a#app-name {
    color: #fff;
  }

  ul#menu {
    padding: 0;
    margin: 0;
    list-style-type: none;

    li.menu-item {
      display: inline-block;

      a {
        color: #fff;
        margin-right: 20px;
        text-transform: capitalize;
      }
    }
  }
}
</style>
