<script lang="ts">
import {
    createEventDispatcher
} from 'svelte';



function handleMessage(event: CustomEvent, targetAction: String,
                                targetProp:String, ref:unknown) {

    console.log("mondo poop");
    console.log(event);
    let action = event.detail.text;
    if(action === targetAction) {
        ref = new Map<String,Object>(Object.entries(event.detail)).get("targetProp");
    }
}


</script>