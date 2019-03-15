<template>
    <div style="margin-top: 40px">
        <a-layout id="components-layout-demo-custom-trigger">
            <a-layout-sider
                    :trigger="null"
                    collapsible
                    v-model="collapsed"
            >
                <afterEnd_menu></afterEnd_menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">

                    <a-icon
                            class="trigger"
                            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                            @click="()=> collapsed = !collapsed"
                    />

                </a-layout-header>

                <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '300px' }">
                    <afterEnd_breadcrumb></afterEnd_breadcrumb><br>

                    <afterEnd_index></afterEnd_index>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                collapsed: false,
            }
        },
    }
</script>
<style>

    .a-layout-sider{
        height: 561px;
    }
    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255,255,255,.2);
        margin: 16px;
    }
</style>