<template>
    <div class="category-card" @click="navigateToCategoryPage">
        <i :class="'category-icon fa fa-' + (category.icon || 'question-circle') + ' fa-4x'"></i>
        <span class="category-title">{{ category.title }}</span>
        <div class="category-details">
            <span class="category-num-of-articles">{{ category.totalArticle }} articles</span>
            <span class="category-last-updated">Last update {{ formattedLastUpdated }}</span>
        </div>
    </div>
</template>

<script>
import formatLastUpdated from '../../helpers/formatLastUpdated.js';

export default {
    props: {
        category: {
            type: Object,
            required: true,
        },
    },
    computed: {
        formattedLastUpdated() {
            return formatLastUpdated(this.category.updatedOn);
        },

    },
    methods: {
        navigateToCategoryPage() {
            this.$router.push({
                name: 'category',
                params: {
                    categoryID: this.category.id
                },
            });
        },
    },
};
</script>


<style lang="scss" scoped>
@import '../../scss/_variables.scss';

.category-card {
    background-color: white;
    margin-left: 1.25rem;
    margin-top: 1.25rem;
    display: flex;
    padding: 35px 32px;
    flex-direction: column;
    align-items: center;
    width: 315px;
    height: 220px;
    border: 1px solid #EEEEEE;
    border-radius: 5px;
    font-family: $font-family;
    text-align: center;
    cursor: pointer;
}

.category-icon {
    color: #03A84E;

}

.category-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-top: 1.50rem;
    color: #373737;
}

.category-details {
    margin-top: 1.80rem;
    display: flex;
    flex-direction: column;
}

.category-num-of-articles {
    color: $green;
}

.category-last-updated {
    color: $text-gray;
}

@media (max-width: 768px) {
    .category-card {
        min-width: 220px;
    }
}
</style>