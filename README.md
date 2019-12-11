# Vue-cli template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# Together

文件树

```
--src
|---assets				静态资源，存储图片等文件
|---components			界面组件，根目录下存储大的view（一个个页面），page的子目录下存储各自页面的小组件，common目录存储公共组件
|---css					公共css文件
|---js					公共js文件

|---App.vue				vue项目入口组件
|---main.js				vue项目入口js文件
|---router.js			路由文件
```

1. 注意保持components文件夹内的整洁度，尽量使用组件化开发的方式。

2. 注意页面的自适应，在不同长宽下界面要美观。

3. 界面使用相对尺寸，字体使用绝对尺寸单位！

   ```css
   *{
      font-size: 100px;
   }
   
   #element{
      font-size: 12px; //字体使用绝对尺寸单位
      width: 1rem; //其它界面的属性使用相对尺寸单位 1rem = 100px
   }
   ```

