
<template>
    <div id="error-details-container">
        <i class="error-icon fa fa-exclamation-triangle fa-lg"></i>
        <div id="fetch-category-error">{{ errorMessage ? errorMessage : "Something unexpected happened, please try again later!" }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        errorMessage: {
            type: String,
            defualt: "Something unexpected happened, please try again later!"
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../scss/_variables.scss';

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
</style>