<script setup lang="ts">
document.title = '9猫猫 / MercuryGryph'

function getDomIcon(): HTMLLinkElement {
    const iconLink: HTMLLinkElement | null = document.querySelector('link[rel="icon"]')
    if (iconLink) {
        return iconLink
    }
    const elem = document.createElement('link')
    elem.rel = 'icon'
    document.head.appendChild(elem)
    return elem
}

getDomIcon().href = ''

</script>

<template>
    <span>
        123
    </span>
</template>
