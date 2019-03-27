<template>
    <div style=" padding: 20px">
        <a-breadcrumb>
            <a-breadcrumb-item href="">
                <a-icon type="home" />
                <router-link :to="{name:'Blog'}">首页</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item href="">
                <a-icon type="home" />
                <span><router-link :to="{name:'afterEnd_index'}">后台首页</router-link></span>
            </a-breadcrumb-item>
            <a-breadcrumb-item href="">
                <a-icon type="user" />
                <span>用户管理</span>
            </a-breadcrumb-item>
        </a-breadcrumb>
    </div>

</template>
