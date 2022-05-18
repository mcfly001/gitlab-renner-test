/*
 * @Description: 
 * @Author: 郑泳健
 * @Date: 2022-05-18 16:00:45
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-05-18 17:22:55
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    // 以下时我们自定义的规则
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新功能（feature）
                'fix', // 修补bug
                'style',
                'merge',
                'linter',
                'build',
                'ci',
                'tag',
                'chore',
                'refactor',
                'docs', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
                'perf',
                'test'
            ]
        ],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0, 'never'],
        'scope-case': [0, 'never'],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'header-max-length': [0, 'always', 100]
    },
};
