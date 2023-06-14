<template>
    <div>
        <tawk-header></tawk-header>
        <category-detail-content></category-detail-content>
    </div>
</template>

<script>
import Header from '../components/header/Header.vue';
import CategoryDetailContent from '../components/CategoryDetail/CategoryDetailContent.vue'


export default {
    components: {
        'tawk-header': Header,
        'category-detail-content': CategoryDetailContent
    },
};
</script>