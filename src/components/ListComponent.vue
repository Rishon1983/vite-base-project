<script>
import {mapState, mapActions} from 'vuex';
import OneRowComponent from "./OneRowComponent.vue";

export default {
    name: "ListComponent",
    components: {OneRowComponent},
    data() {
        return {}
    },
    computed: {
        ...mapState({
            mainList: state => state.list.mainList
        })
    },
    created() {
        this.$store.dispatch("list/getList");
    },
    methods: {
        ...mapActions('list', [
            'pushAlert'
        ]),
    }
}
</script>

<template>
    <div class="list-component">
        <div class="header">List</div>
        <div v-if="mainList.length > 0" class="rows-container">
            <div v-for="(oneItem, index) in mainList" :key="oneItem.id" class="one-item">
                <OneRowComponent :data="{oneItem, index}"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.list-component {
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
    }

    .rows-container {
        max-height: calc(100vh - 75px);
        overflow: auto;
    }

    .one-item {
        &:nth-child(odd) {
            background-color: #f8f9fa;
        }
    }
}
</style>