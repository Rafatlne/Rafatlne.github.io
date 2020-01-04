# What i learnt while building this project

### 1. How to create a new branch in exiting git project without any code?
```
git checkout --orphan <branch_name>
```
### 2. How to see list of branch in git?
```
git branch
```
### 3. How do I clone a specific Git branch?
```
git clone --single-branch --branch <branchname> <remote-repo>
```

### 4. I can't dynamically added path file in the src because for the webpack

##### Information Link
[stackoverflow](https://stackoverflow.com/questions/56624817/passing-and-binding-img-src-from-props-in-vue-js)
[webpack](https://webpack.js.org/guides/dependency-management/#requirecontext)
[github](https://github.com/webpack/webpack/issues/4921)
[github](https://github.com/vuejs/vue-loader/issues/896#issuecomment-316697682)

### 5. Class and style bindings in vuejs
```
A ternary expression can be used to toggle a class conditionally:

<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

Copy The above code will apply activeClass once isActive is truthy, but errorClass is always applied.

The above code can be simplified using object syntax:

<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

### 6. Writing Media Queries with Sass mixins
[Media Queries with Sass mixins](https://itnext.io/writing-media-queries-with-sass-mixins-3ea591ea3ea4)