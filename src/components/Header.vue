<script>

</script>

<template>
    <header>
        <p>Movies<span>DataBase</span></p>
    </header>
</template>

<style lang="scss" scoped>
$primary-color: #130112;
$secondary-color: #6b1b67;
$tertiary-color: #752a71;

$box-shadow-1: 0px 0px 6px rgba(0, 0, 0, 0.1);

header {
    color: #fff;
    background-color: $primary-color; //#456789

    padding: 10px 16px;

    box-shadow: $box-shadow-1;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 1.5rem;

        span {
            color: $tertiary-color;
        }
    }
}
</style>