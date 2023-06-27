
<template>
    <div id="category-view-wrapper">
        <div id="category-view-container" v-if="!error.occured">
            <div id="category-view-subcontainer">
                <div id="breadcrumbs-nav-container">
                    <span @click="navigateToHomePage()" id="all-categories-link-text">All Categories</span>
                    <span> &nbsp; > &nbsp; </span>
                    <span>Search results</span>
                </div>
                <tempalte v-if="articles.length !== 0">
                <div id="showing-results-text" v-if="this.$route.params.searchText != ''">
                    Showing results for "<span id="search-text">{{ this.$route.params.searchText  }}</span>"
                </div>

                <div id="showing-results-text" v-else>
                    Showing
                    <span id="search-text">
                         all articles
                    </span>
                </div>
                    </tempalte>

                <div id="article-list-container">
                    <article-card v-for="article in articles" :key="article.id" :article="article"></article-card>
                    
                    <!-- Magnifying glass icon not set up -->
                    <div id="error-text" v-if="articles.length === 0">
                            No search results 
                     <br/>
                     Please, try again or 
                         <span id="error-text-link">
                            Submit a Ticket</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div></template>

<script>
import axios from 'axios';
import { ENDPOINTS } from '../../config';
import ArticleCard from '../CategoryDetail/ArticleCard.vue';
import CustomError from '../Errors/CustomError.vue';


export default {
    components: {
        'article-card': ArticleCard,
        'custom-error': CustomError
    },
    watch: {
        '$route.params.searchText': function (newSearchText) {
            this.fetchArticles(newSearchText);
        }
    },
    data() {
        return {
            articles: [],
            error: {
                occured: false,
                message: ''
            }
            
        };
    },
    mounted() {
        // Use one filter

        const { searchText } = this.$route.params;
        this.fetchArticles(searchText);
    },
    methods: {
        fetchArticles(searchText) {
            searchText = searchText.toLowerCase();

            axios.get(`${ENDPOINTS.ARTICLE_BY_TEXT}/${searchText}`)
                .then(response => {
                    // Only keeps articles with status "published"
                    // Note: current mock data fetches all articles, none paired to a specific category
                    this.articles = response.data.filter(article => {
                        return (
                            article.title.toLowerCase().includes(searchText) &&
                            article.status === 'published'
                        );
                    });


                })
                .catch(error => {
                    console.error(error);
                    this.error = {
                        occured: true,
                        message: ''
                    };
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


#category-view-wrapper {
    background: $background-gray;
    height: auto;
    justify-content: center;
    align-items: center;
    padding: 40px 60px;
    font-family: $font-family;

}

#error-details-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

}

#fetch-category-error {
    font-size: 20px;
    text-align: center;
    font-family: $font-family;
    margin-left: 1rem;
    color: $text-black;
}

.error-icon {
    color: $text-gray;
}

#category-view-container {
    justify-content: center;
    align-items: center;
    display: flex;
}

#category-view-subcontainer {
    width: 80%;
    display: flex;
    flex-direction: column;
}

#article-list-container {
    align-self: center;
    justify-self: center;
    
}


#breadcrumbs-nav-container {
    font-size: 13px;
    color: $text-gray;
    margin-bottom: 40px;
    justify-self: start;
    align-self:self-start;
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
    border: $card-border;
    border-radius: 5px;
    font-family: $font-family;
    text-align: center;
    margin-right: 3.75rem;
}

#error-text {
    text-align: center;
}

.category-icon {
    color: $green;

}

.category-title {
    font-weight: 700;
    font-size: 23px;
    line-height: 24px;
    margin-top: 1.50rem;
    color: $text-black;
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

#showing-results-text {
    font-size: 23px;
    color: $text-black;
    text-align: center;
    margin-bottom: 25px;
    font-weight: 700;
}

#search-text {
    color: $green;
}
#error-text-link {
    color: $green;
    cursor: pointer;
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

    #showing-results-text {
    font-size: 15px;
}

    
}
</style>