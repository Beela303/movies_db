<script>

</script>

<template>
    <footer>
        <p>Nabila Abubakar - 2025 <br>
            API from <a href="http://omdbapi.com" target="_blank" rel="noopener noreferrer">OMDB</a></p>
    </footer>
</template>

<style lang="scss" scoped>
$primary-color: #130112;
$secondary-color: #6b1b67;
$tertiary-color: #752a71;

$box-shadow-1: 0px 0px 6px rgba(0, 0, 0, 0.1);

footer {
    color: #fff !important;
    background-color: $primary-color;

    padding: 10px 16px;

    box-shadow: $box-shadow-1;

    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
        color: $secondary-color;
    }
}
</style>