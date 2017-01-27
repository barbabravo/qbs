<template>
<div class="panel panel-primary">
    <div class="panel-heading" id="page">qbsModal</div>
    <div class="panel-body">
        <p>
            <button>点击打开弹层</button>
        </p>
        <form>
            <div style="box-sizing:border-box;">
                <q-modal 
                    name="aaa" 
                    style="display:block;" 
                    class="a-class" >
                </q-modal>
            </div>
        </form>
        <div class="mt-short">
            <pre>
       
        </pre>
        </div>
    </div>
</div>
</template>

<script>
    import utils from '../utils'
    import {
        qModal
    } from '../../../qbs-components/main.js'

    export default {
        components: {
            qModal
        },
        data: function() {
            return {

            }
        },
        ready: function() {},
        methods: {

        }
    }
</script>