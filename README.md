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
### 常规应用
先从app根路由[Routes类型的routes常量]中配置想要链入的模块
从源代码
```typescript
......
const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
......
```
修改为
```typescript
......
const routes: Routes = [
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
......
```
然后还需要建立好我们自己模块的路由指定路由显示的组件
从源代码
```typescript
const routes: Routes = [];
```
#修改为
```typescript
const routes: Routes = [{
  path: '',
  component: MainComponent
}];
```
以上修改则链好了一个  /dashboard 的路由地址

> 请通过编辑器自动导入需要引用的组件，尽可能不手动import，能少给自己挖坑，节省时间精力
### 子路由
```shell
ng g c dashboard/test --routing #主面板测试组件
```
/src/app/dashboard/dashboard-routing.module.ts
```typescript
const routes: Routes = [{
  path: '',
  // component: MainComponent,
  children: [
    {
      path: 'main',
      component: MainComponent,
    },
    {
      path: 'test',
      component: TestComponent,
      // loadChildren: MainComponent, //错误的写法，loadChildren只适用于异步加载模块而非组件
    },
    {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full',
    }
  ]
}];
```
> 注意：当开头注释的 component 被取消注释，则下面的 children 将失效[试验结果]
> ？待讨论？反例见pages-routing.modules.ts路由配置

## CRUD示例

### 建立模块与组件
在pages下新建test模块
```shell
ng g m pages/test --routing
```
在test模块下创建form和table组件
```shell
ng g c pages/test/form --routing
ng g c pages/test/table --routing
```

### 建立路由与菜单
在 app/pages/pages-menu.ts 上添加自己的菜单
```
  {
    title: 'CRUD测试',
    icon: 'nb-compose',
    children: [
      {
        title: '表单测试',
        link: '/pages/test/form',
      },
      {
        title: '列表测试',
        link: '/pages/test/table',
      },
    ],
  }
```
这时应该就可以在页面中看到你的菜单了，但是这里只是链接，点了没效果，因为还没有建立路由，下面建立路由
在 app/pages/pages-routing.module.ts 中添加我们的模块并定义路由前缀
```
{
  path: 'test',
  loadChildren: './test/test.module#TestModule',
},
```
然后设置我们自己test模块的路由配置
/src/app/pages/test/test-routing.module.ts
```
{
  path: '',
  component: TestComponent,
  children: [{
    path: 'form',
    component: FormComponent,
  }, {
    path: 'table',
    component: TableComponent,
  }],
}
```
> 请尽可能使用编辑器自动导入组件，提高效率，避免自己挖坑
你可能注意到了和模块名同名的一个组件 TestComponent 它的内容是这样的
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-form-elements',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class TestComponent {
}
```

然后还要在路由配置文件的结尾
定义好路由组件，释放给模块，以使模块知道哪些组件是需要加载的。
/src/app/pages/test/test-routing.module.ts
```typescript
export const routedComponents = [
  TestComponent,
  FormComponent,
  TableComponent,
];
```
在模块文件中引入这个定义路由组件的常量并且导入
```typescript
import {routedComponents, TestRoutingModule} from './test-routing.module';
```
声明组件
```typescript
declarations: [
  ...routedComponents,
],
```
至此，你的菜单链接应该可以正常打开自己建立的组件页面了。喝杯热水，享受一下这感觉良好的时刻吧！

### 建立表单与表格
编写你的form组件的模板，你可以填充我给你准备好的模板代码
```html
<div class="row">
  <div class="col-lg-12">
    <nb-card>
      <nb-card-header>CRUD 表单测试</nb-card-header>
      <nb-card-body>
        <div class="input-group">
          <input type="text" placeholder="用户ID" id="user_id" class="form-control"/>
        </div>
        <div class="input-group">
          <input type="text" placeholder="业务编号" id="category_id" class="form-control"/>
        </div>
        <div class="input-group">
          <textarea rows="5" placeholder="业务备注" id="content" class="form-control"></textarea>
        </div>

        <div class="size-container">
          <div>
            <button class="btn btn-primary btn-lg">创建业务记录</button>
          </div>
        </div>

      </nb-card-body>
    </nb-card>
  </div>
