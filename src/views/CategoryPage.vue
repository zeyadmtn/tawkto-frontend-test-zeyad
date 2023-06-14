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
    #category-view-wrapper {
       padding: 0px, 10px;

    }

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
}
</style>