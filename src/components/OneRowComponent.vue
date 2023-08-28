<script>
import {mapActions} from "vuex";

export default {
    name: "OneRowComponent",
    props: ['data'],
    data() {
        return {}
    },
    computed: {},
    created() {
    },
    methods: {
        ...mapActions('list', [
            'pushAlert'
        ]),
        alertFromOneRow() {
            alert('alertFromOneRow ' + this.data.oneItem?.name);
            this.pushAlert('stateMsg');
        }
    }
}
</script>

<template>
    <div class="one-row-component">
        <div @click="alertFromOneRow" class="content-container">
            {{ data.oneItem?.name }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content-container {
    padding: 0 20px;
}
</style>