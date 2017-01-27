<template>
<div class="menu-wrapper">
    <div class="menu panel panel-default" v-for="menu in menu_data">
        <div class="panel-heading" role="tab" id="headingOne">
            <h4 class="panel-title" v-text="menu.name"></h4>
        </div>
        <div id="collapseOne" v-if="menu.list && menu.list.length>0" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div class="panel-body">
                <ul class="nav nav-pills nav-stacked">
                    <li v-for="submenu in menu.list"><a :href="'#' + submenu" v-text="submenu"></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="less" scoped>
    .menu-wrapper {
        position: relative;
    }
    
    .menu {
        position: fixed;
    }
</style>

<script>
    export default {
        props: ['menu_data']
    }
</script>