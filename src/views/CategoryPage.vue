<template>
    <div>
        <tawk-header></tawk-header>
        <div id="category-view-wrapper">
            <category-detail-content></category-detail-content>
        </div>
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


<style lang="scss" scoped>
@import '../scss/_variables.scss';

#category-view-wrapper {
    background: $background-gray;
    height: auto;
    justify-content: center;
    align-items: center;
    padding: 40px 60px;
    font-family: $font-family;
    
}
</style>