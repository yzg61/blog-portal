<template>
    <div>
        <my-header/>
        <main>
            <not-found-page/>
            <div class="home-btn">
                <el-button
                    type="primary"
                    @click="$router.push('/')"
                >回到首页
                </el-button>
            </div>
        </main>
        <my-footer/>

    </div>

</template>

<script>
    import MyHeader from "../../components/BaseHeader";
    import MyFooter from "../../components/BaseFooter";
    import NotFoundPage from "./components/NotFoundPage";

    export default {
        name: "notFound",
        components: {NotFoundPage, MyFooter, MyHeader}
    }
</script>

<style scoped>
    .home-btn {
        transform: translate(-50%, -50%);
        top: 80%;
        left: 50%;
        position: absolute;
    }
</style>
