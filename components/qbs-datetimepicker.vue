<template>
<div class="panel panel-primary">
    <div class="panel-heading" id="page">qDatetimepicker</div>
    <div class="panel-body">
        <p>
            当前页码数据为{{page_data | json}}<br/> 当前点击页码
            <strong class="h3 text-danger ml-short">{{trigger_page}}</strong>
        </p>
        <form>
            <div style="box-sizing:border-box;">
                <q-page name="aaa" style="display:block;" class="a-class" :total="page_data.total" :page_size="page_data.page_size" :page="page_data.page" @on-change="triggerChangePage">
                </q-page>
            </div>
        </form>
        <div class="mt-short">
        </div>
    </div>
</div>
</template>

<script>
    import utils from '../utils'
    import {
        qPage
    } from '../../../qbs-components/main.js'

    export default {
        components:{
            qPage
        },
        data: function(){
            return {
                page_data:{
                    total:300,
                    page_size:10,
                    page:1
                },
                trigger_page:0
            }
        },
        ready: function() {},
        methods: {            
            triggerChangePage: function(val){
                this.trigger_page = this.page_data.page = val;
            }
        }
    }
</script>