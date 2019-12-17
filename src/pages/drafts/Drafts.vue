<template>
    <div>
        <base-header/>
        <main>
            <b-container class="Card" style="max-width: 570px;padding: 0">
                <div class="list-header">
                    已保存的草稿(20)
                </div>
                <drafts-list/>
            </b-container>
        </main>
    </div>
</template>

<script>
    import BaseHeader from "../../components/BaseHeader";
    import DraftsList from "./components/DraftsList";


    export default {
        name: "Drafts",
        components: {DraftsList, BaseHeader},
        props: [],
        data() {
            return {
            }
        },

        methods: {

        },

        created() {
        }
    }
</script>

<style scoped>
    .list-header {
        align-items: center;
        padding: 15px;
        font-weight: 700;
        color: #007fff;
        font-size: 16px;
    }
</style>
