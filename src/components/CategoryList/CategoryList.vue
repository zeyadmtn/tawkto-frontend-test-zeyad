<template>
    <div id="category-view-wrapper">
        <div id="categories-container">
            <category-card v-for="category in categories" :key="category.id" :category="category"></category-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CategoryCard from './CategoryCard.vue';
import { ENDPOINTS } from '../../config';

export default {
    components: {
        'category-card': CategoryCard,
    },

    data() {
        return {
            categories: [],
        };
    },

    mounted() {
        this.fetchCategories();
    },
    methods: {
        fetchCategories() {
            axios.get(ENDPOINTS.ALL_CATEGORIES)
                .then(response => {
                    this.categories = response.data.filter(category => category.enabled);
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },

};
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

#category-view-wrapper {
    background: $background-gray;
    height: auto;
    justify-content: center;
    align-items: center;
    padding: 40px 100px;

}

#categories-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
}


@media (max-width: 768px) {
    #category-view-wrapper {
        padding: 40px 50px;
    }
}
</style>