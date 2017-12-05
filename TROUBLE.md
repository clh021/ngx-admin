# 一些常见问题
## `angular`自动监测文件以编译，如何禁止webstorm自动保存提高效率？
菜单：File->Settings

搜索框输入`auto save`,找到 Sychronization 栏目

去掉中间两项 `Save files` 开头的勾选项即可

但是，如此一来我们就不能方便的知道哪些文件改了，哪些文件没改。

菜单： Editor -> General -> Editor Tabs 

勾选 `Mark modified tabs with asterisk` 选项

则改过未保存的文件会有星星标记


## 为什么我在开发的过程中,检测不到我修改了的文件？
因为系统有初始监测文件变化的数值限制
```shell
cat /proc/sys/fs/inotify/max_user_watches
8192
```
使用下面两个命令修改系统检测文件的数值，改大一些就好了。
```shell
sudo sysctl fs.inotify.max_user_watches=524288
sudo sysctl -p --system
```

