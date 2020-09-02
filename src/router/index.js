import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/home')
const Category = () =>
    import ('../views/category/category')
const Cat = () =>
    import ('../views/cart/cat')
const Profile = () =>
    import ('../views/profile/profile')

//1.安装插件
Vue.use(VueRouter)

//2.创建VueRouter
const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/category',
    component: Category
}, {
    path: '/cat',
    component: Cat
}, {
    path: '/profile',
    component: Profile
}]
const router = new VueRouter({
    routes,
    mode: "history"
})

//3.导出
export default router