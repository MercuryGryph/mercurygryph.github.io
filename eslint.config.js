import antfu from '@antfu/eslint-config'

export default antfu({
    formatters: false,
    unocss: true,
    vue: true,
}, {
    rules: {
        'style/indent': ['error', 4, {SwitchCase: 1}],
        'vue/html-indent': ['error', 4, {switchCase: 1}],
        'no-console': 'off',
        'style/object-curly-spacing': 'off',
        'vue/block-tag-newline': 'off'
    },
})
