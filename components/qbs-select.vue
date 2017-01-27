<template>
<div class="panel panel-primary">
    <div class="panel-heading" id="select">qbsSelect</div>
    <div class="panel-body">
        <p>
            选中了：<b>{{option | json}}</b>
        </p>
        <form>
            <p v-show="ajax_data.select">
                <img src="../assets/images/loading.gif">
            </p>
            <div style="width:300px;">
                <q-select name="aaa" style="" class="form-control" placeholder="demo输入" :model.sync="option.value" :model-text.sync="option.text" :options="options" @on-input="triggerInput" @on-select="triggerSelect">
                </q-select>
            </div>
        </form>
        <div class="mt-short col-sm-12">
            <pre>
        &lt;q-select 
            name="field_name" 
            style="display:block;"
            class="form-control"
            placeholder="demo输入" 
            :model.sync="option.value"
            :model-text.sync="option.text" 
            :options="options"
            @on-input="triggerInput"
            @on-select="triggerSelect"&gt;&lt;/q-select&gt;
        </pre>
        </div>
    </div>
</div>
</template>

<script>
    import utils from '../utils'
    import Vue from 'vue'
    import {
        qSelect
    } from '../../../qbs-components/main.js'

    export default {
        components: {
            qSelect
        },
        data: function() {
            return {
                ajax_data: {},
                option: {
                    value: '1',
                    text: '选项一'
                },
                options: [{
                    value: '1',
                    text: '选项一'
                }, {
                    value: '2',
                    text: '选项二',
                }, {
                    value: '3',
                    text: '选项三',
                }, {
                    value: '4',
                    text: '选项四'
                }],
            }
        },
        ready: function() {},
        methods: {
            triggerAjax: function(comp_name, status) {
                var self = this;
                if(status){ 
                    Vue.set(this.ajax_data, comp_name, true);
                }else{
                    self.ajax_data[comp_name] = false;
                }
            },
            triggerInput: _.debounce(function(input) {
                var self = this;
                var random_id = function() {
                    return parseInt(Math.random(100) * 100)
                };
                this.triggerAjax('select', true)
                setTimeout(function(){
                    self.options = self.options.map(function(option) {
                        var id = random_id();
                        return {
                            value: input + '_' + id,
                            text: input + '_' + id + '_' + '文本'
                        }
                    })
                    self.triggerAjax('select', false);
                },500);
            }, 500),
            triggerSelect: function(val) {
                console.log('选中了:' + JSON.stringify(val));
            },
        }
    }
</script>