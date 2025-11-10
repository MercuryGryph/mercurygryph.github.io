import {useDark, useToggle} from '@vueuse/core'

export const isDark = useDark()

export function toggleDark() {
    useToggle(isDark)

    // document.documentElement.classList.toggle('dark')
    // isDark.value = document.documentElement.classList.contains('dark')
}
