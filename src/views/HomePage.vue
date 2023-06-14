<template>
    <div>
        <tawk-header></tawk-header>
        <category-list></category-list>
    </div>
</template>

<script>
import Header from '../components/header/Header.vue';
import CategoryList from '../components/CategoryList/CategoryList.vue';

export default {
    components: {
        'tawk-header': Header,
        'category-list': CategoryList,
    }
}
</script>
