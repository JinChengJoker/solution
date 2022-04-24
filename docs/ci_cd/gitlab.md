---
sidebarDepth: 2
---

# GitLab 部署

## deploy 阶段总是使用的旧镜像

检查`/helm/${project_name}/values-*.yaml`文件，`nodeSelector.appenv`为`test`时，不要配置`nodeSelector.nodetype`。

```yaml
nodeSelector:
  appenv: test

# or

nodeSelector:
  appenv: production
  nodetype: front
```

## values.container.command 未执行

检查`/helm/${project_name}/templates/deployment.yaml`文件：

```yaml
spec:
  template:
    spec:
      containers:
        {{- if .Values.container.command }}
        command: ["bash", "-c", {{ .Values.container.command }}]
        {{- end }}
```

## 报错：YAML parse error

可能由于一些格式化插件自动格式化了`.yaml`文件，或模板格式不对，从而导致解析错误。

例如`prettier`可以配置忽略整个`helm`目录。

```
// .prettierignore

/helm
```