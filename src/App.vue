<template>
  <div>
    <table class="border-table">
      <thead>
        <tr>
          <th v-for="header in headers">
            {{ header.head }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data">
          <td v-for="header in headers">
            <div v-if="header.head === 'Title'" class="clickable">
                {{ item[header.value].length > 15 ? getHoverData(item[header.value]) : item[header.value] }}
            </div>
            <div v-else>
              {{ item[header.value] }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <br>
    <Filter />
  </div>
</template>

<script>
import Filter from './Filter.vue'
export default {
  name: 'App',
  components: {
    Filter
  },
  data() {
    return {
      headers: [
        { head: "Severity", value: "severity", isClickable: true },
        { head: "Title", value: "title", isClickable: false },
        { head: "Source", value: "source", isClickable: false }
      ],
      data: [
        { "severity": 5, "title": "Cve_2022_0432_prototype_pollution_in_github_repository_mastodon_mastodon", "source": "Source1" },
        { "severity": 1, "title": "title2", "source": "Source2" },
        { "severity": 2, "title": "Cve_2022_0432_prototype_pollution_in_github_repository_mastodon_mastodon", "source": "Source3" },
        { "severity": 3, "title": "title4", "source": "Source4" },
        { "severity": 4, "title": "Cve_2022_0432_prototype_pollution_in_github_repository_mastodon_mastodon", "source": "Source5" }
      ]
    }
  },
  methods: {
    getHoverData(value) {
      let txt = value
      txt = txt.substring(0, 75) + '...'
      return txt
    }
  }
}
</script>
<style>
@import './main.css';
</style>
