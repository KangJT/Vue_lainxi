import Mock from 'mockjs';
const navdata = ['心动的鱼', "鸡叉骨", '心动的鱼的套餐', '三只松鼠', '好吃的凉菜'];
const data = Mock.mock({
    'data|10-15': [{
        'type|1': ['心动的鱼', "鸡叉骨", '心动的鱼的套餐', '三只松鼠', '好吃的凉菜'],
        title: "@ctitle",
        imgs: "@image",
        "price|10-50": 1,
        "info": "@cword"
    }]
})
export { data, navdata }