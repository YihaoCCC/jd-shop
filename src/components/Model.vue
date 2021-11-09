<template>
    <transition name="slider">
        <div class="model" v-show="IsShow">
            <!--  遮罩层 -->
            <div class="mask"></div>
            <div class="dialog">
                <div class="header">
                    <span>{{title}}</span>
                    <svg  @click="$emit('CancelClick')" t="1636425236332" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2417" width="28" height="28"><path d="M512 1024c282.331429 0 512-229.668571 512-512s-229.668571-512-512-512-512 229.668571-512 512 229.668571 512 512 512zM512 51.2c254.098286 0 460.8 206.701714 460.8 460.8 0 254.098286-206.701714 460.8-460.8 460.8A461.385143 461.385143 0 0 1 51.2 512C51.2 257.901714 257.828571 51.2 512 51.2zM376.466286 647.460571a25.453714 25.453714 0 0 0 18.212571 7.533715c6.582857 0 13.165714-2.56 18.139429-7.533715l99.401143-99.474285 99.401142 99.474285a25.453714 25.453714 0 0 0 18.139429 7.533715c6.656 0 13.165714-2.56 18.139429-7.533715a25.453714 25.453714 0 0 0 0-36.132571L548.132571 512l99.401143-99.401143a25.453714 25.453714 0 0 0 0-36.132571 25.453714 25.453714 0 0 0-36.132571 0L512 475.940571l-99.401143-99.474285a25.453714 25.453714 0 0 0-36.132571 0 25.453714 25.453714 0 0 0 0 36.132571L475.940571 512l-99.474285 99.401143a25.453714 25.453714 0 0 0 0 36.132571z" fill="#DB2827" p-id="2418"></path></svg>
                </div>
                <div class="content">
                    {{content}}
                </div>
                <div class="footer">
                    <button class="btnSure" v-if="btnType === 1" @click="$emit('SureClick')" >{{SureText}}</button>
                    <button class="btnCancel" v-if='btnType === 2' @click="$emit('CancelClick')">{{CancelText}}</button>
                    <div v-if="btnType === 3">
                        <button  class="btnSure" @click="$emit('SureClick')" >{{SureText}}</button>
                        <button class="btnCancel"  @click="$emit('CancelClick')">{{CancelText}}</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: '提示'
            },
            btnType:{
                type: Number,
                default: 3
            },
            content: {
                typeof: String,
                default: '默认文字'
            },
            SureText: {
                type: String,
                default: '确认'
            },
            CancelText: {
                type: String,
                default: '取消'
            },
            IsShow: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '../assets/scss/config.scss';
    .model {
        position: fixed;
        z-index: 100;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: all 0.4s;
        &.slider-enter-active{
            top:0
        }
        &.slider-leave-active{
            top:-100%
        }
        &.slider-enter{
            top:-100%
        }
        .mask {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: #999;
            opacity: 0.8;
        }
        .dialog {
            position: absolute;
            top: 45%;
            left: 50%;
            width: 660px;
            transform: translate(-50%,-50%);
            background-color: #fff;
            .header {
                width: 100%;
                background-color: #e5e5e5;
                box-sizing: border-box;
                padding: 20px 20px;
                height: 60px;
                display: flex;
                justify-content: space-between;
                align-content: center;
                font-size: 16px;
                svg {
                    transition: all .5s;
                    &:hover {
                        transform: scale(1.1) rotate(90deg);
                    }
                }
            }
            .content {
                min-height: 100px;
                box-sizing: border-box;
                padding: 20px 30px;
            }
            .footer {
                width: 100%;
                background-color: #e5e5e5;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
                .btnSure {
                    width: 150px;
                }
                .btnCancel {
                    width: 100px;
                    background-color: #999;
                }
                button {
                    color: #fff;
                    cursor: pointer;
                    border: none;
                    height: 35px;
                    background-color: $colorA;
                    margin: 0 10px;
                    &:hover {
                        border:2px solid #e5e5e5 ;
                    }
                }
            }
        }
    }
</style>
