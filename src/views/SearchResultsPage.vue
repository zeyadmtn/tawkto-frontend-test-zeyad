<template>
    <div>
        <tawk-header></tawk-header>
        <search-results-list></search-results-list>
    </div>
</template>

<script>
import Header from '../components/header/Header.vue';
import SearchResultsList from '../components/SearchResults/SearchResultList.vue';

export default {
    components: {
        'tawk-header': Header,
        'search-results-list': SearchResultsList,
    }
}
</script>
