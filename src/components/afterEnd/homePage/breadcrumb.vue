<template>
    <div style=" padding: 20px">
        <a-breadcrumb>
            <a-breadcrumb-item href="">
                <a-icon type="home" />
                <router-link :to="{name:'Blog'}">首页</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item href="">
                <a-icon type="user" />
                <span>Application List</span>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                Application
            </a-breadcrumb-item>
        </a-breadcrumb>
    </div>

</template>
