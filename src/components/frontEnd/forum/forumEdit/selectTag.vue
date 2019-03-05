<template>
    <div>
        <h2>选择标签</h2>
        <br>
        <a-radio-group defaultValue="a" size="large" @change="change">
            <a-radio-button value="a">课内</a-radio-button>
            <a-radio-button value="b">课外</a-radio-button>
        </a-radio-group>
        <br>
        <div class="content">
            <a-cascader v-if="showin" size="large" :options="options" :showSearch="{filter}" @change="onChange"
                        placeholder="Please select" style="width:400px;"/>

            <a-select v-if="showout" mode="multiple" :defaultValue="['a1', 'b2']" style="width: 400px"
                      placeholder="Please select" size="large">
                <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">{{(i + 9).toString(36) + i}}
                </a-select-option>
            </a-select>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                showin:true,
                showout:false,
                options: [{
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [{
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [{
                            value: 'xihu',
                            label: 'West Lake',
                        }, {
                            value: 'xiasha',
                            label: 'Xia Sha',
                            disabled: true,
                        }],
                    }],
                }, {
                    value: 'jiangsu',
                    label: 'Jiangsu',
                    children: [{
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [{
                            value: 'zhonghuamen',
                            label: 'Zhong Hua men',
                        }],
                    }],
                }]
            }
        },
        methods: {
            onChange(value, selectedOptions) {
                console.log(value, selectedOptions);
            },
            filter(inputValue, path) {
                return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
            },
            change(e){
                console.log(e.target.value)
                let v = e.target.value
                if(v === 'b'){
                    this.showin =  false;
                    this.showout = true
                }else{
                    this.showin = true;
                    this.showout = false;
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content{
        margin-top:10px ;
    }

</style>
