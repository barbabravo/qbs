import Vue from 'vue'
import _ from 'lodash'
import layout from './layout'
import components from './components'

window.onload = function(){
    new Vue({
        el:'body',
        components:_.assign({}, components, layout)
    })
}