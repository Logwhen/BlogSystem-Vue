<template>
    <div class="dialog" v-show="showMask">
        <div class="dialog-container">
            <div class="content" v-html="content"></div>
            <div class="btns">
                <div v-if="type != 'confirm'" class="cancel-btn" @click="closeBtn">
                    {{cancelText}}
                </div>
                <div v-if="type == 'danger'" class="delete-btn" @click="dangerBtn">
                    {{dangerText}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {},
            type:{
                type: String,
                default: 'default'
            },
            content: {
                type: String,
                default: ''
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            dangerText: {
                type: String,
                default: '删除'
            },
        },
        data(){
            return{
                showMask: false,
            }
        },
        methods:{
            closeMask(){
                this.showMask = false;
            },
            closeBtn(){
                this.$emit('cancel');
                this.closeMask();
            },
            dangerBtn(){
                this.$emit('danger');
                this.closeMask();
            }
        },
        mounted(){
            this.showMask = this.value;
        },
        watch:{
            value(newVal, oldVal){
                this.showMask = newVal;
            },
            showMask(val) {
                this.$emit('input', val);
            }
        },
    }
</script>

<style scoped>
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .dialog
    {
        height: 2rem;
        width: 2rem;
        margin: 0 auto;
        border-style: solid;
        font-size: 15px;
        font-weight:400;
        background: #ffffff;
        position: fixed;
        text-align:center;
        left: 40%;
        top: 30%;
        transform: translateY(50%);
    }
    .dialog-container
    {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    .content
    {
    }
    .btns
    {
    }
    .cancel-btn
    {
        width: 35%;
        margin-top:.4rem;
        margin-left:.2rem;
        float:left;
        border-style: solid;
        border-width:thin;
    }
    .delete-btn
    {
        width: 35%;
        margin-top:.4rem;
        margin-right:.2rem;
        float:right;
        background: #d9867d;
        border-style: solid;
        border-width:thin;
    }
</style>