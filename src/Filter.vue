<template>
  <div class="search-bar">
    <select class="search-option">
      <option>All</option>
      <option>Web</option>
      <option>Images</option>
      <option>Videos</option>
      <option>News</option>
    </select>
    <input type="text" class="search-input" placeholder="Contains">
    <button type="submit" class="search-button"><i class="la la-search"></i></button>
  </div>
</template>

<script>
export default ({
  name: 'Filters'
})
</script>