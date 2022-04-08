<template>
    <div>
        <h1>현재의 컴포넌트 위치는 {{$route.params.id}} 입니다.</h1>
    </div>
</template>

<script>
export default {
    name : 'DynamicView'
}
</script>