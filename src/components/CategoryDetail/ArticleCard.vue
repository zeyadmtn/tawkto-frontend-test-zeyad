<template>
    <div class="article-card-container">
        <i class="category-icon fa fa-file fa-md"></i>
        <div>
            <div class="article-title">
                {{ article.title }}
            </div>
            <div class="article-last-updated">
                Updated {{ formattedLastUpdated }}
            </div>
        </div>

        <i class="right-arrow-icon fa fa-chevron-right fa-md"></i>

    </div>
</template>

<script>
import { formatDateToShortDateFormat } from '../../helpers/dateParsers.js';

export default {
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    computed: {
        formattedLastUpdated() {
            return formatDateToShortDateFormat(this.article.updatedOn);
        },

    },
};
</script>


<style lang="scss" scoped>
@import '../../scss/_variables.scss';
.article-card-container {
    width: 640px;
    background-color: white;
    padding: 20px 40px;
    border: 1px solid #EEEEEE;
    border-radius: 5px;
    font-family: $font-family;
    margin-bottom: 1.1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.right-arrow-icon {
    color: $green;
    flex-grow: 1;
    text-align: right;
}

.category-icon {
    color: $green;
    margin-right: 1.5rem;
}

.article-title {
    color: #373737;
    font-size: 20px;
    margin-bottom: 0.25rem;
}
.article-last-updated {
    color: $text-gray;
    font-size: 11px;
}


@media (max-width: 768px) {
   .article-card-container {
    max-width: 250px;
    padding: 20px;
   }
   .article-title {
    color: #373737;
    font-size: 15px;
    margin-bottom: 0.25rem;
    margin-right: 5px;
}
.article-last-updated {
    color: $text-gray;
    font-size: 11px;
}

}
</style>