</div>
```
还有表格组件的模板
```html
<div class="row">
  <div class="col-lg-12">
    <nb-card>
      <nb-card-header>CRUD 列表测试</nb-card-header>
      <nb-card-body>
        <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)">
        </ng2-smart-table>
      </nb-card-body>
    </nb-card>
  </div>
</div>
```
然后，稍微填充一下样式到 scss 文件中
你可以直接参照这个文件，表格因为是直接用的git st

```html
/src/app/pages/forms/form-inputs/form-inputs.component.scss
```
到这里，表单页面就已经完成了，但是还只是静态的，不着急，我们先完善下表格页面

表格页面，因为你看到了，我们引用了 ng2-smart-table 的标签，这是一个 ng2 的组件
所以，我们需要引用对应的组件
修改表格组件，最终的完整文件代码应该是这样的
/src/app/pages/test/table/table.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {SmartTableService} from "../../../@core/data/smart-table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit() {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

```
在 test.module 模块中添加我们应该引入的组件及服务
```git
 @NgModule({
   imports: [
+    ThemeModule,
     CommonModule,
     TestRoutingModule,
+    Ng2SmartTableModule,
+  ],
+  declarations: [
+    ...routedComponents,
+  ],
+  providers: [
+    SmartTableService,
   ],
```
他们依次引入的路径是
```typescript
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {ThemeModule} from "../../@theme/theme.module";
import {SmartTableService} from "../../@core/data/smart-table.service";
```
> 你还记得 routedComponents 是从哪里引入的吗？

### 编写增加数据的操作(Create)
首先，给我们需要的表单字段绑定字段到组件变量
如：user_id字段，应该将该行代码
```angular2html
<input type="text" placeholder="用户ID" id="user_id" class="form-control"/>
```
改成
```angular2html
<input type="text" placeholder="用户ID" id="user_id" class="form-control" [(ngModel)]="user_id" />
```
同理，使用 `[(ngModel)]="category_id" `,`[(ngModel)]="content" `来绑定类型id和内容字段
最后，添加好点击按钮，绑定好事件
```angular2html
<button class="btn btn-primary btn-lg" (click)="onSubmit()">创建业务记录</button>
```
到这里，模板内容完成，可以去编写组件控制层了
在组件中声明好内部变量，也就是刚刚绑定的那几个。
然后还要声明好事件，也就是刚刚那个按钮绑定的事件。

最后的 `FormComponent` 看起来应该是这样的。
```angularjs
export class FormComponent implements OnInit {
  user_id = '5';
  category_id = '3';
  content = '易驹所二手车重构';//这里是设置的默认值，你也可以设置空的默认值，或者不设置。
  private test_url = 'http://api.host/posts';//定义的发送请求的url地址，也叫接口地址
  constructor(private http: Http) { }
  // constructor(private http: HttpClient) { }//会多发一次OPTIONI链接

  ngOnInit() {
  }

  onSubmit(): void{
    this.http.post(this.test_url,{user_id:this.user_id, category_id:this.category_id, content:this.content})//两种都可以
    // this.http.post(this.test_url,JSON.stringify({user_id:this.user_id, category_id:this.category_id, content:this.content}))//两种都可以
      .map(res => {
        console.log(res);
    }).subscribe();

    // 这里是请求接口拿一次列表数据，可以看看我们刚才创建的数据是否真实到数据库了
    // this.http.get(this.test_url).map(res => {
    //   console.log(res);
    // }).subscribe();
  }
}
```
上例代码中，你可能注意到了存在一个注释了的 `constructor` 构建函数，它和没有注释的函数的区别是引用了不同的http组件库。
注释已经说到，使用 `HttpClient` 会在发送post请求之前会先发送一次 OPTION 请求。但是两种都能正常的达到我们post数据的目的。

好了，你可以测试一下来创建数据了
