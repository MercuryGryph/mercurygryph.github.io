<script lang="ts" setup>
import {Urls} from '~/data/Constants'
</script>

<template>
    <div class="avatar relative">
        <img
            :src="Urls.Images.Avatar"
            alt="avatar"
            class="rounded-full b-solid b-0 p-8px shadow-xl max-w-100% max-h-100%"
        >
    </div>
</template>

<style scoped>
@property --angle {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
}

@keyframes spin {
    from {
        --angle: 0deg;
    }

    to {
        --angle: 360deg;
    }
}

.avatar::after, .avatar::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: conic-gradient(from var(--angle), aqua 36deg, pink, white, pink, aqua, aqua, pink, white, pink, aqua);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    border-radius: 100%;
    animation: 3s spin linear infinite;
}

.avatar::before {
    filter: blur(1.5rem);
    opacity: 0.5;
}

</style>
