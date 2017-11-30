# ngx-admin
快捷示例查找
```shell
ng g m test --routing
ng g c test/testapi --routing
ng g cl app.router # 建立根路由
```
# 技巧
## 建立模块
建立后台公共面板模块，建立面板模块中的主面板组件（同时都附带路由配置）
```shell
ng g m dashboard --routing
ng g c dashboard/main --routing
```
建立以下模块
```shell
ng g m business --routing #业务
ng g m pay --routing      #支付
ng g m statistics --routing #统计
ng g m system --routing #系统
```
## 搭建路由
```typescript
#先从app根路由[Routes类型的routes常量]中配置想要链入的模块
#从源代码
# ......
const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
# ......
#修改为
# ......
const routes: Routes = [
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
# ......
#然后还需要建立好我们自己模块的路由指定路由显示的组件
#从源代码
# ......
const routes: Routes = [];
# ......
#修改为
# ......
const routes: Routes = [{
  path: '',
  component: MainComponent
}];
# ......
# 以上修改则链好了一个  /dashboard 的路由地址
```
> 请通过编辑器自动导入需要引用的组件，尽可能不手动import，能少给自己挖坑，节省时间精力


