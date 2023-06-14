<template>
    <div id="search-bar-container">
        <input type="text" placeholder="Search for answers" name="search-text">
        <div id="search-bar-button-container">
            <i class="fas fa-search fa-lg"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

#search-bar-container {
    background-color: white;
    width: 57%;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    border: $card-border;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

#search-bar-container input {
    border: none;
    outline: none;
    height: 70%;
    width: 100%;
    padding-left: 22px;
    font-family: $font-family;


}

#search-bar-button-container {
    background-color: $green;
    width: 11%;
    height: 100%;
    min-width: 60px;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

#search-bar-button-container i {
    color: white;
    cursor: pointer;
}

@media (max-width: 768px) {
    #search-bar-container {
        width: 90%;
        padding-left: 10px;
    }

    #search-bar-container p {
        padding: 5px;
    }

    #search-bar-button-container {
        width: 20%;
    }
}
</style>