<template>
    <div>
        <custom-error v-if="error.occured" :errorMessage="error.message"></custom-error>
        <div id="category-view-wrapper" v-if="!error.occured">
            <div id="categories-container">
                <category-card v-for="category in categories" :key="category.id" :category="category"></category-card>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CategoryCard from './CategoryCard.vue';
import { ENDPOINTS } from '../../config';
import CustomError from '../Errors/CustomError.vue';


export default {
    components: {
        'category-card': CategoryCard,
        'custom-error': CustomError
    },

    data() {
        return {
            categories: [],
            error: {
                occured: false,
                message: ''
            }
        };
    },

    mounted() {
        this.fetchCategories();
    },
    methods: {
        fetchCategories() {
            axios.get(ENDPOINTS.ALL_CATEGORIES)
                .then(response => {
                    // Store only categories with "enabled" = true
                    this.categories = response.data.filter(category => category.enabled);
                })
                .catch(error => {
                    console.error(error);
                    // Set custom error message
                    this.error = {
                        occured: true,
                        message: ''
                    };
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