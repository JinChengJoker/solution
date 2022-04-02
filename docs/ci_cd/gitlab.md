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