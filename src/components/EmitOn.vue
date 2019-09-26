<template>
  <div>
    <EmitOnA></EmitOnA>
    <EmitOnB></EmitOnB>
    <EmitOnC></EmitOnC>
  </div>
</template>

<script>
import EmitOnA from "./EmitOnA"
import EmitOnB from "./EmitOnB"
import EmitOnC from "./EmitOnC"

export default {
  name: 'EmitOn',
  components:{
    EmitOnC,
    EmitOnA,
    EmitOnB,
  }
}
</script>
