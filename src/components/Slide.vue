<template>
    <div>
        <div class="user">
            <img :src="user.photo" alt="" class="photo">
            <div class="resume">
                <p>{{user.name}}</p>
                <p>{{user.job}}</p>
            </div>
        </div>
        <div class="Contact">
            <p>{{contact.tel}}</p>
            <p>{{contact.Email}}</p>
        </div>
        <div class="basicInfo">
            <p>{{basicInfo.home}}</p>
            <p>{{basicInfo.school}}</p>
            <p>{{basicInfo.major}}</p>
            <p>{{basicInfo.birthday}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


</style>
