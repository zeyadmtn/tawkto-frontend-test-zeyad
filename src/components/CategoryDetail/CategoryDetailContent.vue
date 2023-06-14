
<template>
    <div id="category-view-container">
        <div id="category-view-subcontainer">
            <div id="breadcrumbs-nav-container">
                <span @click="navigateToHomePage()" id="all-categories-link-text">All Categories</span>
                <span> &nbsp; > &nbsp; </span>
                <span>{{ category.title }}</span>
            </div>

            <div id="category-content-container">
                <div>
                    <div id="category-card">
                        <i :class="'category-icon fa fa-' + (category.icon || 'question-circle') + ' fa-4x'"></i>
                        <span class="category-title">{{ category.title }}</span>
                        <div class="category-details">
                            <span class="category-last-updated">Last updated {{ formattedLastUpdated }}</span>
                        </div>
                        <div class="dividing-line"></div>
                        <i class="category-icon fa fa-question-circle fa-md"></i>
                        <div id="category-description">
                            {{ category.description }}
                        </div>
                    </div>
                </div>

                <div id="article-list-container">
                    <article-card v-for="article in articles" :key="article.id" :article="article"></article-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { ENDPOINTS } from '../../config';
import { formatDateToTimeAgoFormat } from '../../helpers/dateParsers';
import ArticleCard from '../CategoryDetail/ArticleCard.vue';


export default {
    components: {
        'article-card': ArticleCard
    },
    computed: {
        formattedLastUpdated() {
            return formatDateToTimeAgoFormat(this.category.updatedOn);
        },
    },
    data() {
        return {
            category: null,
            articles: [],
        };
    },
    mounted() {
        const { categoryID } = this.$route.params;

        // Fetch category data again rather than pass as props to keep any new information updated.
        this.fetchCategory(categoryID);
        this.fetchArticles(categoryID);
    },
    methods: {

        fetchCategory(categoryID) {
            axios.get(ENDPOINTS.ALL_CATEGORIES)
                .then(response => {
                    // Filter the categories based on categoryID
                    const categories = response.data;
                    this.category = categories.find(category => category.id === categoryID);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchArticles(categoryID) {
            axios.get(`${ENDPOINTS.CATEGORY_ARTICLES_BY_ID}/${categoryID}`)
                .then(response => {
                    // Only keeps articles with status "published"
                    this.articles = response.data.filter(article => article.status === 'published');
                })
                .catch(error => {
                    console.error(error);
                });
        },
        navigateToHomePage() {
            this.$router.push({
                name: 'home',
            });
        },
    },
};
</script>


<style lang="scss" scoped>
@import '../../scss/_variables.scss';

#category-view-container {
    justify-content: center;
    align-items: center;
    display: flex;
}


#breadcrumbs-nav-container {
    font-size: 13px;
    color: $text-gray;
}

#all-categories-link-text {
    color: $green;
    font-weight: 400;
    cursor: pointer;
}

#category-content-container {
    width: 100%;
    padding: 20px 0px;
    display: flex;
    flex-direction: row;
}

#category-card {
    background-color: white;
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 5px;
    border: 1px solid #EEEEEE;
    border-radius: 5px;
    font-family: $font-family;
    text-align: center;
    margin-right: 3.75rem;
}


.category-icon {
    color: #03A84E;

}

.category-title {
    font-weight: 700;
    font-size: 23px;
    line-height: 24px;
    margin-top: 1.50rem;
    color: #373737;
}


.category-last-updated {
    color: $text-gray;
    font-size: 11px;
}

.dividing-line {
    width: 100%;
    background-color: gray;
    height: 1px;
    opacity: 20%;
    margin: 1.25rem 0px;
}

#category-description {
    width: 78%;
    margin-top: 1.25rem;
    color: $text-gray;
}

@media (max-width: 768px) {
    #category-view-container {
        flex-direction: column;
        padding: 0px;
        justify-content: center;
        align-items: center;
    }

    #category-content-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #category-card {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
    }

    #category-view-subcontainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}</style>